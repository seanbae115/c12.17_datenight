import React from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import '../assets/css/environment.css';

function Environment (props){
    return (
    <div>
        <div id="environment">
            <div className="container">
                <div className="row">
                    <div className="col s12 center-align">
                        <h3 className = 'roboto'>Environment</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 center-align">
                        <h4 className = 'roboto'>Loud</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Environment;