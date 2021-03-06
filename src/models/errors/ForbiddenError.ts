import { IError } from "./IError";
import { ApiError } from "./ApiError";
import { HttpStatusCode } from "../../libs/constants";

export class ForbiddenError extends ApiError {
  constructor(errors: IError[]) {
    super(errors[0] ? errors[0].msg : "Forbidden", HttpStatusCode.FORBIDDEN, errors, ForbiddenError.name);
  }
}
