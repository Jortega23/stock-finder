import React from 'react'

const Landing = (props) => {
    return (
       <div>
           {props.stocks.map(stk =>
            <h1>{stk.code}</h1>
            )}
       </div>
    )
}

export default Landing;