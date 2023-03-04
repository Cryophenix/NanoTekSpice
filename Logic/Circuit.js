const util = require("util");

module.exports = class Circuit {
  constructor() {
    this.comps = [];
    this.tick = -1;
  }

  changeValue(name, val) {
    let comp = this.comps.filter(c => c.special).find(c => c.name == name)
    if (comp === undefined)
      return "No component with this name found : " + name;
    if (val == "U")
      comp.state = undefined;
    else
      comp.state = Number(val);

    if (comp.type == "clock")
      comp.tick++;
  }

  addComponent(name, compType) {
    this.comps.push(new compType(name));
  }

  addLink({ comp, pin, othercomp, otherpin }) {
    let comp1 = this.comps.find(c => c.name == comp)
    let comp2 = this.comps.find(c => c.name == othercomp)
    // console.log("Adding link between", comp1, "and", comp2);
    if (comp1 === undefined || comp2 === undefined)
      throw new Error("Component not found");

    comp1.setLink(pin, comp2, otherpin);
  }

  simulate() {
    this.tick++;
    this.comps.forEach(c => c.simulate(this.tick));
    this.comps.filter(c => c.special).forEach(c => Object.keys(c.pins).forEach(k => c.compute(k)));

  }

  display() {
    console.log(`tick: ${this.tick}`);
    console.log("input(s):");
    this.comps.filter(c => c.type == "clock").forEach(c => {
      console.log(`  ${c.name}: ${c.getPin(1)}`);
    })
    this.comps.filter(c => c.type == "input").forEach(c => {
      console.log(`  ${c.name}: ${c.getPin(1)}`);
    })
    console.log("output(s):");
    this.comps.filter(c => c.type == "output").forEach(c => {
      console.log(`  ${c.name}: ${c.getPin(1)}`);
    })
  }

  dump() {
    console.log(util.inspect(this, false, null, false))
  }
}
