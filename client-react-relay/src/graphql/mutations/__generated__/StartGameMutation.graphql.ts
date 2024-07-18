/**
 * @generated SignedSource<<01cbaf591da384144146e5240aa3054e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type StartGameMutation$variables = {
  blackId: string;
  whiteId: string;
};
export type StartGameMutation$data = {
  readonly startGame: {
    readonly black: {
      readonly id: string;
      readonly username: string;
    };
    readonly id: string;
    readonly moves: ReadonlyArray<string>;
    readonly white: {
      readonly id: string;
      readonly username: string;
    };
  } | null | undefined;
};
export type StartGameMutation = {
  response: StartGameMutation$data;
  variables: StartGameMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "blackId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "whiteId"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "username",
    "storageKey": null
  }
],
v4 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "blackId",
        "variableName": "blackId"
      },
      {
        "kind": "Variable",
        "name": "whiteId",
        "variableName": "whiteId"
      }
    ],
    "concreteType": "Game",
    "kind": "LinkedField",
    "name": "startGame",
    "plural": false,
    "selections": [
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "white",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "black",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "moves",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "StartGameMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "StartGameMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "4c67c57286c27e2276f4f69cb143cea0",
    "id": null,
    "metadata": {},
    "name": "StartGameMutation",
    "operationKind": "mutation",
    "text": "mutation StartGameMutation(\n  $whiteId: ID!\n  $blackId: ID!\n) {\n  startGame(whiteId: $whiteId, blackId: $blackId) {\n    id\n    white {\n      id\n      username\n    }\n    black {\n      id\n      username\n    }\n    moves\n  }\n}\n"
  }
};
})();

(node as any).hash = "f9592aa1aea799e80d0f2e5ae29bba8b";

export default node;
