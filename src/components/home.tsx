import React from 'react'
import './style.scss';

type Props = {
    title: string;
}

function home({ title }: Props) {
    return (
        <div>
            <h1>{title}</h1>
            <p>Text...</p>
        </div>
    )
}

export default home