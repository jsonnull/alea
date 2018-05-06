// @flow
import { getUserGames } from 'api/models/user'
import type { DBUser, DBGame } from 'common/types'

const games = async (
  user: DBUser,
  _args: {},
  _ctx: Object
): Promise<Array<DBGame>> => {
  const { id } = user

  return getUserGames(id)
}

export default games
