import React, { useState, useEffect } from 'react';
import { Feather as Icon } from '@expo/vector-icons';

import Capitals from '../../components/Capitals';

import {
	Container,
	Header,
	Title,
	SearchForm,
	SearchInput,
	Hr,
	CityContainer,
	CityTitle,
	Date,
	Source
} from './styles';

export default function Home() {
	const [date, setDate] = useState('');

	useEffect(() => {
	} , []);

	return (
		<>
		<Container colors={["#282a36", "#bd93f9"]} start={[1, 0.7]} end={[1, 1]}>
			<Header>
				<Title>Previsão do tempo <Icon name="cloud" color="#fff" size={30} /></Title>

				<SearchForm>
					<SearchInput placeholder="Insira aqui o nome da cidade" />
				</SearchForm>

				<Date>{date}</Date>
			</Header>

			<CityContainer>
				<CityTitle>Mauá - SP</CityTitle>
			</CityContainer>

			<Hr />

			<Capitals />

			<Source>Fonte: AccuWeather</Source>
		</Container>
		</>
	);
}
