import React from 'react'
import './SkydiveItem.css'
// import SkydiveItem from './SkydiveItem';
const SkydiveItem = ({name, canceled, onDelete}) => (
  <li style={{textDecoration: canceled ? 'line-through' : 'none'}}>
    {name}
    <span onClick={onDelete}> X </span>
  </li>
)

export default SkydiveItem
