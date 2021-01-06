import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store';
import './App.css';
import AppRouter from 'layouts/AppRouter';


function App() {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
}

export default App;
