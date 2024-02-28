import BodyPrint from "./BodyPrint";
import img from './media/img1.jpg';
import img2 from'./media/second.png';
import img3 from './media/third.jpg';
import img4 from './media/fourth.jpg';
import Navbar from "./Navbar";
import { useState } from "react";

const divStyle={
    "display":"flex",
    "alignItems":"center",
    "justifyContent":"center",
    "padding":"0 5%"
};
const h4={
    "padding":"2rem"
}

//style for light mode
const light={
    backgroundColor:"white",
    color:"black",
}

//style for dark mode
const dark={
    backgroundColor:"#212529",
    color:"aliceblue",
}
let select=light;


function MainBody(){
    //store the mode 
    let[mode,changeMode]=useState(true);


    //to change button text
    let [text,changeText]=useState("Toggle Night Mode");
    function switcher(){
        if(mode){
            select=dark;
            changeMode(false);
            changeText("Toggle Day Mode");
            
        }else{
            select=light;
            changeMode(true);
            changeText("Toggle Night Mode")
        }
    }
    return (
        < >
        <div className="outerMost" style={select}>
            <Navbar mode={mode}/>
            <div style={divStyle}>
                
                <div>
                <h4 style={h4}>Lets Collaborate</h4>
                <BodyPrint leftHeading="AI + RPA is what we do" image={img} leftBody="Future-Proof your business. Drive efficiency, profitability and deliver on customer experience" leftFooter="AI + RPA Automation" />
                <BodyPrint leftHeading="Make Bolder Choices" image={img2} leftBody="Digital focused strategies to realize market-changing ideas" leftFooter="Build Better Apps" />
                <BodyPrint leftHeading="Innovate With Speed" image={img3} leftBody="Create higher quality software, deliver on customer expectations and business goals" leftFooter="DevOps" />
                <BodyPrint leftHeading="Embrace Cloud" image={img4} leftBody="With Cloud-First accelerate innovation and optimize performance" leftFooter="Cloud Services" />
                <div><button type="button" className={`btn btn-${mode===true?`light`:`dark`}`} onClick={switcher} style={{border:`${mode===true?`1px solid black`:`1px solid white`}`}}>{text}</button></div>  
                </div>
                
            </div>

        </div>
        
        </>
    );
}
export default MainBody;