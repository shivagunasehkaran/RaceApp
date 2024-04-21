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

// applicaion text constants
export const ConstantText = {
  font_family: 'Avenir',
  font_family2: 'Avenir Next',
  font_bold1: '500',
  font_bold2: '600',
  font_bold3: '700',
  loader_large: 'large',
};