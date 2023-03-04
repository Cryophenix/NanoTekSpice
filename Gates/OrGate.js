const Component = require("./Component")

module.exports = class OrGate extends Component {
  constructor(name) {
    super(name, {
      1: null,
      2: null,
      3: null
    });
  }

  compute(pin) {
    this.validatePin(pin);
    if (pin == 1) {
      this.pins[1].state = this.pins[1].compute();
    }
    if (pin == 2) {
      this.pins[2].state = this.pins[2].compute();
    }
    if (pin == 3) {
      let v1 = this.pins[1].compute();
      let v2 = this.pins[2].compute();
      if ((v1 === undefined || v2 === undefined) && (v1 === 0 || v2 === 0))
        this.pins[3].state = undefined;
      else if ((v1 === undefined || v2 === undefined) && (v1 === 1 || v2 === 1))
        this.pins[3].state = 1;
      else
        this.pins[3].state = v1 || v2;
    }
    return this.pins[pin].state;

  }
}
