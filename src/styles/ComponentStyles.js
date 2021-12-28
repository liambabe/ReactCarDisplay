import styled from 'styled-components/native';

/*
 * Button Styles
 */

export const ButtonContainer = styled.TouchableOpacity
`
	padding-top: 8px;
	padding-bottom: 8px;
	padding-left: 16px;
	padding-right: 16px;
	background-color: rgb(59, 130, 246);
	border-color: rgb(29, 78, 216);
	border-width: 1px;
	border-radius: 4px;
`;

export const ButtonText = styled.Text
`
	color: white;
	font-weight: bold;
	text-align: center;
`;

/*
 * Popup Menu Styles
 */

export const MenuBox = styled.View
`
	width: 25%;
	height: 50px;
	position: absolute;
	right: 10px;
	bottom: 10px;
	background-color: rgb(249, 250, 251);
`;

/*
 * Value Display List Styles
 */

export const ValueContainer = styled.FlatList
`
	background-color: #D3D3D3;
	border-radius: 8px;
	padding-top: 8px;
	padding-left: 8px;
	padding-right: 8px;
	padding-bottom: 8px;
`;

export const ValueRow = styled.View
`
	flex-direction: row;
	padding-top: 2px;
	padding-bottom: 2px;
`;

export const ValueTitle = styled.Text
`
`;

export const ValueValue = styled.Text
`
margin-left: auto;
`;