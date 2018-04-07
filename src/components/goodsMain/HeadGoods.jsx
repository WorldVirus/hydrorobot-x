import React, { Component } from 'react';
import "../bootstrap.css";


// const brandMean = {
// fontsize = 1em
// };
const parrent = {};
const first_child = {
    border: "#121212"

};
const second_child = {};
class HeadGoods extends Component {
    render() {
        return (
            <div className = {parrent}>
                <div className="text-xs-center">
                    <img src="/public/images/robot.png" className="img-rounded" />
                </div>
            </div>
        );
        }
    }

export default HeadGoods;