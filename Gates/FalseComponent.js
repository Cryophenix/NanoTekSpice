const Component = require("./Component")

module.exports = class FalseComponent  extends Component {
  constructor(name) {
    super(name, {
      1: null,
    }, false, "false");
  }

  compute(pin) {
    this.validatePin(pin);
    this.pins[pin].state = 0;
    return this.pins[pin].state;
  }
}