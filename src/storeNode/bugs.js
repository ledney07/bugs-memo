// Action types
const ADDED_BUG = "addedBug"
const REMOVED_BUG = "removedBug"
const RESOLVED_BUG = "resolvedBug"


// Action creators

export function addedBug(description){
  return {
    type: ADDED_BUG,
    payload: {
      description
    }
  }
}


export const removedBug = id => {
  return {
    type: REMOVED_BUG,
    payload: {
     id: 1
    }
  }
}


export const resolvedBug = id => {
  return {
    type: RESOLVED_BUG,
    payload: {
      id
    }
  }  
}


// Reducer

let lastId = 0

 const reducer = (state = [ ], action) => {
 switch(action.type) {
   case  ADDED_BUG :
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false
        }
      ]
   
    case  REMOVED_BUG : 
      return state.filter(bug => bug.id !== action.payload.id)

   case RESOLVED_BUG:
     return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved: true})
   
    default:
      return state
 }
}

export default reducer



// this is with if statement
//  if(action.type === "bugAdded")
  //    return[
  //      ...state,
  //      {
  //        id: ++lastId
  //        description: action.payload.description,
  //        resolved: false
  //      }
  //    ]
  // else if(action.type === "bugRemove")
  //   return state.filter(bug => bug.id !== action.payload.id)
  // return state

