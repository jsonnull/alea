// @flow

const Game = `
  type GameMessageConnection {
    edges: [GameMessageEdge]
  }

  type GameMessageEdge {
    cursor: String!
    node: Message!
  }

  type GameParticipant {
    id: ID!
    lastSeen: Date
    profile: Profile!
  }

  type Game {
    id: ID!
    name: String!
    owner: User!
    participants: [GameParticipant]!
    messageConnection(first: Int): GameMessageConnection!
  }

  extend type Query {
    game(id: ID!): Game
  }
`

export default Game
