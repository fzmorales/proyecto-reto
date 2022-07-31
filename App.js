import React from 'react';
import LoginProvider from './src/context/LoginProvider';
import MainNavigator from './src/MainNavigator'

const App = () => {
  return (
    <LoginProvider>
      <MainNavigator />
    </LoginProvider>
  );
};

export default App;
