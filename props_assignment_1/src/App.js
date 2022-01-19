import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">

      <div>
        <span>Company:</span>
        <span className='nameblock'>{props.companyName}</span>
      </div>
      <div>
        <span>Location:</span>
        <span className='locationblock'>{props.companyLocation}</span>
      </div>
    </div>
  );
}
App.defaultProps = {companyName: "WIPRO", companyLocation: "BANGALORE"}
export default App;
