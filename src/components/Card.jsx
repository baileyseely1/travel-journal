const Card = props => {
  const {
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl
  } = props
  const loc = location.toUpperCase().split('').join(' ')
  return (
    <section>
      <div>
        <img className='section--img' src={imageUrl} />
      </div>
      <div>
        <div className='card--title'>
          <div>
            <img src='./pin.png' />
            <p>{loc}</p>
          </div>
          <a href={googleMapsUrl} target='_blank'>
            View on google maps
          </a>
        </div>
        <h2>{title}</h2>
        <p className='date'>
          {startDate} - {endDate}
        </p>
        <p className='content--desc'>{description}</p>
      </div>
    </section>
  )
}

export default Card
