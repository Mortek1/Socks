import React from "react"; 
import { Container, Button, Row, Col } from "react-bootstrap"; 
import Footer from "../ui/Footer"; 
import { Link, NavLink } from "react-router-dom"; 
 
export default function MainPage({ user }) { 
  return ( 
    <div className="d-flex flex-column min-vh-100"> 
      <header className="bg-light py-4 text-center"> 
        {/* <h1>Welcome, {user?.name || "Guest"}!</h1> */} 
      </header> 
 
      <main className="flex-grow-1"> 
        <Container className="py-5"> 
          <Row className="justify-content-center text-center"> 
            <Col md={6}> 
              {user.status !== "logged" ? ( 
                <h1 className="display-1">Привет!</h1> 
              ) : ( 
                <h1 className="display-1">Привет, {user.data.name}!</h1> 
              )} 
              <Row> 
                {user.status !== "logged" ? ( 
                  <> 
                    <p>Давай задизайним твои носки</p> 
                    <p>Но сперва зарегистрируйся</p> 
                  </> 
                ) : ( 
                  <> 
                    <p>Отлично, тебе наскучили обычные серые носки!?</p> 
                    <NavLink to="/" className="nav-link"> 
                      Переходи сюда и создай свои носки с индивидуальным и ярким 
                      дизайном! 
                    </NavLink> 
                  </> 
                )} 
              </Row> 
              <div className="mt-4"> 
                {user.status !== "logged" && ( 
                  <> 
                    <Link to={"/account/new"}> 
                      <Button variant="outline-secondary" className="me-2"> 
                        Sign up 
                      </Button> 
                    </Link> 
                    <Link to={"/account/login"}> 
                      <Button variant="outline-secondary">Log in</Button> 
                    </Link> 
                  </> 
                )} 
              </div> 
              <Row className="mt-4"></Row> 
            </Col> 
          </Row> 
        </Container> 
      </main> 
      <Footer /> 
    </div> 
  ); 
}