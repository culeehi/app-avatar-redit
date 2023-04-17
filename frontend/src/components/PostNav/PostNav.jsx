import React from 'react';
import '../PostNav/PostNav.css';
const PostNav = (props) => {
   const { isPost, setPost } = props;
   return (
      <footer>
         <div className="footer-title" onClick={() => setPost(!isPost)}>
            {isPost ? 'x' : '+'}
         </div>
      </footer>
   );
};

export default PostNav;
