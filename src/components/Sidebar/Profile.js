import React from 'react';
import styled from 'styled-components';

import theme from '../../constaints/theme';
import avatar from '../../assets/images/avatar.jpg';
import { data } from '../../store/data';

const Image = styled.img`
	display: block;
	border-radius: 50%;
	height: auto;
	margin-left: auto;
	margin-right: auto;
	max-width: 100%;
	border: 10px solid ${theme.avatarBorder};
`;

const Link = styled.a`
	display: block;
`;

const Cover = styled.span`
	display: block;
	padding: 2rem 2rem 1rem 2rem;
	user-select: none;
	-webkit-tap-highlight-color: transparent;
`;

const Name = styled.h3`
	font-size: 1.3rem;
	font-weight: 600;
	color: ${theme.white};
	text-align: center;
`;

function Profile() {
	return (
		<>
			<Cover>
				<Link href='/#'>
					<Image className='avatar' src={avatar} alt='avatar' />
				</Link>
			</Cover>
			<Name>{data?.name}</Name>
		</>
	);
}

export default Profile;
