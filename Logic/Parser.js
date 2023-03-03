const Factory = require("./Factory");

module.exports =  class Parser {
  constructor(file) {
    const fs = require("fs");
    try {
      this.file = fs.readFileSync(file, "utf8");
    } catch (err) {
      if (err.code === "ENOENT") {
        throw new Error("File not found");
      } else if (err.code === "EACCES") {
        throw new Error("Permission denied");
      } else {
        throw new Error(err);
      }
    }
    this.lines = this.file.split("").filter(l => l != "\r").join("").split("\n");
    this.components = {};
    this.links = [];

    this.lines = this.lines
      .map(l => l.replace('\t', ' ').trim().replace(/\s{2,}/g, ' ').replace(/[\n\r]+/g, ''))
      .filter(l => l.length > 0)
      .filter(l => l.charAt(0) != "#");

    let chipsetPos = this.lines.findIndex(l => l == ".chipsets:");
    if (chipsetPos == -1) {
      throw new Error("No chipset");
    }

    let linkPos = this.lines.findIndex(l => l == ".links:");
    if (linkPos == -1) {
      throw new Error("No links");
    }


    for (let i = chipsetPos + 1; i < linkPos && i < this.lines.length; i++) {
      const [comp, name] = this.lines[i].split(" ");
      if (!Factory.make[comp])
        throw new Error("Unknow comp : " + comp);
      if (!name)
        throw new Error("Bad syntax");
      if (this.components[name])
        throw new Error("Duplicate name");

      this.components[name] = Factory.make[comp];
    }

    for (let i = linkPos + 1; i < this.lines.length; i++) {
      const [c1, c2] = this.lines[i].split(" ");
      if (!c1 || !c2)
        throw new Error("Bad Syntax");

      const [comp, pin] = c1.split(":");
      const [othercomp, otherpin] = c2.split(":");
      if (!comp || !othercomp || !pin || !otherpin)
        throw new Error("Bad Syntax");

      this.links.push({ comp, pin, othercomp, otherpin });
    }
  }

  getComponents() {
    return this.components;
  }

  getLinks() {
    return this.links;
  }
}
