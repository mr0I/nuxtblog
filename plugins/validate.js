
class Validate {
  static required(value)
  {
    return !(value === '');
  }
}

module.exports = Validate;
