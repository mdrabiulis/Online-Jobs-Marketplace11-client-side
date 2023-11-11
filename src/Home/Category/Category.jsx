import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Development from "../TabCategory/Development/Development";
import DdigitalMarketing from "../TabCategory/DdigitalMarketing/DdigitalMarketing";
import GraphicsDesign from "../TabCategory/GraphicsDesign/GraphicsDesign";

const Category = () => {
  return (
    <div className="font-roboto">
      <Tabs>
        <div className="text-center ">
        <TabList >
          <Tab>Web Development</Tab>
          <Tab>Ddigital Marketing</Tab>
          <Tab>Graphics Design</Tab>
        </TabList>
        </div>

        <TabPanel>
          {/* <h2>Web Development</h2> */}
          <Development></Development>
        </TabPanel>
        <TabPanel>
          {/* <h2>Ddigital Marketing</h2> */}
          <DdigitalMarketing></DdigitalMarketing>
        </TabPanel>
        <TabPanel>
          {/* <h2>Graphics Design</h2> */}
          <GraphicsDesign></GraphicsDesign>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
