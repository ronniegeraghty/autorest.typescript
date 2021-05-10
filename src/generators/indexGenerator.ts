import { Project } from "ts-morph";
import { ClientDetails } from "../models/clientDetails";
import { hasLROOperation } from "../generators/operationGenerator";

export function generateIndexFile(
  clientDetails: ClientDetails,
  project: Project
) {
  const indexFile = project.createSourceFile(
    `${clientDetails.srcPath}/index.ts`,
    undefined,
    {
      overwrite: true
    }
  );

  if (
    clientDetails.options.hasPaging &&
    !clientDetails.options.disablePagingAsyncIterators
  ) {
    indexFile.addStatements([`/// <reference lib="esnext.asynciterable" />`]);
  }

  indexFile.addExportDeclarations([
    {
      moduleSpecifier: "./models"
    },
    {
      moduleSpecifier: `./${clientDetails.sourceFileName}`,
      namedExports: [clientDetails.className]
    },
    {
      moduleSpecifier: `./${clientDetails.sourceFileName}Context`,
      namedExports: [`${clientDetails.className}Context`]
    }
  ]);

  const operationGroups = clientDetails.operationGroups.filter(
    og => !og.isTopLevel
  );

  if (operationGroups.length) {
    indexFile.addExportDeclarations([
      {
        moduleSpecifier: "./operationsInterfaces"
      }
    ]);
  }
}