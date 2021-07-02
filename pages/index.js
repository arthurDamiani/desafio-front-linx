import {useState, useEffect} from 'react'
import api from './api'
import Header from '../components/Header'
import BreweryItem from '../components/BreweryItem'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const [page, setPage] = useState(1)
  const [breweries, setBreweries] = useState([])

  useEffect(() => {
    const getBreweries = async () => {
      await api.get(`breweries?page=${page}`)
      .then(res => setBreweries(res.data))
      .catch(() => alert('Falha na requisição'))
    }
    getBreweries()
  }, [page])

  

  return (
    <div className={styles.homeContainer}>
      <Header />
      <div className={styles.breweryGrid}>
        {breweries.length !== 0 &&
          breweries.map((brewery) => {
            return (
              <BreweryItem 
                key={brewery.id}
                name={brewery.name}
                street={brewery.street}
                city={brewery.city}
                state={brewery.state}
                country={brewery.country}
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
