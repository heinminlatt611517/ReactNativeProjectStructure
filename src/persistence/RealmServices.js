/* eslint-disable eqeqeq */
import {UpdateMode} from 'realm';
import RealmSchemas from './RealmSchemas';

let RealmServices = {
  save: function (obj) {
    var saved = null;
    console.log('save(): ' + obj);
    RealmSchemas.write(() => {
      saved = RealmSchemas.create('Task', obj, true);
    });
    return saved;
  },

  delete: function (obj) {
    console.log('delete(): ' + obj);
    RealmSchemas.write(() => {
      RealmSchemas.delete(obj);
    });
  },

  search: function (query) {
    let list = RealmSchemas.objects('Task');
    if (query != '') {
      return list.filtered('description CONTAINS "' + query + '" ');
    }
    return list;
  },

  findAll: function () {
    return RealmSchemas.objects('Task');
  },

  find: function (id) {
    let list = RealmSchemas.objects('Task');
    return list.filtered('id == ' + id + ' ')[0];
  },
};

module.exports = RealmServices;
