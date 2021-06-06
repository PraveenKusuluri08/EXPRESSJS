 const isEmpty = (string) => {
  if (!string) return true
  else return false
}

const isEmail = (email) => {
  const exp =
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (email.match(exp)) return true
  else return false
}

module.exports ={isEmpty,isEmail}