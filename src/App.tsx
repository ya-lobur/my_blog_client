import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store';
import './App.css';
import AppRouter from 'layouts/AppRouter/AppRouter';
import { ConfigProvider as AntConfigProvider } from 'antd';
import locale from 'antd/es/locale/ru_RU';
import AppConfig from "layouts/AppConfig/AppConfig";


function App() {
    return (
        <Provider store={store}>
            <AntConfigProvider locale={locale}>
                <AppConfig>
                    <AppRouter/>
                </AppConfig>
            </AntConfigProvider>
        </Provider>
    );
}

export default App;
