/**
 * @generated SignedSource<<5fb2cfb49edf6fc828b0a5bc1c55205e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GetMeQuery$variables = Record<PropertyKey, never>;
export type GetMeQuery$data = {
  readonly me: {
    readonly email: string;
    readonly id: string;
    readonly username: string;
  } | null | undefined;
};
export type GetMeQuery = {
  response: GetMeQuery$data;
  variables: GetMeQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "me",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "username",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "GetMeQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GetMeQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "5309c683b35956643bea7752762fa127",
    "id": null,
    "metadata": {},
    "name": "GetMeQuery",
    "operationKind": "query",
    "text": "query GetMeQuery {\n  me {\n    id\n    username\n    email\n  }\n}\n"
  }
};
})();

(node as any).hash = "a3da4acc0ebb49182eea2d3e9b9a2e9f";

export default node;
