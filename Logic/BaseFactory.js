/*
**  As forward declaration doesn't exist in JS,
**  I didn't find any workaround to avoid circular dependency ;(
*/

const Input = require("../Components/Base/Input");
const Output = require("../Components/Base/Output");
const AndGate = require("../Components/Base/AndGate");
const OrGate = require("../Components/Base/OrGate");
const XorGate = require("../Components/Base/XorGate");
const NotGate = require("../Components/Base/NotGate");
const Clock = require("../Components/Base/Clock");
const TrueComponent = require("../Components/Base/TrueComponent");
const FalseComponent = require("../Components/Base/FalseComponent");

module.exports = class BaseFactory {
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
  }
}
