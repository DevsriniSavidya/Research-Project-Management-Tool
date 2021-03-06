import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import updateSupervisorStatus from "./UpdateSupervisorStatus";
import { useNavigate } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function DisplayRequests() {
  let navigate = useNavigate();
  const [RequestSupervisors, setRequestSupervisors] = useState([]);
  const state = useContext(GlobalState);
  const [isLogged, setIsLogged] = state.UserAPI.isLogged;
  const [isAdmin, setIsAdmin] = state.UserAPI.isAdmin;
  const [crrUser, setCrrUser] = state.UserAPI.crrUser;

  useEffect(() => {
    getRequestSV();
  }, []);

  const getRequestSV = async () => {
    const response = await axios.get("http://localhost:8070/requestSV");
    setRequestSupervisors(response.data);
  };

  const setData = (data) => {
    let { _id } = data;

    localStorage.setItem("rid", _id);
    navigate("/updateSupervisorStatus");
  };
  // need to change
  const setDataCoVisor = (data) => {
    let { _id } = data;

    localStorage.setItem("rid", _id);
    navigate("/requestCoSupervisor");
  };


  return (
    <div>
      <div className="container">
        <button
          className="btn btn-warning btn-lg mt-3 mb-3 ms-5"
          onClick={() => navigate("/requestSupervisor")}
        >
          Request Supervisor &nbsp; <AddCircleIcon />
        </button>
        <br />
        <div className="card">
          <div className="card-body">
            <center>
                            <h2>Supervisors Requests</h2>
                        </center>
<br/>
            <table className="table table-bordered table-striped table-responsive-stack">
              <tr>
                <th scope="col">Request No </th>
                <th scope="col">Research Supervisor </th>
                <th scope="col">Research Category </th>
                <th scope="col">Group ID </th>
                <th scope="col">Group Leader Email</th>
                <th scope="col">Research Topic Name </th>
                <th scope="col">Comments </th>
                <th scope="col">Request Status </th>
                <th scope="col">Action </th>
              </tr>

              <tbody>
                {RequestSupervisors.map((data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.researchSupervisor}</td>
                    <td>{data.researchCategory}</td>
                    <td>{data.groupID}</td>
                    <td>{data.groupLeaderEmail}</td>
                    <td>{data.researchTopicName}</td>
                    <td>{data.comments}</td>
                    <td>{data.supervisorStatus}</td>
                    <td>
                      {crrUser.role === "Supervisor" ? (
                        <button
                          className="btn btn-primary"
                          disabled={
                            data.supervisorStatus === "Accepted" ||
                            data.supervisorStatus === "Rejected"
                          }
                          onClick={() => setData(data)}
                        >
                          &nbsp;update
                        </button>
                      ) : (
                        " "
                      )}
                    </td>

                    <td>
                      <button
                        className="btn btn-info ms-3"
                        disabled={
                          data.supervisorStatus === "pending" ||
                          data.supervisorStatus === "Rejected"
                        }
                        onClick={() => setDataCoVisor(data)}
                      >
                        &nbsp;Request Co-Supervisor
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className="btn btn-warning btn-lg mt-3 mb-3"
              onClick={() => navigate("/displayCoSupervisors")}
            >
              Co-Supervisor Requests &nbsp; <QuestionAnswerIcon />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default DisplayRequests;
