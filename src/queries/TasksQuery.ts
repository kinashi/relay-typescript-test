import { graphql } from 'babel-plugin-relay/macro'

export default graphql`
  query TasksQuery {
    tasks {
      name
    }
  }
`
