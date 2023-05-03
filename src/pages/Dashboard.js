import { useEffect } from "react";

const Dashboard = () => {
  return <h1>Dashboard</h1>
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("/api/v1");
  //     // const response = await fetch('/data.json')
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // //when component mounts run fetchData()
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // return <h1>Dashboard Hello</h1>;
};

export default Dashboard;
