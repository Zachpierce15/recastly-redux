import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch (action.type) {
    case 'CHANGE_VIDEO':
    //  update state
      // return Object.assign({}, state, action);
      return action.video;
    default:
      return state;
  }
};

export default currentVideoReducer;
