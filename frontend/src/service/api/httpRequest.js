import axios from 'axios';

class HttpRequest {
  constructor(baseURL) {
    this.axios = axios.create({
      baseURL,
    });
  }

  reponseInterceptor() {
    // Add a response interceptor
    this.axios.interceptors.response.use(
      response => (
        // Do something with response data
        response
      ),
      error => (
        // Do something with response error
        Promise.reject(error)
      ),
    );
  }

  requsetInterceptor() {
    this.axios.interceptors.request.use(
      config => (
        // Do something before request is sent
        config),
      error => (
        // Do something with request error
        Promise.reject(error)
      ),
    );
  }

  fetch(url, params, config = {}) {
    return this.axios.get(url, {
      params,
      ...config,
    });
  }

  create(url, data, config = {}) {
    return this.axios.post(url, data, {
      ...config,
    });
  }

  update(url, data, config = {}) {
    return this.axios.put(url, data, {
      ...config,
    });
  }

  patch(url, data, config = {}) {
    return this.axios.patch(url, data, {
      ...config,
    });
  }

  remove(url, params, config = {}) {
    return this.axios.delete(url, {
      params,
      ...config,
    });
  }
}

export default HttpRequest;
