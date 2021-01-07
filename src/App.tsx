import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store';
import './App.css';
import AppRouter from 'layouts/AppRouter/AppRouter';
import { ConfigProvider } from 'antd';
import locale from 'antd/es/locale/ru_RU';
import moment from 'moment';
import 'moment/locale/ru';
import MainLayout from 'layouts/MainLayout/MainLayout';

moment.locale('ru');


function App() {
    return (
        <Provider store={store}>
            <ConfigProvider locale={locale} >
                <MainLayout>
                    <AppRouter/>
                </MainLayout>
            </ConfigProvider>
        </Provider>
    );
}

export default App;
