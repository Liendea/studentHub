import { Typography } from "@mui/material";
import { useContext } from "react";
import RegistrationContext from "../../../context/RegistrationContext";
import Box from "@mui/material/Box";
import Buttons from "../../Button/Buttons";

function MyCoursesComponent() {
  let { registrations, setRegistrations } = useContext(RegistrationContext);

  function handleRemove(courseIdToRemove) {
    const updatedRegistrations = registrations.filter(
      (registrations) => registrations.courseId !== courseIdToRemove
    );
    setRegistrations(updatedRegistrations);
  }

  return (
    <Box my="5rem" sx={{ width: "100%" }}>
      <Box textAlign="center" my="3rem">
        <Typography my="5rem" variant="h5" gutterBottom color="secondary">
          Registrerade kurser
        </Typography>
      </Box>

      {!registrations || registrations.length === 0 ? (
        <Typography my="5rem" color="secondary" textAlign="center">
          Du har inga registrerade kurser ännu.
        </Typography>
      ) : (
        <div className="container">
          <div className="row">
            {registrations.map((reg) => (
              <div
                className="col d-flex justify-content-center my-3"
                key={reg.courseId}
              >
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={reg.courseImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{reg.courseTitle}</h5>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">{reg.courseNivå}</li>
                    <li className="list-group-item">{reg.courseDuration}</li>
                    <li className="list-group-item">{reg.coursePrice}</li>
                  </ul>
                  <div className="card-body">
                    <Box
                      display="flex"
                      sx={{ justifyContent: "space-between" }}
                    >
                      <Buttons
                        variant="contained"
                        color="error"
                        onClick={() => handleRemove(reg.courseId)}
                      >
                        Remove
                      </Buttons>
                      <Buttons variant="contained" color="success">
                        Start course
                      </Buttons>
                    </Box>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Box>
  );
}

export default MyCoursesComponent;
