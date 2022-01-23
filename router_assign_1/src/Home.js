import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { withRouter } from "react-router-dom";

  import Details from './Details';
  import AddMovie from './AddMovie';
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            movieId: null
        }
        this.onSearch = this.onSearch.bind(this);
        this.displayMovieDetail = this.displayMovieDetail.bind(this);
    }
    displayMovieDetail(){
        <Link to={`/display/${this.state.movieId}`}>Movie Detail​</Link>  
    }

    onSearch(){
        console.log("on search click")
       let movieId = document.getElementById('movieSearch');
       this.setState({movieId : movieId})
       console.log("yam::this.props",this.props.history);
       this.props.history.push({
        pathname: `/details/${movieId}`,
        state: {
            movieId: movieId
        }
    });
    }

    render(){
        return(
            <React.Fragment>
                <div style ={{backgroundColor: "tomato"}}>
                <span> <h1 style={{textAlign:"center"}}>Movie DataBase</h1> </span>
                <div style={{textAlign:"center", paddingBottom:"30px"}} >
                <input id="movieSearch" type="text" name="movieSearch" onChange={this.searchTextUpdate}></input>
                <button onClick={this.onSearch}>Search</button>
                </div>
                </div>
                <Router>
                
                <span style={{height: "20px",width : "50px", marginRight: "30px", fontWeight:"bold"}}>
                    <Link to="/details/:id">Details </Link>
                </span>
                
                <span style={{height: "20px",width : "50px", fontWeight:"bold"}}>
                    <Link to="/addMovie">Add Movies</Link>
                </span>
                
                    <Switch>
                        <Route path="/details/:id" render={(props) => <Details {...props} movieId={this.state.movieId}/>} />
                        <Route path="/addMovie" render={(props) => <AddMovie {...props}/>} />
                        
                    </Switch>
                    
                </Router>
                
          </React.Fragment>

        );
    }
}

export default withRouter(Home);