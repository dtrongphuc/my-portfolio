import React from 'react';
import styled from 'styled-components';

import Sidebar from '../components/Sidebar';
import Banner from '../components/Banner';
import Header from '../components/Header';

const Container = styled.div`
	position: relative;
	@media (min-width: 992px) {
		margin-left: 260px;
	}
`;

const Home = styled.section`
	position: relative;
`;

function App() {
	return (
		<>
			<Header />
			<Container>
				<Sidebar />
				<Home>
					<Banner />
				</Home>
			</Container>
		</>
	);
}

export default App;
