// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export function getCamelCase(value:string):string{
  const spaceRemovedValue = value.replace(/ /g,'');
  return (spaceRemovedValue.substr(0, 1).toLowerCase() +  spaceRemovedValue.substr(1));
}

export function getCamelCaseWithUpperCaseBeginning(value:string):string{
  const spaceRemovedValue = value.replace(/ /g,'');
  return (spaceRemovedValue.substr(0, 1).toUpperCase() +  spaceRemovedValue.substr(1));
}

export function getClientFileName(title:string):string {
  return getCamelCase(title);
}

export function getPackageOutputName(packageName:string):string {
  packageName = packageName.replace(/-/g,'.');
  packageName = packageName.replace(/@azure\//g,'');
  const splitPackageName = packageName.split('-')
  let result:string = '';
  splitPackageName.forEach(str => {
    result = result + str.substr(0, 1).toUpperCase() + '-' + str.substr(1);
  })
  return result;
}

export function getClientClassName(title:string):string {
  const spaceRemovedTitle = title.replace(/ /g,'');
  return spaceRemovedTitle;
}

export function getClientContextClassName(title:string):string {
  const spaceRemovedTitle = title.replace(/ /g,'');
  return `${spaceRemovedTitle}Context`;
}

export function getClientContextFileName(title:string):string {
  return `${getClientFileName(title)}Context`;
}

export function getModelsName(title:string):string {
  const spaceRemovedTitle = title.replace(/ /g,'');
  return `${spaceRemovedTitle.replace('Client', '')}Models`;
}

export function getMappersName(title:string):string {
  const spaceRemovedTitle = title.replace(/ /g,'');
  return `${spaceRemovedTitle.replace('Client', '')}Mappers`;
}

export function getPackageNameModified(packageName:string):string {
  return `${packageName.replace('@azure/', '')}`;
}
