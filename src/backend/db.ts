// Our API for demos only
export const fakeDataBase = {
  get() {
<<<<<<< HEAD
    let res = { data: 'This fake data came from the db on the server.' };
=======
    // let res = { data: 'This fake data came from the db on the server.' };
    let res = `
      <div style='color:red'>This fake data came from the db on the server.</div>
    `
>>>>>>> 6989692d620116f8dfea8ee6c381b68657a47a40
    return Promise.resolve(res);
  }
};
