import React, { useState, useEffect, useRef } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import moment from 'moment';
import 'moment/locale/pt-br';

import Capitals from '../../components/Capitals';
import ResultBox from '../../components/ResultBox';

import {
	Container,
	Header,
	Title,
	SearchForm,
	SearchInput,
	Hr,
	Date,
	Source,
	AutoInputContainer
} from './styles';

export default function Home() {
	const [date, setDate] = useState();
	const [displayAutoInput, setDisplayAutoInput] = useState(false);

	useEffect(() => {
		moment().locale('pt-br');
		setDate(moment().format('dddd, DD MMMM'));
	} , []);

	return (
		<>
		<Container
			colors={["#282a36", "#bd93f9"]}
			start={[1, 0.7]}
			end={[1, 1]}
		>
			<Header>
				<Title>Previsão do tempo <Icon name="cloud" color="#fff" size={30} /></Title>

				<SearchForm>
					<SearchInput
						placeholder="Insira aqui o nome da cidade"
						onChange={() => {}}
						onChangeText={() => setDisplayAutoInput(true)}
						onBlur={() => setDisplayAutoInput(false)}
					/>
					{displayAutoInput && (
					<AutoInputContainer>

					</AutoInputContainer>
					)}
				</SearchForm>

				<Date>{date}</Date>
			</Header>

			<ResultBox/>

			<Hr />



			<Source>Fonte: AccuWeather</Source>
		</Container>
		</>
	);
}
