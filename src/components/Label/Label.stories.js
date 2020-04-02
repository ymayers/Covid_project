import React from "react";
import { storiesOf } from "@storybook/react";
import Label from "./Label";

storiesOf("Label", module).add("Label small", () => (
  <Label label="Email" type="label small" />
));

storiesOf("Label", module);
