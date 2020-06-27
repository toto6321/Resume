import React from 'react'

function Work(props) {

    const parse_date_string = (d) => {
        const [year, month, day] = d.split('-')
        return {
            year,
            month,
            day
        }
    }

    return (
        <div className="v-card">
            <div className="v-card__title"><h2>{props.title}</h2></div>
            <div className="v-card__text">
                {
                    props.data.map((e, i) => (
                        <div key={i}>
                            <div>
                                <div className="year">{parse_date_string(e.end_time).year}</div>
                                <div className="month">{parse_date_string(e.end_time).month}</div>
                                <div>
                                    <div><h3>{e.position}</h3></div>
                                    <div>{e.employer.city}</div>
                                </div>
                                </div>
                                <div>
                                    <div className="year">{parse_date_string(e.start_time).year}</div>
                                    <div className="month">{parse_date_string(e.start_time).month}</div>
                                    <div><a href={e.employer.link}>{e.employer.name}</a></div>
                                </div>
                                <div>
                                    <div className="year dash"/>
                                    <div className="month"/>
                                    <div className="detail">
                                        {
                                            e.achievement.map((e2, i2) => {
                                                return <li key={i2}>{e2}</li>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Work