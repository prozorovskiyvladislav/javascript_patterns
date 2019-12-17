class Light {
  constructor(light) {
    this.light = light;
  }
}

class RedLight extends Light {
  constructor() {
    super('red')
  }
  sign() {
    return 'STOP'
  }
}
class YellowLight extends Light {
  constructor() {
    super('yellow')
  }
  sign() {
    return 'WARNING'
  }
}
class GreenLight extends Light {
  constructor() {
    super('green')
  }
  sign() {
    return 'GO'
  }
}
class TrafficLight {
  constructor() {
    this.states = [
      new GreenLight(),
      new YellowLight(),
      new RedLight()
    ];
    this.current = this.states[0]
  }
  change() {
    const total = this.states.length;
    let index = this.states.findIndex(light => light === this.current)
    if (index + 1 < total) {
      this.current = this.states[index + 1]
    } else {
      this.current = this.state[0]
    }
  }

  sign() {
    return this.current.sign()
  }
}
const traffic = new TrafficLight();
traffic.change()
traffic.change()
console.log(traffic.sign())