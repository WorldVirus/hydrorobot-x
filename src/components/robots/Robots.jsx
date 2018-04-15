import React, {Component} from 'react';
import "../bootstrap.css";
import company from "../../images/robot.png"
import "./robots.css";

import {Pagination} from 'react-bootstrap';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import {Link} from 'react-router';

class Robots extends Component {
    constructor(props)
    {
        super(props);

        // bind <this> to the event methods
        this.changePage = this.changePage.bind(this);
    }
    render() {
        // const per_page = 3;
        // const pages = Math.ceil(this.props.users.length / per_page);
        // const current_page = this.props.page;
        // const start_offset = (current_page - 1) * per_page;
        // let start_count = 0;
        return (
<div className = "service-box">
    <div className="col-md-10">

    <div className="border_blocks">
                <div className="container">
                    <div className="col-lg-4 .col-md-7">
                        <div className="service-box">
                            <img src={company} className=" img-responsive "/>
                        </div>
                    </div>
                        <h3>ROV X15</h3>
                        <p>Характеристики</p>
                        <p>Dimensions 170x200x104 mm</p>
                        <p>Weight 3kg</p>
                        <p>Voltage 300V (optional 500V)</p>
                        <p>Curent consumption 2-3.5A</p>
                        <p>Thust 25kg</p>

                    <div className="col-md-4 col-md-offset-6">
                        <div className="text-right">

                        <button className="btn btn-primary btn-lg" type="submit">Подробней</button>
                            <div className="padding_button"></div>
                        </div>
                    </div>
                </div>
            </div>
        <div className="padding_button"></div>

    </div>

    <div className="col-md-10">

        <div className="border_blocks">
            <div className="container">
                <div className="col-lg-4 .col-md-7">
                    <div className="service-box">
                        <img src={company} className=" img-responsive "/>
                    </div>
                </div>
                <h3>ROV X15</h3>
                <p>Характеристики</p>
                <p>Dimensions 170x200x104 mm</p>
                <p>Weight 3kg</p>
                <p>Voltage 300V (optional 500V)</p>
                <p>Curent consumption 2-3.5A</p>
                <p>Thust 25kg</p>

                <div className="col-md-4 col-md-offset-6">
                    <div className="text-right">

                        <button className="btn btn-primary btn-lg" type="submit">Подробней</button>
                        <div className="padding_button"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="padding_button"></div>

    </div>


    <div className="col-md-10">

        <div className="border_blocks">
            <div className="container">
                <div className="col-lg-4 .col-md-7">
                    <div className="service-box">
                        <img src={company} className=" img-responsive "/>
                    </div>
                </div>
                <h3>ROV X15</h3>
                <p>Характеристики</p>
                <p>Dimensions 170x200x104 mm</p>
                <p>Weight 3kg</p>
                <p>Voltage 300V (optional 500V)</p>
                <p>Curent consumption 2-3.5A</p>
                <p>Thust 25kg</p>

                <div className="col-md-4 col-md-offset-6">
                    <div className="text-right">

                        <button className="btn btn-primary btn-lg" type="submit">Подробней</button>
                        <div className="padding_button"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="padding_button"></div>

    </div>

    <div className="container">
        <div className="text-center">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
        </div>
    </div>
    <div className="padding_scretch"></div>

</div>
        );
    }
    changePage(page)
    {
        this.props.dispatch(push('/?page=' + page));
    }
}

export default Robots;