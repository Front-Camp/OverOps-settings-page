// const API = 'https://api.overops.com/api/v1';

export const fetchServicesLists = () => {
  // return fetch(`${API}/services`, {
  //   headers: {
  //     'Content-type': 'application/json',
  //     'X-API-KEY': 'XxECIOZJPv8euvZwgT9gEFm25L6v/8+k+pmrAl3r'
  //   }
  // })
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() >= 0.5) {
        return resolve({data: 'Services were successfully downloaded'});
      }
      return reject({error: 'Something went wrong'});
    }, 1000);
  });
};


export const createService = data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() >= 0.5) {
        return resolve({data});
      }
      return reject({error: 'Something went wrong'});
    }, 1000);
  });
};
