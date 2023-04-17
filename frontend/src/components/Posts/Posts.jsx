import React from 'react';
import { useSelector } from 'react-redux';
import './Post.css';

const Posts = () => {
   const post = useSelector((state) => {
      return state.post.posts;
   });
   const tags = ['None', 'NSFW', 'Mood', 'Quotes', 'ShitPost'];

   return (
      <>
         <section className="post-container">
            {post.slice(1).map((post, idx) => {
               return (
                  <div className="posts" key={idx}>
                     <div className="title-desc">
                        <p className="posts-title">{post.title}</p>
                        <p className={`posts-tags-${tags[post.tag]} posts-tags`}>{tags[post.tag]}</p>
                     </div>
                     <p className="posts-description">{post.description}</p>
                  </div>
               );
            })}
         </section>
      </>
   );
};

export default Posts;
