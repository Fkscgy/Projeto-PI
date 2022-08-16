import React,{useState} from 'react';
import './style.css';
import Post from '../postit';

const Canvas = () =>{
    const [post, setPost] = useState([]);
    const add = () =>{
        setPost((previous) => 
            [...previous,(<Post name='salv'/>)]
        )
        console.log(post[0])
    }
    const remove = () =>{
        setPost((previous) => previous.slice(0,previous.length-1))
    }
    return(
        <div className='Canvas'>
            <button onClick={add}>Add</button>
            <button onClick={remove}>Remove</button>
            <div className = 'List'>
                {
                    post.map(obj =>(
                        <div>
                            <li key={obj.props.name}>{obj}</li>
                        </div>
                        ))
                }
            </div>
        </div>
    )
}


export default Canvas;