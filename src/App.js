import React from 'react';
import { connect } from "react-redux";
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList';
import './App.css';


function App(props) {
  return (
    <div>
<SearchBar/> 
<MovieList isLoading={props.isLoading}/>

    </div>
    
  );
}
const mapStateToProps = state => {
  return {
    
    isLoading:state.isLoading
  };
};

export default connect(mapStateToProps)(App) ;
