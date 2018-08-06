import React from 'react';
import { shallow } from 'enzyme';
import { TimelinePage } from './TimelinePage';
import TripTimeline from './TripTimeline';
import BackgroundMessage from './BackgroundMessage';
import LinearProgress from '@material-ui/core/LinearProgress';

describe('<TimelinePage />', () => {
  describe('while loading events', () => {
    it('displays a progress indicator loading events', () => {
      const wrapper = shallow(<TimelinePage/>);

      expect(wrapper.find(LinearProgress)).toExist();
      expect(wrapper.find(TripTimeline)).not.toExist();
      expect(wrapper.find(BackgroundMessage)).not.toExist();
    });
  });

  describe('after loading events', () => {
    it('shows the timeline', () => {
      const wrapper = shallow(<TimelinePage events={[{ some: 'event' }]} />);

      expect(wrapper.find(TripTimeline)).toExist();
      expect(wrapper.find(BackgroundMessage)).not.toExist();
    });

    it('includes a background message when there are no events', () => {
      const wrapper = shallow(<TimelinePage events={[]} />);

      expect(wrapper.find(BackgroundMessage)).toExist();
    });
  });
});

