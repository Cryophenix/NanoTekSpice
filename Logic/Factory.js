const Input = require("../Gates/Input");
const Output = require("../Gates/Output");
const AndGate = require("../Gates/AndGate");
const OrGate = require("../Gates/OrGate");
const XorGate = require("../Gates/XorGate");
const NotGate = require("../Gates/NotGate");
const Clock = require("../Gates/Clock");
const TrueComponent = require("../Gates/TrueComponent");
const FalseComponent = require("../Gates/FalseComponent");
const Component4081 = require("../Gates/Component4081");
const Component4071 = require("../Gates/Component4071");
const Component4011 = require("../Gates/Component4011");
const Component4001 = require("../Gates/Component4001");
const Component4030 = require("../Gates/Component4030");
const Component4069 = require("../Gates/Component4069");

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
