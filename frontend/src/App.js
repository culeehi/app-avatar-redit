import Header from './components/Header/Header.jsx';
import './App.css';
import { useState } from 'react';
import EditPage from './components/Edit/EditPage.jsx';

function App() {
   const [isEdit, setEdit] = useState(false);
   return <div className="App">{isEdit ? <EditPage setEdit={setEdit} /> : <Header setEdit={setEdit} />}</div>;
}

export default App;
