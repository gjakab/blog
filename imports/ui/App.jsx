// file: /imports/ui/App.jsx
import React from 'react';

export default ({main, routeProps}) => {
    return (
        <div id="app">
            {React.createElement(main, routeProps)}
        </div>
    )
}