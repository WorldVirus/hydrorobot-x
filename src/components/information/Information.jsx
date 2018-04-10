import React, { Component } from 'react';
import "../bootstrap.css";
import { Link } from 'react-router';
import "./information.css"
class Information extends Component {

    render() {
        return (
            <div className="container">
                <div className="col-lg-6 .col-md-6 text-left">
                    <div className="service-box">

                <div className="border_blocks">
                <div className= "row text-center">
                    <h3 >О нас</h3>
                </div>
                    <div className="text_informtion">
                        <p className="text_info">Основное направление деятельности комапании Hydrobot-X - разработка и производство подводных телеуправляемых
                        аппаратов (ТНПА) и их комлпектующих, а так же проведение с их помощьюб различных поисково-осмотровых работ.Так же возможно
                        услуги аредны и разработки ооборудования. </p>
                     </div>
                    <div className="stretch_info">
                      <div className="row text-center">
                         <button className="btn btn-primary" type="submit" >Подробнее</button>
                       </div>
                        <div className="btn_scretch">
                        </div>
                    </div>
                </div>
                    </div>
                </div>
                <div className="col-lg-6 .col-md-6 text-left">
                    <div className="service-box">
                    <div className="border_blocks">
                            <h3 className="news">Новости</h3>
                        <div className = "news_informtion">
                            <p className="text_info">23.02.18 Мы учавствовали в супер выставке </p>
                            <p className="text_info">04.02.18 Компания Hydrobot-X анонсировала выход новоо продукта </p>
                        </div>
                        <div className="stretch_news">
                            <div className="row text-center">
                               <button className="btn btn-primary" type="submit">Подробнее</button>
                            </div>
                            <div className="btn_scretch">
                            </div>
                        </div>
                    </div>
                 </div>
                </div>
             </div>

        );
    }
}

export default Information;