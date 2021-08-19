import React, { lazy, Suspense } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { MainLayout } from '@Layouts';
import { TestPage, DefaultPage, PublishPage } from '@Pages';
import PagesList from '@Constants/RoutesList.json';
// TODO : 퍼블리싱 동적으로 보여 주기 위해. 개발 끝나면 삭제 해야 함.
import publishList from '@Constants/publish-list';
import { BodySpinner } from '@Element/Spinners';
const routeMap: any = publishList.map(route => {
    return {
        name: route.name,
        comoonent: lazy(() => import(`../Publishs/${route.component}`)),
    };
});

// 메인 레이아웃.
const MainLayoutPage = PagesList.MainLayout.map((page: { routeName: string; componentName: string }) => {
    return {
        name: page.routeName,
        comoonent: lazy(() => import(`../Pages/${page.componentName}`)),
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
                                                component={item.comoonent}
                                                key={n}
                                                exact
                                            />
                                        );
                                    })}
                                </Suspense>
                            </Switch>
                        </MainLayout>
                    </Route>

                    <Switch>
                        {/* // TODO : 퍼블리싱 동적으로 보여 주기 위해. 개발 끝나면 삭제 해야 함. */}
                        <Suspense fallback={<div>Loading...</div>}>
                            {routeMap.map((item: any, n: any) => {
                                return (
                                    <Route
                                        path={process.env.PUBLIC_URL + `/publishs/${item.name}`}
                                        component={item.comoonent}
                                        key={n}
                                    />
                                );
                            })}
                        </Suspense>
                    </Switch>
                </Switch>
            </ConnectedRouter>
        </BrowserRouter>
    );
};

export default Routes;
