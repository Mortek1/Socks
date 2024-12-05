import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

export default function NavBar({ user, logoutHandler }) {
  return (
    <Navbar bg="dark" variant="dark" className="wm-100">
      <Container fluid>
        <Nav className="me-auto">
          <NavLink to="/" className="nav-link">
            Главная
          </NavLink>
        </Nav>
        {user.data && (
          <NavLink to={`/cart`} className="nav-link">
            <FaShoppingCart size={24} />
          </NavLink>
        )}
        <Nav>
          {!user.data && (
            <>
              <NavLink to="/account/login" className="nav-link">
                Войти
              </NavLink>
              <NavLink to="/account/new" className="nav-link">
                Регистрация
              </NavLink>
              <span className="nav-link">|</span>
            </>
          )}
          {user.data && (
            <NavLink to={`/cart`} className="nav-link">
              <FaShoppingCart size={24} />
            </NavLink>
          )}
          <span className="nav-link">
            {user.data ? user.data.name : 'Гость'}
          </span>
          {user.data && (
            <span className="nav-link">
              <Button
                onClick={logoutHandler}
                variant="outline-danger"
                size="sm"
              >
                Выйти
              </Button>
            </span>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
