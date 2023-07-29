import React from 'react'
import styles from "./blogCard.module.css"

function BlogCard({blogs}) {
  return (
    <section className={styles.blog_card}>
      <div className="container">              
         <div className={styles.blog_card__wrapper}>
             {blogs.map((blog)=>{
              return(
                <div className={styles.card} key={blog.id}>
                  <img loading='lazy' src={blog.image.data.attributes.url} alt={blog.image.data.attributes.alternativeText}/>
                  <h4>{blog.title}</h4>
                  <p>{blog.blog_body}</p>
                  <a href={`/blog/${blog.title.toLowerCase().split(" ").join("-")}`}>Read more</a>
                </div>
              )
             })} 
          </div>
      </div>     
    </section>
  )
}

export default BlogCard
