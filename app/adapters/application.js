import ENV from 'les-auto-tech/config/environment'
import JSONAPIAdapter from '@ember-data/adapter/json-api'

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = ENV.DS.host
}
