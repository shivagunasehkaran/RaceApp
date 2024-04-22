// Base URL & API key for further API calls
const BASE_URL = 'https://api.neds.com.au/';
const COUNT = '10';

// API URL
export const GET_URL = {
  RACE_DETAILS_URL: `${BASE_URL}rest/v1/racing/?method=nextraces&count=${COUNT}`,
};

// redux constants
export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE';

export const CategoryData = [
  '9daef0d7-bf3c-4f50-921d-8e818c60fe61',
  '161d9be2-e909-4326-8c2c-35ed71fb460b',
  '4a2788f8-e825-4d36-9894-efd4baf1cfae',
];

export const CategoryDescriptionData = {
  '9daef0d7-bf3c-4f50-921d-8e818c60fe61': 'Greyhound racing',
  '161d9be2-e909-4326-8c2c-35ed71fb460b': 'Harness racing',
  '4a2788f8-e825-4d36-9894-efd4baf1cfae': 'Horse racing',
};

// applicaion text constants
export const ConstantText = {
  font_family: 'Avenir',
  font_family2: 'Avenir Next',
  font_bold1: '500',
  font_bold2: '600',
  font_bold3: '700',
  loader_large: 'large',
};

export const AppStrings = {
  raceStartButton: 'Click to see Next To Go races',
  raceNumber: 'Race number :',
  raceStartsIn: 'Race starts in :',
};
