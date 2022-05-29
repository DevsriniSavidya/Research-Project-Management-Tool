import axios from "axios";
import { useState,useEffect } from "react";
import { useHistory} from 'react-router-dom';
import { OutlinedInput,Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import styles from "./styles.module.css";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import FileInput from '../template/FileInput/fileInput';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import Grid from "@material-ui/core/Grid";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@material-ui/core/TextField";
import upload from "../../upload.png";
// import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";


    

    
    // const [data, setData] = useState({
    //     adminName: "",
    //     subTypeName: "",
    //     subTypeDiscription: "",
    //     submition: "",
    // });


const AddSubmissiontype= ()=>{

    let [showResults, setShowResults] = useState(false)
    let navigate = useNavigate();

    //const [specialization, setSpecialization] = useState("");
    //const [adminName,setAdminName]=useState("vishwa")
    // const [subTypeName,setSubTypeName] = useState("")
    // const [subTypeDiscription,setSubTypeDiscription] = useState("")
    // const [submission,setSubmission] = useState("test1")

    const [data, setData] = useState({
            adminName:"test",
            subTypeName:"",
            subTypeDiscription:"",
            template:"",
            templateTitle: "",
		        templateDiscription: "",
	});

    

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};


    const handleInputState = (name, value) => {
		setData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault()
        // const data ={
        //     adminName:"vishwa",
        //     subTypeName,
        //     subTypeDiscription,
        //     template,

        //    }
		try {
			//const url = process.env.REACT_APP_API_URL + "/addtemplate"
           

            const { data : res } =  axios.post('http://localhost:8070/submission/addSubType', data).then(()=>{
				          console.log(data)
                alert("create sucsesfull")
                navigate("/displaysub");
			  //history.push('/display');
			})
			
		} catch (error) {
			console.log(error)
            alert("create fail")
		}
	};

  //   //handle specialization
  // const handleChangeDropDown = (event) => {
  //   //setSpecialization(event.target.value)

  //   handleChange(data.subTypeName) = setData(event.target.value) ;
  // };


    return(
    
        <div className="container" align="center">


        <div className="row">
            <div className="col-12">
                <div className="mb-3 mt-3">
                  <center> <h2>CREATE SUBMISSION TYPE</h2></center> 
                </div>
            </div>
        </div>

 
  <form className={styles.form} onSubmit={handleSubmit}  >  

                <div className="row"> 
                
                <div className="col-8">
                    <div className="row">
                
            <div className={styles.submission_container} >
                    {/* <Grid>
                    <label>Submission Type Name : </label>
                    <OutlinedInput
                        type="text"
                        name="subTypeName"
                        label="Submission type Name"
                        required
                        id="name"
                        placeholder="Type Name"
                        onChange={handleChange}
                        value={data.subTypeName}
                        //onChange={(e) => setSubTypeName (e.target.value)}
                        
                     />
                     </Grid> */}
                <div>
                <InputLabel style={{width:"400px"}} id="demo-simple-select-label">
                    <b>Submission type Name:</b>
                    </InputLabel>
                  <select
                  required
                  name="subTypeName"
                  value={data.subTypeName}
                  onChange={handleChange}
                  className="form-select form-select-sm"
                  data-style="btn-warning"
                    aria-label=".form-select-sm example">
                    <option selected>Select Type</option>
                    <option value={"ProposalPresentation"}>Proposal Presentation</option>
                    <option value={"ProgressPresentation"}>Progress Presentation</option>
                    <option value={"CharterDocumentation"}>Charter Documentation</option>
                    <option value={"ScrumDocumentation"}>Scrum Documentation</option>
                    <option value={"ProgressDocumentation"}>Progress Documentation</option>
                    <option value={"FinalDocumentation"}>Final Documentation</option>
                  </select>
                  </div>


                
                   <br/>  

                 
                        

          {/* <MuiThemeProvider > */}
            


                <div className={styles.song_info}>
                <InputLabel id="demo-simple-select-label">
                    <b>Submission Discription:</b>
                    </InputLabel>
                <OutlinedInput
                    fullWidth
                    multiline
                    label="Submission type Description"
                    
                    name="subTypeDiscription"
                    value={data.subTypeDiscription}
                    onChange={handleChange}
                    InputProps={{
                        inputComponent: TextareaAutosize,
                        rows: 3
                    }}
                    
                    // onChange={(e) => setSubTypeDiscription(e.target.value)}
          
                />
                </div>

                </div>
                <div className="row-xl-6 mb-3 ml-auto">
    <Container>  
    <ContentMeta>  

        <br/> <br/> 

          <p>
                <Player >
            <StyledLink  role="button"  data-bs-toggle="collapse" onClick={()=>setShowResults(true)} to="#collapseExample" aria-expanded="false" aria-controls="collapseExample" >
           <img src={upload} alt="" />&nbsp;
           <span><b>Upload Template Now</b></span>
           </StyledLink>
           
         </Player>
         </p>
            
         { showResults ?(
            <div class="collapse" id="collapseExample" className={styles.songs_container} styles style={{width:"700px"}}>

                     <Grid style={{marginRight:"220px"}}>
                    <InputLabel id="demo-simple-select-label">
                    <b>Submission Template Name :</b>
                    </InputLabel>
                    <OutlinedInput
                        style={{height:"30px",width:"280px"}}
                        type="text"
                        name="templateTitle"
                        label="Submission type Name"
                        required
                        id="name"
                        placeholder="Type Name"
                        onChange={handleChange}
                        value={data.templateTitle}
                        //onChange={(e) => setSubTypeName (e.target.value)}
                        
                     />
                     </Grid>


                     <Grid style={{marginRight:"100px"}} className={styles.song_info}>
                <InputLabel id="demo-simple-select-label">
                    <b>Template Discription:</b>
                    </InputLabel>
                <OutlinedInput
                    style={{width:"400px"}}
                    fullWidth
                    multiline
                    label="Submission type Description"
                    required
                    name="templateDiscription"
                    value={data.templateDiscription}
                    onChange={handleChange}
                    InputProps={{
                        inputComponent: TextareaAutosize,
                        rows: 3
                    }}
          
                />
                </Grid>


            <FileInput
            name="template"
            label="Choose Document"
            handleInputState={handleInputState}
            type="document"
            value={data.template}
            />
            </div>
         ): null }
            </ContentMeta>  
      </Container>       
           
          {/* </MuiThemeProvider> */}
                    </div>   
                       

                    </div >
                </div>
                  </div>
                  <center>
                 <div style={{paddingTop: '20px'}}  className="col-xl-12">
                      <Button  type="submit" className="btn btn-primary mt-5 "  >CREATE</Button>
                </div>
                </center>
            </form>  
           
          </div>  
            
            

        );

}

