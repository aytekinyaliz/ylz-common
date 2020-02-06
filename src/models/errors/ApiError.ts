import { IError } from "./IError";
import { BaseError } from "./BaseError";
import { HttpStatusCode } from "../../libs/constants";

export class ApiError extends BaseError {
  /**
   * Creates an API error.
   * @param {string} message - Error message.
   * @param {number} status - HTTP status code of error.
   * @param {boolean} isPublic - Whether the message should be visible to user or not.
   */
  constructor(
    message: string,
    status: number = HttpStatusCode.INTERNAL_SERVER_ERROR,
    data: IError[] = [],
    type: string = ApiError.name,
    isPublic: boolean = false
  ) {
    super(message, status, data, type, isPublic);
  }
}
