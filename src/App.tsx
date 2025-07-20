import React from 'react';
import Header from '../components/header';
import Filter from '../components/filter';
import Section from '../components/section';

const App = () => {
  return (
    <div>
      <Header />
      <Filter />
      <h1>Hello React with Webpack! Damn this thing annoying</h1>
      <Section />
    </div>
  );
};

export default App;
