import React, { useState } from 'react'
import styles from "./blogCard.module.css"
import Link from 'next/link'
import handleSlug from '@/components/utils/handleSlug'
function BlogCard({blogs}) {
  const [sorting, setSorting] = useState( " ")
  const [sort_data, set_sort_data] = useState(blogs)
  function sortedData(e) {
     const selectValue = e.target.value
     setSorting(selectValue)
     const tempArr = blogs
    //  selectValue === "old_new" ? tempArr.reverse() : tempArr.reverse()
    if(selectValue === "old_new") {
      tempArr.sort((a, b) => a.id -b.id)
    }else {
      tempArr.sort((a, b) => b.id -a.id)

    }

      set_sort_data(tempArr)
  }
  
  return (
    <section className={styles.blog_card}>
      <div className="container">   
        <div className={styles.blog_card__sort}>
        
            <select value={sorting}  id="sort" onChange={(e)=>sortedData(e)}>
              <option value=' ' disabled>Sort by date</option>
              <option value="new_old">New-Old</option>
              <option value="old_new">Old-New</option>
            </select>
       
        </div>           
         <div className={styles.blog_card__wrapper}>
             { sort_data.map((blog)=>{
              return(
                <div className={styles.card} key={blog.id}>
                  <img loading='lazy' src={blog.image.data.attributes.url} alt={blog.image.data.attributes.alternativeText}/>
                  <h4>{blog.title}</h4>
                  <p>{blog.blog_body}</p>
                  <Link href={`/blog/${handleSlug(blog.title)}`}>Read more</Link>
                </div>
              )
             })} 
          </div>
      </div>     
    </section>
  )
}

export default BlogCard
