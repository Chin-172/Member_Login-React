
function Alert(props){
    return(props.trigger)?(
        <div className="alert">
            {props.children}
        </div>
    ):"";
}


export default Alert;