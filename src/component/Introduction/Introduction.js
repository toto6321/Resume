import React from 'react'

function Introduction(props) {

    return (
        <div>
            <div>{props.career}</div>
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