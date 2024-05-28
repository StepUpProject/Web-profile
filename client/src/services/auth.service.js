import axios from "axios";

export const login = async (data, callback) => {
  await axios
    .post("http://localhost:3000/login", data, { withCredentials: true })
    .then(async (res) => {
      await callback(true, res);
    })
    .catch((err) => {
      callback(true, err);
    });
};

export const logout = async (callback) => {
  // await is not necessary here because axios.post does not return a promise
  axios
    .post("http://localhost:3000/logout", { withCredentials: true })
    .then((res) => {
      callback(true, res);
    })
    .catch((err) => {
      callback(false, err);
    });
};