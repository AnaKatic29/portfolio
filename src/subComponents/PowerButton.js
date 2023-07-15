import React from 'react'
import { NavLink } from 'react-router-dom'


const PowerButton = () => {
    return (
        <NavLink to="/">
            <span style={{
                alignItems: 'center',
                color: 'white',
                position: 'fixed',
                display: 'flex',
                justifyContent: 'center',
                top: '2rem',
                left: '50%',
                transform: 'translate(-50%, 0)',

            }}> close </span>
        </NavLink>


    )
}

export default PowerButton
