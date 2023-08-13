import { Grid, CircularProgress } from "@mui/material";
import { useContext, useEffect } from "react";
import ShowsContext from "../context/shows/showsContext";
import Searchbar from '../components/Searchbar';
import ListItem from '../components/ListItem';
import moment from 'moment';

const Homepage = () => {
  const showsContext = useContext(ShowsContext);
  const { loading, shows, getTodayShows } = showsContext;

  useEffect(() => {
    getTodayShows(moment(new Date()).format('YYYY-MM-DD'));
  }, []);

  return (
    <div className="homepage">
      <Searchbar />
      {loading ? (
        <div className="loader-container">
          <CircularProgress />
        </div>
      ) : (
        <Grid container spacing={2} className="homepage__list">
          {shows.map((item) => (
            <ListItem
              key={item.show.id}
              id={item.show.id}
              image={
                item.show.image
                  ? item.show.image.medium
                  : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png"
              }
              name={item.show.name}
              rating={
                item.show.rating.average
                  ? item.show.rating.average
                  : "No rating"
              }
            />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Homepage;
