import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SendIcon from "@mui/icons-material/Send";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components";
//import document from "../../";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import swal from "sweetalert";
import "../TopicAcceptance/topicAccept.css";

export default function AddMember() {
  let navigate = useNavigate();
  const [ members,  setMembers] = useState([]);
   const [topicName, setTopicName] = useState();
  const [groupID, setGroupId] = useState();
  const [toCategory, setToCategory] = useState();
  const [tid, setTid] = useState();
  const [leaderMail,setLeaderMail]=useState("");
  const [chekMembers,setChekMembers]=useState([
    { id: "", name: "", regNumber: "" },
  ]);

  useEffect(() => {
    let id = localStorage.getItem("tid");
    let groupID = localStorage.getItem("groupid");
    let researchArea = localStorage.getItem("category");
    let topicName = localStorage.getItem("topic");
    let leaderMail = localStorage.getItem("leaderMail");
    setTopicName(topicName);
    setLeaderMail(leaderMail)
    //console.log(tCategory);

    axios
      .get(`http://localhost:8070/user/info/${researchArea}`)
      .then((res) => {
          console.log(res.data);
        setMembers(res.data);
        // setToCategory(res.data.topicCategory);
        // setGroupId(res.data.groupID);
        // setEmail(res.data.groupLeaderEmail);

        // const newValue = {
        //     groupID,
        //     researchArea,
        // };
    
        axios
          .get(`http://localhost:8070/allocatePanel/member/${groupID}`)
          .then((res) => {
            //swal("sent feedback")
            //navigate("/topics");
            console.log(res.data)
            setChekMembers(res.data.panelMembers);
          })
          .catch((err) => {
            swal(`Something went to wrong !!!`);
          });



      })
      .catch((err) => {
        alert(err);
      });

      

      
    setTid(id);
    setToCategory(researchArea);
    setGroupId(groupID);
  }, []);

  const setData = async (data) => {

    let {_id,researchArea,name,regNumber,email} = data

    

    const newMember = {
        groupID,
        researchArea,
         _id,
        name,
        regNumber,
        email,
        topicName,
        leaderMail
    };

    const update =  axios
      .put(`http://localhost:8070/allocatePanel/member`, newMember)
      .then(() => {
        swal(`${name} add to the ${groupID} group`)
        window.location.reload()
        //navigate("/topics");
      })
      .catch((err) => {
        swal(`Something went to wrong !!!`);
      });
  };

  const setDelete = async (data) => {

    let {_id,name,regNumber} = data

    

    const removeMember = {
        groupID,
        name,
        regNumber
    };

    const update =  axios
      .post(`http://localhost:8070/allocatePanel/remove/${_id}`, removeMember)
      .then(() => {
        swal(`${name} remove in the ${groupID} group panel`)
        window.location.reload()
        //navigate("/topics");
      })
      .catch((err) => {
        swal(`Something went to wrong !!!`);
      });
  };

console.log(chekMembers.find((data)=>(data.id=='6294e47b90dc134fa04a4d')))

  return (
    <div>
      <div className="topicContainer">
        <div className="leftTopic">
          <div className="topicTop">
            SLIIT <br />
            RESEARCH
          </div>
        </div>
        <div className="container">
          <div style={{marginLeft:"20px"}} className="topicName">{groupID} GROUP PANEL  MEMBERS</div>
          <hr className="topicHr" />
          <table className="table frame">
            <thead>
              <tr>
                <th scope="col"><center>#</center></th>
                <th scope="col"><center>Member ID</center></th>
                <th scope="col"><center>Name</center></th>
                <th scope="col"><center>Email</center></th>
                <th scope="col"><center>Interested Field</center></th>
                <th scope="col"><center>Action</center></th>
              </tr>
            </thead>
            <tbody>
              { members.map((data, index) => (
                <tr key={index}>
                    <th scope="row"><center>{index + 1}</center></th>
                  <th><center>{data.regNumber}</center></th>
                  <td><center>{data.name}</center></td>
                  <td><center>{data.email}</center></td>
                  <td><center>{data.researchArea}</center></td>
                  <td>
                  
                    <center>
                   {chekMembers.find((cdata)=>(cdata.id==`${data._id}`))==null?(
                    <button
                    //   disabled={
                    //     data.topicStatus === "pending" ||
                    //     data.topicStatus === "Rejected"
                    //   }
                      onClick={() => setData(data)}
                      className="btn btn-warning ms-3"
                    >
                      <b>+  Add</b>
                    </button>
                    ):<button
                    // disabled={
                    //   data.topicStatus === "pending" ||
                    //   data.topicStatus === "Rejected"
                    // }
                    onClick={() => setDelete(data)}
                    className="btn btn-danger ms-3"
                  >
                    <b>-  Remove</b>
                  </button>}
                    </center>
                  
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* { chekMembers.map((mdata,index) => (mdata. ))} */}
          
        </div>
      </div>
    </div>
  );
}
