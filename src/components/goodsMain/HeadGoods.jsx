import React, { Component } from 'react';
import "../bootstrap.css";
import robot from "../../images/robot.png"
import manipulator from "../../images/manipulator.png"
import engine from "../../images/engine.png"
import equipment from "../../images/ equipment.png"
import { Link } from 'react-router';

import "./headGood.css"

const second_child = {};
class HeadGoods extends Component {

    render() {
        return (
            <div className="insert_block">
            <div className="robot_row">
            <div className="container">
                <div className="row text-center">
                <div className="img_size">
                    <div className="col-xs-3 col-md-3.5">
                        <figure>
                            <img src = {robot} className="pull-right img-responsive " />
                            <figcaption><Link to = "/">Подводные аппараты</Link></figcaption>
                        </figure>
                    </div>
                    <div className="col-xs-3 col-md-3.5">
                        <figure>
                            <img src = {manipulator} className="pull-right img-responsive " />
                            <figcaption><Link to = "/">Манипуляционные комплексы</Link></figcaption>
                        </figure>
                    </div>
                    <div className="col-xs-3 col-md-3.5">

                        <figure>
                            <img src = {engine} className="pull-right img-responsive " />
                            <figcaption><Link to = "/">Движетили</Link></figcaption>
                        </figure>
                    </div>
                    <div className="col-xs-3 col-md-3.5">
                        <figure>
                              <img src = {equipment} className="pull-right img-responsive " />
                            <figcaption><Link to = "/">Вспомогательное оборудование </Link></figcaption>
                        </figure>
                    </div>
                 </div>
                </div>
              </div>
            </div>
                    <div className="screatch_insert">
                        {this.props.children}
                     </div>
                <div className="padding_scretch">
                </div>
            </div>
         );
        }
    }

export default HeadGoods;