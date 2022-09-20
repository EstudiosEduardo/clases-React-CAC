'use strict';
const ReactElement = React.createElement;
export default class Video extends React.Component {

    render() {
        return ReactElement(
            'video',
             {width: "320",
              height:"240",
                controls : true},
             ReactElement(
                'source',
                 {src:"https://www.w3schools.com/html/mov_bbb.mp4",
                 type:"video/mp4"},
             )
        );
    }
}
