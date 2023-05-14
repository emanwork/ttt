import axios from "axios";
import React, { useEffect, useState } from "react";

export default function App() {
  let [categories, setCategories] = useState([]);
  async function getCategories() {
    let { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    console.log(data.categories);
    setCategories(data.categories);
  }

  async function signUp() {
    let user = {
      first_name: "Ahmed",
      last_name: "Ali",
      age: 25,
      email: "ahmedwork@gmail.com",
      password: "0215468",
    };

    // WAY1
    // let { data } = await axios.post(
    //   "https://route-movies-api.vercel.app/signup",
    //   user
    // );

    // // WAY2
    // let { data } = await axios({
    //   url: "https://route-movies-api.vercel.app/signup",
    //   method: "post",
    //   data: user,
    // });

    // WAY3
    const options = {
      url: "https://route-movies-api.vercel.app/signup",
      method: "post",
      data: user,
    };
    let { data } = await axios.request(options);

    console.log(data);
  }

  useEffect(() => {
    getCategories();
    signUp();
  }, []);
  return (
    <>
      {categories.map((cat) => (
        <h2 key={cat.idCategory}>{cat.strCategory}</h2>
      ))}
    </>
  );
}
