import React from 'react'

function Knowledge(props) {

    return (
        <div>
            <div><h2>{props.title}</h2></div>
            <div>
                <ul>
                    {
                        props.data.map((e, i) => (
                            <li key={i}>
                                <div>{e.join(', ')}</div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Knowledge