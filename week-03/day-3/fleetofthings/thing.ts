class Thing {
  protected name: string;
  protected completed: boolean;

  constructor(name: string) {
    this.name = name;
  }

  public complete() {
    this.completed = true;
  }
}

export { Thing };
