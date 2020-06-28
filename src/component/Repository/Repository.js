import React from 'react'
import './Repository.sass'

function Repository(props) {

    return (
        <div className="v-card">
            <div className="v-card__title"><h2>{props.title}</h2></div>
            <div className="v-card__text">
                <div className="repository_wrapper flex">
                    {
                        props.data.map((e, i) => (
                                <div key={i} className="repository">
                                    <div className="mb-1">
                                        <h3>{e.name}</h3>
                                    </div>
                                    <div className="mb-1">
                                        {
                                            e.technical_stack.map((e2, i2) => (
                                                <a key={i2} href={e2.link}>
                                                    <img alt={e2.name} src={e2.logo}/>
                                                </a>
                                            ))
                                        }
                                    </div>
                                    <div>
                                        {e.description}
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Repository