import { useDispatch } from "react-redux";
import { logActivity } from "../store/trackingSlice";

export const useTracking = () => {
  const dispatch = useDispatch();

  const trackEvent = (eventName, eventData) => {
    const activity = {
      event: eventName,
      data: eventData,
      timestamp: new Date().toISOString(),
    };
    dispatch(logActivity(activity));
  };

  return { trackEvent };
};
