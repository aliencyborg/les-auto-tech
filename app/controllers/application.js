import Controller from '@ember/controller'

export default class ApplicationController extends Controller {
  originalYear = 1981

  get currentYear() {
    return new Date().getFullYear()
  }

  years = this.currentYear - this.originalYear
}
