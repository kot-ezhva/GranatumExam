import { call, put, takeEvery, all, select } from 'redux-saga/effects';
import { REQUEST_FILMS, setRefreshing, setList, clearList, setPage } from '../actions/film';
import { getFilms } from '../../utils/Api';

function* fetchFilms({ refresh = false }) {
    try {
        if (refresh) {
            yield put(setRefreshing(true));
            yield put(clearList());
        }

        const { page: lastPage } = yield select(state => state.film);
        const page = refresh ? 1 : lastPage + 1;

        const { results } = yield call(getFilms, { page });
        yield put(setPage(page));
        yield put(setList(results));
    } finally {
        yield put(setRefreshing(false));
    }
}

export function* rootFilmsSaga() {
    yield all([
        takeEvery(REQUEST_FILMS, fetchFilms),
    ]);
}
