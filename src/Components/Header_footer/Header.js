import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { CityLogo } from '../UI/icons';


export default class Header extends Component {
    render() {
        return (
            <AppBar position="fixed" style={{
                backgroundColor: '#98c5e9',
                boxShadow: 'none',
                padding: '10px 0',
                borderBottom: '2px solid #00285e'
            }}>
                <Toolbar style={{ display: "flex" }}>
                    <div style={{ flexGrow: 1 }}>
                        <div className='header_logo'>
                            <CityLogo link linkTo='/' width='70px' height="70px" />
                        </div>
                    </div>
                    <Link to='/the_team'>
                        <Button color='inherit'>The team</Button>
                    </Link>
                    <Link to='/the_matches'>
                        <Button color="inherit">Matches</Button>
                    </Link>
                </Toolbar>
            </AppBar >
        )
    }
}
