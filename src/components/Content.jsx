import data from '../data'
import Card from './Card'

const Content = () => {
  const cards = data.map(item => {
    return <Card {...item} />
  })

  return <div className='container'>{cards}</div>
}

export default Content
