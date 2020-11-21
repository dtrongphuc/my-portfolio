import React from 'react';

import NavItem from './NavItem';

function Navigation({ seperate }) {
	return (
		<>
			<NavItem
				href='home'
				content='Home'
				active={true}
				seperate={seperate}
			/>
			<NavItem href='about' content='About Me' seperate={seperate} />
			<NavItem href='services' content='What I Do' seperate={seperate} />
			<NavItem href='resume' content='Resume' seperate={seperate} />
			<NavItem href='portfolio' content='Portfolio' seperate={seperate} />
			<NavItem href='contact' content='Contact' seperate={seperate} />
		</>
	);
}

export default Navigation;
