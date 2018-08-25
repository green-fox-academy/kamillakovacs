class Thing {
  protected name: string;
  protected completed: boolean;

  constructor(name: string, completed: boolean){
      this.name = name;
      this.completed = completed;
  }

  public complete() {
      this.completed = true;
  }
}

export { Thing };
