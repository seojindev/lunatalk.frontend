import { Store, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { History } from 'history';

import { RootState } from 'StoreTypes';
import { rootSaga, createRootReducer } from '@Stores';

/**
 * 2021-06-12 15:15 psmever
 * 최초에 스토어가 히스토리 밖에 없기 때문에 스테이트를 추가 하면 소스 변경 필요.
 *
 * export default function configureStore(history: History): Store<RootState> { -> export default function configureStore(history: History, initialState: RootState): Store<RootState> {
 *
 * const store = createStore(createRootReducer(history), compose); -> const store = createStore(createRootReducer(history), initialState, compose);
 */

export default function configureStore(history: History): Store<RootState> {
    let compose;

    const isDevelopment = process.env.REACT_APP_ENV === 'production' ? false : true;
    const useReduxLogger = false;

    const composeEnhancers = composeWithDevTools({});
    const sagaMiddleware = createSagaMiddleware();

    if (isDevelopment) {
        if (useReduxLogger) {
            compose = composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware, createLogger()));
        } else {
            compose = composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware));
        }
    } else {
        compose = applyMiddleware(routerMiddleware(history), sagaMiddleware);
    }

    const store = createStore(createRootReducer(history), compose);
    sagaMiddleware.run(rootSaga);

    return store;
}
