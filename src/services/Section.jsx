import React from "react";
import s from "../components/Feedback/Title.module.css";

const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={s.Title}>{title}</h2>
      {children}
    </>
  );
};

export default Section;
