'use strict';

import Lista from './components/Lista/Lista.js'; 

const ReactElement = React.createElement;
const domContainer = document.getElementById("myApp");

ReactDOM.render(ReactElement(Lista), domContainer);
