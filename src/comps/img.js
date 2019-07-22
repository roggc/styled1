import React from 'react'
import styled from 'styled-components'
import withFade from '../hocs/withFade'

const C=
({src,alt})=>
<img src={src} alt={alt}/>

export default withFade(C)(1)
