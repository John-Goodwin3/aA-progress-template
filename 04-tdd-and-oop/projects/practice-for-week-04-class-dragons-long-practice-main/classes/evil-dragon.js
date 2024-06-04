const Dragon = require('./dragon');

class EvilDragon extends Dragon {
    constructor(name, color, evilDoings, nemesis) {
        super(name, color);
        this.evilDoings = evilDoings;
        this.nemesis = nemesis;
    }
    dontInviteThemOverForDinner() {
        this.evilDoings.forEach((badDeed) => {
            console.log(`${this.name} will ${badDeed}`);
        } )
    }
    burnsNemesis() {
        return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
    }
}

const enderDragon = new EvilDragon(
    "Ender Dragon",
    "black", [
      "spit a fireball at Steve",
      "rule over all the Endermen",
      "destroy all blocks in its way"
    ],
    "Steve"
  );


try {
    module.exports = EvilDragon;
} catch {
    module.exports = null
}