import React from 'react'
import styled from 'styled-components'
import Img from './img'
import {Box} from '../styledComps/anilist'

const Div=styled.div
`
display:flex;
align-items:center;
justify-content:center;
`

export default
({list})=>
<Div>
  {
    list.map
    (
      item=>
      <Box key={item.id}><Img src={item.coverImage.large} alt='cover image'/></Box>
    )
  }
</Div>
