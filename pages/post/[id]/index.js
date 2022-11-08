import {server} from '../../../config/index.js'
import Image from 'next/image'
import styles from '../../../styles/Post.module.css'

export default function post({post}) {
  return (
    <div className={styles.fullPost}>
    <h1>{post.title}</h1>
    <Image src="https://admin.bikemgtwn.com/assets/9222340c-d88c-4da8-b4d3-13df8bdd8475" width="800" height="400" alt="group photo"/>
    <p>{post.content}</p>
    </div>
  ) 
}



export const getServerSideProps = async (context) => {
    const res = await fetch(`${server}/post/${context.params.id}`)
    const data = await res.json()
    const post = data.data
    return {
        props: {
          post  
        }
    }
}