const api = async (url, type, params) => {
  if (params && type === "GET") {
    url += "?";
    Object.keys(params).forEach((el, i) => {
      url += `${i === 0 ? el : "&" + el}=${params[el]}`;
    });
  }

  let result = null;

  let myHeaders = new Headers();
  myHeaders.append("apikey", "KEbV3fhW4MsLgWid4LTuj9D1oOl0Fmgk");

  let requestOptions = {
    method: type,
    redirect: "follow",
    headers: myHeaders,
  };

  try {
    let response = await fetch(url, requestOptions);
    result = response.json();
  } catch (e) {
    console.log("error", error);
  }

  return result;
};

export default api;
