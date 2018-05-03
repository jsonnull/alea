// @flow
import { getProfileForCurrentUser } from 'api/models/profile'
import type { DBUser } from 'common/types'

const profile = async (_user: DBUser, _args: {}, _ctx: Object) => {
  return getProfileForCurrentUser()
}

export default profile
