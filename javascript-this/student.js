/* exported student */
const student = {
  firstName: 'Sara',
  lastName: 'Roohan',
  subject: 'JavaScript',
  getFullName(fullName) {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction(intro) {
    return 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject +'.';
  }
}
