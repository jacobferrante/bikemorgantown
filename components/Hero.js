import styles from '../styles/Hero.module.css'

export default function Hero() {
  return (
    
    <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>
            BikeMorgantown is a community powered resource, providing what you need to enjoy cycling in the Morgantown area.
          </h1>
        </div>
        
        <img src="https://admin.bikemgtwn.com/assets/e3954ed3-6f35-4012-a840-d9d05c92ac60"  className={styles.heroImage}/>
    
    </section> 
    
    ) 
}

