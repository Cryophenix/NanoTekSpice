const Component = require("./Component")

module.exports = class TrueComponent  extends Component {
  constructor(name) {
    super(name, {
      1: null,
    });
  }

  compute(pin) {
    this.validatePin(pin);
    this.pins[pin].state = 1;
    return this.pins[pin].state;
  }
}