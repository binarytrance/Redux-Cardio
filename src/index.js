import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// import reducer from './store/reducer';
import {Provider} from 'react-redux';
import CounterReducer from './store/reducers/counter';
import RecordedStateReducer from './store/reducers/recordedState';

const rootReducer = combineReducers({
    ctr:CounterReducer,
    rec: RecordedStateReducer
})


const logger = store => { // redux will give us the store by execting this fn
    return next => {
        return action => {
            console.log('{Middleware}', action);
            next(action); // this will let the action continue to the reducer
            console.log('{Middleware} next step', store.getState());
        }
    }
}

const store = createStore(rootReducer, applyMiddleware(logger)); // takes reducer as input

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
