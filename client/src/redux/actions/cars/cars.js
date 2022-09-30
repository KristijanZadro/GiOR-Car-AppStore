import * as actionsTypes from "../actionsTypes"
import axios from "../../../axios"
import { useAppendUrl } from "../../../customHooks/useAppendUrl";

export const getCarsStart = () => {
    return {
        type: actionsTypes.GET_CARS_START
    };
};
export const getCarsSuccess = (cars) => {
    return {
        type: actionsTypes.GET_CARS_SUCCESS,
        cars
    };
};
export const getCarsFail = () => {
    return {
        type: actionsTypes.GET_CARS_FAIL
    };
};

export const getCars = () => {
    return async (dispatch) => {
        // send request
        dispatch(getCarsStart());
        //search = encodeURIComponent(search);

        axios({
            method: "GET",
            url: "/Cars",
        })
            .then((data) => {
                console.log("getCars:", data);
                const Cars = data.data.map(car => {
                    let coverImage = useAppendUrl(car.coverImage)
                    return { ...car, coverImage }
                })
                dispatch(getCarsSuccess(Cars));
            })
            .catch((e) => {
                console.error(e);
                dispatch(getCarsFail());
            });
    };
};

export const getCarDetailsStart = () => {
    return {
        type: actionsTypes.GET_CAR_DETAILS_START
    };
};
export const getCarDetailsSuccess = (car) => {
    return {
        type: actionsTypes.GET_CAR_DETAILS_SUCCESS,
        car
    };
};
export const getCarDetailsFail = () => {
    return {
        type: actionsTypes.GET_CAR_DETAILS_FAIL
    };
};

export const getCarDetails = (id) => {
    return async (dispatch) => {
        // send request
        dispatch(getCarDetailsStart());

        axios({
            method: "GET",
            url: `/Cars/${id}`
        })
            .then((data) => {
                const car = {
                    ...data.data,
                    image: useAppendUrl(data.data.coverImage)
                }
                dispatch(getCarDetailsSuccess(car));
            })
            .catch((e) => {
                console.error(e);
                dispatch(getCarDetailsFail());
            });
    };
};
