import {ArtistsConst} from './constant'
const initialState = {
    artists:[],
}

export default function artistReducer(state = initialState, action) {
    switch (action.type) {
        case ArtistsConst.FETCH_ARTISTS: {
            return {
                ...state,
                artists: action.payload
            }
        }
 
        
        default: return state;
    }
}
