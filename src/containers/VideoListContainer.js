import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var VideoListContainer = () => {
  const mapStateToProps = (state) => {
    console.log('state', state);
    return {
      videos: state.videoList,
    };
  };

  const mapDispatchToProps = (dispatch) => {

    return {
      handleVideoListEntryTitleClick: (q) => {
        dispatch(changeVideo(q));
      }
    };
  };  
  return connect(mapStateToProps, mapDispatchToProps)(VideoList);
};



// var VideoListContainer = () => {};

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

// const mapStateToProps = state => {
//   // return {
//   //   // videos: state.videos;
//   // };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     handleVideoListEntryTitleClick: value => {
//       dispatch(changeVideo(value));
//     };
//   };
  
  
// }
// const VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

export default VideoListContainer;
