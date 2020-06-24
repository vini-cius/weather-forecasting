import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';

import Capitals from '../../components/Capitals';

import {
	Container,
	Header,
	Title,
	SearchForm,
	SearchInput,
	SearchButton,
	Hr
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

			<Capitals />

		</Container>
		</>
	);
}
