import React from 'react';
import {updateList, getMovieList} from './movieList'

export default class AddMovie extends React.Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        const name = document.getElementById('movieId_').value;
        const id = document.getElementById('movieName_').value;
        const actor = document.getElementById('actor_').value;
        const actress = document.getElementById('actress_').value;
        const languages = document.getElementById('lang_').value;
        let movie = {name,id, actor, actress, languages};
        updateList(movie);
        console.log("yam::movieLists::added",getMovieList());
        alert("movie added successfully")
        this.props.history.push("/");
    }

    render(){
        return(
            <div style = {{backgroundColor: "aqua",height: "100vh"}}>
                <form>
                    <div id="movieId">
                    <label>Movie Id: </label>
                    <input type="text" id="movieId_" name="movieId" required></input><br></br>
                    </div>
                    <div  id="movieName">
                    <label>Movie Name: </label>
                    <input type="text" id="movieName_" name="movieName" required></input><br></br>
                    </div>
                    <div  id="actor">
                    <label>Actor: </label>
                    <input type="text" id="actor_" name="actor" required></input><br></br>
                    </div>
                    <div  id="actress">
                    <label>Actress: </label>
                    <input type="text" id="actress_" name="actress" required></input><br></br>
                    </div>
                    <div  id="lang">
                    <label>Languages: </label>
                    <input type="text" id="lang_" name="lang" required></input><br></br>
                    </div>
                    <div  id="">
                    <button id="submit" onClick={this.onClick}>Add Movie</button>
                    </div>
                </form>
            </div>
        )
        
    }
}