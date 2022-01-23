import React from 'react';
import { withRouter } from 'react-router-dom';
import {getMovieList} from './movieList';


class Details extends React.Component{
    constructor(props){
        super(props);
        console.log("yam::Details",this.props.location);
    }

    render(){
        let id = this.props.movieId ? this.props.movieId : 2323;
        console.log("yam::movieLists",getMovieList());
        let selectedMovie = {};
        let movieDetail = getMovieList();
        for(let i=0; i< movieDetail.length; i++){
            if(movieDetail[i].name == "232q3"){
                selectedMovie = movieDetail[i];
                break;
            }
        }
        console.log("yam::movieDetail",selectedMovie);
        const spanStyle = {
                marginRight: "20px",
                fontWeight : "bold"
        };
        const contentStyle = {
            color: "Blue",
            fontWeight : "bold"
        };
        const divStyle = {
            height: "20px",
            width: "100px",
            textAlign:"center",
            padding: "10px 5px 5px 10px"

        };
        return(
            <div style={{backgroundColor: "aqua",height:"100vh"}}> 
                <h1>Movie Details</h1>
                {selectedMovie.id ? (<div>

                    <div style={divStyle}>
                <span style={spanStyle}>Name:</span>
                <span style={contentStyle}>{selectedMovie.name}</span>
                </div>
                <div style={divStyle}>
                <span style={spanStyle}>Id:</span>
                <span style={contentStyle}>{selectedMovie.id}</span>
                </div>
                <div style={divStyle}>
                <span style={spanStyle}>Actor:</span>
                <span style={contentStyle}>{selectedMovie.actor}</span>
                </div>
                <div style={divStyle}>
                <span style={spanStyle}>Actress:</span>
                <span style={contentStyle}>{selectedMovie.actress}</span>
                </div>
                <div style={divStyle}>
                <span style={spanStyle}>Languages:</span>
                <span style={contentStyle}>{selectedMovie.lang}</span>
                </div>
                </div>) : <span> Movie Not Found</span>}
               
                
            </div>
            
        )
    }
}
export default withRouter(Details);