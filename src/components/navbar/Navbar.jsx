import React, { Component } from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem  from 'react-bootstrap/lib/NavItem';
import "../bootstrap.css";
import "./nav.css"

class Navv extends Component {
    render() {
        return (
            <div className="navv_and_another">
            <div className="navbar_row">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <span>Hydrobot-</span>
                            <span style={{color:'#FFE200'}}>X</span>
                            <span style={{ fontSize:"0.5em",marginTop:"2em",marginLeft:"-10em",position:"absolute" }}>Underwater robotics systems</span>
                            <span style={{ fontSize:"0.7em",marginTop:"0.5em",marginLeft:"35em",position:"absolute" }}>Телефон +7 495 777-3849</span>
                            <span style={{ fontSize:"0.6em",marginTop:"3em",marginLeft:"42em",position:"absolute" }}>rovs@hydrobot-x.com</span>

                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse style = {{ marginTop: "6em",}}>
                        <Nav navbar>
                            <NavItem href = "/">Главная</NavItem>
                            <NavItem href = "about">О компании</NavItem>
                            <NavItem>Продукты</NavItem>
                            <NavItem>Аренда</NavItem>
                            <NavItem>Услуги</NavItem>
                            <NavItem href = "support">Техподдержка</NavItem>
                            <NavItem>Новости</NavItem>
                            <NavItem>Контакты</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                    <form className="navbar-form navbar-left" role="search">
                        <div className="form-group">
                            <input type="text"  className="form-control" placeholder="Search..."/>
                            <button type="submit" className="btn btn-default">
                                 <span className="fa fa-search" aria-hidden="true"/>
                            </button>
                            {/*<button type="submit" class="btn btn-default">*/}
                                {/*<span class=" glyphicon-search"/>*/}
                            {/*</button>*/}
                        </div>
                    </form>
                </Navbar>
            </div>
            <div className = "robots">
                {this.props.children}
            </div>
        </div>
        );
    }
}

export default Navv;