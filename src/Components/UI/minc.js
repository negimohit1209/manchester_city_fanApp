import React from 'react';
import { Link } from 'react-router-dom';

export function Tag(props) {
    const template = <div
        style={{
            background: props.bck,
            fontSize: props.size,
            color: props.color,
            padding: "5px 10px",
            display: 'inline-block',
            fontFamily: 'Righteous'
        }}>{props.children}</div>
    if (props.link) {
        return (
            <Link to={props.linkTo}>
                {template}
            </Link>
        )
    } else {
        return template;
    }

}
