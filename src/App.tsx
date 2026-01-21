import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./assets/pages/LoginPage";
import RegisterPage from "./assets/pages/RegisterPage";
import HomePage from "./assets/pages/HomePage";
import DaftarSaya from "./assets/pages/DaftarSaya";

type Movie = {
  id: number;
  image: string;
  isWatched?: boolean;
};

function App() {
  const [myList, setMyList] = useState<Movie[]>([]);
  const addToMyList = (movie: Movie) => {
    const exists = myList.some((item) => item.id === movie.id);
    if (exists) return;
    setMyList([...myList, { ...movie, isWatched: false }]);
  };

  const removeFromMyList = (id: number) => {
    setMyList(myList.filter((item) => item.id !== id));
  };

  const onToggleWatched = (id: number) => {
    setMyList((prev) =>
      prev.map((movie) =>
        movie.id === id ? { ...movie, isWatched: !movie.isWatched } : movie,
      ),
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/home"
          element={<HomePage myList={myList} onAddToMyList={addToMyList} />}
        />

        <Route
          path="/daftarsaya"
          element={
            <DaftarSaya
              myList={myList}
              onRemove={removeFromMyList}
              onToggleWatched={onToggleWatched}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
