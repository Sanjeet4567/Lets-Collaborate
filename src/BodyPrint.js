import "./bodyPrint.css"
import img from './media/img1.jpg'
function BodyPrint(props){
    return(
        <>
        <div className="outer">
        <div className="leftContainer">
          <div className="leftHeading"><h3>AI + RPA is what we do</h3></div>
          <div className="leftImage">
            <img className="phoneImage" src={img} alt="AI Robot" />
          </div>
          <div className="leftBody">
            <p>Future-Proof your business. Drive efficiency, profitability and deliver on customer experience</p>
          </div>
          <div className="leftFooter">AI + RPA Automation</div>
        </div>
        <div className="rightContainer">
          <img className="pcImage" src={img} alt="AI Robot" />
        </div>
        </div>
        
        </>
    );
}
export default BodyPrint;