import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "./Skills.module.css";
import { Skills, SkillsGroup } from "../../data";

function SkillsTabs() {
  return (
    <div className={styles.skills_main}>
      <Tabs className={styles.tab_list}>
        <TabList>
          {Skills.map((data, index) => (
            <Tab className={styles.tab}>{data.name}</Tab>
          ))}
        </TabList>
        {SkillsGroup.map((data, index) => (
          <TabPanel>
            <div>{data.skill}</div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}

export default SkillsTabs;
