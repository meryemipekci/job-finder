const Card = ({ job }) => {
  // console.log("look for job ", job);

  const { id, position, company, location, status, type, date } = job;

  const getClassName = () => {
    switch (job.status) {
      case "Devam Ediyor":
        return "pending";
      case "Reddedildi":
        return "rejected";
      case "Mülakat":
        return "interview";

      default:
        return "default";
    }
  };

  const spanColor = {
    backgroundColor:
      status === "Mülakat"
        ? "green"
        : status === "Reddedildi"
        ? "red"
        : status === "Devam Ediyor"
        ? "orange"
        : null,
  };

  return (
    <div className="card">
      {/* top part */}
      <div className="head">
        <div className="letter">
          <p>{company[0]}</p>
        </div>

        <div className="info">
          <p> {position}</p>
          <p>{company}</p>
        </div>
      </div>

      {/* button part */}
      <div className="body">
        <div className="field">
          <img src="/img/bag.png" alt="" />
          <p>{location}</p>
        </div>
        <div className="field">
          <img src="/img/bag.png" alt="" />
          <p>{type} </p>
        </div>
        <div className="field">
          <img src="/img/bag.png" alt="" />
          <p>{date} </p>
        </div>
        <div className="status">
          <span style={spanColor}>{status}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
