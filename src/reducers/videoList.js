import Redux from 'redux';
import exampleData from '../data/exampleVideoData';

var videoListReducer = (state = sampleData, action) => {
  //TODO: define a reducer for the videoList field of our state.
  switch (action.type) {
    case "CHANGE_VIDEO_LIST":
      //  update state
    default:
      return state;
  }
};

export default videoListReducer;
