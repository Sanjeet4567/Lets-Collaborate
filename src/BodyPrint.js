import "./bodyPrint.css"
import pointer from './media/pointerArrow.svg'
// component for rendering each service
function BodyPrint(props){
    return(
        <>
        
        <div className="outer">
          <div className="leftContainer">
            <div className="leftHeading"><h2>{props.leftHeading}</h2></div>
            <div className="leftImage">
              <img className="phoneImage" src={props.image} alt="AI Robot" />
            </div>
            <div className="leftBody">
              <h3>{props.leftBody}</h3>
            </div>
            <div className="leftFooter"><p>{props.leftFooter}</p>
            <a href="/"><img src={pointer} className="pointer" alt="arrow" /></a></div>
          </div>
          <div className="rightContainer">
            <img className="pcImage" src={props.image} alt="AI Robot" />
          </div>
        </div>
        
        </>
    );
}
export default BodyPrint;