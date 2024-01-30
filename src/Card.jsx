import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Card.css'
function Card() {
    // const student = [{
    //     "name":"sanjeev",
    //     "phone":83468920
    // },{
    //     "name":"sanjeev",
    //     "phone":83468920
    // },{
    //     "name":"sanjeev",
    //     "phone":83468920
    // }]
    const [student, setStudent] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5001/users")
            .then(student => setStudent(student.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <>
            <div className="head">
                <h2>Resume Repository</h2></div>


            <div>


                {
                    student.map((student, index) => (
                        <Template key={index} stu={student}> </Template>
                    ))}
                    </div>
        </>
    )
}

export default Card



const Template = ({ stu }) => {
    return (
        <div className='page'>

            <div className='template'>
                <div className='left'>
                    <h2>{stu.name}</h2>
                    <p><span className='bold'>Email: </span> {stu.email}</p>
                    <p><span className='bold'>Phone: </span> {stu.phone}</p>
                    <p><span className='bold'>Linkedin id: </span> {stu.linkedin}</p>
                    <p><span className='bold'>Github id: </span> {stu.github}</p>
                 

                </div>
                <div className='right'>
                    <img src={stu.image} className="image" alt="" />
                </div>
            </div>
        </div>
    )
}