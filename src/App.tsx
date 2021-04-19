import React, { FC, Suspense } from 'react';
import { loadQuery, usePreloadedQuery, RelayEnvironmentProvider, PreloadedQuery } from 'react-relay'
import Environment from './relayEnvironment'
import tasksQuery, { TasksQuery } from './__generated__/TasksQuery.graphql'

const preloadedQuery = loadQuery<TasksQuery>(
  Environment,
  tasksQuery,
  {},
)

interface TodosProps {
  preloadedQuery: PreloadedQuery<TasksQuery>
}

const Todos: FC<TodosProps> = ({ preloadedQuery }) => {
  const data = usePreloadedQuery(tasksQuery, preloadedQuery)

  return <ul>{
    data.tasks.map(task => (<li>{task?.name}</li>))}</ul>
}

const App: FC = () => {
  return (
    <RelayEnvironmentProvider environment={Environment}>
      <Suspense fallback={'Loading...'}>
        <Todos preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default App;
