import React from 'react'
import styled from 'styled-components'
import dinosaur from '../images/dinosaur.png'
import Anilist from './anilist'
import Menu from './menu'
import {Route} from 'react-router-dom'
import Other from './other'

const Header=styled.div
`
  background-color:grey;
  color:white;
  font-family:sans-serif;
  user-select:none;
  border-radius:5px;
  margin:10px;
  padding:20px;
`

const Header_div=
styled.div
`
display:flex;
justify-content:space-between;
align-items:center;
`

const Content=styled.div
`
  background-color:grey;
  color:white;
  font-family:sans-serif;
  user-select:none;
  border-radius:5px;
  margin:10px;
  padding:10px;
  height:360px;
  overflow:scroll;
`

const Footer=styled.div
`
  background-color:grey;
  color:white;
  font-family:sans-serif;
  user-select:none;
  border-radius:5px;
  margin:10px;
  padding:10px;
  font-size:.9em;
`

const Center1=styled.div
`
  display:flex;
  justify-content:center;
  align-items:center;
  height:inherit;
`

const Center2=styled.div
`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

export default
()=>
<div>
  <Header>
    <Header_div>
      <div>
        <img src={dinosaur} alt='dinosaur.png'/> &nbsp;
        <span>wellcome to my website !!! hope you enjoy it !!! made with care and development !!! cool things you will find in it !!!</span>
      </div>
      <div>
        <Menu style={{bottom:'2px',right:'70px'}}
          items=
          {
            [
              {route:'/',text:'anilist'}
              ,{route:'/other',text:'other'}
            ]
          }
        />
      </div>
    </Header_div>
  </Header>
  <Content>
    <Center1>
      <Center2>
        <Route path='/' exact component={Anilist}/>
        <Route path='/other' component={Other}/>
      </Center2>
    </Center1>
  </Content>
  <Footer>
    <span>&copy; 2019 react tech technologies</span>
  </Footer>
</div>
