import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Development from "../TabCategory/Development/Development";

const Category = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Web Development</Tab>
          <Tab>Ddigital Marketing</Tab>
          <Tab>Graphics Design</Tab>
        </TabList>

        <TabPanel>
          {/* <h2>Web Development</h2> */}
          <Development></Development>
        </TabPanel>
        <TabPanel>
          <h2>Ddigital Marketing</h2>
        </TabPanel>
        <TabPanel>
          <h2>Graphics Design</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
