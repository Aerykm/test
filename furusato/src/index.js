import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";
import myApp from "./reducers";
import Results from "./components/Navbar/results";

let store = createStore(myApp);

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <div className="container">
        <App store={store}/>
        <hr />
        <Results store={store}/>
      </div>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
