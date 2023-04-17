import React from 'react';
import './Header.css';

import { useSelector } from 'react-redux';

const Header = (props) => {
   const { setEdit } = props;
   const user = useSelector((state) => {
      return state.user;
   });
   const handleEdit = () => {
      setEdit(true);
   };
   return (
      <>
         <header
            style={{
               backgroundColor: `${user.themeColor}`,
               backgroundImage: `linear-gradient(180deg, ${user.themeColor} 2%, ${user.themeColor}, 65%, #ab848418 100%)`,
            }}
         >
            <div className="info-container">
               <div className="info-ava">
                  <img alt="nice" src={user.avatarUrl} />
               </div>
               <div className="info-edit" onClick={handleEdit}>
                  Edit Profile
               </div>

               <div className="info-username">Name : {user.name}</div>
               <div className="info-age">Age : {user.age}</div>
               <div className="info-about">Description : {user.about}</div>
            </div>
         </header>
      </>
   );
};

export default Header;
