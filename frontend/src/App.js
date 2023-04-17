import Header from './components/Header/Header.jsx';
import './App.css';
import { useState } from 'react';
import EditPage from './components/Edit/EditPage.jsx';
import { useSelector } from 'react-redux';
import PostNav from './components/PostNav/PostNav.jsx';
import MakePost from './components/Posts/MakePost.jsx';

function App() {
   const [isEdit, setEdit] = useState(false);

   const [isPost, setPost] = useState(false);

   const pending = useSelector((state) => state.user.pending);

   const error = useSelector((state) => state.user.error);

   return (
      <div className="App">
         {isEdit ? <EditPage setEdit={setEdit} /> : <Header setEdit={setEdit} />}
         {pending && <h4 className="pending"> Vui Lòng chờ chút xíu nha </h4>}
         {error && !isEdit && <h3 className="error"> Lỗi khi lấy dữ liệu từ máy chủ </h3>}
         {isPost && <MakePost setPost={setPost} />}
         <PostNav isPost={isPost} setPost={setPost} />
      </div>
   );
}

export default App;
