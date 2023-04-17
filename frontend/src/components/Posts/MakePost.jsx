import React, { useState } from 'react';
import '../Posts/Post.css';
import Input from '../InputFields/Input';
import { createPost } from '../../redux/postSlide';
import { useDispatch } from 'react-redux';

const MakePost = (props) => {
   const [title, setTitle] = useState('Add a title');

   const [selectedID, setSelectedID] = useState(0);

   const [desc, setDesc] = useState('Add some description');

   const tags = ['None', 'NSFW', 'Mood', 'Quotes', 'ShitPost'];

   const { setPost } = props;

   const dispatch = useDispatch();

   const handlePost = () => {
      setPost(false);
      const newPost = {
         title: title,
         description: desc,
         tag: selectedID,
      };
      dispatch(createPost(newPost));
   };

   return (
      <section className="makepost-container">
         <div className="makepost-navigation">
            <p className="makepost-save" onClick={handlePost}>
               Post
            </p>
         </div>
         <Input
            data={title}
            className="title-post"
            inputType="textarea"
            setData={setTitle}
            label="Title"
            classStyle="makepost-title"
         />
         <Input data={desc} inputType="textarea" setData={setDesc} label="Description" classStyle="makepost-desc" />
         <label> Tags </label>
         <div className="makepost-tags">
            {tags.map((tag, id) => {
               return (
                  <button
                     className={`${selectedID === id ? `makepost-tags-selected` : `makepost-tags-${tag}`}`}
                     key={id}
                     onClick={() => setSelectedID(id)}
                  >
                     {tag}
                  </button>
               );
            })}
         </div>
      </section>
   );
};

export default MakePost;
