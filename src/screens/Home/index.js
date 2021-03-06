import Chart from "../../components/Chart/index";
import FeaturedInfo from "../../components/FeaturedInfo/index";
import "./style.css";
import { userData } from "../../dummyData";


const Home = ()=> {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
    </div>
  );
}
export default Home;