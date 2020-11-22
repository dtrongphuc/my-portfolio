import React, { Suspense, useEffect, lazy } from 'react';
import styled from 'styled-components';

import Loader from '../components/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Sidebar = lazy(() => import('../components/Sidebar'));
const Header = lazy(() => import('../components/Header'));
const Home = lazy(() => import('../pages/Home'));

const Container = styled.div`
	position: relative;
	@media (min-width: 992px) {
		margin-left: 260px;
	}
`;

function App() {
	useEffect(() => {
		AOS.init({
			duration: 400,
		});
	}, []);

	return (
		<Suspense fallback={<Loader />} data-aos='zoom-in'>
			<Container>
				<Header />
				<Sidebar />
				<Home />
			</Container>
		</Suspense>
	);
}

export default App;
