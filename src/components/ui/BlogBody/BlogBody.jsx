import React from 'react'
import styles from './blogBody.module.css'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'


function BlogBody({blog_body, image}) {
  return (
    <section className={styles.blogBody}>
      <div className="container">
        <div className={styles.blogBody__wrapper}>
          <div className={styles.blogBody__image}>
            <img loading='lazy' src={image?.data?.attributes?.url} alt={image?.data?.attributes?.alternativeText} />
          </div>
          <div className={styles.blogBody__content}>
            <ReactMarkdown>{blog_body}</ReactMarkdown>
          </div>
        </div>      
      </div>     

    </section>
  )
}

export default BlogBody
