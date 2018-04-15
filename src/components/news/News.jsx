import React, { Component } from 'react';
import "../bootstrap.css";
import company from "../../images/robot.png"
class News extends Component {

    render() {
        return (
            <div className="tech_scretch">
                <div className ="text-center">
                    <h1 >Новости </h1>
                </div>
                <div className = "screach_support"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 .col-md-8 ">
                            <div className=" text-left">
                                <h4 >14.04.08 Компания Hydrobot-X анонсировала новую разработку в сфере подводной робототехники. Это телеуправляемый
                                    необитаемый подводный аппарат осмотрового класса с манипулятором
                                </h4>
                            </div>
                        </div>
                        <div className="col-lg-4 .col-md-4 ">
                            <div className="service-box">
                                <img src = {company} className=" img-responsive " />
                            </div>
                        </div>
                    </div>
                    <div className=" text-right">
                        <button type="button" className="btn btn-primary">Подписаться на новости</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;