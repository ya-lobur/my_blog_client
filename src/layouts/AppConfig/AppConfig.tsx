import React, { FunctionComponent } from 'react';
import moment from "moment";
import axios from "axios";
import 'moment/locale/ru';

const AppConfig: FunctionComponent = ({ children }) => {

    moment.locale('ru');
    axios.defaults.xsrfHeaderName = "X-CSRFToken";
    axios.defaults.xsrfCookieName = "csrftoken";


    return <>{children}</>
}

export default AppConfig;