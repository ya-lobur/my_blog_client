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
    axios.defaults.withCredentials = true;


    return <>{children}</>
}

export default AppConfig;