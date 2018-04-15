import React, { Component } from 'react';
import "../bootstrap.css";
import develop from "../../images/develop1.jpg"
import repairs from "../../images/repairs.jpg"
import search from "../../images/search.jpg"

import "./lease.css"
class Lease extends Component {
    render() {
        return (
            <div className ="main_lease">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 .col-md-6 ">
                            <div className="service-box">
                                <img src = {develop} className=" img-responsive " />
                            </div>
                        </div>

                            <div className="col-lg-6 .col-md-8 ">
                                <div className=" text-left">
                                    <h2>Разработка</h2>
                                    <h4 >Специалисты компании Hydrobot-X осуществят разработку и проектирование
                                    изделий на основе технического задания, образцов и эскизов заказчика подготовят
                                    комплект технической документации.</h4>
                                </div>
                                <div className="padding_button"></div>

                                <button type="button" className="btn btn-primary">Получить консультацию</button>

                            </div>

                    </div>
                    <div className="padding_contact"></div>

                    <div className="row">
                        <div className="col-lg-5 .col-md-6 ">
                            <div className="service-box">
                                <img src = {repairs} className=" img-responsive " />
                            </div>
                        </div>

                        <div className="col-lg-6 .col-md-8 ">
                            <div className=" text-left">
                                <h2>Ремонт и сервис</h2>
                                <h4 >Компания Гидроботикс рада вам предложить свои услуги по сервисному обслуживанияю вашего оборудования.
                                Штат высококвалифицированных специалистов всегда готов помочь вам в любой из ситуациий, связыннй с приоберетением
                                и эксплатацией оборудования.</h4>
                            </div>
                            <div className="padding_button"></div>

                            <button type="button" className="btn btn-primary">Получить консультацию</button>

                        </div>

                    </div>
                    <div className="padding_contact"></div>

                    <div className="row">
                        <div className="col-lg-5 .col-md-6 ">
                            <div className="service-box">
                                <img src = {search} className=" img-responsive " />
                            </div>
                        </div>

                        <div className="col-lg-6 .col-md-8 ">
                            <div className=" text-left">
                                <h2>Поисково-обследовательные и осмотровые работы</h2>
                                <h4 >Компания Hydrobot-X предлагает выполнение осмотровых и поисковых работ, мониторинг водной среды и грунта.</h4>
                            </div>
                            <div className="padding_button"></div>

                            <button type="button" className="btn btn-primary">Получить консультацию</button>

                        </div>

                    </div>

                </div>
                <div className="padding_button"></div>

            </div>

    );
    }
}

export default Lease;