// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Import other React Component
import CreateStudent from "./Components/create-student.component";
import EditStudent from "./Components/edit-student.component";
import StudentList from "./Components/student-list.component";

let baseURL = 'https://ga-capstone-backend.herokuapp.com';

// if (process.env.NODE_ENV === 'development') {
//   baseURL = 'http://localhost:4000';
// } else {
//   // "https://fathomless-sierra-68956.herokuapp.com" in this case is the *API* url
//   baseURL = 'https://studentmanagement-frontend.herokuapp.com';
// }

console.log('current base URL:', baseURL)


// App Component
const App = () => {
  return (
    // <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-student"}
                  className="nav-link">
                   User Lister
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-student"} className="nav-link">Create Student </Link>
                </Nav>
                <Nav>
                  <Link to={"/student-list"} className="nav-link"> Student List </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                Welcome Students! Please Enroll!
                <Routes>
                  <Route path="/" element={<CreateStudent baseURL={baseURL} />} />
                  <Route path="/create-student" element={<CreateStudent baseURL={baseURL} />} />
                  <Route path="/edit-student/:id" element={<EditStudent baseURL={baseURL} />} />
                  <Route path="/student-list" element={<StudentList baseURL={baseURL} />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    // </Router>
  );
};

export default App;
