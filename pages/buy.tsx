import React from 'react'
import styles from "../styles/buy.module.scss"
import { fetchDb } from '../helpers';
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetchDb();
  // Pass posts data to the page via props
  return {
    props: {
      posts: JSON.stringify(res),
    },
  };
}
const Buy = ({posts}:{posts:any}) => {
  return (
    <div className={styles.buy}>buy</div>
  )
}

export default Buy