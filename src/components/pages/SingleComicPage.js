import {useParams, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { Helmet } from 'react-helmet'

import useMarvelService from '../../services/MarvelService'
import Spinner from '../spinner/Spinner'
import ErrorMessage from '../errorMessage/ErrorMessage'

import './singleComic.scss'

const SingleComicPage = () => {
  const {comicID} = useParams()
  const [comic, setComic] = useState(null)

  const {loading, error, getComics, clearError} = useMarvelService()

  useEffect(() => {
    updateComic()
  }, [comicID])

  const updateComic = () => {
    clearError()
    getComics(comicID).then(onComicLoaded)
  }

  const onComicLoaded = comic => {
    setComic(comic)
  }

  const errorMessage = error ? <ErrorMessage /> : null
  const spinner = loading ? <Spinner /> : null
  const content = !(loading || error || !comic) ? <View comic={comic} /> : null

  return (
    <div className='char__info'>
      {errorMessage}
      {spinner}
      {content}
    </div>
  )
}

const View = ({comic}) => {
  const {title, description, pageCount, thumbnail, price, language} = comic

  return (
    <div className='single-comic'>
      <Helmet>
        <title>Страница комикса {title}</title>
      </Helmet>
      <img src={thumbnail} alt='x-men' className='single-comic__img' />
      <div className='single-comic__info'>
        <h2 className='single-comic__name'>{title}</h2>
        <p className='single-comic__descr'>{description}</p>
        <p className='single-comic__descr'>{pageCount}</p>
        <p className='single-comic__descr'>Language: {language}</p>
        <div className='single-comic__price'>{price}</div>
      </div>
      <Link to={'/comics/'} className='single-comic__back'>
        Back to all
      </Link>
    </div>
  )
}

export default SingleComicPage
