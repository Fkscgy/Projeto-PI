import React from "react";
import './style.css';

class postit extends React.Component {
    constructor({props}){
        super()
        this.state = {props};
    }
    render (){
        return(
            <div className="Postit-body" onClick={() => {console.log('11'); this.props.handleClick(this.props.id)}}>
                <textarea defaultValue={this.props.value} onBlur={(e) =>{this.props.handleBlur(this.props.id,e.target.value)}} className="Postit"/>
            </div>
        )
    }
}

export default postit;