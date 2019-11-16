import Component from '@glimmer/component'
import { inject as service } from '@ember/service'

export default class MapEmbedComponent extends Component {
  @service media

  height = '200px'

  get innerWidth() {
    if (window && window.innerWidth) {
      return window.innerWidth
    }
    return 639 // largest "xs" width
  }

  get width() {
    if (this.media.isSm) {
      return '604px'
    }
    if (this.media.isMd) {
      return '732px'
    }
    if (this.media.isLg) {
      return '733px'
    }
    if (this.media.isXl) {
      return '988px'
    }

    return parseInt(innerWidth - 36, 10) + 'px'
  }
}
