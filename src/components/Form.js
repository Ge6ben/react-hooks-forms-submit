import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
 
  const [submittedData, setSubmittedData] = useState([]);
 
  const [errors, setErrors] = useState([]);

  console.log(submittedData)
  console.log("===========")

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {

    event.preventDefault();
if(firstName){


    const formData = { first_Name: firstName, last_Name: lastName };
    const dataArray = [...submittedData, formData ];
  
    // console.log(formData)
    // console.log(dataArray)
    // console.log("=================")
    setSubmittedData([...submittedData, formData ]);
    setFirstName("");
    setLastName("");
   }
  else
  setErrors(["FirstName is required "])
  }
  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.first_Name} {data.last_Name}
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>

      {/* conditionally render error messages */}
    {errors.length > 0
      ? errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))
      : null}
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form; 