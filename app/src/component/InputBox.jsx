function InputBox({lbl , setData}){


    const handler = event => {
        if(setData!=null){
            setData(event.target.value)
            // event.target.value = value;
        } 
    }
    return(
        <div className="InputBox">
            <label>{lbl}</label>
            <input type="text" onChange={handler} />
        </div>
    )
}

export default InputBox;