import {
    GET_LOGIN_DATA,
    FETCHING_LOGIN_DATA,
    FETCHING_LOGIN_SUCCESS,
    FETCHING_LOGIN_FAILURE
} from '../constants'
import { fetchApi } from '../../api/fetchCall'
import { put, takeLatest, call } from 'redux-saga/effects'
import { history } from "../../helpers/history";

const fetchApiData = (payload) => (
    fetchApi('https://reqres.in/api/login', payload)
)

function* fetchLogin(action) {
    const { payload } = action
    try {
        yield put({ type: FETCHING_LOGIN_DATA })
        const response = yield call(fetchApiData, payload)
        yield put({ type: FETCHING_LOGIN_SUCCESS, data: response })
        if (response?.error) {
            history.push("/loginFailed")
        }
        else {
            history.push("/home")
        }

    } catch (e) {
        yield put({ type: FETCHING_LOGIN_FAILURE })
    }
}

export default function* watcherSaga() {
    yield takeLatest(GET_LOGIN_DATA, fetchLogin)
}

