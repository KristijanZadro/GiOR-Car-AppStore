import * as actionsTypes from "../../actionsTypes"
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

export const getCars = (search = "", num = 10) => {
    return async (dispatch) => {
        // send request
        dispatch(getCarsStart());
        search = encodeURIComponent(search);

        axios({
            method: "GET",
            url: "/Cars",
            params: {
                search,
                num
            }
        })
            .then((data) => {
                console.log("getCars:", data);
                const Cars = data.data.map(media => {
                    let coverImage = useAppendUrl(media.coverImage)
                    let releaseDate = media.releaseDate.split("T")[0]
                    let averageRating = Math.round(media.averageRating * 10) / 10
                    return { ...media, coverImage, releaseDate, averageRating }
                })
                dispatch(getCarsSuccess(Cars));
            })
            .catch((e) => {
                console.error(e);
                dispatch(getCarsFail());
            });
    };
};

