import React from "react";
import {createStore, applyMiddleware} from 'redux';
import {rootReducer as reducer} from '../reducers/reducer'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';



const store = createStore(reducer, applyMiddleware(thunk));

function App(){

  
    return (
      <Provider store={store}>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>
        </div>
        <SmurfForm/>
        <SmurfList/>

      </Provider>
    );
  
}

export default App;
