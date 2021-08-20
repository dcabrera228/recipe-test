//vendors
import axios from "axios";

const api = axios.create({});
const API_URL = process.env.REACT_APP_API_URL;
const DEFAULTS = {
  method: "post",
};
const REQUEST_TIMEOUT = 60 * 1000;
export const CANCELLED_REQUEST_RESPONSE = "Request Cancelled";
export const TIMEOUT_EXCEEDED_RESPONSE = "Timeout exceeded";

// Request error handler
const errorHandler = async (error: any) => {
  if (error?.response?.status === 401) {
    console.error("Session expired. Please login.");
  }
  if (axios.isCancel(error)) {
    console.error(CANCELLED_REQUEST_RESPONSE);
  }

  console.error(error);
};

// Request handler

//@ts-ignore
const apiRequest = ({ url = "", ...options }) => {
  //@ts-ignore
  return api({
    ...DEFAULTS,
    ...{
      ...options,
      timeout: REQUEST_TIMEOUT,
    },
    ...{
      url: `${API_URL}${url}`,
    },
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.data)
    .catch(errorHandler);
};

export default apiRequest;
