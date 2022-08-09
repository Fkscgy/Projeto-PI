import React from "react";

class postit extends React.Component {
    constructor({props}){
        super()
        this.state = {props};
    }
    render (){
        return <div>
            <a>
                {this.state.name}
            </a>
        </div>
    }
}

export default postit;