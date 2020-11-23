import React, { useEffect, useState } from 'react';

import NavItem from './NavItem';

function Navigation({ seperate }) {
	const [currentSection, setCurrentSection] = useState('home');

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const id = entry.target.getAttribute('id');
					if (entry.isIntersecting) {
						setCurrentSection(id);
					}
				});
			},
			{ threshold: 0.5 }
		);

		document.querySelectorAll('section[id]').forEach((section) => {
			observer.observe(section);
		});
	}, []);

	return (
		<>
			<NavItem
				href='home'
				active={currentSection === 'home'}
				content='Home'
				seperate={seperate}
			/>
			<NavItem
				href='about'
				active={currentSection === 'about'}
				content='About Me'
				seperate={seperate}
			/>
			<NavItem
				href='services'
				active={currentSection === 'services'}
				content='What I Do'
				seperate={seperate}
			/>
			<NavItem
				href='resume'
				active={currentSection === 'resume'}
				content='Resume'
				seperate={seperate}
			/>
			<NavItem
				href='portfolio'
				active={currentSection === 'portfolio'}
				content='Portfolio'
				seperate={seperate}
			/>
			<NavItem
				href='contact'
				active={currentSection === 'contact'}
				content='Contact'
				seperate={seperate}
			/>
		</>
	);
}

export default Navigation;
