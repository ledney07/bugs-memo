import React from 'react';
import './App.css';
import configureStore from "./storeNode/configureStore"
import {addedBug, resolvedBug} from "./storeNode/bugs"

const store = configureStore()

store.dispatch(addedBug("successful"))
store.dispatch(resolvedBug(1))


console.log(store.getState())

function App() {
  return (
    <main>
      React⚛️ + Vite⚡ + Replit🌀
    </main>
  );
}

export default App;