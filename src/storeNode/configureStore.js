import {createStore} from "redux"
import reducer from "./bugs"
import {devToolsEnhancer} from "@redux-devtools/extension"

export default function configureStore() {
  const store = createStore(reducer,devToolsEnhancer({trace: true})
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}  

