import React from 'react';
import styled from 'styled-components';

import Banner from '../../components/Banner';

const Wrapper = styled.section`
	position: relative;
`;

function Home() {
	return (
		<Wrapper id='home'>
			<Banner />
		</Wrapper>
	);
}

export default Home;
