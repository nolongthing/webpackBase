import React from 'react';
import { render } from 'react-dom';
import './commen/init.less';

function IndexPage () {

    return(
        <>
        <div style={{fontSize:'0.16rem'}}> this is App.js</div>

        </>
    )

}

render(<IndexPage/>,document.getElementById('app'));