// Style your elements here
import styled from 'styled-components'

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-image: linear-gradient(#161617, #0b0c1e, #3c2940);
  background-size: cover;
  height: 100vh;
`
export const Button = styled.button`
  background-color: #06b6d4;
  padding: 10px;
  border-radius: 10px;
  color: #e2e8f0;
  cursor: pointer;
  outline: none;
  border: none;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
`
export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 800;
  color: #ffffff;
`
export const ImgParaDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Imag = styled.img`
  width: 150px;
  height: 150px;
`
