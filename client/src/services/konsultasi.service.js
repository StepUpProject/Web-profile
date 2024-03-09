import axios from "axios";

const URL_API = "http://localhost:3000/api/konsultasi";

export const konsultasi = async (data, callback) => {
  await axios
    .post(URL_API, data)
    .then((res) => {
      callback(true, res.data);
      console.log(res.data);
    })
    .catch((err) => {
      callback(false, err);
    });
};

export const getConsultations = async (callback) => {
  await axios
    .get(URL_API)
    .then((res) => {
      callback(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
