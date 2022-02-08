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
                name={'Shubham Singh'}
                githubURL={'https://github.com/imshubhamsingh'}
                projectURL={'https://github.com/imshubhamsingh/15-puzzle'}
                linkedinURL={'https://linkedin.com/in/imshubhamsingh97/'}
                twitterURL={'https://twitter.com/imshubhamsingh_'}
              />
            </Fragment>
          );
        }}
      </GameFactoryConsumer>
    </Container>
  );
};

export default KeyBoardManagar(Home);
