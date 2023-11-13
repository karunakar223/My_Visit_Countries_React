import './index.css'

const VisitedCountriesItem = props => {
  const {visitedDetails, deleteCountry} = props
  const {id, name, imageUrl} = visitedDetails

  const removeBtn = () => {
    deleteCountry(id)
  }

  return (
    <li className="li">
      <img src={imageUrl} alt="thumbnail" className="thumbnail" />
      <div className="text-container">
        <p className="text-name">{name}</p>
        <button type="button" onClick={removeBtn} className="button">
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountriesItem
