import {
    GET_LOGIN_DATA
} from '../constants'

//Action Creator
export const fetchLogin = (data) => (
    { type: GET_LOGIN_DATA, payload: data }
)
