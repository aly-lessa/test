import {
  UPDATE_PAGE,
  CHANGE_FILTER,
  UPDATE_PROFILE,
  CHANGE_FLAG_FILTER,
  CHANGE_FLAG_PROFILE
} from './actions/action';

const defaultState = {
  page: 0,
  totalPages: 2,
  users: [
    {
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg',
      email: 'george.bluth@reqres.in',
      first_name: 'George',
      id: 1,
      last_name: 'Bluth'
    }
  ],
  profile: {
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg',
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    id: 1,
    last_name: 'Bluth',
    company: 'StatusCode Weekly',
    url: 'http://statuscode.org/',
    text: 'A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things.'

  },
  filter: 'Введите email',
  flagFilter: false,
  flagProfile: false
};

export default (state = defaultState, action) => {
  const data = action.payload;
  console.log(action);
  switch (action.type) {
    case UPDATE_PAGE:
      return {
        ...state,
        page: data.page,
        totalPages: data.total_pages,
        users: data.data
      };
      break;
    case CHANGE_FILTER:
      return { ...state, filter: data };
      break;
    case UPDATE_PROFILE:
      return { ...state, profile: data };
      break;
    case CHANGE_FLAG_FILTER:
      return { ...state, flagFilter: data };
      break;
    case CHANGE_FLAG_PROFILE:
      return { ...state, flagProfile: data };
      break;
  }
  return state;
};
