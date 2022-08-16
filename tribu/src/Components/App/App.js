import React from 'react';

import '../../styles/styles.scss';
import Header from '../Header/Header';
import MainImage from '../MainImage/MainImage';
import NewAccountForm from '../NewAccountForm/NewAccountForm';

function App() {
  return (
    <div className="App">
      <Header />
      <MainImage />
      <NewAccountForm />
    </div>
  );
}

export default App;
