import {services} from "./services";
import {ArtistsConst} from "./constant";
export const artistActions = {
fetchartists
};
export function fetchartists() {
    return (dispatch) => new Promise((resolve, reject) => {
        

        services.getArtists()
            .then(response => {
                dispatch(success(response.data));
                resolve(response.data);
            })

    });

    function success(data) {
        return {
            type:ArtistsConst.FETCH_ARTISTS,
            payload: data,
        };
    }
}