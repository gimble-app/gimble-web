import React from "react";
import NewEventForm from "./NewEventForm";
import CancelButton from "../../common/buttons/HistoryAwareCancelButton";
import Page from "../../common/Page";
import Header from "../../common/Header";
import PageContent from "../../common/PageContent";
import {withRouter} from "react-router-dom";

const NewEventPage = ({history}) => (
  <Page>
    <Header colour={"primaryContrast"}>
      <CancelButton />
    </Header>
    <PageContent>
      <NewEventForm onSuccess={history.goBack}/>
    </PageContent>
  </Page>
);

export default withRouter(NewEventPage);
