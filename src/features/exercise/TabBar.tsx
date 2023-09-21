import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Intro from "./intro/Intro";
import Challenge1 from "./challenge1/Challenge1";
import Challenge2 from "./challenge2/Challenge2";
import Challenge3 from "./challenge3/Challenge3";
import Challenge4 from "./challenge4/Challenge4";

export default function TabBar() {
  const [value, setValue] = React.useState("0");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            // variant="scrollable"
            variant="fullWidth"
          >
            <Tab label="Intro" value="0" />
            <Tab label="Challenge 1" value="1" />
            <Tab label="Challenge 2" value="2" />
            <Tab label="Challenge 3" value="3" />
            <Tab label="Challenge 4" value="4" />
          </TabList>
        </Box>
        <TabPanel value="0">
          <Intro />
        </TabPanel>
        <TabPanel value="1">
          <Challenge1 />
        </TabPanel>
        <TabPanel value="2">
          <Challenge2 />
        </TabPanel>
        <TabPanel value="3">
          <Challenge3 />
        </TabPanel>
        <TabPanel value="4">
          <Challenge4 />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
