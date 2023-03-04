const Component = require("../Base/Component")
const BaseFactory = require("../../Logic/BaseFactory");

module.exports = class Component4071 extends Component {
  constructor(name) {
    let obj = {};
    for (let i = 1; i <= 14; i++) {
      obj[i] = null;
      obj[`i${i}`] = null
    }
    super(name, obj);

    // Javascript voodoo magic
    const g1 = new BaseFactory.make["or"]("g1");
    const g2 = new BaseFactory.make["or"]("g2");
    const g3 = new BaseFactory.make["or"]("g3");
    const g4 = new BaseFactory.make["or"]("g4");
    
    g1.setLink("1", this, "i1");
    g1.setLink("2", this, "i2");
    g1.setLink("3", this, "i3");
    g2.setLink("1", this, "i5");
    g2.setLink("2", this, "i6");
    g2.setLink("3", this, "i4");
    g3.setLink("1", this, "i8");
    g3.setLink("2", this, "i9");
    g3.setLink("3", this, "i10");
    g4.setLink("1", this, "i12");
    g4.setLink("2", this, "i13");
    g4.setLink("3", this, "i11");
  }

  compute(pin) {
    this.validatePin(pin);
    
    if (pin == 7 || pin == 14)
      new Error("Pin marked as 'ignored' : Undefined behavior");
    
    if (String(pin).charAt(0) == "i") {
      //console.log(`Computing pin ${pin} -> out`);
      // Internal -> External
      this.pins[pin].state = this.pins[Number(String(pin).substring(1))].compute();
    } else {
      //console.log(`Computing pin ${pin} -> i${pin}`);
      // External -> Internal
      this.pins[pin].state = this.pins[`i${pin}`].compute();
    }
    return this.pins[pin].state;
  }
}
