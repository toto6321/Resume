import React from 'react'

function Repository(props) {

    return (
        <div className="v-card">
            <div className="v-card__title"><h2>{props.title}</h2></div>
            <div className="v-card__text">
                {
                    props.data.map((e, i) => (
                        <div key={i}>
                            <div>
                                <h3>{e.name}</h3>
                            </div>
                            <div>
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
    )
}

export default Repository