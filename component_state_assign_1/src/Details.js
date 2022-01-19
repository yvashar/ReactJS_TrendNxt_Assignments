import React from 'react';

export default class Details extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
        return(
            <table>
            <thead >
            <tr>
                <th>Student's Id</th>
                <th>Student's Name</th>
                <th>Student's Marks</th>
            </tr>
            </thead>
            <tbody>
            { this.props.studentObjects.map((student,index) => {
                return (
                    <tr key = {"student_"+index}>
                        <th>{student.id}</th>
                        <th>{student.name}</th>
                        <th>{student.marks}</th>
                    </tr>
                )
            })}
            </tbody>
        </table>
        );
    }
    
}