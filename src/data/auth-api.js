import API_ENDPOINT from '../globals/api-endpoint';
import { fetchWithToken } from '../utils/common';

class AuthApi {
  static async register({ name, email, password }) {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('role', 'admin');

    const response = await fetch(API_ENDPOINT.REGISTER, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    });

    const responseJson = await response.json();

    return responseJson;
  }

  static async login({ email, password }) {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    const response = await fetch(API_ENDPOINT.LOGIN, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    });

    const responseJson = await response.json();

    return responseJson;
  }

  static async getUserLogin() {
    const response = await fetchWithToken(API_ENDPOINT.ME, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    const responseJson = await response.json();
    return responseJson;
  }
}

export default AuthApi;
