import Navbaar from './Navbaar'
import Servicepath from './Servicespath'


let Services = () => {
    return (
        <><Navbaar />
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}>
                {Servicepath.map((val) => {
                    return (
                        <>
                            <div className="card  m-3 " style={{ width: '350px' }}>
                                <img
                                    src={val.image}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{val.title}</h5>
                                    <p className="card-text">
                                        {val.info}
                                    </p>
                                    <a href="#!" className="btn btn-primary">Button</a>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}
export default Services