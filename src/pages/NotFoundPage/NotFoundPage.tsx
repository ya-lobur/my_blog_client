import React, { FunctionComponent } from 'react';
import { Button, Result } from "antd";
import { Link } from 'react-router-dom';
import { RouteTemplates } from "constants/routes";

const NotFoundPage: FunctionComponent = () => {


    return (
        <Result
            status="404"
            title="404"
            subTitle="Упс, мы не можем это найти"
            extra={<Button type="primary"><Link to={RouteTemplates.ROOT}>На главную</Link></Button>}
        />
    );
}

export default NotFoundPage;