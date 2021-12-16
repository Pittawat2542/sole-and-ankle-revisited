import Header from '../Header';
import { QUERIES } from '../../constants';
import React from 'react';
import ShoeIndex from '../ShoeIndex';
import styled from 'styled-components/macro';

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;

  ${QUERIES.tabletAndSmaller} {
    padding: 48px 32px;
  }

  ${QUERIES.phoneAndSmaller} {
    padding: 48px 16px;
  }
`;

export default App;
