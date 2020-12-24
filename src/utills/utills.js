import { cancelablePromise } from "./cancellablePromise";

export const noop = () => {};

export const delay = n => new Promise(resolve => setTimeout(resolve, n));

export default cancelablePromise;