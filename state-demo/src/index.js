import React from 'react';
import ReactDOM from 'react-dom';

var timer = 0;

const DemoApp = () => {
    timer++;
    document.getElementById('js-root').innerHTML =
        '<h1>HTML and JavaScript</h1><br>' + timer + '<br><input type="text" />';

    ReactDOM.render(
        React.createElement(
                'div',
                null,
                React.createElement(
                'h1',
                null,
                'React'),
                React.createElement(
                'div',
                null,
                timer),
                React.createElement(      
                'input', null)
     ),
     document.getElementById('react-root')
    );
  
};

setInterval(DemoApp, 1000);

