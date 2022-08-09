import React from 'react';
import './style.css';
import Post from '../postit';

const canvas = () =>{
    return(
        <div className='Canvas'>
            <button onClick={instantiate}></button>
            <li id='lista'></li>
        </div>
    )
}

const instantiate = () => {
    let lista = document.getElementById('lista');
    lista.appendChild(Post);
}

export default canvas;