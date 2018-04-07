import React, { Component } from 'react';
import Grid  from 'react-bootstrap/lib/Grid';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem  from 'react-bootstrap/lib/NavItem';
import "../bootstrap.css";
import "./nav.css"


// const brandMean = {
// fontsize = 1em
// };
const parrent = {};
const first_child = {
    border: "#121212"

};
const second_child = {};
class Navv extends Component {
    render() {
        return (
            <div className = {parrent}>
                <div className = {first_child}>

                </div>

                <div className = {second_child}>

                </div>
            </div>
        );
    }
}

export default Navv;