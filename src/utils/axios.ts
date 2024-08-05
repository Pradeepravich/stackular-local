import axios from 'axios';
import { toast } from 'react-toastify';
import { API_URL } from '../config';

interface UnProcessedError {
  id: number;
  errorMessage: string;
}

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: API_URL });

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data.unProcessed && response.data.unProcessed.length) {
      response.data.unProcessed.forEach(
        (msg: UnProcessedError) => msg.errorMessage && toast.error(msg.errorMessage)
      );
    }
    return response;
  },

  (error) => {
    const data = error?.response?.data;
    if (typeof data === 'string' && data) {
      if (error?.response?.status === 500) {
        toast.error('An Error occurred, Please contact your system administrator.');
      } else {
        toast.error(data);
      }
    } else if (data?.errors && typeof data?.errors === 'object') {
      const messages: string[][] = Object.values(data.errors);
      messages.forEach(
        (keyMsgs) => Array.isArray(keyMsgs) && keyMsgs.forEach((msg) => msg && toast.error(msg))
      );
    }
    if (error.message === 'canceled') {
      return Promise.reject();
    }
    return Promise.reject((error.response && data) || 'Something went wrong');
  }
);

export default axiosInstance;
