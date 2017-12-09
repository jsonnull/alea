// @flow
import { ORM } from 'redux-orm'
import User from './user'
import Session from './session'

const orm = new ORM()
orm.register(User, Session)

export default orm
