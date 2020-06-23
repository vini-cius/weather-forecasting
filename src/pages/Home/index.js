import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';

import {
	Container,
	Header,
	Title,
	SearchForm,
	SearchInput,
	SearchButton,
	Hr,
	CapitalsContainer,
	Indicator,
	IndicatorText,
	CityContainer,
	City,
	Degrees,
	CityName
} from './styles';

export default function Home() {
	return (
		<>
		<Container colors={["#282a36", "#bd93f9"]} start={[1, 0.7]} end={[1, 1]}>
			<Header>
				<Title>Previsão do tempo <Icon name="cloud" color="#fff" size={30} /></Title>

				<SearchForm>
					<SearchInput placeholder="Insira aqui o nome da cidade" />
					<SearchButton onPress={() => {}}>
						<Icon name="search" color="#fff" size={20} />
					</SearchButton>
				</SearchForm>
			</Header>

			<Hr />

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
		</Container>
		</>
	);
}
