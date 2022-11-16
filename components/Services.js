import styles from '../styles/Services.module.css'

export default function Services({services}) {
  return (
    <section className={styles.container}>
      <div className={styles.services}>     
        {services.map((service) => (
          <div className={styles.service}>
            <h2><i className={service.icon}> </i></h2>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))} 
      </div>
    </section>
    ) 
}
