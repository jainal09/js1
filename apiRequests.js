// const call = async () => {
//   let resp = await fetch("https://reqres.in/api/users");
//   console.log(resp);
//   return resp;
// };
// const callerA = async () => {
//   let response = await call();
//   console.log("HERE");
//   console.log(await response.json());
//   return response;
// };

// callerA();

// API EXCEPTIONS

// let ApiException = {};
// const call = async () => {
//   try {
//     let resp = await fetch("https://reqres.in/api/users");
//     console.log(resp.status);
//     if (resp.status === 200) {
//       let finalResp = await resp.json();
//       return finalResp;
//     } else {
//       throw ApiException;
//     }
//   } catch (e) {
//     console.log(e);
//   }
// };
// const callerA = async () => {
//   let resp = await call();

//   console.log("HERE");
//   console.log(resp);
// };

// callerA();
