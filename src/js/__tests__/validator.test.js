import { expect, test } from '@jest/globals';
import ErrorRepository from '../ErrorRepository';

test.each([
  { code: 347, error: 'SyntaxError' },
  { code: 455, error: 'TypeError' },
  { code: 903, error: 'Unknown error' },
])('should get a description of the error by code: $code', ({ code, error }) => {
  const repo = new ErrorRepository();
  repo.members.set(347, 'SyntaxError');
  repo.members.set(455, 'TypeError');
  const result = repo.translate(code);
  expect(result).toBe(error);
});
