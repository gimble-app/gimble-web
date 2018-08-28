import React from "react";
import NewEventForm from "./NewEventForm";
import CancelButton from "../../common/buttons/HistoryAwareCancelButton";
import Page from "../../common/Page";
import Header from "../../common/Header";
import PageContent from "../../common/PageContent";

const NewEventPage = () => (
  <Page>
    <Header colour={"primaryContrast"}>
      <CancelButton />
    </Header>
    <PageContent>
      <NewEventForm />
    </PageContent>
  </Page>
);

export default NewEventPage;
