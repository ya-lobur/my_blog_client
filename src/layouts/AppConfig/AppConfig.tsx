import React, { FunctionComponent, useEffect } from 'react';
import moment from "moment";
import axios from "axios";
import 'moment/locale/ru';
import { setTwoToneColor } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { getProfile } from "async_actions/profile";

const AppConfig: FunctionComponent = ({ children }) => {

    setTwoToneColor('#8ab172');
    moment.locale('ru');
    axios.defaults.xsrfHeaderName = "X-CSRFToken";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.withCredentials = true;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfile());
    }, [dispatch]);


    return <>{children}</>
}

export default AppConfig;