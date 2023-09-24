/** @format */

export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTIONS":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payLoad
        ),
      }
    case "ADD_TRANSACTIONS":
      return {
        ...state,
        transactions: [action.payLoad, ...state.transactions],
      }
    default:
      return state
  }
}
