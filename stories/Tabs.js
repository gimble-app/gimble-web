import React from "react";
import {storiesOf} from "@storybook/react";
import DateRangeIcon from "@material-ui/icons/DateRange";
import ChatIcon from "@material-ui/icons/Chat";
import Tabs from "../src/common/Tabs";

storiesOf('Tabs', module)
.add('tab', () => [
  <Tabs tabs={[
      { label: 'Dates', icon: DateRangeIcon },
      { label: 'Chat', icon: ChatIcon }
    ]}
        value={1} onChange={() => {}} fullWidth
  />
]);

