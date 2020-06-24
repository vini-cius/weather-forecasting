import React, { useEffect } from 'react';

import apiAccuW from '../../services/accuwApi';
import {ACCUW_APIKEY} from 'react-native-dotenv';

import {
	CapitalsContainer,
	Indicator,
	IndicatorText,
	CityContainer,
	City,
	Degrees,
	CityName,
	Title
} from './styles';

export default function Capitals() {
	useEffect(() => {
		apiAccuW.get('cities/BR/search',{
			params: {
				q: 'Mauá',
				offset: 20,
				apikey: ACCUW_APIKEY,
				language: 'pt-br',
			}
		})
		.then(response => {
			console.log(response.data);
		})
		.catch(err => {
			console.log(err);
		})
	}, []);

	return (
		<CapitalsContainer>
			<Title>Capitais</Title>

			<Indicator>
				<IndicatorText>Min</IndicatorText>
				<IndicatorText>Máx</IndicatorText>
			</Indicator>

			<CityContainer>
				<City>
					<Degrees>18°</Degrees>
					<Degrees>27°</Degrees>

					<CityName>São Paulo</CityName>
				</City>

				<City>
					<Degrees>20°</Degrees>
					<Degrees>31°</Degrees>

					<CityName>Rio de Janeiro</CityName>
				</City>

				<City>
					<Degrees>14°</Degrees>
					<Degrees>22°</Degrees>

					<CityName>Belo Horizonte</CityName>
				</City>

				<City>
					<Degrees>24°</Degrees>
					<Degrees>37°</Degrees>

					<CityName>Brasília</CityName>
				</City>

				<City>
					<Degrees>05°</Degrees>
					<Degrees>09°</Degrees>

					<CityName>Curitiba</CityName>
				</City>
			</CityContainer>
		</CapitalsContainer>
	);
}
