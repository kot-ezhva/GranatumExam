export const REQUEST_FILMS = 'REQUEST_FILMS';

export const SET_REFRESHING = 'SET_REFRESHING';
export const SET_PAGE = 'SET_PAGE';
export const SET_LIST = 'SET_LIST';
export const CLEAR_LIST = 'CLEAR_LIST';

export const setRefreshing = refreshing => ({
    type: SET_REFRESHING,
    refreshing,
});

export const setPage = page => ({
    type: SET_PAGE,
    page,
});

export const setList = list => ({
    type: SET_LIST,
    list,
});

export const clearList = () => ({
    type: CLEAR_LIST,
});
