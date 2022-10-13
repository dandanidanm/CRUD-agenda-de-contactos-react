export const contactosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD": 
    return [
      ...state,
      action.payload
    ]

    case "DELETE":
      return state.filter(actual => actual.id !== action.payload)
 
    case "EDIT":
      return [
        ...state,
        action.payload
      ]  

    default:
      return state
  }
}