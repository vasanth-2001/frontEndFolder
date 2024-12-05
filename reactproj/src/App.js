import logo from './logo.svg';
import './App.css';
import FuncComp from './components/FuncComp';
import ClassComp from './components/ClassComp';
import VasanthFunCom from './task/VasanthFunComp';
import EventComp from './components/EventComp';
import MyStateComp from './components/MyStateComp';
import ConditionalRenComp from './components/ConditionalRenComp';
import CssComp from './components/CssComp';
import ParentComp from './components/ParentComp';
import ClickCounterComp from './components/ClickCounterComp';
import HoverCounterComp from './components/HoverCounterComp';
import MyImagesComp from './components/MyImagesComp';
import UserComp from './components/UserComp';
import ErrorBoundaryComp from './components/ErrorBoundaryComp';
import VirtualDOM from './components/VirtualDOM';
import EmpDetailsComp from './task/EmployeeDetailsComp';
import MultipleImgComp from './task/MutlipleImgComp';
import ToggleImgComp from './task/ToggleImgComp';


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
      <FuncComp fname="vasanth" post="Developer"/>
      <VasanthFunCom fname="Nithish" lname="Kumar" salary={98000} gender="Male" address="UK" />
      <ClassComp fname="Nirmal" post="Quality"/>
      <EventComp/>
      <MyStateComp/> */}
      {/* <ConditionalRenComp/> */}
      {/* <CssComp/> */}
      {/* <ParentComp gender="MAle" contact={887688765}/> */}
      {/* <ClickCounterComp/> */}

      {/* <HoverCounterComp/> */}
      {/* <MyImagesComp></MyImagesComp> */}
      {/* <ErrorBoundaryComp>
      <UserComp user="vasanth"/>
      </ErrorBoundaryComp>
      <ErrorBoundaryComp>
      <UserComp user="Somu"/>
      </ErrorBoundaryComp>
      <ErrorBoundaryComp>
      <UserComp user="Arun"/>
      </ErrorBoundaryComp>
      <ErrorBoundaryComp>
      <UserComp user="Vishwa"/>
      </ErrorBoundaryComp> */}
      {/* <VirtualDOM/> */}
      <EmpDetailsComp></EmpDetailsComp>
      <MultipleImgComp></MultipleImgComp>
      <ToggleImgComp></ToggleImgComp>
      
    </div>
  );
}

export default App;
