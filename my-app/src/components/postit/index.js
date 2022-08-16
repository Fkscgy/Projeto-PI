import React from "react";
import './style.css';

class postit extends React.Component {
    constructor({props}){
        super()
        this.state = {props};
    }
    render (){
        return(
            <div>
                <textarea className="Postit"></textarea>
            </div>
        )
    }
}

export default postit;