import Component from '@glimmer/component'
import { action } from '@ember/object'
import { tracked } from '@glimmer/tracking'

export default class ServiceDropdownComponent extends Component {
  @tracked buttonClass = 'bg-deep-blue'
  @tracked hiddenClass = 'hidden'

  @action hideDropdown() {
    this.buttonClass = 'bg-deep-blue'
    this.hiddenClass = 'hidden'
  }

  @action showDropdown() {
    this.buttonClass = 'bg-blue-500'
    this.hiddenClass = ''
  }

  @action toggleDropdown() {
    if (this.hiddenClass === '') {
      this.hideDropdown()
    } else {
      this.showDropdown()
    }
  }
}
