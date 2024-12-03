import logo from './logo.svg';
import './App.css';
import FuncComp from './components/FuncComp';
import ClassComp from './components/ClassComp';
import VasanthFunCom from './task/VasanthFunComp';
import EventComp from './components/EventComp';
import MyStateComp from './components/MyStateComp';
import ConditionalRenComp from './components/ConditionalRenComp';
import CssComp from './components/CssComp';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <h1> Welcome to India</h1>
      <FuncComp fname="vasanth" post="Developer"/> */}
      {/* <VasanthFunCom fname="Nithish" lname="Kumar" salary={98000} gender="Male" address="UK" /> */}
      {/* <ClassComp fname="Nirmal" post="Quality"/> */}
      {/* <EventComp/>
      <MyStateComp/> */}
      <ConditionalRenComp/>
      <CssComp/>
    </div>
  );
}

export default App;
