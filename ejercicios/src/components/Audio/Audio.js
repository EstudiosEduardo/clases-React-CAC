import React, { Component } from 'react';
import'./Audio.css';

export default class Audio extends Component {

    render() {
        return(
               <audio className="audio"src="../../audios/Pajaros de Barro - Manolo Garcia.m4a" controls></audio>
        );
    }
}