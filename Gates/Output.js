const Component = require("./Component")

module.exports = class Output extends Component {
  constructor(name) {
    super(name, { 1: null }, true, "output");
    this.state = undefined;
  }

  compute(pin) {
    this.validatePin(pin);
    this.pins[pin].state = this.pins[pin].compute();
    return this.pins[pin].state;
  }
}