import React, { useState, useEffect } from 'react';
import { Alert, Image } from 'react-native';
import * as Location from "expo-location";

import { ACCUW_APIKEY } from 'react-native-dotenv';
import apiAccuW from '../../services/accuwApi';

import { CityContainer, CityTitle, Temperature } from './styles';

export default function ResultBox() {
	const [initialPosition, setInitialPosition] = useState([0,0]);
	const [currentCity, setCurrentCity] = useState();
	const [nameCurrentCity, setNameCurrentCity] = useState({});

	async function loadPosition() {
		const { status } = await Location.requestPermissionsAsync();

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

	async function getForecastGeolocation(){
		try {
			const response = await apiAccuW.get(`locations/v1/cities/geoposition/search`, {
				params: {
					apikey: ACCUW_APIKEY,
					q: initialPosition.join(','),
					language: 'pt-br',
				},
			});

			const {
				Key,
				LocalizedName: city,
				AdministrativeArea: { LocalizedName: state }
			} = response.data;

			setNameCurrentCity({
				state: state,
				city: city
			});

			console.log(nameCurrentCity)

			const respCurrentCity = await apiAccuW.get(`forecasts/v1/hourly/1hour/${Key}`, {
				params: {
					apikey: ACCUW_APIKEY,
					metric: true,
					details: true,
					language: 'pt-br',
				},
			});

			setCurrentCity(respCurrentCity.data);

			console.log(currentCity);

		} catch (error) {
			console.log(error);
			return;
		}
	}

	useEffect(() => {
		loadPosition();
		//getForecastGeolocation();
	}, []);

	return (
		<CityContainer>
			<CityTitle>Mauá - São Paulo</CityTitle>
			<Temperature>20°C Nublado <Image source={require("../../assets/weatherIcon/07.png")} /></Temperature>

		</CityContainer>
	);
}
