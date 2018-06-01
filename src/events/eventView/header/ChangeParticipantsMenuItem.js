import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import {InternalLink} from "../../../common/InternalLinks";

const eventParticipantsPath = (id) => `/event/${id}/participants`;

const ChangeParticipantsMenuItem = ({id, onClick}) =>
  <MenuItem onClick={onClick}>
    <InternalLink to={eventParticipantsPath(id)}>
      Change participants
    </InternalLink>
  </MenuItem>;

export default ChangeParticipantsMenuItem;
