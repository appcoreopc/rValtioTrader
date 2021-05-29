import React from 'react';
import './App.css';
import { MainPage } from './components/mainpage';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainPage>
        </MainPage>
      </Provider>
    </div>
  );
}

export default App;
