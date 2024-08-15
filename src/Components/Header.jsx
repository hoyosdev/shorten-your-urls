import illustration from './../images/illustration-working.svg';
import styles from './Header.module.css'

function Header() {
    return (
            <header className={styles.header}>
                <div className='container'>
                <div className={styles.headerContent}>
                    <h1 className={styles.headerTitle}>More than just shorter links </h1>
                    <p className={`subtitle ${styles.headerSubtitle}`}>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                    <div className="p-small"></div>
                    <a id="getUrl"href='#getUrl' className='btn-primary'>Get started</a>
                </div>
                </div>
                <img src={illustration} className={styles.headerImg} alt='A person working in a computer' />
            </header>
    )
}

export default Header;