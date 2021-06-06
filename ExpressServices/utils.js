const {isEmail,isEmpty} = require("../utils/Validation")

const validation=(inputs)=>{
  let errors={}
  if(isEmpty(inputs.name)) {
    errors.name ="Name should not be empty"
  }else if(isEmpty(inputs.email)){
    errors.email ="Email should not be empty"
  }else if(!isEmail(inputs.email)){
    errors.email ="Email is not in format"
  }

  return {
    errors,
    DataForm:Object.keys(errors).length===0 ?true :false
  }
}
module.exports={validation}