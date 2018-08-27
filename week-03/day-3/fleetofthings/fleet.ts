import { Thing } from "./thing";


class Fleet {
  protected things: Thing[];

  constructor() {
    this.things = [];
  }

  public add(thing: Thing) {
    this.things.push(thing);
  }

  
}

export { Fleet };