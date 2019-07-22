import React,{useState,useEffect} from 'react'
import styled from 'styled-components'

const Div=styled.div
`
    transition:${({timeout})=>`opacity ${timeout}s`};
    opacity:${({show})=>show?1:0};
    display:inline-flex;
`

export default
C=>timeout=>(props)=>
{
    const [state,setState]=useState
    (
        {
            show:false
        }
    )
    useEffect
    (
        ()=>
        setState
        (
            {
                ...state,
                show:true
            }
        )
    )
    const el=
            <Div show={state.show} timeout={timeout}>
                <C {...props}></C>
            </Div>
    return el
}
