import logo from './logo.svg';
import './App.css';
import PropTypes from "prop-types";
function App(props) {
  return (
    <div className="App">
      <div> 
        <span>Name:  </span>
        <span>{props.name}</span>
      </div>
      <div> 
        <span>Preffered Cities:  </span>
        {
          props.preferedCities.map((val,index) => {
            return(<div key={index+ "_1"}>
                    <span key={index}>{val}</span>
                  </div>)
          })
        }
        
      </div>
      <div> 
        <span>Age:  </span>
        <span>{props.age}</span>
      </div>
    </div>
  );
}
App.defaultProps = {
  name: 'Steve',
  preferedCities: ['Bangalore', 'Chennai'],
  age: 18
}
App.propTypes = {
  name: PropTypes.string.isRequired,
  preferedCities: PropTypes.array.isRequired,
  age: (function(propsObj, key){
    if(!(typeof propsObj[key] == 'number' && (propsObj[key] >= 18 && propsObj[key] <= 60))){
      return new Error('type of Age is not a number (or) Age is not in the expected range(18, 60)')
    }
  })
}

export default App;
