// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot { 
  constructor() {
    this._name = this.releaseNames();
    this.allNames = [];
  }

  get name() {
    return this._name
  }
  
  releaseNames(name = '') {
    if (name.length === 5 ) {
      return name
    } else {
      const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
      const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const randomAlpha = Math.floor(Math.random() * 26);
      const randomInt = Math.floor(Math.random() * 9);
      if (name.length < 2) {
        name += alphabet[randomAlpha];
        return this.releaseNames(name)
      } else {
        name += numbers[randomInt]
        return this.releaseNames(name)
      }
    }
  }

  reset() {
    this.allNames.push(this.name);
    let tempName = this.releaseNames();
    if (this.allNames.includes(tempName)) {
      return this.reset();
    }
    this._name = tempName;
  } 
}

Robot.releaseNames = () => {
};