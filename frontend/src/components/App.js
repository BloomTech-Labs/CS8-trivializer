import React, { Component } from 'react';

import { AppWrapper } from './primatives/App';

export default ({ children }) => {
  return (
    <AppWrapper>
      {children}
    </AppWrapper>
  );
};
