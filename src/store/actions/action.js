export const UPDATE_PAGE = 'UPDATE_PAGE';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const CHANGE_FLAG_FILTER = 'CHANGE_FLAG_FILTER';
export const CHANGE_FLAG_PROFILE = 'CHANGE_FLAG_PROFILE';


export const showPage = (amount) => (dispatch, getState, Axios) => {
  const url = 'https://reqres.in/api/users?page=' + amount;
  Axios.get(url)
    .then((response) => {
      // handle success
      console.log(response);
      dispatch(setPage(response.data));
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
    .then(() => {
      // always executed
    });
};
export const openProfile = (amount) => (dispatch, getState, Axios) => {
  const url = 'https://reqres.in/api/users/' + amount;
  Axios.get(url)
    .then((response) => {
      console.log(response);
      // handle success
      const profile = { ...response.data.data, ...response.data.ad };
      dispatch(setProfile(profile));
      dispatch(setFlagProfile(true));
    })
    .catch((error) => {
      // handle error
      console.log(error);
      serverError(error.response.status);
    })
    .then(() => {
      // always executed
    });
};

export const setPage = (amount) => ({
  type: UPDATE_PAGE,
  payload: amount
});

export const nextPage = () => (dispatch, getState) => {
  const state = getState();
  const currentPage = (state.page < state.totalPages) ? state.page + 1 : 1;
  dispatch(showPage(currentPage));
};

const serverError = (type) => {
  switch (type) {
    case 404:
      alert('Страница не найдена');
      break;
  }
};

export const setFilter = (amount) => ({
  type: CHANGE_FILTER,
  payload: amount
});

export const foundUser = (text) => (dispatch, getState) => {
  const users = getState().users;
  const filter = getState().filter;
  dispatch(setFilter(text));
  dispatch(setFlagFilter(text !== ''));
};

export const setProfile = (amount) => ({
  type: UPDATE_PROFILE,
  payload: amount
});

export const setFlagProfile = (amount) => ({
  type: CHANGE_FLAG_PROFILE,
  payload: amount
});

export const setFlagFilter = (amount) => ({
  type: CHANGE_FLAG_FILTER,
  payload: amount
});

export const closeProfile = () => (disatch) => {
  disatch(setFlagProfile(false));
};
