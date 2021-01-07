import React, { FunctionComponent, Fragment } from 'react';
import routes from "constants/routes";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const AppRouter: FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Switch>
                {routes.map(({ path, component: Component, pageLayout: PageLayout = Fragment }) => (
                    <Route key={path} path={path} exact>
                        <PageLayout>
                            <Component/>
                        </PageLayout>
                    </Route>
                ))}
                <Route component={NotFoundPage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default AppRouter;