import React from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import '../assets/css/title.css';

function Title(props){
    return (
        <div id="title">
            <div className="row">
                <div className="col s12">
                    <h1 className = 'center-align lobster'>Lola Gaspar</h1>
                 </div>
            </div>
        </div>
    );
}

export default Title;