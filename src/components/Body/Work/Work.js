import React from "react";
import { WorkData } from "../../../Data/WorkData";
import WorkCard from "./work-card";
import "./work.css";
import Separator from "../../Common/Separator/Separator";
function Work() {
  const data = WorkData;
  return (
    <div className="work">
      <Separator />
      <label className="section-title">Work</label>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
    </div>
  );
}

export default Work;
