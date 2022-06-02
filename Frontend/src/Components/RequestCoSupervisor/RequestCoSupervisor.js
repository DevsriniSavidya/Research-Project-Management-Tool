import React, {useEffect, useState} from "react";
import axios from "axios";
import swal from "sweetalert";
import {useNavigate} from "react-router-dom";


export default function RequestCoSupervisor() {
        let navigate = useNavigate();
        const[researchSupervisor,setResearchSupervisor] = useState("");
        const[researchCategory,setResearchCategory]=useState("");
        const[groupID,setGroupID]=useState("");
        const[groupLeaderEmail,setGroupLeaderEmail]=useState("");
        const[researchTopicName,setResearchTopicName]=useState("");
        const[comments,setComments]=useState("");
        const[coSupervisor,setCoSupervisor] = useState("");
        const [requestID, setRID] = useState("");



        useEffect(() => {
            let rid = localStorage.getItem("rid");

            axios
                .get(`http://localhost:8070/requestSV/${rid}`)
                .then((res) => {
                    setResearchSupervisor(res.data.researchSupervisor);
                    setResearchCategory(res.data.researchCategory);
                    setGroupID(res.data.groupID);
                    setGroupLeaderEmail(res.data.groupLeaderEmail);
                    setResearchTopicName(res.data.researchTopicName);
                    setComments(res.data.comments);
                    console.log(res.data);
                })
                .catch((err) => {
                    alert(err);
                });

            setRID(rid);
        }, []);


        const setData = async (coSupervisor) => {
            const newValue = {
                coSupervisor,
            };


            const update = await axios
                .put(`http://localhost:8070/requestSV/${requestID}`, newValue)
                .then(() => {
                    swal("Request Send!");
                    navigate("/displayCoSupervisors");
                })
                .catch((err) => {
                    swal(`Something went wrong !!!`);
                });
        };

        return(

            <div className="container">
                <br/>
                <div className="card">
                    <div className="card-body">
                        <h1>
                            <center>Request Co-supervisor</center>
                        </h1>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">

                        <form>

                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="col-md-12">

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label> Group ID :</label>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" value={groupID}  disabled={true}/>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <label> Group Leader Email :</label>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" value={groupLeaderEmail}  disabled={true}/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label> Research Category :</label>
                                                        <div className="form-group">
                                                            <input type="text"  className="form-control" value={researchCategory}  disabled={true}/>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <label>Research Topic Name : </label>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" value={researchTopicName} disabled={true}/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <label>Research Supervisor : </label>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" value={researchSupervisor} disabled={true}/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <label>Comments : </label>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" value={comments} disabled={true}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">form</h5>
                                            <div className="col-md-12">
                                                <label>Research Co-Supervisor : </label>
                                                <div className="form-group">
                                                    <select className="form-select" aria-label="Default select example" value={coSupervisor} onChange={e => setCoSupervisor(e.target.value)}>
                                                        <option selected>Select Co-Supervisor</option>
                                                        <option value="Wade">Wade</option>
                                                        <option value="Smith">Smith</option>
                                                    </select>
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-md-6">
                                                    <center>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-success btn-lg"
                                                            onClick={() => setData({coSupervisor})}
                                                        >
                                                            &nbsp;Accept
                                                        </button>
                                                    </center>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
