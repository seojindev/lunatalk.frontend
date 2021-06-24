import { deprecated } from 'typesafe-actions';
const { createStandardAction } = deprecated;

/* action type start */
export const START_APP_LOADING = 'app/START_APP_LOADING';
export const END_APP_LOADING = 'app/END_APP_LOADING';

export const APP_INIT_START = 'app/APP_INIT_START';
export const APP_INIT_END = 'app/APP_INIT_END';

export const APP_ERROR = 'app/APP_ERROR';
export const COMMON_DATA = 'app/COMMON_DATA';
/* action type end */

/* action action start */
export const appInitAction = createStandardAction(APP_INIT_START)();
/* action action end */
