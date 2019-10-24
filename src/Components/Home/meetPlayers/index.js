import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';
import Stripes from '../../../Resources/images/stripes.png';
import { Tag } from '../../UI/minc';
import HomeCards from './cards';


export default class MeetPlayers extends Component {

    state = {
        show: false
    }
    render() {
        return (
            <Reveal
                fraction={0.7}
                onReveal={() => {
                    console.log("resdfas");
                    this.setState({
                        show: true
                    })
                }} >
                <div className='home_meetplayers'
                    style={{ background: `#ffffff url(${Stripes})` }}
                >
                    <div className="container">
                        <div className="home_meetplayers_wrapper">
                            <div className="home_card_wrapper">
                                <HomeCards show={this.state.show} />
                            </div>
                            <div className="home_text_wrapper">
                                <div>
                                    <Tag bck='#0e1731' size="100px" color='#ffffff' add={{
                                        display: 'inline-block',
                                        marginBottom: '20px'
                                    }}>
                                        Meet
                                </Tag>
                                </div>
                                <div>
                                    <Tag bck='#0e1731' size="100px" color='#ffffff' add={{
                                        display: 'inline-block',
                                        marginBottom: '20px'
                                    }}>
                                        The
                                </Tag>
                                </div>
                                <div>
                                    <Tag bck='#0e1731' size="100px" color='#ffffff' add={{
                                        display: 'inline-block',
                                        marginBottom: '20px'
                                    }}>
                                        Players
                                </Tag>
                                </div>
                                <div>
                                    <Tag bck="#ffffff" size='27px' color="#0e1731" link linkTo="/the_team" add={{
                                        display: 'inline-block',
                                        marginBottom: '20px',
                                        border: '1px solid #0e1731'
                                    }}>Meet them here</Tag>
                                </div>
                            </div>
                        </div>
                    </div >

                </div >
            </Reveal >
        )
    }
}

