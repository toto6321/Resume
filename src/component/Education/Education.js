import React from 'react'
import './Education.sass'

function Education(props) {

    return (
        <div className="v-card">
            <div className="v-card__title"><h2>{props.title}</h2></div>
            <div className="v-card__text">
                <div className="flex">
                    {
                        props.data.map((e, i) => (
                            <div key={i} className="education">
                                <div className="school-logo">
                                    <a href={e.school.link}>
                                        <img alt={e.school.name} src={e.school.icon}/>
                                    </a>
                                </div>
                                <div className="description">
                                    <div><h3>{e.school.name}</h3></div>
                                    <div><h4>{e.degree}</h4></div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Education