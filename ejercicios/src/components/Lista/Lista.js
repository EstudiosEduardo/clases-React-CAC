'use strict';
import Boton from '../Boton/Boton.js';
import Audio from '../Audio/Audio.js';
import Video from '../Video/Video.js';


const ReactElement = React.createElement;
export default class Lista extends React.Component {

    render() {
        return ReactElement(
            'ul',
            null,
            ReactElement(
                'li',
                null,
                ReactElement(Boton)
            ),
            ReactElement(
                'li',
                null,
                ReactElement(Audio)
            ),
            ReactElement(
                'li',
                null,
                ReactElement(Video)
            )
           
        );
    }
}
