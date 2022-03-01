import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import AlbumList from "./components/AlbumList";
import FullSizePhoto from "./components/FullSizePhoto";
import UserInfo from "./components/UserInfo";
import PhotoList from "./components/PhotoList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AlbumPhotos from "./components/AlbumPhotos";

function App() {
  const [photos, setPhotos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    const getPhotos = async () => {
      const data = await fetchData(
        "http://jsonplaceholder.typicode.com/photos"
      );
      setPhotos(data);
    };
    const getAlbums = async () => {
      const data = await fetchData(
        "http://jsonplaceholder.typicode.com/albums?_limit=10"
      );
      setAlbums(data);
    };
    const getUser = async () => {
      const data = await fetchData(
        "http://jsonplaceholder.typicode.com/users/1"
      );
      setUser(data);
    };

    getPhotos();
    getAlbums();
    getUser();
  }, []);

  const fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  };

  return (
    <Router>
      <Container align="center">
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={<PhotoList photosData={photos} />}
          ></Route>
          <Route
            path="/photos/:id"
            element={<FullSizePhoto photosData={photos} />}
          ></Route>
          <Route
            path="/my_account"
            element={<UserInfo userData={user} />}
          ></Route>
          <Route
            path="/albums/:id"
            element={<AlbumPhotos photosData={photos} albumsData={albums} />}
          ></Route>
          <Route
            path="/albums"
            element={<AlbumList albumsData={albums} />}
          ></Route>
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
