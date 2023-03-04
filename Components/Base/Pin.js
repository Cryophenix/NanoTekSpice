module.exports = class Pin {
  constructor(pin, other, otherpin) {
    Object.assign(this, { pin, other, otherpin, state: undefined });
  }

  compute() {
    //console.log(`Computing ${this.otherpin} of ${this.other.name}`);
    return this.other.compute(this.otherpin);
  }
}