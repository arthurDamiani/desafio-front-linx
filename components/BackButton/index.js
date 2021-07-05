import {IoChevronBack} from 'react-icons/io5'
import styles from './BackButton.module.scss'

export default function BackButton({onClick}) {
    return (
        <div className={styles.backButtonContainer} onClick={onClick}>
            <IoChevronBack />
            <p>Back</p>
        </div>
    )
}