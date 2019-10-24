import React from 'react';
import Featured from './featured';
import Matches from './matches';

export default function Home() {
    return (
        <div className="bck_blue">
            <Featured />
            <Matches />
        </div>
    )
}