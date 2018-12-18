import React from 'react';
import ActiviteitenLijst  from '../screens/ActiviteitenLijst';

import renderer from 'react-test-renderer';


it('state switches correctly', () => {
  const tree = renderer.create(<ActiviteitenLijst />).getInstance();
  tree._handleIndexChange(2);
  expect(tree.state.index).toEqual(2);
});
