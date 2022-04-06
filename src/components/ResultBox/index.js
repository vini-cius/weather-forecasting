import React, { useState, useEffect } from 'react';
import { Alert, Image } from 'react-native';
import * as Location from "expo-location";
import { format } from 'date-fns';

import { accuWeather } from '../../services/accuwApi';

import { CityContainer, CityTitle, Temperature } from './styles';

export default function ResultBox() {
	const [initialPosition, setInitialPosition] = useState([]);
	const [currentCity, setCurrentCity] = useState(null);

	async function loadPosition() {
		const { status } = await Location.requestForegroundPermissionsAsync();

		if (status !== "granted") {
			Alert.alert(
				"Ooops...",
				"Precisamos de sua permissão para obter a localização"
			);
			return;
		}

		const location = await Location.getCurrentPositionAsync();

		const { latitude, longitude } = location.coords;

		setInitialPosition([latitude, longitude]);
	}

	async function getForecastGeolocation() {
		try {
			const location = await accuWeather.get(`locations/v1/cities/geoposition/search`, {
				params: {
					q: initialPosition.join(','),
				},
			});

			const {
				Key,
				LocalizedName: city,
				AdministrativeArea: { LocalizedName: state }
			} = location.data;

			const cityName = `${city} - ${state}`;

			const currentCity = await accuWeather.get(`/forecasts/v1/hourly/1hour/${Key}`, {
				params: {
					metric: true,
					details: true
				},
			});

			const {
				DateTime,
				WeatherIcon,
				IconPhrase,
				Temperature,
				RealFeelTemperature,
				RelativeHumidity,
				PrecipitationProbability,
				ThunderstormProbability,
				MobileLink
			} = currentCity.data[0];

			const data = {
				cityName,
				DateTimeFormated: format(DateTime, 'dd/MM/yyyy HH:mm'),
				WeatherIcon,
				IconPhrase,
				Temperature,
				RealFeelTemperature,
				RelativeHumidity,
				PrecipitationProbability,
				ThunderstormProbability,
				MobileLink
			};

			setCurrentCity(data);
		} catch (error) {
			let message = 'Ocorreu um erro ao obter a previsão do tempo.';

			if (error.response) {
				message = error.response.data.Message;
			}

			Alert.alert("Ooops...", message);
		}
	}

	useEffect(() => {
		loadPosition();
	}, []);

	useEffect(() => {
		if (initialPosition.length) {
			//getForecastGeolocation();
		}
	}, [initialPosition]);

	return (
		<CityContainer>
			<CityTitle>{currentCity ? currentCity.cityName : 'loading...'}</CityTitle>
			<Temperature>
				<Image source={{ uri: "https://developer.accuweather.com/sites/default/files/01-s.png" }} />
			</Temperature>
		</CityContainer>
	);
}
