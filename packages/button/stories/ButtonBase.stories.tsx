import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import {
  PrimaryButton,
  StandardButton,
  SuccessButton,
  DangerButton
} from "../../index";

const readme = require("../README.md");

storiesOf("Buttons", module)
  .addDecorator(withReadme([readme]))
  .addWithInfo("PrimaryButton", () => <PrimaryButton>Primary</PrimaryButton>)
  .addWithInfo("SuccessButton", () => <SuccessButton>Primary</SuccessButton>)
  .addWithInfo("DangerButton", () => <DangerButton>Primary</DangerButton>)
  .addWithInfo("StandardButton", () => (
    <StandardButton>Standard</StandardButton>
  ));
