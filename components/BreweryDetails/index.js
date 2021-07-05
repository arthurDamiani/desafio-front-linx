import { replace } from 'lodash'
import Link from 'next/link'
import styles from './BreweryDetails.module.scss'

export default function BreweryDetails({name, type, street, city, state, postal_code, country, website, phone, lat, lon}) {
    const handleShowInfo = info => info ? info : 'Not provided'

    return (
        <div className={styles.breweryDetailsContainer}>
            <h1>{name}</h1>
            <p>Type: {type}</p>
            <p>Street: {handleShowInfo(street)}</p>
            <p>City: {handleShowInfo(city)}</p>
            <p>State: {handleShowInfo(state)}</p>
            <p>Postal code: {handleShowInfo(postal_code)}</p>
            <p>Country: {handleShowInfo(country)}</p>
            <p>Website: {website ? <Link href={website}>{website}</Link> : 'Not provided'}</p>
            <p>Phone: {handleShowInfo(phone)}</p>
            <p>Open in maps:
                {lat && lon ?
                    <a href={`https://www.google.com/maps/?q=${lat},${lon}`}>{`${lat}, ${lon}`}</a>
                :
                    'Not provided'
                }
            </p>
        </div>
    )
}