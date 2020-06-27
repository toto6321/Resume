import React from 'react'

function Introduction(props) {

    const prefix = "CAREER FOCUS: "

    return (
        <div className="v-card">
            <div className="v-card__title"><h2>{prefix + props.data.career}</h2></div>
            <div className="v-card__text">
                <ul>
                    {
                        props.data.about.map((e, i) => (
                            <li key={i}>
                                <div>{e}</div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Introduction