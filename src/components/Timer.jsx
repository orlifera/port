import React, { useEffect, useRef, useState } from 'react'


function Timer() {

    const [time, setTime] = useState(5);


    return (
        <div>

            <button onClick={ handleClick }>Save The World</button>
        </div>
    )
}

export default Timer