import React, { lazy, Suspense } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { MainLayout } from '@Layouts';
import { TestPage, DefaultPage, PublishPage } from '@Pages';
import PagesList from '@Constants/RoutesList.json';
import { BodySpinner } from '@Element/Spinners';

// 메인 레이아웃.
const MainLayoutPage = PagesList.MainLayout.map((page: { routeName: string; componentName: string }) => {
    return {
        name: page.routeName,
        component: lazy(() => import(`../Pages/${page.componentName}`)),
    };
});

const Routes = ({ Routerhistory }: { Routerhistory: any }) => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <ConnectedRouter history={Routerhistory}>
                <Switch>
                    {/* <Route path={['/test', '/default', '/login', '/register']}> */}
                    {/* <Route path={process.env.PUBLIC_URL + '/'} component={DefaultPage} exact /> */}
                    <Route path={process.env.PUBLIC_URL + '/test'} component={TestPage} exact />
                    <Route path={process.env.PUBLIC_URL + '/default'} component={DefaultPage} exact />
                    <Route path={process.env.PUBLIC_URL + '/publish'} component={PublishPage} exact />
                    {/* </Route> */}

                    <Route path={['/:path?']}>
                        <MainLayout>
                            <Switch>
                                <Suspense fallback={<BodySpinner />}>
                                    {MainLayoutPage.map((item: any, n: any) => {
                                        return (
                                            <Route
                                                path={process.env.PUBLIC_URL + `${item.name}`}
                                                component={item.component}
                                                key={n}
                                                exact
                                            />
                                        );
                                    })}
                                </Suspense>
                            </Switch>
                        </MainLayout>
                    </Route>
                </Switch>
            </ConnectedRouter>
        </BrowserRouter>
    );
};

export default Routes;
