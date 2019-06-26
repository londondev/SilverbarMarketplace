import React from 'react';
import ReactDOM from 'react-dom';
import { MarketPlace } from '../src/';
import Header from  './header';
import { marketPlaceReducer } from '../src/';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(marketPlaceReducer);

 
const App = () => {
    return (<Provider store={store}>
             <Header />
              <MarketPlace />
          </Provider>)
}


ReactDOM.render(<App />, document.getElementById('app'));