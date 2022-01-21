import React from 'react';
import ReactDOM from 'react-dom';
export default class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            renderMe: true
        }
        this.onClick = this.onClick.bind(this);
    }
    componentWillMount(){
        console.log("Component will mount")
    }
    componentDidMount(){
        console.log("Component Mounted")
    }
    componentWillUnmount(){
        console.log("Component Will Unmount");
    }

    onClick(){
        //this.setState({renderMe: false})
        this.props.callBack(false)
     }

    render(){
        return(
                <div onClick = {this.onClick}>
                    <p>Old is Gold</p>
                </div>
         )
       
        
    }
}