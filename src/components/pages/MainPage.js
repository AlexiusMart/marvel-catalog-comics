import {useState} from 'react'
import {Helmet} from 'react-helmet'
import RandomChar from '../randomChar/RandomChar'
import CharList from '../charList/CharList'
import CharInfo from '../charInfo/CharInfo'

import decoration from '../../resources/img/vision.png'

const MainPage = () => {
  const [selectedChar, setSelectedChar] = useState(null)

  const onCharSelected = id => {
    setSelectedChar(id)
  }

  return (
    <>
      <Helmet>
        <title>Все персонажи комиксов Marvel</title>
      </Helmet>
      <RandomChar />
      <div className='char__content'>
        <CharList onCharSelected={onCharSelected} />
        <CharInfo charId={selectedChar} />
      </div>
      <img className='bg-decoration' src={decoration} alt='vision' />
    </>
  )
}

export default MainPage
