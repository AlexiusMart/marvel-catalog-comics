import {useHttp} from '../hooks/http.hook'

const useMarvelService = () => {
  const {loading, request, error, clearError} = useHttp()

  const _apiBase = 'https://gateway.marvel.com:443/v1/public/characters'
  const _apiKey = 'apikey=5ac05561cc75d0ca85da7b11f0086d55'
  const _baseOffset = 210

  const getAllCharacters = async (offset = _baseOffset) => {
    const res = await request(`${_apiBase}?limit=9&offset=${offset}&${_apiKey}`)
    return res.data.results.map(_transformCharacter)
  }

  const getCharacter = async id => {
    const res = await request(`${_apiBase}/${id}?${_apiKey}`)
    return _transformCharacter(res.data.results[0])
  }

  const _transformCharacter = char => {
    return {
      id: char.id,
      name: char.name,
      description: char.description
        ? `${char.description.slice(0, 100)}...`
        : 'Описание для данного героя отсутствует',
      thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items
    }
  }
  return {loading, error, clearError, getCharacter, getAllCharacters}
}

export default useMarvelService
