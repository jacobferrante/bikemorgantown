import styles from '../styles/Hero.module.css'

export default function Hero() {
  return (
   
    
    <section className={styles.container}>
      <div  className={styles.hero}>
        
        <div className={styles.heroText}>
          <h1>
            <span className={styles.coloredText}>BikeMorgantown</span> is a community powered resource, providing what you need to <span className={styles.coloredText}>enjoy cycling </span> in the Morgantown area.
          </h1>
        </div>
       
       <div> 
        <img src="https://admin.bikemgtwn.com/assets/e3954ed3-6f35-4012-a840-d9d05c92ac60"  className={styles.heroImage}/>
       </div>
     
      </div> 
    </section>
    
    ) 
}

