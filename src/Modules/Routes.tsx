import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import {
    // TestPage,
    LoginPage,
    RegisterPage,
    DefaultPage,
    TestPage,
    MainPage,
} from '@Pages';

// FIXME: 2021-02-05 00:57  404 페이지, 서버 에러 페이지 퍼블리싱.
const Routes = ({ Routerhistory }: { Routerhistory: any }) => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <ConnectedRouter history={Routerhistory}>
                <Switch>
                    {/* <Route path={['/test', '/default', '/login', '/register']}> */}
                    <Route path={process.env.PUBLIC_URL + '/'} component={MainPage} exact />
                    <Route path={process.env.PUBLIC_URL + '/test'} component={TestPage} exact />
                    <Route path={process.env.PUBLIC_URL + '/default'} component={DefaultPage} exact />
                    <Route path={process.env.PUBLIC_URL + '/auth/login'} component={LoginPage} exact />
                    <Route path={process.env.PUBLIC_URL + '/auth/register'} component={RegisterPage} exact />
                    {/* </Route> */}
                </Switch>
            </ConnectedRouter>
        </BrowserRouter>
    );
};

export default Routes;
