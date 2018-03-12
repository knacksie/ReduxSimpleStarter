import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import PostsIndex from './components/posts_index';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
  render() {
    return (<div>Hello!</div>);
  }
}

class Goodbye extends React.Component {
  render() {
    return (<div>Goodbye!</div>);
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Route path="/" component={PostsIndex}>
          <Route path="hello" component={Hello} />
        </Route>
      </div>
    </Router>
  </Provider>
  , document.querySelector('.container'));
