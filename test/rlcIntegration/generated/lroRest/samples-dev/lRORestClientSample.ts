// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createClient, { LRORestClient } from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This is a simple sample on how to create client and please add your own code below
 *
 */
async function main() {
  const client: LRORestClient = createClient();
  const result = !!client ? "Success" : "Fail";
  console.log(result, " to create client.");
  // Add your own code here
}

main().catch(console.error);
