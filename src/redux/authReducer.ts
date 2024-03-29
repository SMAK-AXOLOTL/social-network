import {ResultCodeEnum} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {appStateType} from "./reduxStore";
import {authAPI} from "../api/authAPI";
import {securityAPI} from "../api/securityAPI";

const SET_USER_DATA = 'auth/SET_USER_DATA'
const TOGGLE_AUTH_IS_FETCHING = 'auth/TOGGLE_AUTH_IS_FETCHING'
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL'

type InitialStateType = {
    authUserId: number | null
    email: string | null
    login: string | null
    isFetching: boolean
    isAuth: boolean
    captchaUrl: string | null
}
const initialState: InitialStateType = {
    authUserId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null
}

type SetUserDataActionPayloadType = {
    authUserId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
type SetUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: SetUserDataActionPayloadType
}
type ActionType = SetUserDataActionType | ToggleAuthIsFetchingActionType| SetCaptchaUrlActionType

export const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        case TOGGLE_AUTH_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.payload
            }
        }
        case SET_CAPTCHA_URL:{
            return {
                ...state, captchaUrl: action.payload
            }
        }
        default: {
            return state
        }
    }
}

const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean):SetUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {
        authUserId: id,
        email: email,
        login: login,
        isAuth: isAuth
    }
})

type ToggleAuthIsFetchingActionType = {
    type: typeof TOGGLE_AUTH_IS_FETCHING
    payload: boolean
}
const toggleAuthIsFetching = (isFetching: boolean):ToggleAuthIsFetchingActionType => ({
    type: TOGGLE_AUTH_IS_FETCHING,
    payload: isFetching
})

type SetCaptchaUrlActionType = {
    type: typeof SET_CAPTCHA_URL
    payload: string
}
const setCaptchaUrl = (captchaUrl: string):SetCaptchaUrlActionType => ({
    type: SET_CAPTCHA_URL,
    payload: captchaUrl
})

type ThunkType = ThunkAction<Promise<void>, appStateType, any, ActionType>

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    dispatch(toggleAuthIsFetching(true))
    const data = await authAPI.authMe()
    if (data.resultCode === ResultCodeEnum.Success) {
        const {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true))
        dispatch(toggleAuthIsFetching(false))
    }
}
export const login = (email: string, password: string, rememberMe = false, captcha = '', setStatus: (text: string) => void): ThunkType => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCodeEnum.Success) {
        await dispatch(getAuthUserData())
    } else if (data.resultCode === ResultCodeEnum.CaptchaError){
        await dispatch(getCaptchaUrl())
        setStatus('Incorrect anti-bot symbols')
    } else {
        setStatus('Invalid E-mail or password')
    }
}

export const logout = (): ThunkType => async (dispatch) => {
    const data = await authAPI.logout()
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptcha()
    const captchaUrl = data.url

    dispatch(setCaptchaUrl(captchaUrl))
}