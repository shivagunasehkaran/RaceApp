import {GET_URL} from '../constants';

export const getRacesDetails = async () => {
  const url = GET_URL.RACE_DETAILS_URL;
  return fetch(url)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(() => {});
};
