import { createStore } from 'redux'

const initialState = {
  data: {},
  loading: false
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SAVE':
      return {
        loading: true,
        data: state.data
      }
    case 'SAVE_SUCCESS':
      return {
        loading: false,
        data: {
          ...state.data,
          ...action.data
        }
      }
    case 'SAVE_FAILURE':
      return {
        loading: false,
        data: state.data
      }
    default:
      return state
  }
}

export default createStore(reducer)
