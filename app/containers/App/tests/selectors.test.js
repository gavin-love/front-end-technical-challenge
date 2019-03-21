import { fromJS } from 'immutable';

import {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectFollowers,
  makeSelectProfile,
  makeSelectLocation,
} from '../selectors';

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = fromJS({});
    const mockedState = fromJS({
      global: globalState,
    });
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectCurrentUser', () => {
  const currentUserSelector = makeSelectCurrentUser();
  it('should select the current user', () => {
    const username = 'mxstbr';
    const mockedState = fromJS({
      global: {
        currentUser: username,
      },
    });
    expect(currentUserSelector(mockedState)).toEqual(username);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = fromJS({
      global: {
        loading,
      },
    });
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    const error = 404;
    const mockedState = fromJS({
      global: {
        error,
      },
    });
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectRepos', () => {
  const reposSelector = makeSelectRepos();
  it('should select the repos', () => {
    const repositories = fromJS([]);
    const mockedState = fromJS({
      global: {
        userData: {
          repositories,
        },
      },
    });
    expect(reposSelector(mockedState)).toEqual(repositories);
  });
});

describe('makeSelectFollowers', () => {
  const reposSelector = makeSelectFollowers();
  it('should select the repos', () => {
    const followers = fromJS([]);
    const mockedState = fromJS({
      global: {
        userFollowers: {
          followers,
        },
      },
    });
    expect(reposSelector(mockedState)).toEqual(followers);
  });
});

describe('makeSelectProfile', () => {
  const reposSelector = makeSelectProfile();
  it('should select the repos', () => {
    const profile = fromJS([]);
    const mockedState = fromJS({
      global: {
        userProfile: {
          profile,
        },
      },
    });
    expect(reposSelector(mockedState)).toEqual(profile);
  });
});

describe('makeSelectLocation', () => {
  const locationStateSelector = makeSelectLocation();
  it('should select the location', () => {
    const mockedState = fromJS({
      router: { location: { pathname: '/foo' } },
    });
    expect(locationStateSelector(mockedState)).toEqual(
      mockedState.getIn(['router', 'location']).toJS(),
    );
  });
});
