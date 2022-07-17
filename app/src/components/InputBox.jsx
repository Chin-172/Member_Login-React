function InputBox({lbl , setData, reset, type}){


    const handler = event => {
        if(setData!=null){
            setData(event.target.value)
            // event.target.value = value;
        } 
    }
    return(reset) ? (
        <div className="InputBox">
            <label>{lbl}</label>
            <input type={type} onChange={handler} value=""/>
        </div>
    ) : (
        <div className="InputBox">
            <label>{lbl}</label>
            <input type={type} onChange={handler} />
        </div>
    );
}

export default InputBox;