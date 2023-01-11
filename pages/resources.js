import styles from "../styles/Resources.module.css";
import { server } from "../config/index";

export default function about({ resources }) {
  return (
    <div className={styles.container}>
      <div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${server}/resource`);
  const data = await res.json();
  const resources = data.data;

  return {
    props: {
      resources,
    },
  };
};



// If I want to embed the commuter map

//        <iframe
//          src="https://www.google.com/maps/d/embed?mid=1eUDfm--ocNdhGWkpwq4F2JRfJLM&ehbc=2E312F&z=13"
//          className={styles.map}
//        ></iframe>
