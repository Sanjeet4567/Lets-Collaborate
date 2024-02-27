import BodyPrint from "./BodyPrint";
import img from './media/img1.jpg';
import img2 from'./media/second.png';

const divStyle={
    "display":"flex",
    "alignItems":"center",
    "justifyContent":"center",
    "padding":"0 5%"
};
const h4={
    "padding":"2rem"
}
function MainBody(){
    return (
        <>
        <div style={divStyle}>
            
            <div>
            <h4 style={h4}>Lets Collaborate</h4>
            <BodyPrint leftHeading="AI + RPA is what we do" image={img} leftBody="Future-Proof your business. Drive efficiency, profitability and deliver on customer experience" leftFooter="AI + RPA Automation" />
            <BodyPrint leftHeading="Make Bolder Choices" image={img2} leftBody="Digital focused strategies to realize market-changing ideas" leftFooter="Build Better Apps" />
            </div>
            
        </div>
        
        </>
    );
}
export default MainBody;