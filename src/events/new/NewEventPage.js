import React from "react";
import NewEventForm from "./NewEventForm";
import CancelButton from "../../common/CancelButton";
import Page from "../../common/Page";

const NewEventPage = () => (
  <Page>
    <CancelButton />
    <NewEventForm />
  </Page>
);

export default NewEventPage;
