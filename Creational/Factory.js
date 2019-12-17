class SimpleMembership {
  constructor(name) {
    this.name = name;
    this.cost = 50;
  }
}

class StandartMembership {
  constructor(name) {
    this.name = name;
    this.cost = 150;
  }
}
class PremiumMembership {
  constructor(name) {
    this.name = name;
    this.cost = 500;
  }
}
class MemberFactory {
  static list = {
    simple: SimpleMembership,
    standard: StandartMembership,
    premium: PremiumMembership
  }
  create(name, type = 'simple') {
    const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
    const member = new Membership(name);
    member.define = function () {
      console.log(`${this.name} (${this.type}) : ${this.cost}`)
    }
    member.type = type;
    return member;
  }
}
const factory = new MemberFactory();
const members = [
  factory.create("Vladislav", 'simple'),
  factory.create("Max", 'standard'),
  factory.create("Andrew", 'premium')
]
members.forEach(member => {
  member.define()
})