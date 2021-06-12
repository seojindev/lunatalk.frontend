import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from '@Store/configureStore';
import History from '@Module/History';
import Routes from '@Module/Routes';

const history = createBrowserHistory();

/**
 * 2021-06-12 15:15 psmever
 * 최초에 스토어가 히스토리 밖에 없기 때문에 스테이트를 추가 하면 소스 변경 필요.
 *
 * const store = configureStore(history); -> const store = configureStore(history, initialState);
 */

// declare let window: any;
// const initialState = window.INITIAL_REDUX_STATE;
const store = configureStore(history);

function App() {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <Routes Routerhistory={History} />;
            </Provider>
        </React.StrictMode>
    );
}

export default App;
