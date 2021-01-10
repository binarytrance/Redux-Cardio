import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import reducer from './store/reducer';
import {Provider} from 'react-redux';
import CounterReducer from './store/reducers/counter';
import RecordedStateReducer from './store/reducers/recordedState';

const rootReducer = combineReducers({
    ctr:CounterReducer,
    rec: RecordedStateReducer
})
const store = createStore(rootReducer); // takes reducer as input

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
