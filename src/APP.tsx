import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch , Redirect } from 'react-router-dom';
import Personal from '@/pages/personal';
import Resff from '@/pages/resff';

import './commen/init.less';
import './app.less';

function IndexPage() {
    return (
        <div className='box'>
            <Router>
                {/* <Switch> */}
                    <Route path='/' exact component={Resff} />
                    <Route path='/user' exact  component={Personal} />
                    {/* <Redirect to='/' /> */}
                {/* </Switch> */}

            </Router>
        </div>

    )

}

render(<IndexPage />, document.getElementById('app'));