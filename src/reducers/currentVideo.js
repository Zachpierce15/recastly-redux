import Redux from 'redux';

var currentVideoReducer = (state, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch (action.type) {
    case "CHANGE_VIDEO":
    //  update state
    break;

    default:
      break;
  }
};

export default currentVideoReducer;
