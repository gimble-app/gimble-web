import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import styled from 'styled-components';
import { InternalLink } from '../common/InternalLinks';
import Card from '../common/Card';
import FlexContainer from "../common/layout/FlexContainer";
import ParticipantsSummary from "./eventView/header/ParticipantsSummary";

const StyledCardMedia = styled(CardMedia)`
  min-width: 200px;
  height: 120px;
  flex: 1;
`;

const StyledCardContent = styled(CardContent)`
  min-width: 120px;
  flex: 1;
`;

const EventCard = ({ event }) => (
  <Card>
    <InternalLink to={`/event/${event.id}`}>
      <FlexContainer>
        { !!event.image && event.image.src && <StyledCardMedia image={event.image.src} title={event.image.author}/> }
        <StyledCardContent>
          {event.title}
        </StyledCardContent>
        <StyledCardContent>
          <ParticipantsSummary participants={ event.participants } />
        </StyledCardContent>
      </FlexContainer>
    </InternalLink>
  </Card>
);

export default EventCard;
