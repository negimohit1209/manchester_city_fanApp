import React from 'react';
import { Tag } from '../../UI/minc';

export default function MatchesHome() {
    return (
        <div className="home_matches_wrapper">
            <div className="container">
                <Tag
                    bck="#0e1731"
                    size="50px"
                    color="#ffffff"
                >Matches</Tag>
                MATCHES
                <Tag
                    bck="#ffffff"
                    size="22px"
                    color="#0e1731"
                    link
                    linkTo='/the_team'
                >
                    See more matches
                </Tag>
            </div>
        </div>
    )
}
