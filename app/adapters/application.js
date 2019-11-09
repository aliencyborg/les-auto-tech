import ENV from 'les-auto-tech/config/environment'
import RESTAdapter from '@ember-data/adapter/rest'

export default class ApplicationAdapter extends RESTAdapter {
  host = ENV.DS.host
}
