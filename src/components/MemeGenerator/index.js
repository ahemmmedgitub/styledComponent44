import {Component} from 'react'
import {
  BgContainer,
  FormContainer,
  Heading,
  InputUrlContainer,
  LabelItem,
  InputElement,
  OptionsItems,
  GenerateButton,
  ResultContainer,
  Description,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imgUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].displayText,
    displayResult: false,
  }

  getImgUrl = event => {
    this.setState({imgUrl: event.target.value})
  }

  getTopText = event => {
    this.setState({topText: event.target.value})
  }

  getBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  getFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onSubmitDetails = event => {
    event.preventDefault()
    this.setState(prevState => ({displayResult: !prevState.displayResult}))
  }

  displayResultContainer = () => {
    const {imgUrl, topText, bottomText, fontSize} = this.state
    const parseIntSize = parseInt(fontSize)

    return (
      <ResultContainer data-testid="meme" imgUrl={imgUrl}>
        <Description fontSize={`${parseIntSize}px`}>{topText}</Description>
        <Description fontSize={`${parseIntSize}px`}>{bottomText}</Description>
      </ResultContainer>
    )
  }

  render() {
    const {imgUrl, topText, bottomText, fontSize, displayResult} = this.state

    return (
      <BgContainer>
        <FormContainer onSubmit={this.onSubmitDetails}>
          <Heading>Meme Generator</Heading>
          <InputUrlContainer>
            <LabelItem htmlFor="imgUrl">Image URL</LabelItem>
            <InputElement
              value={imgUrl}
              onChange={this.getImgUrl}
              type="text"
              id="imgUrl"
            />
          </InputUrlContainer>

          <InputUrlContainer>
            <LabelItem htmlFor="topText">Top Text</LabelItem>
            <InputElement
              value={topText}
              onChange={this.getTopText}
              type="text"
              id="topText"
            />
          </InputUrlContainer>

          <InputUrlContainer>
            <LabelItem htmlFor="bottomText">Bottom Text</LabelItem>
            <InputElement
              onChange={this.getBottomText}
              type="text"
              id="bottomText"
              value={bottomText}
            />
          </InputUrlContainer>

          <InputUrlContainer>
            <LabelItem htmlFor="imgUrl">Font Size</LabelItem>
            <OptionsItems value={fontSize} onChange={this.getFontSize}>
              {fontSizesOptionsList.map(item => (
                <option value={item.displayText} key={item.optionId}>
                  {item.displayText}
                </option>
              ))}
            </OptionsItems>
          </InputUrlContainer>
          <GenerateButton type="submit">Generate</GenerateButton>
        </FormContainer>
        {displayResult ? this.displayResultContainer() : null}
      </BgContainer>
    )
  }
}
export default MemeGenerator
