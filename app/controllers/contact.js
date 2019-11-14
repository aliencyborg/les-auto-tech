import Controller from '@ember/controller'
import { action } from '@ember/object'
import { tracked } from '@glimmer/tracking'

export default class ContactController extends Controller {
  @tracked errorMessages = []

  @action
  async submitComment() {
    this.errorMessages = []

    try {
      await this.model.save()
    } catch (e) {
      console.error('catch: ', e)

      if (e.errors) {
        const errorMessages = e.errors.map(error => error.detail || error.title)
        this.errorMessages = [...new Set(errorMessages)] // get distinct values
      } else if (e.error) {
        this.errorMessages = [toString(e.error)]
      } else {
        this.errorMessages = [toString(e)]
      }
    }
  }
}
