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
import MyNameComp from './testing/MyNameComp';

// import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Home from './JwelleryShop/Home';
import About from './JwelleryShop/About';
import Products from './JwelleryShop/Products';
import Contact from './JwelleryShop/Contact';

function App() {
  return (
//     <Router>
//     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//         <Container>
//           <Navbar.Brand as={Link} to="/"> SRR Jewelry</Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="ml-auto">
//               <Nav.Link as={Link} to="/">Home</Nav.Link>
//               <Nav.Link as={Link} to="/about">About</Nav.Link>
//               <Nav.Link as={Link} to="/products">Products</Nav.Link>
//               <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
//             </Nav>
//             {/* <Button variant="outline-light" className="ml-3">Login</Button> */}
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//     <Routes>
//       <Route exact path="/" element={<Home/>} />
//       <Route path="/about" element={<About/>} />
//       <Route path="/products" element={<Products/>} />
//       <Route path="/contact" element={<Contact/>} />
//     </Routes>
//   </Router>
// );

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
      {/* <EmpDetailsComp></EmpDetailsComp> */}
      {/* <MultipleImgComp></MultipleImgComp> */}
      {/* <ToggleImgComp></ToggleImgComp> */}
      {/* <MyNameComp/> */}
      
    </div>
  ); 
}

export default App;
