import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  LOAD_PROFILE,
  LOAD_PROFILE_SUCCESS,
  LOAD_PROFILE_ERROR,
  LOAD_FOLLOWERS,
  LOAD_FOLLOWERS_SUCCESS,
  LOAD_FOLLOWERS_ERROR,
} from '../constants';

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

describe('App Actions', () => {
  describe('loadRepos', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_REPOS,
      };

      expect(loadRepos()).toEqual(expectedResult);
    });
  });

  describe('reposLoaded', () => {
    it('should return the correct type and the passed repos', () => {
      const fixture = ['Test'];
      const username = 'test';
      const expectedResult = {
        type: LOAD_REPOS_SUCCESS,
        repos: fixture,
        username,
      };

      expect(reposLoaded(fixture, username)).toEqual(expectedResult);
    });
  });

  describe('repoLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_REPOS_ERROR,
        error: fixture,
      };

      expect(repoLoadingError(fixture)).toEqual(expectedResult);
    });
  });

  describe('loadProfile', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_PROFILE,
      };

      expect(loadProfile()).toEqual(expectedResult);
    });
  });

  describe('profileLoaded', () => {
    it('should return the correct type and the passed profile', () => {
      const fixture = ['Test'];
      const expectedResult = {
        type: LOAD_PROFILE_SUCCESS,
        profile: fixture,
      };

      expect(profileLoaded(fixture)).toEqual(expectedResult);
    });
  });

  describe('profileLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_PROFILE_ERROR,
        error: fixture,
      };

      expect(profileLoadingError(fixture)).toEqual(expectedResult);
    });
  });

  describe('loadFollowers', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_FOLLOWERS,
      };

      expect(loadFollowers()).toEqual(expectedResult);
    });
  });

  describe('followersLoaded', () => {
    it('should return the correct type and followers', () => {
      const fixture = ['Test'];
      const expectedResult = {
        type: LOAD_FOLLOWERS_SUCCESS,
        followers: fixture,
      };

      expect(followersLoaded(fixture)).toEqual(expectedResult);
    });
  });

  describe('profileLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_FOLLOWERS_ERROR,
        error: fixture,
      };

      expect(followersLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
