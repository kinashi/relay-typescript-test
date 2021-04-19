/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type TasksQueryVariables = {};
export type TasksQueryResponse = {
    readonly tasks: ReadonlyArray<{
        readonly name: string;
    } | null>;
};
export type TasksQuery = {
    readonly response: TasksQueryResponse;
    readonly variables: TasksQueryVariables;
};



/*
query TasksQuery {
  tasks {
    name
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TasksQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Task",
        "kind": "LinkedField",
        "name": "tasks",
        "plural": true,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TasksQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Task",
        "kind": "LinkedField",
        "name": "tasks",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "913b905dfae7ad1ca468af673679d445",
    "id": null,
    "metadata": {},
    "name": "TasksQuery",
    "operationKind": "query",
    "text": "query TasksQuery {\n  tasks {\n    name\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '1bbfe8283d262ab78e8b58bffe074850';
export default node;
