import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';

const logger = store => next => action => {
  console.log('action:', action);
  next(action);
};

function reducer(state = {}, action){
  switch(action.type) {
    case 'CASE':
      return 'case 1';
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
      logger
    )
  )
);

store.dispatch({
  type: 'CASE',
  payload: 'payload'
});
