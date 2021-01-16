import React, { FunctionComponent } from 'react';
import { Typography } from 'antd';
import DailyPostList from "pages/IndexPage/components/DailyPostList/DailyPostList";

const { Title } = Typography

const IndexPage: FunctionComponent = () => {


    return (
        <div>
            <Title>Самые популярные посты за сегодня</Title>
            <DailyPostList />
        </div>
    );
}

export default IndexPage;