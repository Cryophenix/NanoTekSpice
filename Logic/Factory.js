const Input = require("../Gates/Input");
const Output = require("../Gates/Output");
const AndGate = require("../Gates/AndGate");
const OrGate = require("../Gates/OrGate");
const XorGate = require("../Gates/XorGate");
const NotGate = require("../Gates/NotGate");
const Clock = require("../Gates/Clock");
const TrueComponent = require("../Gates/TrueComponent");
const FalseComponent = require("../Gates/FalseComponent");

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
    "false": FalseComponent
  }
}
