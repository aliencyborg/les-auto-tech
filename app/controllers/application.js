import Controller from '@ember/controller'

export default class ApplicationController extends Controller {
  originalYear = 1981

  getCurrentYear() {
    return new Date().getFullYear()
  }

  years = this.getCurrentYear() - this.originalYear
}
