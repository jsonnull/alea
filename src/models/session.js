// @flow
import { Model, attr } from 'redux-orm'

class Session extends Model {
  static modelName = 'Session'
  static fields = {
    id: attr(),
    name: attr()
  }
}

export default Session
