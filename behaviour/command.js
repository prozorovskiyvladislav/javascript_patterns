class MyMath {
  constructor(initialValue = 0) {
    this.number = initialValue;
  }
  square() {
    return this.number ** 2;
  }
  coub() {
    return this.number ** 3;
  }
}

class Command {
  constructor(subject) {
    this.subject = subject
    this.commandsExecuted = [];
  }
  execute(command) {
    this.commandsExecuted.push(command);
    return this.subject[command]()
  }
}

const x = new Command(new MyMath(2));
console.log(x.execute('square'))
console.log(x.execute('coub'))
console.log(x.commandsExecuted)