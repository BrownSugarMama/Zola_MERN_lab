import React, { Component } from 'react'

class SkydiveForm extends Component {
  constructor (props) {
    super(props)
    this.state = {inputValue: 'initial test input ..'}
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e) {
    this.setState({
        inputValue: e.target.value
      })
  }
  render () {
    return (
      <div>
        <input
          type='text'
          value={this.state.inputValue}
          onChange={this.handleChange}
         />
        <button>Book the Skydive</button>
      </div>
    )
  }
}
export default SkydiveForm
