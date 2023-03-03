module.exports = class Pin {
  constructor(pin, other, otherpin) {
    Object.assign(this, { pin, other, otherpin, state: undefined });
  }

  compute() {
    return this.other.compute(this.otherpin);
  }
}