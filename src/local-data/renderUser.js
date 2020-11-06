import userData from './users.json';

export function renderUser(id) {
  return userData.filter((e) => e.parentId === id);
}
