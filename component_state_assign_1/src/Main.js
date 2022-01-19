import React from 'react';
import Header  from './Header';
import Details from './Details';
export default class Main extends React.Component{
    constructor(props){
        super(props);
        let studentObjects = [{id: 123, name: "Tom", marks: "89"},
                              {id: 133, name: "Jam", marks: "98"},
                              {id: 150, name: "John", marks: "92"},
                              {id: 113, name: "Merry", marks: "100"},
                              {id: 131, name: "Jam", marks: "78"}                          
                            ];
        this.state = {
            studentObjects: studentObjects
        }
    }
    render(){
        return(
            <div className='container'>
                <Header/>
                <Details studentObjects={this.state.studentObjects}></Details>
            </div>
        );
    }
}