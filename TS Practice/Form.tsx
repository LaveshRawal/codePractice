import React, {useState} from 'react'
import "../TS Practice/Form.css"

const Form = () => {

const [formValues, setFormValues] = useState([{  name: "", email : ""}])
   
         // Method is used to add a new element with input fields.
    let addFormFields = () => {
        setFormValues([...formValues, { name: "", email: "" }])
        console.log(formValues);
        console.log(setFormValues);
      }
  
      //To remove elements based on an index.
    let removeFormFields = (i: number) => {
        let newFormValues = [...formValues];
        console.log(i);
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    
    let handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }

    return (
        <form  onSubmit={handleSubmit}>

          {
          formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>{index}Name</label>
              <input type="text" name="name"  />
              <label>{index}Email</label>
              <input type="text" name="email"  />
              
              
              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                : null
              }

            </div>
          ))}
          <div className="button-section">
              <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
              <button className="button submit" type="submit">Submit</button>
          </div>
      </form>
    )  
}

export default Form

