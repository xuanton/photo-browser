import { useEffect, useState } from "react";
import {
  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AlbumView from "./views/AlbumView";
import FullAlbumView from "./views/FullAlbumView";
import PhotoFullSizeView from "./views/PhotoFullSizeView";
import PhotoListView from "./views/PhotoListView";
import UserView from "./views/UserView";


function App() {
  const [photos, setPhotos] = useState([])
  const [albums, setAlbums] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getPhotos = async () => {
      const data = await fetchData('http://jsonplaceholder.typicode.com/photos?_limit=50')
      setPhotos(data)
    }
    const getAlbums = async () => {
      const data = await fetchData('http://jsonplaceholder.typicode.com/albums?_limit=100')
      setAlbums(data)
    }
    const getUsers = async () => {
      const data = await fetchData('http://jsonplaceholder.typicode.com/users')
      setUsers(data)
    }

    getPhotos()
    getAlbums()
    getUsers()
  }, [])

  const fetchData = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    return data
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PhotoListView photosData={photos}/>}>
        </Route>
        <Route path="/photo/:id" element={<PhotoFullSizeView photosData={photos}/>}>
        </Route>
        <Route path="/user/:id" element={<UserView usersData={users}/>}>
        </Route>
        <Route path="/album/:id" element={<FullAlbumView/>}>
        </Route>
        <Route path="/albums" element={<AlbumView photosData={photos}/>}>
        </Route>
      </Routes>
  </Router>
    
  );
}

export default App;
