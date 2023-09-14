// Style your components here
import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  padding: 30px;
`
export const Heading = styled.h1`
  font-size: 30px;
  font-weight: 700;
  font-family: 'Roboto';
  color: #35469c;
`
export const FormContainer = styled.form`
  width: 50%;
`
export const InputUrlContainer = styled(BgContainer)`
  flex-direction: column;
  min-height: 0px;
  padding: 0px;
`
export const LabelItem = styled.label`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #7e858e;
  margin-top: 30px;
  padding-bottom: 3px;
`
export const InputElement = styled.input`
  padding: 4px;
  font-size: 14px;
  outline: none;
  width: 80%;
`
export const OptionsItems = styled.select`
  padding: 4px;
  font-size: 14px;
  outline: none;
  width: 80%;
`
export const GenerateButton = styled.button`
  height: 36px;
  width: 110px;
  border: none;
  outline: none;
  background-color: #0b69ff;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #ffffff;
  margin-top: 20px;
  border-radius: 5px;
`
export const ResultContainer = styled.div`
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  border: 1px solid, red;
  width: 500px;
  height: 300px;
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
export const Description = styled.p`
  font-size: ${props => props.fontSize};
  font-weight: 500;
  font-family: 'Roboto';
  color: #ffffff;
`
