// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onFilter = event => {
    this.setState({searchInput: event.target.value})
  }

  onAddToInputElement = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {suggestionsList} = this.props

    const {searchInput} = this.state

    const resultList = suggestionsList.filter(eachObject =>
      eachObject.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <ul className="input-and-list-container">
        <li className="input-container">
          <img
            className="search-logo"
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
          />
          <input
            className="input-element"
            placeholder="Search Google"
            type="search"
            onChange={this.onFilter}
            value={searchInput}
          />
        </li>
        {resultList.map(eachObject => (
          <SuggestionItem
            eachObject={eachObject}
            key={eachObject.id}
            onAddToInputElement={this.onAddToInputElement}
          />
        ))}
      </ul>
    )
  }
}
export default GoogleSuggestions
