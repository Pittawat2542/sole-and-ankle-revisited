import { COLORS, QUERIES, WEIGHTS } from '../../constants';

import Icon from '../Icon';
import Logo from '../Logo';
import MobileMenu from '../MobileMenu';
import React from 'react';
import SuperHeader from '../SuperHeader';
import UnstyledButton from '../UnstyledButton';
import styled from 'styled-components/macro';

const Header = () => {
	const [showMobileMenu, setShowMobileMenu] = React.useState(false);

	return (
		<header>
			<SuperHeader />
			<MainHeader>
				<Side>
					<Logo />
				</Side>
				<Nav>
					<NavLink href='/sale'>Sale</NavLink>
					<NavLink href='/new'>New&nbsp;Releases</NavLink>
					<NavLink href='/men'>Men</NavLink>
					<NavLink href='/women'>Women</NavLink>
					<NavLink href='/kids'>Kids</NavLink>
					<NavLink href='/collections'>Collections</NavLink>
				</Nav>
				<Side>
					<MobileNav>
						<UnstyledButton>
							<Icon id='shopping-bag' />
						</UnstyledButton>
						<UnstyledButton>
							<Icon id='search' />
						</UnstyledButton>
						<UnstyledButton onClick={() => setShowMobileMenu(true)}>
							<Icon id='menu' />
						</UnstyledButton>
					</MobileNav>
				</Side>
			</MainHeader>

			<MobileMenu
				isOpen={showMobileMenu}
				onDismiss={() => setShowMobileMenu(false)}
			/>
		</header>
	);
};

const MainHeader = styled.div`
	display: flex;
	align-items: baseline;
	padding: 18px 32px;
	height: 72px;
	border-bottom: 1px solid ${COLORS.gray[300]};
	overflow-x: scroll;

	${QUERIES.tabletAndSmaller} {
		align-items: center;
	}

	${QUERIES.phoneAndSmaller} {
		padding: 16px;
	}
`;

const Nav = styled.nav`
	display: flex;
	gap: clamp(
    2rem,
    2vw + 1rem,
    3rem
  );
	margin: 0px 48px;

	${QUERIES.tabletAndSmaller} {
		display: none;
	}
`;

const Side = styled.div`
	flex: 1;
`;

const NavLink = styled.a`
	font-size: 1.125rem;
	text-transform: uppercase;
	text-decoration: none;
	color: ${COLORS.gray[900]};
	font-weight: ${WEIGHTS.medium};

	&:first-of-type {
		color: ${COLORS.secondary};
	}
`;

const MobileNav = styled.div`
	display: none;

	${QUERIES.tabletAndSmaller} {
		display: flex;
		justify-content: flex-end;
		gap: 36px;
	}

  ${QUERIES.phoneAndSmaller} {
		gap: 18px;
	}
`;

export default Header;
