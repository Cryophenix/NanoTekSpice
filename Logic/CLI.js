module.exports = class CLI {
  constructor() {
    const readline = require('readline');
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    this.isTTY = process.stdin.isTTY === true;
    this.getline = this.isTTY ? this.getlineTTY : this.getlineNoTTY;
    this.data = [];
  }

  async getlineTTY() {
    const self = this;
    return new Promise(resolve => {
      process.stdout.write("> ");
      self.rl.question('$>', (line) => {
        resolve(line);
      })
    })
  }

  async getlineNoTTY() {
    process.stdout.write("> ");
    return this.data.shift();
  }

  async prepare() {
    const self = this;
    if (this.isTTY)
      return;
    return new Promise(resolve => {
      self.rl.on('line', (line) => {
        // console.log(`Got line [${line}]`)
        self.data.push(line);
      })
      self.rl.on('close', () => {
        // console.log('end, resolving');
        resolve();
      })
    })
  }

  close() {
    this.rl.close();
    process.exit(0);
  }
}