const border={
  border:"0.5px solid white"
}
const noBorder={
  
};
function Navbar(props){
    return(
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode===true?`light`:`dark`} bg-${props.mode===true?`light`:`dark`}`} style={(props.mode===false?border:noBorder)}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Lets Collaborate</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">AI + RPA Automation</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Build Better Apps</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">DevOps</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Cloud Services</a>
        </li>
        </ul>
    </div>
  </div>
</nav>
        </>

    );
}
export default Navbar;