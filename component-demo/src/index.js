import React from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
    return <div>
      <button onClick={props.onClickFunction}>
        +1
      </button>
    </div>
  }
  
  function Display(props) {
    return (
       <div>{props.message}</div>
    );
  }
  
  function App() {
    const [counter, setCounter] = React.useState({counterValue: 0});
    const incrementCounter = () => setCounter({counterValue: counter.counterValue + 1});
    return (<div> 
      <Button onClickFunction={incrementCounter} />
      <Display message={counter.counterValue} />
    </div>);
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root'),
  )
  