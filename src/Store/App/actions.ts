import { deprecated } from 'typesafe-actions';
const { createStandardAction } = deprecated;

export const START_LOADING = 'app/START_LOADING';
export const APP_INIT_START = 'app/APP_INIT_START';
export const APP_INIT_END = 'app/APP_INIT_END';

export const appInitAction = createStandardAction(APP_INIT_START)();
