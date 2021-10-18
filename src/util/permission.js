import jwt_decode from 'jwt-decode';

export const getPermissionsFromToken = (token) => {
  const decodedToken = jwt_decode(token);
  return decodedToken.permissions;
};

export const isAdmin = (token) => {
  const permissions = getPermissionsFromToken(token);
  return permissions.includes('delete:member');
};

export const isOrdinaryMember = (token) => {
  const permissions = getPermissionsFromToken(token);
  if (permissions === null) {
    return false;
  } else if (isAdmin(token)) {
    return false;
  } else if (
    permissions.includes('list:members') &&
    permissions.includes('update:members')
  ) {
    return true;
  } else {
    return false;
  }
};

export const isNoRole = (token) => {
  const permissions = getPermissionsFromToken(token);
  return (permissions.length === 0);
}
