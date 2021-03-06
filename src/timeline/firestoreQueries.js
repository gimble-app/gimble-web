import { selectCurrentUserIdForQuery } from "../auth/selectors";

export const EVENTS_COLLECTION = 'events';

export const eventsForUserQuery = (state) => ({
  collection: EVENTS_COLLECTION,
  where: [`participants.${selectCurrentUserIdForQuery(state)}.uid`, '==', selectCurrentUserIdForQuery(state)]
});
