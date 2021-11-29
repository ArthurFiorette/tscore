export * from './function';

/** Represents an value or function that may be a ES6 Promise */
export type MaybePromise<T> = T | PromiseLike<T> | Promise<T>;

/** Obtain the type of all array values */
export type Unpacked<T> = T extends (infer U)[] ? U : T;
