// actions tabs
export const setCheap = () => ({ type: 'SET_CHEAPEST' })
export const setFast = () => ({ type: 'SET_FASTEST' })
export const setOpt = () => ({ type: 'SET_OPTIMAL' })

// actions Filter
export const setAll = () => ({ type: 'SET_ALL' })
export const cleanOnlyAll = () => ({ type: 'CLEAN_ONLY_ALL' })
export const setWithout = (value) => ({ type: 'SET_WITHOUT', value })
export const setOne = (value) => ({ type: 'SET_ONE', value })
export const setTwo = (value) => ({ type: 'SET_TWO', value })
export const setThree = (value) => ({ type: 'SET_THREE', value })

// actions LoadData
export const loadData = () => async (dispatch) => {
  dispatch({ type: 'LOADING_TRUE' })
  try {
    const responseID = await fetch('https://aviasales-test-api.kata.academy/search')
    if (!responseID.ok) {
      console.log('ошибка при получении search id')
    }
    const searchID = await responseID.json()

    const getTickets = async function (searchId) {
      try {
        const responseTickets = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
        if (!responseTickets.ok) {
          console.log('ошибка при получении пачки билетов')
          return 'fail'
        }
        const ticketsData = await responseTickets.json()
        dispatch({ type: 'TICKETS_LOAD', data: ticketsData.tickets })
        return ticketsData
      } catch (e) {
        console.log(e)
      }
    }
    let stop = false
    while (!stop) {
      let responseTickets = await getTickets(searchID.searchId)
      if (responseTickets === 'fail') responseTickets = await getTickets(searchID.searchId)
      else if (responseTickets.stop === true) stop = true
    }
  } catch (e) {
    console.log(e)
  }

  dispatch({ type: 'LOADING_FALSE' })
}
export const sortCheapest = () => ({ type: 'TICKETS_SORT_CHEAPEST' })
export const sortFastest = () => ({ type: 'TICKETS_SORT_FASTEST' })
export const sortOptimal = () => ({ type: 'TICKETS_SORT_OPTIMAL' })

// actions ButtonMore
export const setMore = () => ({ type: 'SET_MORE_TICKETS' })
