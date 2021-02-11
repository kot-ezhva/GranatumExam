import React from 'react';
import { StatusBar } from 'react-native';
import { Provider, connect } from 'react-redux';
import store from './src/store';
import { FilmList } from './src/screens';

const App = () => (
    <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <FilmList/>
    </Provider>
);

export default App;
