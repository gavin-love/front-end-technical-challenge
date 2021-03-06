/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
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

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export function* getProfile() {
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}`;

  try {
    const profile = yield call(request, requestURL);
    yield put(profileLoaded(profile));
  } catch (err) {
    yield put(profileLoadingError(err));
  }
}

export function* getFollowers() {
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/followers`;

  try {
    const followers = yield call(request, requestURL);
    yield put(followersLoaded(followers));
  } catch (err) {
    yield put(followersLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_REPOS, getRepos);
  yield takeLatest(LOAD_PROFILE, getProfile);
  yield takeLatest(LOAD_FOLLOWERS, getFollowers);
}
