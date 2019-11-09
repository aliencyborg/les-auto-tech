import Model, { attr } from '@ember-data/model'

export default class CommentModel extends Model {
  @attr('boolean') contactRequest
  @attr() about
  @attr() comment
  @attr() email
  @attr() fax
  @attr() name
  @attr() phone
  @attr() type
}
