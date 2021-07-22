import  {USERS_ACTION_TYPES } from "../redux/actions/usersActions";

let initialState = {
    data:[],
    total_count:0,
    singleUserData: {},
    isFetching: false
    };


const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case USERS_ACTION_TYPES.USERS_GET_REQUEST_SUCCESS: {
            const tempState = { ...state };
            tempState.data = action.payload.users.items;
            tempState.isFetching = false
            tempState.total_count = action.payload.users.total_count
        
            return tempState
        } 
        case USERS_ACTION_TYPES.USERS_GET_SINGLE_REQUEST_SUCCESS: {
            const tempState = { ...state };
            const {payload} = action
            
            tempState.singleUserData = payload.user

            return tempState
        }
        case USERS_ACTION_TYPES.LOADING: {
            const tempState = { ...state };
            tempState.isFetching = action.payload.isLoading
            return tempState
        }
        default: 
        return state;
        
    }
    
    };

export default usersReducer;          