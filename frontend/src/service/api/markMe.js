import config from 'config';
import HttpRequest from './httpRequest';

export default class MarkMeService extends HttpRequest {
  constructor(servicePath) {
    super(config.markMeHost);
    this.path = `${config.markMeHost}/${servicePath}`;
  }

  create(data) {
    return this.create(this.path, data);
  }

  update(data) {
    return this.update(this.path, data);
  }
}
