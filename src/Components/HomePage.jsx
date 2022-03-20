import { Link } from "react-router-dom";
import axios from 'axios';
import { useState,useEffect } from "react";

export const HomePage = () => {
  const [list,setList] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/products`).then((res) => {
      //console.log(res);
      setList(res.data);
    })
  },[])
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "175px",
        }}
      >
        {/* Iterate over products and show links */}
        {list.map((el) => {
          return <Link to={`/products/${el.id}`}>
             <h4>{el.name}</h4>
             <img style={{width:"150px"}} src={el.img} alt="" />
          </Link>;
        })}
      </div>
    </>
  );
};
