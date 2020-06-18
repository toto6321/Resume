import React from 'react'
import './Profile.css'

function Profile(props) {

    const stringify = (item) => (item) => Array.isArray(item) ? item.join(', ') : item.toString()

    const list = props.data.items.map((e, i) => {
            let fragment
            if (/^(http|https|www)/.test(e.value)) {
                fragment = <div><a href={e.value}>{stringify(e.value)}</a></div>
            } else {
                fragment = <div>{stringify(e.value)}</div>
            }
            return (
                <div key={i}>
                    <div><i>{e.icon}</i></div>
                    <div>
                        {fragment}
                    </div>
                </div>
            )
        }
    )

    return (
        <div>
            <div id="owner_name">
                <h1>{props.data.name}</h1>
            </div>
            <div>
                {list}
            </div>
        </div>
    )

}

export default Profile