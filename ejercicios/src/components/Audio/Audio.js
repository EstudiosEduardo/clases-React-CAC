'use strict';
const ReactElement = React.createElement;
export default class Audio extends React.Component {

    render() {
        return ReactElement(
            'audio',
             {controls : true},
             ReactElement(
                'source',
                 {src:"https://www.w3schools.com/tags/horse.mp3",
                 type:"audio/ogg"},
             )
        );
    }
}
