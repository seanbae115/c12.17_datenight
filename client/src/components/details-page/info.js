import React, { Component } from 'react';
import './info.css';
import fourstar from '../../assets/images/4-star.png';
import fourhalfstar from '../../assets/images/4-2-star.png';
import fivestar from '../../assets/images/5-star.png';

class Info extends Component{
    stars(rating){
        switch(rating){
            case 4:
                return <img className = 'responseive-img' src = {fourstar} alt = 'Stars'/>;
                break;
            case 4.5:
                return <img className='responseive-img' src={fourhalfstar} alt='Stars' />;
                break;
            case 5:
                return <img className='responseive-img' src={fivestar} alt='Stars' />;
                break;
            default:
                return <h4>Ratings Not Provided</h4>;
                break;
        }
    }
    open(is_closed){
        if(is_closed){
            return <p className= 'red accent-4'>CURRENTLY CLOSED</p>
        }else{
            return <p className = 'pSize'>CURRENTLY OPEN</p>
        }
    }
    render(){
        const { rating, price, is_closed, display_phone } = this.props.business;

        return (
            <div>
                <div id = "openOrClosed">
                    <div className = 'row valign-wrapper center-align'>
                        <div className = 'col s12'>
                            {this.open(is_closed)}
                        </div>
                    </div>
                </div>
                <div className="col s12 center-align" id="rating">
                            <div className="col">
                                <span>{this.stars(rating)}</span>
                            </div>
                            <div className="col">
                                <span className = 'dollarSign amber-text'>{price}</span>
                        </div>
                </div>
                <div id="description">
                    <div>
                        <div className="row valign-wrapper">
                            <div className="col s12 center-align">
                                <p className = 'pSize'>For More Information Please Contact:</p>
                                <span className='pSize'>{<a href = {`tel:${display_phone}`}>{display_phone}</a>}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Info;