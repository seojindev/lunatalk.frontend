import React, { lazy, Suspense } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { TestPage, DefaultPage, PublishPage } from '@Pages';

// TODO : 퍼블리싱 동적으로 보여 주기 위해. 개발 끝나면 삭제 해야 함.
import publishList from '@Src/Data/publish-list';
const routeMap: any = publishList.map(route => {
    return {
        name: route.name,
        comoonent: lazy(() => import(`../Publishs/${route.component}`)),
    };
});

const Routes = ({ Routerhistory }: { Routerhistory: any }) => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <ConnectedRouter history={Routerhistory}>
                <Switch>
                    {/* <Route path={['/test', '/default', '/login', '/register']}> */}
                    <Route path={process.env.PUBLIC_URL + '/'} component={DefaultPage} exact />
                    <Route path={process.env.PUBLIC_URL + '/test'} component={TestPage} exact />
                    <Route path={process.env.PUBLIC_URL + '/default'} component={DefaultPage} exact />
                    <Route path={process.env.PUBLIC_URL + '/publish'} component={PublishPage} exact />
                    {/* </Route> */}

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
