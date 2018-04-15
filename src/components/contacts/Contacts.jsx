import React from "react"
import {compose, withProps} from "recompose"
import "../bootstrap.css";
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"
import "./contacts.css"

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{height: `100%`}}/>,
        containerElement: <div style={{height: `400px`}}/>,
        mapElement: <div style={{height: `100%`}}/>,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={16}
        defaultCenter={{lat: 55.581516, lng: 37.59123090000003}}
    >
        {props.isMarkerShown &&
        <Marker position={{lat: 55.581516, lng: 37.59123090000003}} onClick={props.onMarkerClick}/>}
    </GoogleMap>
)

const divStyle = {
    background: '#dfdfdf'
};
const secondStyle = {
    background: '#eeeeee'
};
const formWidth = {width:"83%"}
class Contacts extends React.PureComponent {
    state = {
        isMarkerShown: false,
    }

    componentDidMount() {
        this.delayedShowMarker()
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({isMarkerShown: true})
        }, 3000)
    }

    handleMarkerClick = () => {
        this.setState({isMarkerShown: false})
        this.delayedShowMarker()
    }

    render() {
        return (
            <div>
                <div className="col-lg-6 .col-md-6 text-center">
                    <h2>Контакты</h2>
                </div>
                <div className="padding_contact"></div>

                <div className="row">

                    <div className="col-md-6" style={divStyle}>
                        <div className="right_block">
                                <p><span className="fa fa-map-marker" aria-hidden="true"/> г.Москва,Варшавское ш., 170Б, 117405</p>
                                <p><span className="fa fa-phone" aria-hidden="true"/> тел:7 495 777-3849</p>
                                <p><span className="fa fa-envelope" aria-hidden="true"/> rovs@hydrobot-x.com</p>
                        </div>
                    </div>

                    {/*<div className="col-lg-6 .col-md-6 text-center">*/}
                        {/*<h4>Задайте нам вопрос</h4>*/}
                    {/*</div>*/}
                    <div className="col-md-6" style={secondStyle}>
                        <h3>Задайте нам вопрос</h3>

                        <div className="left_block">

                            <form>
                                <div className="row">
                                    <div className="col-md-5">
                                        <input type="text" className="form-control" placeholder="Ваше имя"/>
                                    </div>
                                    <div className="col-md-5">
                                        <input type="email" className="form-control" placeholder="Ваш email"/>
                                    </div>
                                </div>
                                <div className="form_padding">

                                </div>
                            </form>

                            <div className="form-group" style={formWidth}>
                                <textarea className="form-control" id="exampleFormControlTextarea1"
                                          placeholder="Ваше сообщение..." rows="3"></textarea>
                            </div>
                            <div className="form_padding">

                            </div>
                            <button type="button" className="btn btn-primary">отправить</button>
                        </div>

                    </div>
                </div>
                <MyMapComponent
                    isMarkerShown={this.state.isMarkerShown}
                    onMarkerClick={this.handleMarkerClick}
                />
            </div>
        )
    }
}

export default Contacts;