import React, { Component } from 'react';
import './Lista.css';

import Boton from '../Boton/Boton';
import Audio from '../Audio/Audio';
import Video from '../Video/Video';

export default class Lista extends Component {

    render() {
        return (
            <div className='lista'>
                <ul>
                    <li> <Boton/> </li>
                    <li> <Audio/> </li>
                    <li> <Video/> </li>
                </ul>
            </div>
        )
    }
}