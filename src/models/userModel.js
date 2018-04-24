let User = class {
  constructor(data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
  }

  complete () {
    console.log('completing task: ' + this.name);
    this.completed = true;
  }

  save () {
    console.log('saving Task: ' + this.name);
  }

};

module.exports = User;
