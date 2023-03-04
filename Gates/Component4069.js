const Component = require("./Component")
const BaseFactory = require("../Logic/BaseFactory");

module.exports = class Component4081 extends Component {
  constructor(name) {
    let obj = {};
    for (let i = 1; i <= 14; i++) {
      obj[i] = null;
      obj[`i${i}`] = null
    }
    super(name, obj);

    // Javascript voodoo magic
    const g1 = new BaseFactory.make["not"]("g1");
    const g2 = new BaseFactory.make["not"]("g2");
    const g3 = new BaseFactory.make["not"]("g3");
    const g4 = new BaseFactory.make["not"]("g4");
    const g5 = new BaseFactory.make["not"]("g5");
    const g6 = new BaseFactory.make["not"]("g6");
    
    g1.setLink("1", this, "i1");
    g1.setLink("2", this, "i2");
    g2.setLink("1", this, "i3");
    g2.setLink("2", this, "i4");
    g3.setLink("1", this, "i5");
    g3.setLink("2", this, "i6");
    g4.setLink("1", this, "i9");
    g4.setLink("2", this, "i8");
    g5.setLink("1", this, "i11");
    g5.setLink("2", this, "i10");
    g6.setLink("1", this, "i13");
    g6.setLink("2", this, "i12");
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
