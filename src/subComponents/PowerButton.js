// Home button

import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'


// background-color: #FCF6F4;
// padding: 0.3rem;
// border-radius: 50%;
// border: 1px solid #000;
// width: 2.5rem;
// height: 2.5rem;

// &:hover{
//     background-color: rgba(0,255,0,0.4);
//     box-shadow: 0 0 8px 6px rgba(0,255,0,0.2);
// }

const Power = styled.button`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);

display: flex;
justify-content: center;
align-items:center;
z-index:3;

cursor: pointer;

&>*:first-child{
    text-decoration: none;
    color: inherit;
}
`

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
        // <Power>
        // <NavLink to="/">
        //     <div>
        //         <text>close</text>
        //     </div>
        // <PowerBtn width={30} height={30} fill='currentColor' /> 
        // </NavLink>
        // </Power>


    )
}

export default PowerButton
