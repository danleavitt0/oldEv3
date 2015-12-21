import {DEVICE_DATA, INIT_SENSORS} from '../actions/sensors'
import setProp from '@f/set-prop'

function reducer (state={}, action) {
  switch (action.type) {
    case INIT_SENSORS:
      return {
        ...state,
        sensors: action.payload.currentDevices
      }
    case DEVICE_DATA:
    	return setProp(state.sensors[action.payload.data.port].value, state, action.payload.data.value)
  }
  return state
}

export default reducer
