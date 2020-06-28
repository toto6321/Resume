import React from 'react'
import './Profile.sass'

function Profile(props) {

    const stringify = (item) => Array.isArray(item) ? item.join(', ') : item.toString()

    const list = props.data.items.map((e, i) => {
            let fragment
            if (/^(http|https|www)/.test(e.value)) {
                fragment = <div><a href={e.value}>{stringify(e.value)}</a></div>
            } else {
                fragment = <div>{stringify(e.value)}</div>
            }
            return (
                <div key={i} className="item">
                    <div className="item_name"><i>{e.name}</i></div>
                    <div className="item_value">
                        {fragment}
                    </div>
                </div>
            )
        }
    )

    return (
        <div className="profile">
            <div id="owner_name">
                <h1>{props.data.name}</h1>
            </div>
            <div className="info">
                {list}
            </div>
        </div>
    )

}

export default Profile