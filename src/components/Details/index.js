import React, { Component } from 'react';

import { Footer, Profile, Icon } from '@Elements';

const Details = ({ name, githubURL, linkedinURL, twitterURL, projectURL }) => (
  <Footer>
    <div className="text">
      <br/>
      This project is open source, visit{' '}
      <a href={projectURL} target="_blank">
        the repo.
      </a>
    </div>
  </Footer>
);

export default Details;
