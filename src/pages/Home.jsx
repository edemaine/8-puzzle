import React, { Fragment } from 'react';
import { KeyBoardManagar } from '@HOC';

import { Instruction, Header, Game, Details } from '@Components';
import { Container, Wave, GameFactoryConsumer } from '@Elements';

const Home = ({ eventType }) => {
  return (
    <Container>
      <GameFactoryConsumer>
        {({ values, methods }) => {
          return (
            <Fragment>
              <Header />
              <br />
              <Game eventType={eventType} {...values} {...methods} />
              <br />
              <Instruction />
              <br />
              <Details
                projectURL={'https://github.com/edemaine/8-puzzle'}
              />
            </Fragment>
          );
        }}
      </GameFactoryConsumer>
    </Container>
  );
};

export default KeyBoardManagar(Home);
