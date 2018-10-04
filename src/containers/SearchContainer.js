import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';

// var SearchContainer = () => {
//TODO: define a SearchContainer component which 
//will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate 
// a container component from
// state and dispatch mappings.


var SearchContainer = () => {
  
  const mapStateToProps = (state) => {
    console.log('state', state);
    return {
      currentVideo: state.currentVideo,
      videoList: state.videoList,
      // handleSearchInputChange: handleSearchChange
    };
  };

  const mapDispatchToProps = (dispatch) => {
    // console.log('dis', dispatch)
    return {
      handleSearchInputChange: (q) => {
        // console.log('q', q)
        dispatch(handleSearchChange(q));
      }
    };
  };
  return connect(mapStateToProps, mapDispatchToProps)(Search);
};

// const mapStateToProps = (state) => {
  // return {
  //   currentVideo: state.currentVideo,
  //   videoList: state.videoList
  // };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleSearchInputChange: (value) => {
//       dispatch(handleSearchChange(value));
//     }
//   };
// };

// const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);


export default SearchContainer;

 // videos: state.videos,
 //    currentVideo: state.currentVideo