const Container = styled.div`
 position: relative;
 min-height: calc(100vh-250px);
 overflow-x: hidden;
 display: block;
 top: 72px;
 padding: 0 calc(3.5vw + 5px);
`;

const ContentMeta = styled.div`
 max-width: 874px;
`;

const Form = styled.div`
   
    width: 80%;
    padding: 50px;
    background:#f2f2f2;
    border-radius: 5px;
    box-shadow: 5px 5px 10px 0;
    text-align: left;
`;

const Player = styled.button`
 font-size: 15px;
 margin: 0px 22px 0px 0px;
 padding: 0px 24px;
 height: 56px;
 border-radius: 4px;
 cursor: pointer;
 display: flex;
 align-items: center;
 justify-content: center;
 letter-spacing: 1.8px;
 text-align: center;
 text-transform: uppercase;
 background: rgb (249, 249, 249);
 border: none;
 color: rgb(0, 0, 0);
 img {
   width: 32px;
 }
 &:hover {
   background: rgb(198, 198, 198);
 }
 @media (max-width: 768px) {
   height: 45px;
   padding: 0px 12px;
   font-size: 12px;
   margin: 0px 10px 0px 0px;
   img {
     width: 25px;
   }
 }
`;

const StyledLink = styled(Link)`
   text-decoration: none;
   &:focus, &:hover, &:visited, &:link, &:active {
       text-decoration: none;
   }
`;

export default AddSubmissiontype;