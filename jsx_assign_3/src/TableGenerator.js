import React from 'react';
export default class TableGenerator extends React.Component{
    constructor(props){
        super(props);
        
    }
    
    render(){
        let tableValues = [];
        for (let i= 0; i< 10 ; i++){
            tableValues.push(
                <tr key={i}>
                    <td>5 x {i+1} = {5*(i+1)}</td>
                </tr>
            )
        }
        
        return(
            <table>
            <thead >
            <tr>
                <th>5th Table</th>
                
            </tr>
            </thead>
            <tbody>
                {tableValues}
            </tbody>
        </table>
        )
    }

}
