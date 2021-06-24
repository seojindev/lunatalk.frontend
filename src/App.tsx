import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from '@Store/configureStore';
import History from '@Module/History';
import Routes from '@Module/Routes';
import SplashComponent from '@Src/Components/SplashComponent';

const history = createBrowserHistory();

declare let window: any;
const initialState = window.INITIAL_REDUX_STATE || {};
const store = configureStore(history, initialState);

function App() {
    const [AppLoading, setAppLoading] = useState<boolean>(true);

    // 스피너 페이지.
    const handleAppLoading = () => {
        if (AppLoading === false) {
            setAppLoading(true);
        } else {
            setAppLoading(false);
        }
    };
    return (
        <React.StrictMode>
            <Provider store={store}>
                {(function () {
                    if (AppLoading === true) {
                        return <SplashComponent appLoading={handleAppLoading} />;
                    } else {
                        return <Routes Routerhistory={History} />;
                    }
                })()}
            </Provider>
        </React.StrictMode>
    );
}

export default App;
