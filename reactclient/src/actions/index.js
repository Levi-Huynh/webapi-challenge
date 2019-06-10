import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  return axios
    .get('https://project-task-planner.herokuapp.com/api/project')
    //.get('http://localhost:3500/api/project')
    .then(res => {
        console.log("get", res.data);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.reponse });
    });
};

export const FETCH_ACTION_START = 'FETCH_ACTIONS_START';
export const FETCH_ACTION_SUCCESS = 'FETCH_ACTIONS_SUCCESS';
export const FETCH_ACTION_FAILURE = 'FETCH_ACTIONS_FAILURE';
export const getActions = (id) => dispatch => {
  dispatch({ type: FETCH_ACTION_START });
  return axios
    .get(`https://project-task-planner.herokuapp.com/api/project/${id}/action`)
    //.get(`http://localhost:3500/api/project/${id}/action`)
    .then(res => {
        console.log("get", res.data);
      dispatch({ type: FETCH_ACTION_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_ACTION_FAILURE, payload: err.reponse });
    });
};