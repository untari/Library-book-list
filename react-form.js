import React from 'react'
import { render } from 'react-dom'

class FavoriteColorform extends React.component {
      state = { value ''}

      newColor = e => {
          this.setState({value: e.target.value})

      submit = e => {
           console.log('New Color: ${this.state.value}')
           e.preventDefault()
      }

      render () {
          return (
              <form onSubmit={this.submit}>
                  <label>Favorite Color:
                      <input type="color"
                       onChanges={this.newwColor}/>
                  </label>
                  <button>Submit</button>
              </form>)}
      }



render (
	document.getElementById('root')
)


