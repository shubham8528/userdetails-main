/* eslint-disable jsx-a11y/img-redundant-alt */
const Common = (props) => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '80px auto', width: '90%' }} >

                <div id='divanimation'>

                    <img id='imganimation'  src='https://media-exp1.licdn.com/dms/image/C4E0BAQHU-aZ-qrmdDw/company-logo_200_200/0/1617786449860?e=1643846400&v=beta&t=GjNHhSmvuAXLHXsSbEo7Fct4Vy6btPuMpS1XBzF5DaI' alt='not found' />
                </div>

                <div >
                    <div className='col-10 mx-auto'>

                        <div className=' pt-5 pt-lg-0 order-2 order-lg-1 mt-5' id='title'>
                            <h1 style={{ fontSize: '30px' }}> Welcome To <br /> <strong className='text-primary' id='etell'>Etelligens</strong></h1>
                            <h2 className='my-3 text-secondary' style={{ fontSize: '30px' }}>
                                We Are The Team Of Tallented Employee
                            </h2>
                        </div>
                        <button className='signin bg-primary text-white'>Sign in</button>
                    </div>
                </div>
                <div >
                    <img src={props.image} alt='image not found' />
                </div>
            </div>
        </>
    )
}

export default Common