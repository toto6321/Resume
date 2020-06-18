import React from 'react'

function Course(props) {

    return (
        <div>
            <div>{props.title}</div>
            <div>
                {
                    props.data.map((e, i) => (
                            <div key={i}>
                                <div>{e.name}</div>
                                <div><a href={e.link}>{e.project.name}</a></div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Course