const Component = require("./Component")

module.exports = class NotGate extends Component {
  constructor(name) {
    super(name, {
      1: null,
      2: null,
    });
  }

  compute(pin) {
    this.validatePin(pin);
    if (pin == 1) {
      this.pins[1].state = this.pins[1].compute();
    }
    if (pin == 2) {
      let v1 = this.pins[1].compute();
      if (v1 === undefined)
        this.pins[2].state = "U";
      else
        this.pins[2].state = v1 == 1 ? 0 : 1;
    }
    return this.pins[pin].state;

  }
}
