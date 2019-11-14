import Component from '@glimmer/component'
import { action } from '@ember/object'

export default class FormCardComponent extends Component {
  @action
  onFormSubmit(evt) {
    evt.preventDefault()

    const { target } = evt

    if (this.args.formDidSubmit) {
      this.args.formDidSubmit(target)
    }
  }
}
