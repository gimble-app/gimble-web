import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import initStore from '../store';
import getEvents from './__mocks__/eventsPayload';
import EventCard from "./EventCard";
import HomeScreen from './HomeScreen';
import AddButton from './AddButton';
import createHistory from 'history/createBrowserHistory';

describe('home - integration test', () => {

  let result;
  let history;
  let store;

  beforeEach(() => {
    const storeHistory = initStore();
    history = createHistory();
    store = storeHistory.store;
    store.dispatch(getEvents());
    result = mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <HomeScreen></HomeScreen>
        </ConnectedRouter>
      </Provider>
    );
  });

  it('navigates to a new page when add is clicked', () => {
    const addButton = result.find(AddButton).find('Link');
    addButton.simulate('click', { button: 0});
    expect(history.location.pathname).toBe('/event');
  });

  it('navigates to the selected event when the event link is clicked', () => {
    const TEST_ID = 'some-id';
    const eventToSelect = result.find(EventCard).find({ id: TEST_ID }).find('Link');
    eventToSelect.simulate('click', { button: 0});
    expect(history.location.pathname).toBe(`/event/${TEST_ID}`);
  });
});

