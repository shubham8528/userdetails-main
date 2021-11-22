/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/img-redundant-alt */

import axios from "axios"
import { useEffect, useState } from "react";
import Navbaar from "./Navbaar";


let Costumerdetails = () => {

    let [getdata, setdata] = useState([])

    useEffect(() => {
        let fatch = axios.get(`https://60dadebc801dcb0017290c2f.mockapi.io/formsubmit`);
        fatch.then((val) => {
            setdata(val.data)
            console.log(val.data)
        }
        );

    }, [])



    return (

        <><Navbaar />
            <h1 style={{ textAlign: 'center', margin: '10px' }}>Details Of All Users</h1>
            <div className="cards" >
                {
                    getdata.map((getdata) => {
                        console.log(getdata.time)
                        return (<>
                            <div className="card-boxs" >
                                <img className="card-img-tops" src={(getdata.gender === 'Male') ? "https://icon-library.com/images/3_avatar-512.png" : 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png'} alt="Card image cap" />
                                <p><strong>Name :</strong> <p>{getdata.name}</p></p>
                                <p><strong>Gender :</strong><p> {getdata.gender}</p></p>
                                <p><strong>Email :</strong><p> {getdata.email}</p></p>
                                <p><strong>Phone No :</strong><p> {getdata.phone}</p></p>
                                <p><strong>Feedback :</strong> <p>{getdata.feedback}</p></p>

                            </div>

                        </>)

                    })
                }
            </div>
        </>
    )
}

export default Costumerdetails