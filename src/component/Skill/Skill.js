import React from 'react'

function Skill(props) {

    return (
        <div>
            <div><h2>{'# ' + props.title}</h2></div>
            <Programming data={props.data.programming} title={Object.keys(props.data)[0]}/>
            <OS data={props.data.os} title={Object.keys(props.data)[1]}/>
            <Software data={props.data.software} title={Object.keys(props.data)[2]}/>
        </div>
    )
}


function Programming(props) {

    return (
        <div className="programming-wrapper">
            <h3>{'## ' + props.title}</h3>
            <div>
                {
                    props.data.map((category, i) => {
                        return (
                            <div key={i} className="programming-item">
                                <div className="programming-item-left">{category[0].category}</div>
                                <div className="programming-item-right">
                                    {
                                        category.map((e2, i2) => (
                                            <div key={i2}>
                                                <div className="progressLabel">{e2.language}</div>
                                                <div className="progress">{e2.proficiency}</div>
                                                {/*    //todo progress bar */}
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
            <h3>{'## ' + props.title}</h3>
            <div>
                <ul>
                    {
                        props.data.map((e, i) => (
                            <li>{stringify(e)}</li>
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
            <h3>{'## ' + props.title}</h3>
            <div>
                <ul>
                    {
                        props.data.map((e, i) => (
                            <li>{stringify(e)}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}


export default Skill