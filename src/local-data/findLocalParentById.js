import userData from './users.json';

export function findLocalParentById(id) {
  return userData.filter((e) => e.parentId === id);
}
