import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import graphql from '../graphql/index'
import withFade from '../hocs/withFade'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
import List from './anilistListOfImages'
import {Box} from '../styledComps/anilist'

const C=
()=>
{
  const [state,setState]=useState
  (
    {
      finished:false
    }
  )
  useEffect
  (
    ()=>
    {
      const query=
      `
      query {
        Page {
          media(isAdult: false, sort: POPULARITY_DESC) {
            id
            title {
              romaji
              english
            }
            coverImage {
              large
            }
          }
        }
      }
      `
      const variables={}
      const url= 'https://graphql.anilist.co'
      const cb=
      data=>
      setState
      (
        {
          ...state,
          finished:true,
          data:data
        }
      )
      if(!state.finished)
      {
        graphql(url)(query)(variables)(cb)
      }
    }
  )
  const el=
  <div>
    {
      state.finished?
      <List list={state.data.Page.media}/>
      :<Box><FontAwesomeIcon icon={faSpinner} spin/></Box>
    }
  </div>
  return el
}

export default withFade(C)(1)
