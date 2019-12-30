import React from 'react';
import { render } from 'react-dom';
import './commen/init.less';
import './app.less';

function IndexPage() {

    return (
        <>
            <div style={{ fontSize: '0.16rem' }}> this is App.js</div>
            <div className='box'></div>
        </>
    )

}

render(<IndexPage />, document.getElementById('app'));