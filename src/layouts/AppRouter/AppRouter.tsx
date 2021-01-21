import React, { FunctionComponent, Fragment } from 'react';
import routes from "constants/routes";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainLayout from "layouts/MainLayout/MainLayout";

const AppRouter: FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Switch>
                {routes.map(({ path, component: Component, pageLayout: PageLayout = Fragment }, index) => (
                    <Route key={index} path={path}  exact>
                        <MainLayout>
                            <PageLayout>
                                <Component/>
                            </PageLayout>
                        </MainLayout>
                    </Route>
                ))}
                <Route component={NotFoundPage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default AppRouter;