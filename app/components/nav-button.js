import Component from '@glimmer/component'
import { inject as service } from '@ember/service'

export default class NavButtonComponent extends Component {
  @service router

  get activeClass() {
    return this.router.currentRouteName === this.args.route ? 'active' : ''
  }
}
