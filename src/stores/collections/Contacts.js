import { observable, action } from 'mobx';
import Api from './../../v1-api/index';

class Contacts {
  path = '/contacts'
  @observable all = [];
  @observable isLoading = false;

  @action async fetchAll() {
    this.isLoading = true;
    const response  = await Api.get(this.path);
    const status = await response.status;

    if (status === 200) {
      this.all = await response.json();
      this.isLoading = false;
    }
  }

  @action async add(data) {
    const response = await Api.post(this.path, data);
    const status = await response.status;
    if (status === 201) {
      this.fetchAll();
    }
  }

  @action find(contactId) {
    return(
      this.all.filter(c => c.id === Number(contactId))[0]
    )
  }

  @action async remove(contactId) {
    this.isLoading = true;
    const response = await Api.delete(`${this.path}/${contactId}`);
    const status = await response.status;
    if (status === 200) {
      this.isLoading = false;
      this.fetchAll();
    }
    // const existing = this.all;
    // this.all = existing.filter( c => c.id !== contactId);
  }
};

export default new Contacts();
