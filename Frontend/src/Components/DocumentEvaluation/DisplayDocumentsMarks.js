import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "../TopicAcceptance/topicAccept.css";
import DocumentMarksReport from "./DocumentMarksReport.js"
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

export default function DisplayDocumentMarks() {
  let navigate = useNavigate();
  const [request, setRequest] = useState([]);
  const [preType, setPreType] = useState("");

  useEffect(() => {
    const type = "Scrum Documentation";
    axios
      .get(`http://localhost:8070/presentationMarks/marks/${type}`)
      .then((res) => {
        console.log(res.data);
        setRequest(res.data);
      })
      .catch((err) => {
        alert(err);
      });
    setPreType(type);
  }, []);

  return (
    <div>
      <div className="topicContainer">
        <div className="leftTopic">
          <div className="topicTop">
            SLIIT <br />
            RESEARCH
          </div>
          <button
            className="btn btn-warning btn-lg ms-3 mt-5"
            onClick={() => DocumentMarksReport(preType, request)}
          >
            <DownloadOutlinedIcon /> &nbsp; Document Marks
          </button>
        </div>
        <div className="container">
          <div className="topicNam">DOCUMENTS</div>
          <hr className="topicHr" />
          <table className="table frame">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">GroupID</th>
                <th scope="col">Total Marks</th>
              </tr>
            </thead>
            <tbody>
              {request.map((data, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.projectId}</td>
                  <td>{data.totalMarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
