import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { film } from './reducers';
import { rootFilmsSaga } from './sagas/film';

const rootReducer = combineReducers({
    film,
});

const saga = createSagaMiddleware()

const store = createStore(
    rootReducer,
    applyMiddleware(saga),
);

saga.run(rootFilmsSaga);

export default store;
