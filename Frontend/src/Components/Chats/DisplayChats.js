import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { GlobalState } from "../../GlobalState";
import "../TopicAcceptance/topicAccept.css";

export default function DisplayChats() {
  const navigate = useNavigate();
  const state = useContext(GlobalState);
  const [crrUser, setCrrUser] = state.UserAPI.crrUser;
  const [groupId, setGroupId] = useState("");
  const [auther, setAuther] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [time, setTime] = useState("");

  const [forums, setForums] = useState([]);
  const [allReply, setAllReply] = useState([]);

  //const email = crrUser.email;
  // console.log(email);

  useEffect(() => {
    const forum = axios
      .get(`http://localhost:8070/member/${crrUser.email}`)
      .then((res) => {
        setGroupId(res.data.GroupID);
      })
      .catch((err) => {});
  });

  const getChat = async () => {
    const chat = await axios
      .get(`http://localhost:8070/chatForum/${groupId}`)
      .then((res) => {
        setForums(res.data);
      })
      .catch((err) => {});
  };

  getChat();

  //get Reply
  // const getReply = async () => {
  //   const reply = await axios
  //     .get(`http://localhost:8070/chatReply/${fid}`)
  //     .then((res) => {
  //       setAllReply(res.data);
  //     });
  // };
  // getReply();

  const getForumDetails = (forum) => {
    let { _id } = forum;
    localStorage.setItem("forID", _id);
    localStorage.setItem("groupID", groupId);
    navigate("/oneForum");
  };

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
          <div className="topicNam">GROUP - {groupId}</div>
          <hr className="topicHr" />

          {/* card */}
          {forums.map((forum, index) => (
            <div
              key={index}
              className="cardChat"
              onClick={() => getForumDetails(forum)}
            >
              <h6 className="titleChat">{forum.topic}</h6>
              <h6 className="ms-3">
                by <b className="chatBody"> {forum.auther}</b> - {time}
              </h6>{" "}
              <br />
              <h6 className="ms-3">{forum.message}</h6>
              <a className="btChat" onClick={() => getForumDetails(forum)}>
                View
              </a>
            </div>
          ))}
          {/* Reply */}
          {/* {allReply.map((rep, index) => (
            <div className="cardChaReply" key={index}>
              <h6 className="titleChat">
                {" "}
                <h6>Reply : {rep.title}</h6>
              </h6>
              <h6 className="ms-3">
                by <b className="chatBody"> {rep.name}</b> - {rep.createdAt}
              </h6>{" "}
              <br />
              <h6 className="ms-3">{rep.reply}</h6>
              <a className="btChat" href="/reply">
                Reply
              </a>
              {rep.userId === crrUser._id ? (
                <div className="btnChtGroup">
                  <a
                    className="btChatEdit"
                    href="#"
                    visible={rep.userId === crrUser._id}
                  >
                    Edit
                  </a>

                  <a
                    className="btChatDelete"
                    href="#"
                    visible={rep.userId === crrUser._id}
                  >
                    Delete
                  </a>
                </div>
              ) : (
                ""
              )}
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}
