// Standard exports at end

// class Myclass {
//   constructor(user) {
//     this.user = user;
//   }
// }
// export default Myclass;

// But If u dont want export at end use it with the declaration

export default class Myclass {
  // NOTE: There can be a single default
  constructor(user) {
    this.user = user;
  }
}

export class Myclass1 {
  // There can be multiple named import
  constructor(user) {
    this.user = user;
  }
}

export class Myclass2 {
  // There can be multiple named import
  constructor(user) {
    this.user = user;
  }
}

export class Myclass3 {
  // There can be multiple named import
  constructor(user) {
    this.user = user;
  }
}
