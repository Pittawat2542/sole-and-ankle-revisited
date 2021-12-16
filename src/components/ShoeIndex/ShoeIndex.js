import { QUERIES, WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import React from 'react';
import Select from '../Select';
import ShoeGrid from '../ShoeGrid';
import ShoeSidebar from '../ShoeSidebar';
import Spacer from '../Spacer';
import styled from 'styled-components/macro';

const ShoeIndex = ({ sortId, setSortId }) => {
	return (
		<Wrapper>
			<MainColumn>
				<Header>
					<TitleWrapper>
						<MobileBreadcrumbs>
							<Breadcrumbs.Crumb href='/'>Home</Breadcrumbs.Crumb>
							<Breadcrumbs.Crumb href='/sale'>Sale</Breadcrumbs.Crumb>
							<Breadcrumbs.Crumb href='/sale/shoes'>Shoes</Breadcrumbs.Crumb>
						</MobileBreadcrumbs>
						<Title>Running</Title>
					</TitleWrapper>
					<Select
						label='Sort'
						value={sortId}
						onChange={(ev) => setSortId(ev.target.value)}
					>
						<option value='newest'>Newest Releases</option>
						<option value='price'>Price</option>
					</Select>
				</Header>
				<Spacer size={32} />
				<ShoeGrid />
			</MainColumn>
			<LeftColumn>
				<Breadcrumbs>
					<Breadcrumbs.Crumb href='/'>Home</Breadcrumbs.Crumb>
					<Breadcrumbs.Crumb href='/sale'>Sale</Breadcrumbs.Crumb>
					<Breadcrumbs.Crumb href='/sale/shoes'>Shoes</Breadcrumbs.Crumb>
				</Breadcrumbs>
				<Spacer size={42} />
				<ShoeSidebar />
			</LeftColumn>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: row-reverse;
	align-items: baseline;
	gap: 32px;
`;

const LeftColumn = styled.div`
	flex-basis: 248px;

	${QUERIES.tabletAndSmaller} {
		display: none;
	}
`;

const MainColumn = styled.div`
	flex: 1;
`;

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: baseline;

  ${QUERIES.tabletAndSmaller} {
    align-items: flex-end;
  }
`;

const Title = styled.h2`
	font-size: 1.5rem;
	font-weight: ${WEIGHTS.medium};
`;

const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const MobileBreadcrumbs = styled(Breadcrumbs)`
	display: none;

	${QUERIES.tabletAndSmaller} {
		display: flex;
	}
`;

export default ShoeIndex;
