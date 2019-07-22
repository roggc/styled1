import React,{useState,useRef} from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import useClickOutside from '../hooks/useClickOutside'
import withFade from '../hocs/withFade'
import {Link} from 'react-router-dom'
import '../css/menu.css'

const Div1=
styled.div
`
position:absolute;
visibility:hidden;
`

const Div2=
styled.div
`
position:relative;
visibility:initial;
`

const Div3=
styled.div
`
background-color:white;
color:grey;
border-radius:5px;
margin:5px;
padding:5px;
cursor:initial;
z-index:1;
display:${({show})=>show?'block':'none'};
opacity:${({show})=>show?1:0};
transition:opacity 5s;
`

const Ul=
styled.ul
`
list-style-type:none;
margin:0px;
padding:5px;
`

const Li=
styled.div
`
cursor:pointer;
`

const Icon=
styled.div
`
background-color:white;
color:grey;
border-radius:5px;
padding:5px;
margin:5px;
cursor:pointer;
`

const C=
({style,items})=>
{
  const [state,setState]=useState
  (
    {
      show:false
    }
  )
  const menuClick=
  turnOff=>e=>
  {
    if(turnOff)
    {
      setState
      (
        {
          ...state,
          show:false
        }
      )
    }
    else
    {
      setState
      (
        {
          ...state,
          show:!state.show
        }
      )
    }
  }
  const innerRef=useRef(null)
  useClickOutside
  (
    e=> menuClick(true)(e)
    ,innerRef
  )
  const itemsRef=useRef(null)
  const itemsClick=
  e=>
  {
    if(itemsRef.current.contains(e.target))
    {
      e.stopPropagation()
    }
  }
  const itemClick=
  e=>
  menuClick(false)(e)
  const el=
  <div onClick={menuClick(false)} ref={innerRef}>
    <Icon>
      <FontAwesomeIcon icon={faBars}/>
    </Icon>
    <Div1>
      <Div2 style={style}>
        <Div3 show={state.show}  onClick={itemsClick} ref={itemsRef}>
          <Ul>
            {
              items.map
              (
                (item,i)=>
                <Li key={i} onClick={itemClick}><Link to={item.route}>{item.text}</Link></Li>
              )
            }
          </Ul>
        </Div3>
      </Div2>
    </Div1>
  </div>
  return el
}
export default withFade(C)(1)
