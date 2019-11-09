import RESTSerializer from '@ember-data/serializer/rest'

export default class ApplicationSerializer extends RESTSerializer {
  // asumes that the payload has no top-level model key,
  // e.g. { a: 1, b: 2 } instead of { foobar: { a: 1, b: 2 } }
  normalizeResponse(store, primaryModelClass, _payload, _id, requestType) {
    const { id } = _payload
    const { modelName } = primaryModelClass
    const payload = { [modelName]: _payload }

    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType
    )
  }

  serializeIntoHash(hash, typeClass, snapshot, options) {
    const serialized = this.serialize(snapshot, options)

    // Here the hash object must be mutated. That's just how it works.
    Object.assign(hash, serialized)
  }
}
