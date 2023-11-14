import { Helmet } from "react-helmet-async";
import Category from "../Category/Category";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>e-Job | Home</title>
      </Helmet>
      <Category></Category>
    </div>
  );
};

export default Home;
