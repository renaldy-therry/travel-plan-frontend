import CONFIG from './config';

const API_ENDPOINT = {
  REGISTER: `${CONFIG.BASE_URL}/auth/register`,
  LOGIN: `${CONFIG.BASE_URL}/auth/login`,
  ME: `${CONFIG.BASE_URL}/auth/me`,
};

export default API_ENDPOINT;
