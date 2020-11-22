import React, { Suspense, useEffect } from 'react';
import styled from 'styled-components';

import Loader from '../components/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Sidebar = React.lazy(() => import('../components/Sidebar'));
const Banner = React.lazy(() => import('../components/Banner'));
const Header = React.lazy(() => import('../components/Header'));

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
	useEffect(() => {
		AOS.init({
			duration: 400,
		});
	}, []);

	return (
		<Suspense fallback={<Loader />} data-aos='zoom-in'>
			<Header />
			<Container>
				<Sidebar />
				<Home>
					<Banner />
				</Home>
			</Container>
		</Suspense>
	);
}

export default App;
