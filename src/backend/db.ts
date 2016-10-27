// Our API for demos only
export const fakeDataBase = {
  get() {
    // let res = { data: 'This fake data came from the db on the server.' };
    let res = `
      <div style='color:red'>This fake data came from the db on the server.</div>
    `
    return Promise.resolve(res);
  }
};
