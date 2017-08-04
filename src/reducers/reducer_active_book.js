//state argument here is NOT application state, it's only the part of the application state that this reducer is responsible for
export default function(state = null, action) {
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
