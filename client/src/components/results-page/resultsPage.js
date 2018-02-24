import React, {Component} from 'react';
import {connect} from "react-redux";
import"./resultsPage.css"
import { getPlanner } from "../../actions";
import { Link } from 'react-router-dom';
import NavBar from "../nav-bar/navBar";
import LocationBrowser from "./locationBrowser";


class ResultsPage extends Component {
    sendId(id){
        this.props.history.push('/summary-page');
    }
    componentDidMount(){
        this.props.getPlanner(this.props.match.params);
    }
    render() {
        const { history } = this.props;

        return (
            <div>
                <NavBar/>
                <LocationBrowser history={history} locations={this.props.events}/>
                <LocationBrowser history={history} locations={this.props.food}/>
                <LocationBrowser history={history} locations={this.props.drinks}/>
                <div className="center-align location-info-group">
                    <button onClick = {this.sendId.bind(this)} className='btn btn-large'>Confirm</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        events: state.datePlan.events,
        food: state.datePlan.food,
        drinks: state.datePlan.drinks,
    }
}

export default connect(mapStateToProps, {getPlanner})(ResultsPage);