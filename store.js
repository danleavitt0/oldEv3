import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers'
import multi from 'redux-multi'
import effects from 'redux-effects'
import events from 'redux-effects-events'
import location from 'redux-effects-location'
import logger from 'redux-logger'
import fetch from 'redux-effects-fetch'
import sensorData from './middleware/sensorData'
import getFile from './middleware/getFile'

const middlewares = [
	multi,
  effects,
  fetch,
  events(),
  location(),
  getFile
]

export default initialState => applyMiddleware(...middlewares)(createStore)(reducer, initialState)
