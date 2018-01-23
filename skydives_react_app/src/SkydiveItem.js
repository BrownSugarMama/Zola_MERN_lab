import React from 'react'
import './SkydiveItem.css'
// import SkydiveItem from './SkydiveItem';
const SkydiveItem = ({name, canceled}) => (
  <li style={{textDecoration: canceled ? 'line-through' : 'none'}}>
    {name}
  </li>
)

export default SkydiveItem
