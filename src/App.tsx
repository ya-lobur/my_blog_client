import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store';
import './App.css';
import { Button } from 'antd';


function App() {
    return (
        <Provider store={store}>
            <Button type="primary">Button</Button>
        </Provider>
    );
}

export default App;
