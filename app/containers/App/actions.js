/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

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
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

export function loadProfile() {
  return {
    type: LOAD_PROFILE,
  };
}

export function loadFollowers() {
  return {
    type: LOAD_FOLLOWERS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {array} followers The current user followers
 * @param  {string} username The current username
 * @param  {object} profile The current user profile
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username,
  };
}

export function profileLoaded(profile) {
  return {
    type: LOAD_PROFILE_SUCCESS,
    profile,
  };
}

export function followersLoaded(followers) {
  return {
    type: LOAD_FOLLOWERS_SUCCESS,
    followers,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function reposLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}

export function profileLoadingError(error) {
  return {
    type: LOAD_PROFILE_ERROR,
    error,
  };
}

export function followersLoadingError(error) {
  return {
    type: LOAD_FOLLOWERS_ERROR,
    error,
  };
}
