/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import axios from "axios"
import { useEffect, useState } from "react"
import Navbaar from "./Navbaar"


let Contact = () => {
    let [name, setname] = useState()
    let [email, setemail] = useState()
    let [phone, setphone] = useState()
    let [gender, setgender] = useState()
    let [feedback, setfeedback] = useState()
    // let [filltime, settime] = useState()
    console.log(gender)



    // useEffect(() => {
    //     let getting = new Date().toLocaleTimeString()
    //     settime(getting)
    // })




    let buttonaction = () => {
        axios.post(`https://60dadebc801dcb0017290c2f.mockapi.io/formsubmit`, {
            name: name,
            gender: gender,
            email: email,
            phone: phone,
            feedback: feedback,


        }
        ).then((response) => { console.log(response.data) }).catch((error) => { console.log(error + 'somthing is error') })


    }

const MyRefun=(e)=>{
    if(isNaN(e.key)){
        e.preventDefault()
    }
}
    return (
        <><Navbaar />

            <section className="mb-4 p-5" >
                <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>

                <p className="text-center w-responsive mx-auto mb-5">
                    Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>

                <div className="row">
                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">


                            <div className="row">

                                <div className="col-md-6">
                                    <label for="name" className="">Your name</label>
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" onChange={(v) => { setname(v.target.value) }} name="name" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <label for="select" className="">Gender</label>
                                    <select class="form-select" onChange={(e) => { setgender(e.target.value) }} style={{ width: '200px' }} aria-label="Default select example">
                                        <option selected>Select Gender </option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>


                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <label for="email" className="">Your email</label>
                                        <input type="text" id="email" onChange={(v) => { setemail(v.target.value) }} name="email" className="form-control" />
                                    </div>
                                </div>


                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <label for="subject" className="">Phone No</label>
                                        <input type="text" id="subject" onKeyPress={ (e)=>MyRefun(e)} name="subject" className="form-control" />
                                    </div>
                                </div>
                            </div>



                            <div className="row">
                                <div className="col-md-12">

                                    <div className="md-form">
                                        <label for="message">Feedback</label>
                                        <textarea type="text" id="message" name="message" onChange={(v) => { setfeedback(v.target.value) }} rows="2" className="form-control md-textarea"></textarea>
                                    </div>

                                </div>
                            </div>


                        </form>

                        <div className="text-center text-md-left">
                            <button className="btn btn-primary" onClick={buttonaction}>
                                Send</button>
                        </div>
                        <div className="status"></div>
                    </div>

                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                <p>Sector-62, Noida, Uttar Pradesh</p>
                            </li>

                            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                <p>+ 852 8340 933</p>
                            </li>

                            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                <p>shubhambisht0123@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>

        </>
    )
}
export default Contact