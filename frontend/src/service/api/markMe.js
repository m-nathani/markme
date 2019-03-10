import config from 'config';
import HttpRequest from './httpRequest';

export default class MarkMeService extends HttpRequest {
  constructor(servicePath) {
    super(config.markMeHost);
    this.path = `${config.markMeHost}/${servicePath}`;
  }

  listGeocode() {
    return this.fetch(this.path, {});
  }

  createGeocode(data) {
    return this.create(this.path, data);
  }

  updateGeocode(data, id) {
    return this.update(`${this.path}/${id}`, data);
  }

  deleteGeocode(id) {
    return this.remove(`${this.path}/${id}`);
  }
}
