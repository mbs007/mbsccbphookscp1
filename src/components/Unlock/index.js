// Write your code here
import {useState} from 'react'
import {MainDiv, ImgParaDiv, Imag, Button, Para} from './styledComponents'

const imageInfo = [
  {
    id: 'lock',
    imageUrl: 'https://assets.ccbp.in/frontend/hooks/lock-img.png',
    altText: 'lock',
  },
  {
    id: 'unlock',
    imageUrl: 'https://assets.ccbp.in/frontend/hooks/unlock-img.png',
    altText: 'unlock',
  },
]
const lockedPara = 'Your Device is Locked'
const unlockPara = 'Your Device is Unlocked'

const Unlock = () => {
  const [isLocked, setIsLocked] = useState(true)
  const imgSrc = isLocked ? imageInfo[0].imageUrl : imageInfo[1].imageUrl
  const imgAlt = isLocked ? imageInfo[0].altText : imageInfo[1].altText
  const btnTxt = isLocked ? 'Unlock' : 'Lock'
  const paraTxt = isLocked ? lockedPara : unlockPara
  return (
    <MainDiv>
      <ImgParaDiv>
        <Imag src={imgSrc} alt={imgAlt} />
        <Para>{paraTxt}</Para>
      </ImgParaDiv>
      <Button
        onClick={() => {
          setIsLocked(prev => !prev)
        }}
      >
        {btnTxt}
      </Button>
    </MainDiv>
  )
}

export default Unlock
