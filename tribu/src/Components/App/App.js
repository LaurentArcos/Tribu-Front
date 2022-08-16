import React from 'react';

import '../../styles/styles.scss';
import Header from '../Header/Header';
import NewAccountForm from '../NewAccountForm/NewAccountForm';

function App() {
  return (
    <div className="App">
      <Header />
      <NewAccountForm />
    </div>
  );
}

export default App;
