import Chip from "../../common/Chip";
import React from "react";
import moment from "moment";
import LabelText from "../../common/typography/LabelText";

const PreferredDates = ({preferredDates}) => (
  <ul style={{ listStyle: "none", padding: "0px" }}>
    { preferredDates.map(date => (
      <li style={{ margin: "4px" }} key={`${date.to} - ${date.from}`}>
        <Chip>
          <LabelText>{moment(date.from).format('DD MMM')} - {moment(date.to).format('DD MMM')}</LabelText>
        </Chip>
      </li>)
      )}
  </ul>
);

export default PreferredDates;
