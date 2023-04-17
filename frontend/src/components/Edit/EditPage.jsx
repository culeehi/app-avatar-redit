import React, { useState } from 'react';
import Input from '../InputFields/Input.jsx';
import './EditPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateUsers } from '../../redux/apiRequests.js';

const EditPage = (props) => {
   const { setEdit } = props;

   const user = useSelector((state) => {
      return state.user;
   });

   const avatarUrl = [
      'https://i.redd.it/rrz3hmsxcll71.png',
      'https://preview.redd.it/fc9k38jwfwv51.png?auto=webp&s=9ce3d4c488091bb21969fd0fad7a6d89e4bfc50d',
      'https://preview.redd.it/se39g98mljw51.png?auto=webp&s=758dfe2b0a2df439b06b68533e763f413d58b46c',
      'https://preview.redd.it/5es1lne1du261.png?width=640&crop=smart&auto=webp&s=e6eb0ee5710710000e4fbace119112de63324a38',
      'https://i.redd.it/7ipyf6pvqac61.png',
      'https://i.redd.it/ksmb0m02ppy51.png',
      'https://preview.redd.it/ivquvp9s7o281.png?width=587&format=png&auto=webp&v=enabled&s=2f71f8ad12c9a481ddf39242f0a174af30174277',
      'https://preview.redd.it/cpwkbke13vv51.png?auto=webp&s=9158e49b35ad2581d840efd2a013a9ead06abbc7',
      'https://preview.redd.it/26s9eejm8vz51.png?auto=webp&s=e38d32ee0ffa0666fade2abd62ed59037c119990',
   ];

   const dispatch = useDispatch();

   const [name, setName] = useState(user.name);
   const [age, setAge] = useState(user.age);
   const [about, setAbout] = useState(user.about);
   const [theme, setTheme] = useState('ff9051');
   const [url, setUrl] = useState(user.avatarUrl);
   const handleSubmit = (e) => {
      e.preventDefault();
      setEdit(false);
      const updateUser = {
         name: name,
         age: age,
         about: about,
         avatarUrl: url,
         themeColor: theme,
      };
      updateUsers(updateUser, dispatch);
   };
   return (
      <>
         <form onSubmit={handleSubmit}>
            <section className="edit-container">
               <button className="close">SAVE</button>
               <div className="edit-profile">Edit Profile</div>
               <div className="input-container">
                  <Input label="Display name" data={user.name} setData={setName} />

                  <Input label="Age" data={user.age} setData={setAge} />

                  <Input
                     label="About"
                     inputType="textarea"
                     className="input-about"
                     data={user.about}
                     setData={setAbout}
                  />

                  <label htmlFor="">Profile Picture</label>
                  <div className="input-image-container">
                     {avatarUrl.map((url, index) => {
                        return (
                           <div className="img-ctg" key={index}>
                              <img
                                 src={url}
                                 className="input-image"
                                 alt=""
                                 onClick={(e) => {
                                    setUrl(e.target.src);
                                 }}
                              />
                           </div>
                        );
                     })}
                  </div>
                  <div className="theme-container">
                     <label htmlFor="">Theme </label>
                     <input type="color" className="theme-color" onChange={(e) => setTheme(e.target.value)} />
                  </div>
               </div>
            </section>
         </form>
      </>
   );
};

export default EditPage;
