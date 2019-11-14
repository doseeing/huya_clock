import React from 'react'
import { render } from 'react-dom'
import Main from './main'
import './assets/scss/common.scss'

render(
  <div className="app">
    <Main/>
  </div>,
  document.getElementById('root')
)