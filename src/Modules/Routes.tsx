import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { TestPage, DefaultPage, PublishPage } from '@Pages';
import { MainPublish } from '@Publishs';

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

                    <Route path={['/publishs/:page_name']}>
                        <Switch>
                            <Route path={process.env.PUBLIC_URL + '/publishs/:page_name'} component={MainPublish} />
                        </Switch>
                    </Route>
                </Switch>
            </ConnectedRouter>
        </BrowserRouter>
    );
};

export default Routes;
