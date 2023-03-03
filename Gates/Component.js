const Pin = require("./Pin");

module.exports = class Component {
  constructor(name, pins = {}, special = false, type = "base") {
    Object.assign(this, { name, pins, special, type });
  }

  simulate() { ; }

  getPin(pin) {
    return this.pins[pin].state === undefined ? "U" : this.pins[pin].state;
  }

  setLink(pin, other, otherpin) {
    if (!Object.keys(this.pins).includes(pin) || !Object.keys(other.pins).includes(otherpin))
      throw new Error("Bad pin");
    if (this.pins[pin] !== null)
      return;
    this.pins[pin] = new Pin(pin, other, otherpin);
    other.setLink(otherpin, this, pin);
  }

  validatePin(pin) {
    if (!Object.keys(this.pins).includes(pin)) {
      throw new Error("Invalid pin accessed, logic error");
    }
  }
}