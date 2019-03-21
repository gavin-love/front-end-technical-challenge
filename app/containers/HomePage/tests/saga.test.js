import { put, takeLatest } from 'redux-saga/effects';

import {
  LOAD_REPOS,
  LOAD_PROFILE,
  LOAD_FOLLOWERS,
} from 'containers/App/constants';
import {
  reposLoaded,
  repoLoadingError,
  profileLoaded,
  profileLoadingError,
  followersLoaded,
  followersLoadingError,
} from 'containers/App/actions';

import githubData, { getRepos, getFollowers, getProfile } from '../saga';

const username = 'mxstbr';

/* eslint-disable redux-saga/yield-effects */
describe('getRepos Saga', () => {
  let getReposGenerator;

  beforeEach(() => {
    getReposGenerator = getRepos();

    const selectDescriptor = getReposGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getReposGenerator.next(username).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the reposLoaded action if it requests the data successfully', () => {
    const response = [
      {
        name: 'First repo',
      },
      {
        name: 'Second repo',
      },
    ];
    const putDescriptor = getReposGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(reposLoaded(response, username)));
  });

  it('should call the repoLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getReposGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(repoLoadingError(response)));
  });
});

describe('getProfile Saga', () => {
  let getProfileGenerator;

  beforeEach(() => {
    getProfileGenerator = getProfile();

    const selectDescriptor = getProfileGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getProfileGenerator.next(username).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the profileLoaded action if it requests the data successfully', () => {
    const response = [
      {
        profile: {},
      },
    ];
    const putDescriptor = getProfileGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(profileLoaded(response)));
  });

  it('should call the profileLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getProfileGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(profileLoadingError(response)));
  });
});

describe('getFollowers Saga', () => {
  let getFollowersGenerator;

  beforeEach(() => {
    getFollowersGenerator = getFollowers();

    const selectDescriptor = getFollowersGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getFollowersGenerator.next(username).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the followersLoaded action if it requests the data successfully', () => {
    const response = [
      {
        followers: {},
      },
    ];
    const putDescriptor = getFollowersGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(followersLoaded(response)));
  });

  it('should call the followersLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getFollowersGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(followersLoadingError(response)));
  });
});

describe('githubDataSaga Saga', () => {
  const githubDataSaga = githubData();

  it('should start task to watch for LOAD_REPOS action', () => {
    expect(githubDataSaga.next().value).toEqual(
      takeLatest(LOAD_REPOS, getRepos),
    );
    expect(githubDataSaga.next().value).toEqual(
      takeLatest(LOAD_PROFILE, getProfile),
    );
    expect(githubDataSaga.next().value).toEqual(
      takeLatest(LOAD_FOLLOWERS, getFollowers),
    );
  });
});
