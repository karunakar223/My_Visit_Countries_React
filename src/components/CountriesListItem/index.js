import './index.css'

const CountriesListItem = props => {
  const {countryDetails, visitedCountries, isVisited} = props
  const {id, name} = countryDetails

  const clsName = isVisited ? 'visited' : 'btn'
  const clsText = isVisited ? 'Visited' : 'Visit'

  const onClickBtn = () => {
    visitedCountries(id)
  }

  const btnOrParagraph = isVisited ? (
    <p className={clsName}>{clsText}</p>
  ) : (
    <button type="button" className={clsName} onClick={onClickBtn}>
      {clsText}
    </button>
  )

  return (
    <li className="li-container">
      <div className="list-container">
        <p className="name">{name}</p>
        {btnOrParagraph}
      </div>
    </li>
  )
}

export default CountriesListItem
