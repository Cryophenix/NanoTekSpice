const Component = require("./Component")

module.exports = class Input extends Component {
  constructor(name) {
    super(name, { 1: null }, true, "input");
    this.state = undefined;
  }

  compute(pin) {
    this.validatePin(pin);
    this.pins[pin].state = this.state;
    return this.pins[pin].state;
  }
}
