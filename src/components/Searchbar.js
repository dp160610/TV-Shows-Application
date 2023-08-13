import { useState, useContext } from "react";

// Context
import ShowsContext from "../context/shows/showsContext";
import AlertsContext from "../context/alerts/alertsContext";
import { Button, Grid } from "@mui/material";
import moment from 'moment'
// Components
import Alert from "./Alert";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const showsContext = useContext(ShowsContext);
  const { searchShows, getFullShows, getTodayShows } = showsContext;
  const { alert, setAlert } = useContext(AlertsContext);

  const onSearchHandler = () => {
    if (searchTerm === "") {
      setAlert("Please enter something", "danger");
    } else {
      searchShows(searchTerm);
    }
  };

  const handleScheduleWithDate = () => {
    if (searchTerm === "") {
      getFullShows()
    } else {
      const isValid = moment(searchTerm, 'YYYY-MM-DD', true).isValid();
      if (isValid) {
        getTodayShows(searchTerm)
      } else {
        setAlert("Please enter valid format", "danger");
      }
    }
  }

  return (
    <div className="searchbar">
      {alert ? <Alert message={alert.message} type={alert.type} /> : null}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <input
              type="text"
              placeholder="Search For Tv Show"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 17px",
                border: "1px solid var(--dark-color)",
                background: "var(--offwhite-color)",
                color: "var(--dark-color)",
                fontSize: "20px",
                outlineWidth: "0ch",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{ width: '100%' }}
              onClick={onSearchHandler}
            >
              SEARCH
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" sx={{ width: '100%' }} onClick={handleScheduleWithDate}>
              Get Full Schedule
            </Button>
          </Grid>
        </Grid>
    </div>
  );
};

export default Searchbar;
