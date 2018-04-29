// @flow
import { getProfileById } from 'api/models/profile'
import type { DBUser } from 'common/types'

const profile = async (user: DBUser, _args: {}, _ctx: Object) => {
  const { id } = user

  return getProfileById(id)
}

export default profile
