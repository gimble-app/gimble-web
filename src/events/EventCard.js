import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import styled from 'styled-components';
import { InternalLink } from '../common/InternalLinks';
import Card from '../common/Card';
import FlexContainer from "../common/layout/FlexContainer";

const StyledCardMedia = styled(CardMedia)`
  min-width: 200px;
  height: 120px;
  flex: 1;
`;

const StyledCardContent = styled(CardContent)`
  flex: 1;
`;

const EventCard = ({ id, title, image = {} }) => (
  <Card>
    <InternalLink to={`/event/${id}`}>
      <FlexContainer>
        { !!image.src && <StyledCardMedia image={image.src} title={image.author}/> }
        <StyledCardContent>{title}</StyledCardContent>
      </FlexContainer>
    </InternalLink>
  </Card>
);

export default EventCard;
