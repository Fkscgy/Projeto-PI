import React from "react";
import Draggable from "react-draggable"
import './style.css';

class postit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            pos:props.pos,
            value:props.value
        };
    }
    render (){
        return(
            <Draggable onStop={(e) =>{this.props.handleBlur(this.props.id,this.state.value,this.state.pos)}} onDrag={(e,data) => {this.setState({pos:{x:data.x,y:data.y}})}} defaultPosition={this.props.pos} handle="#Drag">
                <div id="Postit">
                    <div id="Drag"></div>
                    <textarea className="Postit-body" onResize={() => console.log(e)} value={this.state.value} onChange={(e) => this.setState({value:e.target.value})} onBlur={(e) =>{this.props.handleBlur(this.props.id,this.state.value,this.state.pos)}}/>
                </div>
            </Draggable>
        )
    }
    
}

export default postit;