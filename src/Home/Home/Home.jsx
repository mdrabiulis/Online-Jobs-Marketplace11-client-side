import { Helmet } from "react-helmet-async";
import Category from "../Category/Category";
import Section from "../Section/Section";
import Section2 from "../Section/Section2";
import Section3 from "../Section/Section3";
import Banner from "../Banner/Banner";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>e-Job | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Section2></Section2>
      <Section3></Section3>
      <Section></Section>
    </div>
  );
};

export default Home;
