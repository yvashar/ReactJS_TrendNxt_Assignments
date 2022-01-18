import React from 'react';
export default class Employee extends React.Component{
    constructor(props){
        super(props);
        
    }
    
    render(){
        const empDetails = [];
        empDetails.push(   {name: "Maddy", empId: 12000, email: "maddy@gmail.com"},
                           {name: "Roger", empId: 12000, email: "roger@gmail.com"},
                           {name: "Tim", empId: 12000, email: "tim@gmail.com"},
                           {name: "Tom", empId: 12000, email: "tom@gmail.com"},
                           {name: "Helen", empId: 12000, email: "helen@gmail.com"})
       
        let empDetailJSX = [];
        empDetails.map((val, index) => {
            let obj = val;
            let keyItem = index
            empDetailJSX.push(
                <tr key={keyItem}>
                    <td>{obj.name}</td>
                    <td>{obj.empId}</td>
                    <td>{obj.email}</td>
                </tr>
            );
        });
        return(
            <table>
            <thead >
            <tr>
                <th>Emp Id</th>
                <th>Emp Name</th>
                <th>Emp Email</th>
            </tr>
            </thead>
            <tbody>
                {empDetailJSX}
            </tbody>
        </table>
        )
    }

}
