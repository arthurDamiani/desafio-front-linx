import {useState, useEffect} from 'react'
import api from './api'
import Header from '../components/Header'
import Filter from '../components/Filter'
import BreweryItem from '../components/BreweryItem'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const [breweries, setBreweries] = useState([])
  const [type, setType] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    const getBreweries = async () => {
      const endpoint = type !== '' ? `breweries?by_type=${type}&page=${page}` : `breweries?page=${page}`
      await api.get(endpoint)
      .then(res => setBreweries(res.data))
      .catch(() => alert('Falha na requisição'))
    }
    getBreweries()
  }, [page, type])

  return (
    <div className={styles.homeContainer}>
      <Header />
      <Filter value={type} onChange={e => setType(e.target.value)} />
      <div className={styles.breweryGrid}>
        {breweries.length !== 0 &&
          breweries.map((brewery) => {
            return (
              <BreweryItem 
                key={brewery.id}
                id={brewery.id}
                name={brewery.name}
                street={brewery.street}
                city={brewery.city}
                state={brewery.state}
                country={brewery.country}
                postal_code={brewery.postal_code}
                brewery_type={brewery.brewery_type}
              />
            )
          })
        }
      </div>
      <div className={styles.paginationButtonsContainer}>
        <button 
          onClick={() => setPage(1)}
          className={page === 1 && styles.buttonActive}
        >1</button>
        <button 
          onClick={() => setPage(2)}
          className={page === 2 && styles.buttonActive}
        >2</button>
        <button 
          onClick={() => setPage(3)}
          className={page === 3 && styles.buttonActive}
        >3</button>
      </div>
    </div>
  )
}
