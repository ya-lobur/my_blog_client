import React, { FunctionComponent } from 'react';
import moment from "moment";
import axios from "axios";
import 'moment/locale/ru';
import { setTwoToneColor } from '@ant-design/icons';

const AppConfig: FunctionComponent = ({ children }) => {

    setTwoToneColor('#8ab172');
    moment.locale('ru');
    axios.defaults.xsrfHeaderName = "X-CSRFToken";
    axios.defaults.xsrfCookieName = "csrftoken";

    axios.interceptors.request.use(function (config) {
        // config.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        config.headers.common['Access-Control-Allow-Credentials'] = true;
        config.withCredentials = true

        return config;
    });


    return <>{children}</>
}

export default AppConfig;