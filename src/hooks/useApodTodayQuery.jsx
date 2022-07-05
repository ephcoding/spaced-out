import { useQuery } from "react-query";

export const useApodTodayQuery = () => {
  return useQuery(["APOD", "today"], async () => {
    const raw = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}`
    );
    return await raw.json();
  });
};
