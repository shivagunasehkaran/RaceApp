import React from 'react';
import {render} from '@testing-library/react-native';
import Home from '../../src/screens/Home/Home';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import * as ServicesAPI from '../../src/services/Services';

describe('Home screen UI', () => {
  it('renders correctly with home screen', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Home screen : use fetch coffee API', () => {
  it('fetch race api success', async () => {
    const spy = jest
      .spyOn(ServicesAPI, 'getRacesDetails')
      .mockImplementation(() => {
        return new Promise(resolve => resolve('test'));
      });
    await new Promise(resolve => setTimeout(resolve, 100));
    expect(spy).toHaveBeenCalledWith({
      url: 'https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10',
    });
  });

  it('fetch race api with error message', async () => {
    jest.spyOn(ServicesAPI, 'getRacesDetails').mockImplementation(() => {
      return new Promise(resolve => resolve([]));
    });
    await new Promise(resolve => setTimeout(resolve, 100));
  });
});

describe('display all UI in home screen', () => {
  const initialState = {output: 10};
  const mockStore = configureStore();
  let store;

  it('With React Testing Library', () => {
    store = mockStore(initialState);
    const {getByText} = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );

    expect(getByText('Click to see Next To Go races')).not.toBeNull();
  });
});

describe('home types screen : flatlist', () => {
  it('should flatlist return keyExtractor correctly', () => {
    const item = [
      {
        id: '1',
        name: 'test 1',
      },
      {
        id: '2',
        name: 'Test 2',
      },
    ];
    const tree = renderer.create(<Home item={item} />).toJSON();
    expect(tree.find('FlatList').length).toEqual(1);
  });
});
