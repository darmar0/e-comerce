import "./form-input.styles.scss"

const FormInput = ({label, ...otherProps}) => {
    return(
        <div className="group">
            <input className="form-input" {...otherProps}/>
            { label && ( // if label exists
          <label className={`${otherProps.value.length? 'shrink' : null} form-input-label`}>{label}</label>  
          )}
        </div>

    )
}

export default FormInput;