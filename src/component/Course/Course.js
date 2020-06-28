import React from "react"
import './Course.sass'

function Course(props) {

    return (
        <div className="v-card">
            <div className="v-card__title"><h2>{props.title}</h2></div>
            <div className="v-card__text">
                {
                    props.data.map((e, i) => (
                        <div key={i} className="course">
                            <div>{e.name}</div>
                            <div><a href={e.project.link}>{e.project.name}</a></div>
                        </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Course