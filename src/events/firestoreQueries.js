import { getCurrentUserId } from "./selectors";

export const EVENTS_COLLECTION = 'events';
export const eventsForUserQuery = ({firebase}) => [{
  collection: EVENTS_COLLECTION,
  where: ['author', '==', getCurrentUserId(firebase)]
}];
