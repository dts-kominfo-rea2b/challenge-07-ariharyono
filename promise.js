const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (surveyEmosi) => {
  let sum = 0;
  return new Promise((resolve, reject) => {
    if (surveyEmosi === null || surveyEmosi === "") {
      reject("SurveyEmosi tidak ada!");
    } else {
      promiseTheaterIXX()
        .then((dataSurvey) => {
          for (const data of dataSurvey) {if(surveyEmosi === data.hasil) {sum += 1;}
          }
        })
        .then(
          promiseTheaterVGC()
          .then((dataSurvey) => {
            dataSurvey.forEach((data) => {if(surveyEmosi === data.hasil) {sum += 1;}
            });
            resolve(sum);
          })
        );
    }
  });
};

module.exports = {
  promiseOutput,
};
