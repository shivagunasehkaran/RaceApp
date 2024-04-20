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
