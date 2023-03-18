import {Helmet} from 'react-helmet'
import ComicsList from '../comicsList/ComicsList'
import AppBanner from '../appBanner/AppBanner'

const ComicsPage = () => {
  return (
    <>
      <Helmet>
        <title>Сборник комиксов Marvel</title>
      </Helmet>
      <AppBanner />
      <ComicsList />
    </>
  )
}

export default ComicsPage
