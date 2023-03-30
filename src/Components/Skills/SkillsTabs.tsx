import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "./Skills.module.css";
import { Skills, SkillsGroup } from "../../data";

function SkillsTabs() {
  return (
    <div className={styles.skills_main_tabs}>
      <Tabs className={styles.tab_list}>
        <TabList>
          {Skills.map((data, index) => (
            <Tab className={styles.tab} key={index} style={{background: "transparent"}}>
              <div className={styles.button_box}>
                <button className={styles.skills_btn}> {data.name}</button>
              </div>
            </Tab>
          ))}
        </TabList>
        {SkillsGroup.map((data, index) => (
          <TabPanel key={index} className={styles.tab_panel}>
            <div className={styles.buttons_container}>
              <button>{data.skill}</button>
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}

export default SkillsTabs;
