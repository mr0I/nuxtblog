class Validate {
  static required(value) {return !(value === '');}
  static email(value) {return validEmail(value);}
  static max(value,len) {return !(value.length > len);}
  static min(value,len) {return !(value.length < len);}
  static equal(value1,value2) {return !(value1 !== value2);}
}

function validEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

module.exports = Validate;
