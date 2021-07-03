import Link from 'next/link'
import styles from './BreweryItem.module.scss'

export default function BreweryItem({id, name, street, city, state, country, postal_code, brewery_type}) {
    const handleTypeColor = () => {
        switch (brewery_type) {
            case 'micro':
                return 'mediumSpringGreen'
            case 'nano':
                return 'green'
            case 'regional':
                return 'red'
            case 'brewpub':
                return 'purple'
            case 'large':
                return 'black'
            case 'planning':
                return 'orange'
            case 'bar':
                return 'pink'
            case 'contract':
                return 'blue'
            case 'proprietor':
                return 'violet'
            default:
                return 'gray';
        }
    }

    return (
        <Link href={`breweriesDetails/${id}`}>
            <div className={styles.breweryItemContainer}>
                <h2>{name}</h2>
                <div>
                    <p>{street}</p>
                    <p>{city} {state} - {postal_code}</p>
                    <p>{country}</p>
                </div>
                <div className={styles.breweryType}>
                    <p style={{backgroundColor: handleTypeColor()}}>{brewery_type}</p>
                </div>
            </div>
        </Link>
    )
}