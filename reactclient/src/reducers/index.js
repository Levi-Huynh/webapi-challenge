import {LOGIN_START, LOGIN_SUCCESS, FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE,
    FETCH_ACTION_START, FETCH_ACTION_SUCCESS, FETCH_ACTION_FAILURE, LOAD_NEW_FRIEND, NEW_FRIEND_SUCCESS, FETCH_FRIEND_UPDATE, FRIEND_UPDATE_SUCCESS} from "../actions";

    const initialState = {
     quotes: [],
     actions: [],
        loggingIn: false,
        error: "",
        
        deletingquote: false,
       fetchingquote: false,
       fetchingaction: false,
       savingquote: false,
       updatingquote: false,
       };
     

    const reducer = (state = initialState, action) => {
        switch (action.type) {
    case FETCH_DATA_START:
        return {
          ...state,
          error: '',
          fetchingquote: true,
          errorStatusCode: null
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          error: '',
          errorStatusCode: null,
          fetchingquote: false,
         quotes: action.payload
        
        };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          fetchingquote: false,
          error: action.payload,
          errorStatusCode: null
        };  
        case FETCH_ACTION_START:
          return {
            ...state,
      fetchingaction: true,
            error: null,
          
          };
        case FETCH_ACTION_SUCCESS:
          return {
            ...state,
           fetchingaction: false,
            error: null,
         
         actions: action.payload
          };
        case FETCH_ACTION_FAILURE:
          return {
            ...state,
     
            error: action.payload,
           fetchingaction: false
          };
        
        default:
        return state;
    }
  };
  
  export default reducer;
     