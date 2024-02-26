import BodyPrint from "./BodyPrint";
const divStyle={
    "display":"flex",
    "align-items":"center",
    "justify-content":"center",
};
function MainBody(){
    return (
        <>
        <div style={divStyle}>
            <BodyPrint />

        </div>
        
        </>
    );
}
export default MainBody;