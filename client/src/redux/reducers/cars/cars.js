import * as actionsTypes from "../../actions/actionsTypes";

const initialState = {
  cars: [],
  car: {},
  getCarsLoading: false,
  getCarLoading: false
};

// get cars
const getCarsStart = (state, action) => ({
  ...state,
  getCarsLoading: true
});

const getCarsSuccess = (state, action) => ({
  ...state,
  cars: [...action.cars],
  getCarsLoading: false
});

const getCarsFail = (state, action) => ({
  ...state,
  getCarsLoading: false
});

// get car
const getCarStart = (state, action) => ({
  ...state,
  getCarLoading: true
});

const getCarSuccess = (state, action) => ({
  ...state,
  car: {...action.car},
  getCarLoading: false
});

const getCarFail = (state, action) => ({
  ...state,
  getCarLoading: false
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.GET_CARS_START:
      return getCarsStart(state, action);
    case actionsTypes.GET_CARS_SUCCESS:
      return getCarsSuccess(state, action);
    case actionsTypes.GET_CARS_FAIL:
      return getCarsFail(state, action);
    case actionsTypes.GET_CAR_DETAILS_START:
      return getCarStart(state, action);
    case actionsTypes.GET_CAR_DETAILS_SUCCESS:
      return getCarSuccess(state, action);
    case actionsTypes.GET_CAR_DETAILS_FAIL:
      return getCarFail(state, action);
    default:
      return state;
  }
};

export default reducer;