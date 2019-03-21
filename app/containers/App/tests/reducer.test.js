import { fromJS } from 'immutable';

import appReducer from '../reducer';
import {
  loadRepos,
  reposLoaded,
  repoLoadingError,
  loadProfile,
  profileLoaded,
  profileLoadingError,
  loadFollowers,
  followersLoaded,
  followersLoadingError,
} from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      currentUser: false,
      userData: fromJS({
        repositories: false,
      }),
      userProfile: fromJS({
        profile: false,
      }),
      userFollowers: fromJS({
        followers: false,
      }),
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadRepos action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .setIn(['userData', 'repositories'], false);

    expect(appReducer(state, loadRepos())).toEqual(expectedResult);
  });

  it('should handle the reposLoaded action correctly', () => {
    const fixture = [
      {
        name: 'My Repo',
      },
    ];
    const username = 'test';
    const expectedResult = state
      .setIn(['userData', 'repositories'], fixture)
      .set('loading', false)
      .set('currentUser', username);

    expect(appReducer(state, reposLoaded(fixture, username))).toEqual(
      expectedResult,
    );
  });

  it('should handle the repoLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = state.set('error', fixture).set('loading', false);

    expect(appReducer(state, repoLoadingError(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the loadProfile action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .setIn(['userProfile', 'profile'], false);

    expect(appReducer(state, loadProfile())).toEqual(expectedResult);
  });

  it('should handle the profileLoaded action correctly', () => {
    const fixture = [
      {
        profile: {},
      },
    ];
    const expectedResult = state
      .setIn(['userProfile', 'profile'], fixture)
      .set('loading', false);

    expect(appReducer(state, profileLoaded(fixture))).toEqual(expectedResult);
  });

  it('should handle the repoLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = state.set('error', fixture).set('loading', false);

    expect(appReducer(state, profileLoadingError(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the loadFollowers action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .setIn(['userFollowers', 'followers'], false);

    expect(appReducer(state, loadFollowers())).toEqual(expectedResult);
  });

  it('should handle the followersLoaded action correctly', () => {
    const fixture = [
      {
        followers: {},
      },
    ];
    const expectedResult = state
      .setIn(['userFollowers', 'followers'], fixture)
      .set('loading', false);

    expect(appReducer(state, followersLoaded(fixture))).toEqual(expectedResult);
  });

  it('should handle the followersLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = state.set('error', fixture).set('loading', false);

    expect(appReducer(state, followersLoadingError(fixture))).toEqual(
      expectedResult,
    );
  });
});
