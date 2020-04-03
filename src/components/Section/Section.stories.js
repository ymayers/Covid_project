import React from "react";
import { storiesOf } from "@storybook/react";
import Section from "./Section";

storiesOf("Section", module)
  .add("Section1", () => <Section type="section1" />)
  .add("Section2", () => <Section type="section2" />)
  .add("Section3", () => <Section type="section1" />);

storiesOf("Section", module);
