const Input = require("../Components/Base/Input");
const Output = require("../Components/Base/Output");
const AndGate = require("../Components/Base/AndGate");
const OrGate = require("../Components/Base/OrGate");
const XorGate = require("../Components/Base/XorGate");
const NotGate = require("../Components/Base/NotGate");
const Clock = require("../Components/Base/Clock");
const TrueComponent = require("../Components/Base/TrueComponent");
const FalseComponent = require("../Components/Base/FalseComponent");
const Component4081 = require("../Components/Gates/Component4081");
const Component4071 = require("../Components/Gates/Component4071");
const Component4011 = require("../Components/Gates/Component4011");
const Component4001 = require("../Components/Gates/Component4001");
const Component4030 = require("../Components/Gates/Component4030");
const Component4069 = require("../Components/Gates/Component4069");

module.exports = class Factory {
  static make = {
    "input": Input,
    "output": Output,
    "and": AndGate,
    "or": OrGate,
    "xor": XorGate,
    "not": NotGate,
    "clock": Clock,
    "true": TrueComponent,
    "false": FalseComponent,
    "4081": Component4081,
    "4071": Component4071,
    "4011": Component4011,
    "4001": Component4001,
    "4030": Component4030,
    "4069": Component4069,
  }
}
