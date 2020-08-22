import { check as k6Check, Checkers } from 'k6';
import { RefinedResponse, ResponseType } from 'k6/http';

export const is200 = (res: RefinedResponse<ResponseType>) => res.status === 200;

export default (
  res: RefinedResponse<ResponseType>,
  additional: Checkers<RefinedResponse<ResponseType>> = {},
): boolean =>
  k6Check(res, {
    'status is 200': is200,
    ...additional,
  });
