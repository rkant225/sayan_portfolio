import React, { useEffect } from 'react'
import paritosh from '../Assets/paritosh.png';
import rohit from '../Assets/rohit.png';
import deepika from '../Assets/deepika.png';
import deep from '../Assets/deep.png';
import subhodeep from '../Assets/subhodeep.png';
import dheeraj from '../Assets/dheeraj.png';
import deepak from '../Assets/deepak.png';
import abhay from '../Assets/abhay.png';

const Peers = () => {
      
    const handleLeftButtonClick =()=>{
        document.getElementsByClassName('peers-carousel')[0].scrollLeft -= 160;
        
    }
    const handleRightButtonClick =()=>{
        document.getElementsByClassName('peers-carousel')[0].scrollLeft += 160;
    }

    return (
        <>
            <a name="PEERS" ></a>

            <div className="my-peers-container">

                <div className="my-peers-header">My Peers</div>

                
                {/* owl-carousel */}

                {/* <i className="fa fa-arrow-left" aria-hidden="true" onClick={handleLeftButtonClick}></i> */}



                
                {/* <div className="peers-carousel"> */}
                    {/* <div className="slide-track"> */}
                <div className="owl-carousel" style={{width : '95%', margin : 'auto'}}>

                    <div className="peer-card">
                        <img style={{height : '4rem', width : '4rem', margin : 'auto', borderRadius : '50%'}} className="peer-image" src={paritosh} alt="paritosh"/>
                        <div className="peer-name">Paritosh</div>
                        <div className="peer-description">
                            Paritosh is currently working at Cognizant technology solutions as lead .Net developer. His area of expertise is .Net MVC and Oracle/SQL Database.
                        </div>
                    </div>

                    <div className="peer-card">
                        <img style={{height : '4rem', width : '4rem', margin : 'auto', borderRadius : '50%'}} className="peer-image" src={rohit} alt="rohit"/>
                        <div className="peer-name">Rohit</div>
                        <div className="peer-description">
                            Rohit is currently working at Cognizant technology solutions as technical support engineer. His area of expertise is .Net, React JS, Javascript.
                        </div>
                    </div>

                    <div className="peer-card">
                        <img style={{height : '4rem', width : '4rem', margin : 'auto', borderRadius : '50%'}} className="peer-image" src={deepika} alt="deepika"/>
                        <div className="peer-name">Deepika</div>
                        <div className="peer-description">
                            Deepika is currently working at Cognizant technology solutions as Backend developer. Her area of expertise is .Net, Oracle/SQL, Datastage.
                        </div>
                    </div>

                    <div className="peer-card">
                        <img style={{height : '4rem', width : '4rem', margin : 'auto', borderRadius : '50%'}} className="peer-image" src={deepak} alt="deepak"/>
                        <div className="peer-name">Deepak</div>
                        <div className="peer-description">
                            Deepak is currently working at Autodesk as lead Cloud Automation Engineer. His area of expertise is AWS, Cloud, Data science, Javascript.
                        </div>
                    </div>

                    <div className="peer-card">
                        <img style={{height : '4rem', width : '4rem', margin : 'auto', borderRadius : '50%'}} className="peer-image" src={deep} alt="deep"/>
                        <div className="peer-name">Deep</div>
                        <div className="peer-description">
                            Deep is currently working at Cognizant technology solutions as lead React Developer. His area of expertise is .Net MVC and React Js.
                        </div>
                    </div>

                    <div className="peer-card">
                        <img style={{height : '4rem', width : '4rem', margin : 'auto', borderRadius : '50%'}} className="peer-image" src={dheeraj} alt="dheeraj"/>
                        <div className="peer-name">Dheeraj</div>
                        <div className="peer-description">
                            Dheeraj is currently working at Tata Consultency Services as Power BI engineer. His area of expertise is Data Analysis, and Data science engineering.
                        </div>
                    </div>

                    <div className="peer-card">
                        <img style={{height : '4rem', width : '4rem', margin : 'auto', borderRadius : '50%'}} className="peer-image" src={subhodeep} alt="subhodeep"/>
                        <div className="peer-name">Subhodeep</div>
                        <div className="peer-description">
                            Subhodeep is currently working at Digital Dots Solutions as lead front-end developer. His area of expertise is Angular JS, React JS.
                        </div>
                    </div>

                    <div className="peer-card">
                        <img style={{height : '4rem', width : '4rem', margin : 'auto', borderRadius : '50%'}} className="peer-image" src={abhay} alt="abhay"/>
                        <div className="peer-name">Abhay</div>
                        <div className="peer-description">
                            Abhay is currently working at Infosys Ltd. as lead .Net developer. His area of expertise is .Net MVC, Web-Api, Microservices, Microsoft Azure.
                        </div>
                    </div>
                </div>
                    {/* </div> */}
                    
                {/* </div> */}






                {/* <i className="fa fa-arrow-right" aria-hidden="true" onClick={handleRightButtonClick}></i> */}

                {/* <div className="owl-carousel">
                    <div style={{height : '10rem', width : '10rem', backgroundColor : 'blue', margin : '1rem', display : 'inline-block'}}>A</div>
                    <div style={{height : '10rem', width : '10rem', backgroundColor : 'blue', margin : '1rem', display : 'inline-block'}}>B</div>
                    <div style={{height : '10rem', width : '10rem', backgroundColor : 'blue', margin : '1rem', display : 'inline-block'}}>C</div>
                    <div style={{height : '10rem', width : '10rem', backgroundColor : 'blue', margin : '1rem', display : 'inline-block'}}>A</div>
                    <div style={{height : '10rem', width : '10rem', backgroundColor : 'blue', margin : '1rem', display : 'inline-block'}}>A</div>
                    <div style={{height : '10rem', width : '10rem', backgroundColor : 'blue', margin : '1rem', display : 'inline-block'}}>A</div>
                    <div style={{height : '10rem', width : '10rem', backgroundColor : 'blue', margin : '1rem', display : 'inline-block'}}>A</div>
                    <div style={{height : '10rem', width : '10rem', backgroundColor : 'blue', margin : '1rem', display : 'inline-block'}}>A</div>
                    <div style={{height : '10rem', width : '10rem', backgroundColor : 'blue', margin : '1rem', display : 'inline-block'}}>A</div>
                    <div style={{height : '10rem', width : '10rem', backgroundColor : 'blue', margin : '1rem', display : 'inline-block'}}>A</div>
                    <div style={{height : '10rem', width : '10rem', backgroundColor : 'blue', margin : '1rem', display : 'inline-block'}}>A</div>
                    <div style={{height : '10rem', width : '10rem', backgroundColor : 'blue', margin : '1rem', display : 'inline-block'}}>A</div>
                </div> */}

            </div>
        </>
    )
}

export default Peers;