function FormValidation(email, password) {


    let checkEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    let checkPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)


  if(!checkEmail) return "Not A Valid Email"
  if(!checkPassword) return "Not A Valid Password"

  return null

}

export default FormValidation;
