import React, { useState, useEffect } from 'react';

import { ACCUW_APIKEY } from 'react-native-dotenv';
import apiAccuW from '../../services/accuwApi';

import {
	CapitalsContainer,
	Indicator,
	IndicatorText,
	CityContainer,
	City,
	Degrees,
	CityName,
	Title,
} from './styles';

export default function Capitals() {
	const [capitals, setCapitals] = useState([]);

	async function loadCapitalsWeatherData() {
		const keyCapitals = [
			{ name: 'São Paulo', key: '45881' },
			{ name: 'Rio de Janeiro', key: '45449' },
			{ name: 'Belo Horizonte', key: '44403'},
			{ name: 'Brasília', key: '43348'},
			{ name: 'Salvador', key: '43080'},
			//{ name: 'Manaus', key: '42471'}
		];

		let data = [];

		for (let i = 0; i < keyCapitals.length; i++){
			try {
				const response = await apiAccuW.get(`forecasts/v1/daily/1day/${keyCapitals[i].key}`, {
					params: {
						apikey: ACCUW_APIKEY,
						metric: true,
						language: 'pt-br',
					},
				});

				const { Temperature } = response.data.DailyForecasts[0];

				const capitalTemp = {...Temperature, city: keyCapitals[i].name}

				data.push(capitalTemp);

			} catch (error) {

			}
		}

		setCapitals(data);
	}

	useEffect(() => {
		loadCapitalsWeatherData();
	}, []);

	return (
		<CapitalsContainer>
			<Title>Capitais</Title>

			<Indicator>
				<IndicatorText>Min</IndicatorText>
				<IndicatorText>Máx</IndicatorText>
			</Indicator>

			<CityContainer>
				{capitals.map((capital, index) => (
				<City key={index}>
					<Degrees>{Math.round(capital.Minimum.Value)}°</Degrees>
					<Degrees>{Math.round(capital.Maximum.Value)}°</Degrees>

					<CityName>{capital.city}</CityName>
				</City>
				))}
			</CityContainer>

		</CapitalsContainer>
	);
}
