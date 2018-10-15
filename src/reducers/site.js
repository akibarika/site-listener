import axios from 'axios'
import {siteList} from '../constants'

const types = {
    START_CHECK: 'site/START_CHECK',
    SUCCESS_CHECK: 'site/SUCCESS_CHECK',
    FAILURE_CHECK: 'site/FAILURE_CHECK'
}
const initState = {
    status: ''
}
export default (state = initState, action) => {
    switch (action.type) {
        case types.START_CHECK:
            return {
                ...state,
                status: 'pending'
            }
        case types.SUCCESS_CHECK:
            return {
                ...state,
                status: 'success',
            }
        case types.FAILURE_CHECK:
            return {
                ...state,
                status: 'failure'
            }
        default:
            return ''
    }
}
const startCheck = () => ({
    type: types.START_CHECK
})

const successCheck = (list, amount) => ({
    type: types.SUCCESS_CHECK,
})

const failureCheck = () => ({
    type: types.FAILURE_CHECK
})


const checkSite = () => dispatch => {
    dispatch(startCheck())
    return axios
        .get(`https://www.dt.ami.ldstatdv.net`)
        .then(response => {
            dispatch(successCheck())
            return 'success'
        })
        .catch(error => {
            dispatch(failureCheck())
            return 'failure'
        })
}

export {checkSite}
