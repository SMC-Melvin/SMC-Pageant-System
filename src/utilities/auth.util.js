/**
 * @returns {
 *  Id,
 *  Name,
 *  Role,
 *  RoleId
 * }
 */
export const getCurrentUser = () => {
  const currentUserStorage = localStorage.getItem('currentUser');
  const currentUser =
    (currentUserStorage && JSON.parse(currentUserStorage)) || null;
  return currentUser;
};
