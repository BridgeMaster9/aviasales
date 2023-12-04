import { combineReducers } from 'redux'

const tabs = (state = '', action) => {
  switch (action.type) {
    case 'SET_CHEAPEST':
      return 'cheapest'
    case 'SET_FASTEST':
      return 'fastest'
    case 'SET_OPTIMAL':
      return 'optimal'
    default:
      return state
  }
}
const filterDefault = { all: false, without: false, one: false, two: false, three: false }
const filters = (state = filterDefault, action) => {
  switch (action.type) {
    case 'SET_ALL':
      return { ...state, all: true, without: true, one: true, two: true, three: true }
    case 'CLEAN_ONLY_ALL':
      return { ...state, all: false }
    case 'SET_WITHOUT':
      return { ...state, without: action.value }
    case 'SET_ONE':
      return { ...state, one: action.value }
    case 'SET_TWO':
      return { ...state, two: action.value }
    case 'SET_THREE':
      return { ...state, three: action.value }
    default:
      return state
  }
}

const ticketsData = (state = [], action) => {
  switch (action.type) {
    case 'TICKETS_LOAD':
      return [...state, ...action.data]
    case 'TICKETS_SORT_CHEAPEST':
      return [...state].sort((a, b) => a.price - b.price)
    case 'TICKETS_SORT_FASTEST':
      return [...state].sort((a, b) => a.segments[0].duration - b.segments[0].duration)
    case 'TICKETS_SORT_OPTIMAL':
      return state
    default:
      return state
  }
}

const numberOfTickets = (state = 5, action) => {
  switch (action.type) {
    case 'SET_MORE_TICKETS':
      return state + 5
    default:
      return state
  }
}
const loading = (state = false, action) => {
  switch (action.type) {
    case 'LOADING_FALSE':
      return false
    case 'LOADING_TRUE':
      return true
    default:
      return state
  }
}

const rootReducer = combineReducers({
  tabs,
  filters,
  ticketsData,
  numberOfTickets,
  loading,
})

export default rootReducer
