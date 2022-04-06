import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

import { accuWeather } from '../../services/accuwApi';

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
			{ name: 'Belo Horizonte', key: '44403' },
			{ name: 'Brasília', key: '43348' },
			{ name: 'Salvador', key: '43080' },
		];

		let data = [];

		const promises = keyCapitals.map(async (capital) => {
			try {
				const response = await accuWeather.get(`/forecasts/v1/hourly/1hour/${capital.key}`, {
					params: {
						metric: true
					},
				});

				const { Temperature } = response.data.DailyForecasts[0];
				const capitalTemp = { ...Temperature, city: capital.name };

				data.push(capitalTemp);
			} catch (error) {
				let message = 'Ocorreu um erro ao carregar os dados.';

				if (error.response) {
					message = error.response.data.Message;
				}

				data.push({
					error: true,
					city: capital.name,
					message
				});
			}
		});

		await Promise.all(promises);

		setCapitals(data);
	}

	useEffect(() => {
		loadCapitalsWeatherData();

		return () => {
			setCapitals([]);
		}
	}, []);

	return (
		<CapitalsContainer>
			<Title>Capitais</Title>

			<Indicator>
				<IndicatorText>Min</IndicatorText>
				<IndicatorText>Máx</IndicatorText>
			</Indicator>

			<CityContainer>
				{capitals && capitals.map((capital) => (
					<City key={capital.city}>
						{capital.error ? (
							<>
								<CityName>{capital.city}</CityName>
								<Text>{capital.message}</Text>
							</>
						) : (
							<>
								<Degrees>{Math.round(capital.Minimum.Value)}°</Degrees>
								<Degrees>{Math.round(capital.Maximum.Value)}°</Degrees>

								<CityName>{capital.city}</CityName>
							</>
						)}
					</City>
				))}
			</CityContainer>
		</CapitalsContainer>
	);
}
