import React from 'react';
export default class TableGenerator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tableRows: []
        }
        this.index = 0;
        this.onClick = this.onClick.bind(this);
    }
    
    onClick (){
        this.index = this.index + 1;
        if(this.index > 20)
            return;
        
        let newRow = []
        newRow.push(
            <tr key={this.props.index}>
                <td>
                    {"5 x " + this.index + " = " + 5 * this.index}
                </td>
            </tr>
        );
        this.setState({tableRows: [...this.state.tableRows,newRow]});
    }

    render(){
        return(
            <div>
                <button  style = {{height: "40px", width: "auto", backgroundColor: "cyan"}} onClick={this.onClick}>Click to update table</button>
                <table>
                    <thead>
                        <tr>
                            <th>5th Table</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tableRows}
                    </tbody>
                </table>
            </div>
           
        )
    }
}