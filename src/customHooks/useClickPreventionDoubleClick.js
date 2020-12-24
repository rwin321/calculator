import React from 'react'
import useCancellablePromises from "./useCancellablePromises";
import { cancelablePromise } from "../utills/cancellablePromise";
import { delay } from "../utills/utills";

const useClickPreventionOnDoubleClick = (onClick, onDoubleClick) => {
	const api = useCancellablePromises();

	const handleClick = () => {
		api.clearPendingPromises();
		const waitForClick = cancelablePromise(delay(300));
		api.appendPendingPromise(waitForClick);

		return waitForClick.promise
			.then(() => {
				api.removePendingPromise(waitForClick);
				onClick();
			})
			.catch(errorInfo => {
				api.removePendingPromise(waitForClick);
				if (!errorInfo.isCanceled) {
					throw errorInfo.error;
				}
			});
	};

	const handleDoubleClick = () => {
		api.clearPendingPromises();
		onDoubleClick();
	};

	return [handleClick, handleDoubleClick];
};

export default useClickPreventionOnDoubleClick;