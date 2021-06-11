import { authorCard } from "../jsLib/createFunctions.js";

fetch('http://192.144.37.95:8080/api/articles?langId=1')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data)

  return data
});

authorCard