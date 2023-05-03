import { useEffect } from "react";

const Dashboard = () => {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  //when component mounts run fetchData()
  useEffect(() => {
    fetchData();
  }, []);
  return <h1>Dashboard Hello</h1>;
};

export default Dashboard;
