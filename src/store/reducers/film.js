import { SET_REFRESHING, SET_PAGE, SET_LIST, CLEAR_LIST } from '../actions/film';

const initialState = {
    page: 1,
    refreshing: true,
    list: [],
};

const film = (state = initialState, action) => {
    switch (action.type) {
        case SET_REFRESHING:
            return {
                ...state,
                refreshing: action.refreshing,
            };
        case SET_PAGE:
            return {
                ...state,
                page: action.page,
            };
        case SET_LIST:
            return {
                ...state,
                list: state.list.concat(action.list),
            };
        case CLEAR_LIST:
            return {
                ...state,
                list: [],
            };
        default:
            return state;
    }
};

export default film;
