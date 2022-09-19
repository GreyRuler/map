export default class ErrorRepository {
  constructor() {
    this.members = new Map();
  }

  translate(code) {
    return this.members.get(code) || 'Unknown error';
  }
}
