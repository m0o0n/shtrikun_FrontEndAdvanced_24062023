
import { lazy, Suspense } from 'react';
import './App.css';
import { Layout } from './components/Layout';
import { Routes, Route } from "react-router-dom";

const Home = lazy(()=> import('./pages/Home'))
const Users = lazy(()=> import('./pages/Users'))
const AlbumPhotos = lazy(()=> import('./pages/AlbumPhotos'))
const UserAlbums = lazy(()=> import('./pages/UserAlbums'))

const App =()=> {
  return (
    <div>
     <Routes>
        <Route path='/' element={<Layout />}>
            <Route path='' element={<Suspense ><Home /></Suspense>} />
            <Route path='users' element={<Suspense ><Users /></Suspense>} />
            <Route path='user/:userId/albums' element={<Suspense ><UserAlbums /></Suspense>} />
            <Route path='albums/:albumId/photos' element={<Suspense ><AlbumPhotos /></Suspense>} />
        </Route>
     </Routes>
    </div>
  );
}

export default App;
