import Component from '@glimmer/component'
import { action } from '@ember/object'
import { debounce } from '@ember/runloop'
import { tracked } from '@glimmer/tracking'

export default class ServiceDropdownComponent extends Component {
  @tracked buttonClass = 'bg-deep-blue text-white'
  @tracked hiddenClass = 'hidden'

  @action hideDropdown() {
    this.buttonClass = 'bg-deep-blue text-white'
    this.hiddenClass = 'hidden'
  }

  @action showDropdown() {
    this.buttonClass = 'bg-blue-200 text-deep-blue'
    this.hiddenClass = ''
  }

  @action toggleDropdown() {
    if (this.hiddenClass === '') {
      debounce(this.hideDropdown, 150)
    } else {
      debounce(this.showDropdown, 150)
    }
  }
}
