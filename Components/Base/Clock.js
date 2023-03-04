const Component = require("./Component")

module.exports = class Clock extends Component {
  constructor(name) {
    super(name, {
      1: null,
    }, true, "clock");
    this.state = undefined;
    this.tick = -1;
  }

  simulate(tick) {
    while (this.tick < tick) {
      this.tick++;
      if (this.state === undefined) {
        continue;
      }
      this.state = this.state == 1 ? 0 : 1;
    }
  }

  compute(pin) {
    this.validatePin(pin);
    this.pins[pin].state = this.state;
    return this.pins[pin].state;
  }
}
