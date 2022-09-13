import React from "react";
import Draggable from "react-draggable"
import './style.css';

class postit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            pos:props.pos
        };
    }
    render (){
        return(
            <Draggable onDrag={(e,data) => {this.setState({pos:{x:data.x,y:data.y}})}} defaultPosition={this.props.pos} handle="#Drag">
                <div id="Postit">
                    <div id="Drag"></div>
                    <textarea className="Postit-body" defaultValue={this.props.value} onBlur={(e) =>{console.log(this.state.pos); this.props.handleBlur(this.props.id,e.target.value,this.state.pos)}}/>
                </div>
            </Draggable>
        )
    }
}

export default postit;