import axiosInstance from "./axiosInstance";

export const getMovies = async () => {
  const res = await axiosInstance.get("/movies");
  return res.data;
};
export const addMovie = async (data: {
  title: string;
  poster: string;
  watched: boolean;
}) => {
  const res = await axiosInstance.post("/movies", data);
  return res.data;
};

export const deleteMovie = async (id: string) => {
  await axiosInstance.delete(`/movies/${id}`);
};
export const updateMovie = async (id: string, data: { watched: boolean }) => {
  await axiosInstance.put(`/movies/${id}`, data);
};
