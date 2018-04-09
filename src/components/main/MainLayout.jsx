import React, { Component } from 'react';

import "../bootstrap.css";

class MainLayout extends Component {
    render() {
        return (
            <div className="app">
                    <div className="test">
                                </div>
                <div className="insert_main">
                   {this.props.children}
                </div>
            </div>

    );
      }
    }
export default MainLayout;

