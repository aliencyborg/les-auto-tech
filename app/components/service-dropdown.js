import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ServiceDropdownComponent extends Component {
    @tracked hiddenClass = 'lg:hidden'

    @action showDropdown() {
        this.hiddenClass = '';
    }

    @action hideDropdown() {
        this.hiddenClass = 'lg:hidden';
    }
}
