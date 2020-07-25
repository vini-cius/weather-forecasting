import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient)`
	flex: 1;
`;

export const Header = styled.View`
	padding: 42px 16px 26px 16px;
`;

export const Title = styled.Text`
	color: #FFF;
	font-weight: bold;
	font-size: 38px;
`;

export const SearchForm = styled.View`
	padding-top: 26px;
	flex-direction: row;
`;

export const SearchInput = styled.TextInput`
	height: 50px;
	background-color: #fff;
	color: #333;
	padding: 0 20px 0 20px;
	font-size: 16px;
	border-radius: 25px;
	width: 100%;
`

export const Hr = styled.View`
	height: 1px;
	background-color: #fff;
	margin-top: 32px;
`;

export const CityContainer = styled.View`
	padding: 10px 15px;
	margin: 5px 16px 5px 16px;
	height: 200px;
	background-color: #f1fa8c;
`;

export const CityTitle = styled.Text`
	color: #44475a;
	font-weight: bold;
	font-size: 26px;
`;

export const Source = styled.Text`
	color: #fff;
	font-weight: bold;
	margin: 10px auto;
`;

export const Date = styled.Text`
	color: #fff;
	font-weight: bold;
	margin: 10px auto;
`;
