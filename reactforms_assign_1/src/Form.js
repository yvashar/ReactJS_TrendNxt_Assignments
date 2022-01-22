import React from 'react';
export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.getAverage = this.getAverage.bind(this);
    }
    getAverage(){
        const physics = document.getElementById('physics').value;
        const maths = document.getElementById('maths').value;
        const chemistry = document.getElementById('chemistry').value;
        const biology = document.getElementById('biology').value;
        if(!physics ||  !chemistry || !maths || !biology){
            alert("Enter the marks for all subjects");
            return;
        }
        const sum = Number(physics) +Number(chemistry) + Number(maths) + Number(biology);
        const avg = sum/4;
        window.alert("The average is " + avg);
    }

    render(){
        return(
            <form>
                <label>Average Finder</label>
                <div id="sub1">
                <label>Physics: </label>
                <input type="text" id="physics" name="Physics" required></input><br></br>
                </div>
                <div  id="sub2">
                <label>Chemistry: </label>
                <input type="text" id="chemistry" name="Chemistry" required></input><br></br>
                </div>
                <div  id="sub3">
                <label>Biology: </label>
                <input type="text" id="biology" name="Biology" required></input><br></br>
                </div>
                <div  id="sub4">
                <label>Mathematics: </label>
                <input type="text" id="maths" name="Mathematics" required></input><br></br>
                </div>
                <div  id="sub5">
                <button id="submit" onClick={this.getAverage}>Find Average</button>
                </div>
                
            </form>
        )
    }
}