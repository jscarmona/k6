import { Checkers } from 'k6';
import { RefinedResponse, ResponseType } from 'k6/http';
import { Counter } from 'k6/metrics';
import checkHttpResponse from '../utils/checkHttpResponse';

export default (counter: Counter) => (
  res: RefinedResponse<ResponseType>,
  additional?: Checkers<RefinedResponse<ResponseType>>,
  tags?: object,
) => {
  const success = checkHttpResponse(res, additional, tags);
  counter.add(!success);

  return success;
};
