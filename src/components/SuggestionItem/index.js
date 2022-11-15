// Write your code here
import {Component} from 'react'

import './index.css'

class SuggestionItem extends Component {
  render() {
    const {key, eachObject, onAddToInputElement} = this.props
    const {suggestion} = eachObject

    this.valueAddToInputElement = () => {
      onAddToInputElement(suggestion)
    }

    return (
      <li className="list-item" key={key}>
        <p className="heading">{suggestion}</p>
        <button
          onClick={this.valueAddToInputElement}
          className="button-style"
          type="button"
        >
          <img
            className="button-style"
            alt="arrow"
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          />
        </button>
      </li>
    )
  }
}
export default SuggestionItem
