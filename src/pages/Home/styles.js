import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
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
	flex: 1;
	height: 50px;
	background-color: #fff;
	color: #333;
	border-radius: 25px;
	padding: 0 20px 0 20px;
	font-size: 16px;
`
export const SearchButton = styled.TouchableOpacity`
	width: 50px;
  height: 50px;
  background-color: #8E4DFF;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const Hr = styled.View`
	height: ${StyleSheet.hairlineWidth};
	background-color: #fff;
	margin-top: 32px;
`;

export const CapitalsContainer = styled.View`
	flex: 1;
	padding: 12px 16px 26px 16px;
`;

export const Indicator = styled.View`
	flex-direction: row;
	padding-top: 12px;
`;

export const IndicatorText = styled.Text`
	color: #FFF;
	font-size: 18px;
	margin-right: 12px;
`;

export const CityContainer = styled.View`
	padding-top: 6px;
`;

export const City = styled.View`
	flex-direction: row;
	padding-top: 12px;
`;

export const Degrees = styled.Text`
	color: #FFF;
	font-size: 22px;
	font-weight: bold;
	margin-right: 14px;
`;

export const CityName = styled.Text`
	color: #FFF;
	font-size: 22px;
	font-weight: bold;
`;