import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import './Form.css';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [name, setName] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [github, setGithub] = useState('')
   const [image,setImage] = useState('');
   const [email,setEmail] = useState('');
   const [phone,setPhone] = useState('');
   const navigate = useNavigate()

  //  axios.defaults.baseURL='https://studentprofileshowcase.onrender.com';
  //  axios.defaults.withCredentials =true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(name){
    await axios.post("https://studentprofileshowcase.onrender.com", { name,email,phone, linkedin, github, image})
      .then(result => console.log(result))
      .catch(err => console.log(err))
  
    navigate('/card')
    }

  } 
  
  const handleFileUpload = async (e) =>{
      const file =e.target.files[0];
     const base64 = await coverToBase64(file);
     console.log(base64);
     setImage(base64);
     
     }


     



  return (

    // <form onSubmit={handleSubmit}>

    //  <label> name:</label>  
    //   <input type="text" onChange = {(e)=> setName(e.target.value)}/>
      
     

    //  <label>email:</label>
    //   <input type="email" onChange = {(e)=> setemail(e.target.value)}/>
   
    //  <label>phone:</label> 
    //   <input type="tel" onChange = {(e)=> setphone(e.target.value)} />
   
      
    //   <input type="submit"/>



    // </form>


    <form onSubmit={handleSubmit}>
  <label htmlFor="name">
    Name<span className="required">*</span>:
  </label>
  <input type="text" id="name" name="name" required="" 
  onChange = {(e)=> setName(e.target.value)} placeholder='Your Name'/>


<label htmlFor="email">
    Email<span className="required">*</span>:
  </label>
  <input type="email" id="name" name="name" required="" 
  onChange = {(e)=> setEmail(e.target.value)} placeholder='Your Email'/>




<label htmlFor="phone">
    Phone No:<span className="required">*</span>:
  </label>
  <input type="tel" id="name" name="name" required="" 
  onChange = {(e)=> setPhone(e.target.value)} placeholder='your Phone'/>


  <label htmlFor="linkedin">
    LinkedIn Link<span className="required">*</span>:
  </label>
  <input
    type="url"
    id="linkedin"
    name="linkedin"
    placeholder="Eg: https://www.linkedin.com/in/yourprofile"
    required=""
    onChange = {(e)=> setLinkedin(e.target.value)}
  />
  <label htmlFor="github">
    GitHub Link<span className="required">*</span>:
  </label>
  <input
    type="url"
    id="github"
    name="github"
    placeholder="Eg: https://github.com/yourusername"
    required=""
    onChange = {(e)=> setGithub(e.target.value)}
  />
  <label htmlFor="image">Image Upload:</label>
  <input type="file" id="image" name="image" accept="image/*" onChange={handleFileUpload}/>
  <label htmlFor="resume">Resume Upload:</label>
  <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" />
  <button className="button" type="submit">Submit</button>
</form>

 
  )
}

export default Form


  

  
function coverToBase64(file){
  return new Promise((resolve,reject)=> {
    var fileReader = new FileReader()
    fileReader.readAsDataURL(file);
    fileReader.onload = ()=>{
     resolve(fileReader.result)
    };
    fileReader.onerror =(error) => {
      reject(error)
    }
  })
}
