export function userBuilderForAPI(user) {
  return (
    user && {
      Id: user.id,
      Name: user.name,
      Username: user.username,
      Password: user.password,
      RoleId: user.roleId
    }
  );
}
