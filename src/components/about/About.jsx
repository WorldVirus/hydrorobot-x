import React, { Component } from 'react';
import "../bootstrap.css";
import company from "../../images/robot.png"
class About extends Component {

    render() {
        return (
            <div className="tech_scretch">
                <div className ="text-center">
                    <h1>О компании </h1>
                </div>
                <div className = "screach_support"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 .col-md-6 ">
                            <div className="service-box">
                                <img src = {company} className=" img-responsive " />
                            </div>
                        </div>

                            <div className="col-lg-6 .col-md-8 ">
                                <div className=" text-left">
                                    <h4 >Hydrobot-X - разработка и производство подводных телеуправляемых
                                        аппаратов (ТНПА) и их комлпектующих, а так же проведение с их помощьюб различных поисково-осмотровых работ.Так же возможно
                                        услуги аредны и разработки ооборудования
                                    </h4>

                                    <h4>
                                       Тут куча текста и много картинок (с производства, фото продуктов, фото испытаний ... )
                                    </h4>
                                </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default About;