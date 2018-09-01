import React from "react";
import {storiesOf} from "@storybook/react";
import CheckIcon from '@material-ui/icons/Check';
import DateRangeIcon from "@material-ui/icons/DateRange";
import ChatIcon from "@material-ui/icons/Chat";
import Tabs from "../src/common/Tabs";
import CancelButton from "../src/common/buttons/CancelButton";
import Form from "../src/common/forms/Form";
import Page from "../src/common/Page";
import TextInputField from "../src/common/forms/TextInputField";
import FloatingActionButtonSmall
from "../src/common/buttons/FloatingActionButtonSmall";
import Header from "../src/common/Header";
import PageContent from "../src/common/PageContent";
import DetailedHeader from "../src/common/DetailedHeader";
import DisplayText from "../src/common/typography/DisplayText";
import ActionsButton from "../src/common/buttons/ActionsButton";
import BodyText from "../src/common/typography/BodyText";

storiesOf('Screens', module)
.add('new screen', () => [
  <Page>
    <Header colour={"primaryContrast"}>
      <CancelButton />
    </Header>
    <PageContent>
      <Form>
        <TextInputField label="Name"/>
        <FloatingActionButtonSmall><CheckIcon /></FloatingActionButtonSmall>
      </Form>
    </PageContent>
  </Page>
])
.add('entry screen', () => [
  <Page>
    <DetailedHeader>
      <CancelButton colour={"primaryContrast"}/>
      <div style={{textAlign: "right"}}>
        <DisplayText>Today's entry</DisplayText>
        <ActionsButton />
      </div>
    </DetailedHeader>
    <Tabs tabs={[
      { label: 'Dates', icon: DateRangeIcon },
      { label: 'Chat', icon: ChatIcon }
    ]}
          value={1} onChange={() => {}}
    />
    <PageContent>
      <BodyText>Body text</BodyText>
    </PageContent>
  </Page>
]);
