// Write your code here.
import {Component} from 'react'

import './index.css'

const plusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  renderAnswer = () => {
    const {faqItem} = this.props
    const {answerText} = faqItem
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <hr className="hr-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleAnswer = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  activeImage = () => {
    const {isActive} = this.state
    const image = isActive ? minusImg : plusImg
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button type="button" className="button" onClick={this.onToggleAnswer}>
        <img src={image} alt={altText} />
      </button>
    )
  }

  render() {
    const {faqItem} = this.props
    const {questionText} = faqItem

    return (
      <li className="faqs-items">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.activeImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
