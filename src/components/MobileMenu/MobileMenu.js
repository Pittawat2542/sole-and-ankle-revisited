import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import { DialogContent, DialogOverlay } from '@reach/dialog';

import Icon from '../Icon';
/* eslint-disable no-unused-vars */
import React from 'react';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';
import styled from 'styled-components/macro';

const MobileMenu = ({ isOpen, onDismiss }) => {
	if (!isOpen) {
		return null;
	}

	return (
		<Overlay>
			<Wrapper>
				<CloseButtonContainer>
					<UnstyledButton onClick={onDismiss}>
						<Icon id='close' size={32} />
						<VisuallyHidden>Dismiss menu</VisuallyHidden>
					</UnstyledButton>
				</CloseButtonContainer>
				<NavContainer>
					<NavLink href='/sale'>Sale</NavLink>
					<NavLink href='/new'>New&nbsp;Releases</NavLink>
					<NavLink href='/men'>Men</NavLink>
					<NavLink href='/women'>Women</NavLink>
					<NavLink href='/kids'>Kids</NavLink>
					<NavLink href='/collections'>Collections</NavLink>
				</NavContainer>
				<Footer>
					<FooterLink href='/terms'>Terms and Conditions</FooterLink>
					<FooterLink href='/privacy'>Privacy Policy</FooterLink>
					<FooterLink href='/contact'>Contact Us</FooterLink>
				</Footer>
			</Wrapper>
		</Overlay>
	);
};

const CloseButtonContainer = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
`;

const NavContainer = styled.nav`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 22px;
`;

const Footer = styled.footer`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
  gap: 14px;
`;

const NavLink = styled.a`
	text-decoration: none;
	text-transform: uppercase;
	color: var(--color-gray-900);
	font-size: ${18 / 16}rem;
	font-weight: var(--font-medium);

	&:first-child {
		color: var(--color-secondary);
	}
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-700);
`;

const Wrapper = styled(DialogContent)`
	position: absolute;
	top: 0;
	left: 20%;
	bottom: 0;
	right: 0;
	background: var(--color-white);
	display: flex;
	flex-direction: column;
	padding: 32px;
`;

const Overlay = styled(DialogOverlay)`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	width: 100vw;
	height: 100%;
	background: #60646ccc;
	isolation: isolate;
`;

export default MobileMenu;
