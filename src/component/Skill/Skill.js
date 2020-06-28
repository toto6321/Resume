import React from 'react'
import './Skill.sass'

function Skill(props) {

    return (
        <div className="skill">
            <div><h2>{'# ' + props.title}</h2></div>
            <Programming data={props.data.programming} title={Object.keys(props.data)[0]}/>
            <OS data={props.data.os} title={Object.keys(props.data)[1]}/>
            <Software data={props.data.software} title={Object.keys(props.data)[2]}/>
        </div>
    )
}


function Programming(props) {

    return (
        <div className="programming-wrapper wrapper">
            <h3 className="text-capitalize">{'## ' + props.title}</h3>
            <div className="programming-item-wrapper">
                {
                    props.data.map((category, i) => {
                        return (
                            <div key={i} className="programming-item">
                                <div className="programming-item-left">{category[0].category}</div>
                                <div className="programming-item-right">
                                    {
                                        category.map((e2, i2) => (
                                            <div key={i2} className="flex">
                                                <div className="progress-label">{e2.language}</div>
                                                <div className="progress">
                                                    <input className="progress_bar" type="range"
                                                           value={e2.proficiency} max="100"/>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

function OS(props) {
    const stringify = (item) => Array.isArray(item) ? item.join(', ') : item.toString()

    return (
        <div className="os-wrapper wrapper">
            <h3 className="text-capitalize">{'## ' + props.title}</h3>
            <div>
                <ul>
                    {
                        props.data.map((e, i) => (
                            <li key={i}>{stringify(e)}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

function Software(props) {
    const stringify = (item) => Array.isArray(item) ? item.join(', ') : item.toString()

    return (
        <div className="software-wrapper wrapper">
            <h3 className="text-capitalize">{'## ' + props.title}</h3>
            <div>
                <ul>
                    {
                        props.data.map((e, i) => (
                            <li key={i}>{stringify(e)}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Skill