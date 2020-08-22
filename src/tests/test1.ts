import { sleep } from 'k6';
import { Options } from 'k6/options';
import http from 'k6/http';
import checkHttpResponse from '../utils/checkHttpResponse';

/**
 * Initialize
 *
 * This is called every time the file is loaded.
 * Setup, Teardown, and once per VU
 */
console.log('init');

/**
 * Options
 *
 * Default options used for this run, can be overridden when ran
 */
export const options: Options = {
  vus: 1,
  iterations: 1,
  duration: '10s',
};

/**
 * Setup
 *
 * This is called once per run, regardless of how many VU's
 * Can pass along props to the default and teardown function to be used across all VU's
 *
 * Example usage: setting up a user before performing some type of load test
 */
export const setup = () => {
  console.log('setup');

  return {
    url: __ENV.BASE_URL,
  };
};

/**
 * Teardown
 *
 * This is called once per run, regardless of how many VU's
 * Receives any data passed along from the setup function
 *
 * Example usage: cleaning up anything created during setup
 */
export const teardown = (data: ReturnType<typeof setup>) => {
  console.log('teardown', data.url);
};

/**
 * Main
 *
 * Executed for each VU for the duration of the test or amount of iterations defined
 * Receives any data passed along from the setup function
 */
export default (data: ReturnType<typeof setup>) => {
  console.log('default');

  const res = http.get(data.url);

  checkHttpResponse(res);
  sleep(1);

  return { message: 'success' };
};
