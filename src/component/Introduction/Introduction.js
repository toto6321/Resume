import React from 'react'

function Introduction(props) {

    const prefix = "CAREER FOCUS: "

    return (
        <div>
            <div><h2>{prefix + props.data.career}</h2></div>
            <div>
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