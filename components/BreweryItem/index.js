import styles from './BreweryItem.module.scss'

export default function BreweryItem({name, street, city, state, country, postal_code, brewery_type}) {
    return (
        <div className={styles.breweryItemContainer}>
            <h1>{name}</h1>
            <div>
                <p>{street}</p>
                <p>{city} {state} - {postal_code}</p>
                <p>{country}</p>
            </div>
            <div className={styles.breweryType}>
                <p>{brewery_type}</p>
            </div>
        </div>
    )
}