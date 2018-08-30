
class Thing {
    public name: string;
    private completed: boolean;

    constructor(name: string) {
        this.name = name;
    }

    public complete() {
        return this.completed = true;
    }

    print() {
        if ( this.completed ) {
          console.log(`[x] ${this.name}`);
        } else {
          console.log(`[ ] ${this.name}`)
        }
      }
}

export { Thing };