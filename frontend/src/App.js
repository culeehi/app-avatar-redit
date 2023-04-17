import Header from './components/Header/Header.jsx';
import './App.css';
import { useState } from 'react';
import EditPage from './components/Edit/EditPage.jsx';
import { useSelector } from 'react-redux';
import PostNav from './components/PostNav/PostNav.jsx';
import MakePost from './components/Posts/MakePost.jsx';
import Posts from './components/Posts/Posts.jsx';

function App() {
   const [isEdit, setEdit] = useState(false);

   const [isPost, setPost] = useState(false);

   const pending = useSelector((state) => state.user.pending);

   const error = useSelector((state) => state.user.error);

   return (
      <div className="App">
         {isEdit ? (
            <EditPage setEdit={setEdit} />
         ) : !isEdit && !isPost ? (
            <>
               <Header setEdit={setEdit} />
               <div className="post-container">{<Posts />}</div>
               <PostNav isPost={isPost} setPost={setPost} />
            </>
         ) : (
            <>{isPost && <MakePost setPost={setPost} />}</>
         )}

         {pending && <h2 className="pending"> Vui Lòng chờ chút xíu nha </h2>}
         {error && !isEdit && <h2 className="error"> Lỗi khi lấy dữ liệu từ máy chủ </h2>}
      </div>
   );
}

export default App;
