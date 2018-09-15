import React from "react";
import {connect} from "react-redux";
import styled from 'styled-components';
import BodyText from "../../../common/typography/BodyText";
import {selectCurrentUserId} from "../../../auth/selectors";
import moment from "moment";
import EditDateHandler from "./EditDateHandler";

const DatesEntryContainer = styled.div`
  flex: 1;
  margin: 8px;
  display: inline-block;
  text-align: center;
`;

const MyDatesEntry = ({event, myUid}) => {

  const { participants } = event;
  const participant = participants[myUid];

  return (
    <DatesEntryContainer>
      <div style={{display: 'flex'}}>
        {
          participant.preferredDates ?
            <ul style={{ listStyle: "none", padding: "0px", margin: "0px" }}>
              { participant.preferredDates
                  .map(date => ({ ...date, from: moment(date.from), to: moment(date.to) }))
                  .sort((a, b) => a.from - b.from)
                  .map(date => (
                    <li style={{
                      margin: "4px",
                      display: "inline-flex",
                      alignItems: "center",
                      height: '30px'
                    }} key={`${date.uid}`}>
                      <EditDateHandler event={event} date={date} />
                    </li>
                  )
              )}
            </ul>
            : <BodyText>no dates added yet...</BodyText>
        }
      </div>
    </DatesEntryContainer>
  )};

const mapStateToProps = (state) => ({
  myUid: selectCurrentUserId(state)
});

export default connect(mapStateToProps)(MyDatesEntry);
