import { useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setError, setJobs } from "../redux/jobSlice";
import "react-toastify/dist/ReactToastify.css";
import Filter from "../components/Filter";

const JobList = () => {
  const state = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3040/jobs")
      .then((res) => dispatch(setJobs(res.data)))
      .catch((error) => dispatch(setError(error)));
  }, []);
  console.log("state burda ", state);
  return (
    <div className="list-page">
      <Filter />
      <h3 className="job-count">
        Bulunan ({state?.mainJobs.length}) iş arasinda ( {state?.jobs.length})
        tanesini goruntuluyorsunuz
      </h3>
      <section className="job-list">
        {/*Eger ki API dan cevap bekleniyorsa*/}
        {!state.initialized && <p>Loading...</p>}
        {state.initialized && !state.isError ? (
          state.jobs.map((job) => {
            return <Card key={job.id} job={job} />;
          })
        ) : (
          <p>Sorry an error occured</p>
        )}
      </section>
    </div>
  );
};

export default JobList;
