import React, { Component } from 'react';
import "../bootstrap.css";
import "./support.css"
import helpMan from "../../images/helperMan.png"
class Support extends Component {
    render() {
        return (
            <div className="tech_scretch">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 .col-md-6 ">
                        <div className="service-box">
                            <img src = {helpMan} className=" img-responsive " />
                        </div>
                    </div>

                    <div className="change_pading">
                         <div className="col-lg-6 .col-md-8 ">
                            <div className=" text-left">
                                 <h4 >Вы можете загрузить новейшие спецификации, руководства, прошивки и версии
                                     программного обеспечения на наших страницах поддержки продуктов.
                                 </h4>

                                 <h4>
                                        Если вы не можете найти ответы или ресурсы, которые помогут вам, свяжитесь с нашей службой
                                     технической поддержки.
                                    </h4>
                            </div>
                             <div className = "screach_support">
                                 <div className="row text-center">
                                    <button className="btn btn-primary btn-lg" type="submit">Связаться с поддержкой</button>
                                </div>
                             </div>
                     </div>
                   </div>
                </div>

              </div>
            </div>
        );
    }
}

export default Support;
