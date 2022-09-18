import React, { useState } from 'react';
import './style.css';
import Post from '../postit';

const Canvas = () => {
    const [post, setPost] = useState([]);
    const [lastPostId, setLastPostId] = useState(0);
    const listItem = post.map((value) => <ListItem key={value.id} value={value}/>);
    function ListItem(props) {
        return <Post id={props.value.id} handleBlur ={(id,value,posValue) => change(id,value,posValue)} value={props.value.defaultValue} pos={props.value.pos}/>;
    }
    const add = () => {
        setPost(state => [...state, {id:state.length, handleClick:(id) => lastPostId(id),defaultValue:"", pos:{x:0,y:0}}])
    }
    const change = (id,value,posValue) => {
        setLastPostId(id)
        setPost(state => {
            let array = [...state];
            array[id] = {...state[id],defaultValue:value,pos:posValue}
            return array;
        })
    }
    const remove = () => {
        setPost(state => [...state].filter(x => x.id !== lastPostId).map((x,y) => {return{...x,id: y}}));
    }
    return (
        <div className='Canvas'>
            <button onClick={add}>Add</button>
            <button onClick={remove}>Remove</button>
            <ul>
                {listItem}
            </ul>
        </div>
    )
}


export default Canvas;