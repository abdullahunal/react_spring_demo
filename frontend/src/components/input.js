import React from "react";

const Input = (props) => {
    const {label,error,name,onChange, type}= props  // object destruction
    const className = error ? "form-control is-invalid" : 'form-control';
    return (
        <div className="form-group">
            <label>{label}</label>
            <input name={name} className={className} onChange={onChange} type={type} />
            <div className="invalid-feedback"> {error} </div>
        </div>
    )
}

export default Input;

// multi line editing için alt a basılı tutarak cursor konabilir yada seçilen ifadeler aynı anda değiştirilebilir
// seçili kısımla aynı olan yerlere cursor koymak için ifade seçiliyken ctrl + shift + l