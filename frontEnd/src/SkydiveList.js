import React, { Component } from 'react'
import SkydiveItem from './SkydiveItem'
import SkydiveForm from './SkydiveForm'
import './SkydiveList.css'

const APIURL = '/api/skydives'

class SkydiveList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      skydives: []
    }
  }
    // make request to my back end api and fetch data
  componentDidMount () {
    this.loadSkydives()
  }
  // GROP ALL API CALLS UNDER this function
  // https://github.com/github/fetch/issues/203 -- SOURCE for error handling
  loadSkydives () {
    fetch(APIURL) // fetch data from local api
    .then(resp => {
      if (!resp.ok) {
        if (resp.status >= 400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = {errorMessage: data.message}
            throw err
          })
        } else {
          let err = {errorMessage: 'The server is down, Please try again later'}
          throw err
        }
      }
      return resp.json()
    })
  .then(skydives => this.setState({skydives}))
  }
  render () {
    const skydives = this.state.skydives.map((s) => (
      <SkydiveItem
        key={s._id}
        {...s}
          />
      ))
    return (
      <div>
        <h1>Book Your Skydiving!</h1>
        <SkydiveForm />
        <ul>
          {skydives}
        </ul>
      
      </div>
    )
  }
}
export default SkydiveList
