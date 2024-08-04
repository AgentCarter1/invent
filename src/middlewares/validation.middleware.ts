import { plainToInstance } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { Request, Response, NextFunction } from "express";

function validationMiddleware<T>(
  type: any,
  skipMissingProperties = false
): (req: Request, res: Response, next: NextFunction) => void {
  return (req: Request, res: Response, next: NextFunction) => {
    const params = Object.fromEntries(
      Object.entries(req.params).map(([key, value]) => [
        key,
        isNaN(Number(value)) ? value : Number(value),
      ])
    );

    const merged = { ...req.body, ...params };

    const object = plainToInstance(type, merged);

    validate(object, { skipMissingProperties }).then(
      (errors: ValidationError[]) => {
        if (errors.length > 0) {
          const message = errors
            .map((error: ValidationError) => {
              if (error.constraints) {
                return Object.values(error.constraints).join(", ");
              }
              return "Unknown validation error";
            })
            .join(", ");
          res.status(400).json({ error: message });
        } else {
          next();
        }
      }
    );
  };
}

export default validationMiddleware;
