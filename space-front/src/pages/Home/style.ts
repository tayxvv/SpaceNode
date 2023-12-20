import styled from "styled-components";

interface ContainerProps {
	urlBackground: string;
}

export const Container = styled.div<ContainerProps>`
	display: flex;
	background-image: url('${(props) => props.urlBackground}');
	background-color: #000;
	height: 100vh;
	width: 100vw;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;