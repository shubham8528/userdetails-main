/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react"
import { useHistory } from "react-router"
import './index.css'


const Login = () => {

    let [getemail, setemail] = useState()
    let [getpassword, setpassword] = useState()
    let a = useHistory()

    

    let buttonclick = () => {
        if (getemail === 'shubhambisht0123@gmail.com' && getpassword === '1234') {
            a.push('/loading')
                   }
                   else{
                   alert('Invalid User')
                   }
    }
    return (<>

        <section className="vh-100" style={{ backgrounColor: "#9A616D" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: "1rem" }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img
                                        src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/img1.jpg"
                                        alt="login form"
                                        className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }}
                                    />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <form>
                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <img src="https://media.glassdoor.com/sql/2866689/etelligens-technologies-squarelogo-1582700164298.png" style={{ width: '100px' }} alt="image not found" />
                                                <span className="p pl-3 fw-bold mb-0">Etelligens Technologies Pvt Ltd</span>
                                            </div>

                                            <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h5>

                                            <div className="form-outline mb-4">
                                                <input type="email" id="form2Example17" onChange={(v) => { setemail(v.target.value) }} className="form-control form-control-lg" />
                                                <label className="form-label" for="form2Example17">Email address</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form2Example27" onChange={(v) => { setpassword(v.target.value) }} className="form-control form-control-lg" />
                                                <label className="form-label" for="form2Example27">Password</label>
                                            </div>

                                            <div className="pt-1 mb-4">
                                                <button className="btn btn-dark btn-lg btn-block" onClick={buttonclick} type="button">Login</button>
                                            </div>

                                            <a className="small text-muted" href="#!">Forgot password?</a>
                                            <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don't have an account? <a href="#!" style={{ color: "#393f81" }}>Register here</a></p>
                                            <a href="#!" className="small text-muted">Terms of use.</a>
                                            <a href="#!" className="small text-muted">Privacy policy</a>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>)


}



export default Login