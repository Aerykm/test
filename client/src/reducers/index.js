const initialState = {
    one: 0,
    two: 0,
    three: 0
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'VOTE_ONE':
        console.log("Your choice is Kaiju no.8!")
        return Object.assign({}, state, {
          one: state.one + 1
        })
      case 'VOTE_TWO':
        console.log("Your choice is ChainsawMan!")
        return Object.assign({}, state, {
          two: state.two + 1
        })
      case 'VOTE_THREE':
        console.log("Your choice is OnePunchMan")
        return Object.assign({}, state, {
          three: state.three + 1
        })
      default:
        return state
    }
  }