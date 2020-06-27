import React from 'react'

function Knowledge(props) {

    return (
        <div className="v-card">
            <div className="v-card__title"><h2>{props.title}</h2></div>
            <div className="v-card__text">
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