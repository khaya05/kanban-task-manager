class CustomError extends Error {
  statusCode: number;
  status: string;

  constructor(statusCode: number, message: string, status: string) {
    super(message);
    this.statusCode = statusCode;
    this.status = status;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const createCustomError = (
  statusCode: number,
  msg: string,
  status: string
): CustomError => {
  return new CustomError(statusCode, msg, status);
};

export default CustomError;
