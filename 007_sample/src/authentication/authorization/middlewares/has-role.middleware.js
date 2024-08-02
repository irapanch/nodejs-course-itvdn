import jsonwebtoken from "jsonwebtoken";
import { WEB_TOKEN_SECRET_KEY } from "../../../../config.js";
import { getRoleByUserId } from "../../../users/users.service.js";
import { NotAuthorizedError } from "../../../errors/models/not-authorized-err.js";
import { rolePermissions } from "../authorization.service.js";

export const hasRole = (requireRole) => {
  const requireRolePermission = rolePermissions[requireRole] || 0;

  return async (req, res, next) => {
    try {
      const { token } = req.body;
      const decoded = jsonwebtoken.verify(token, WEB_TOKEN_SECRET_KEY);
      const useRole = await getRoleByUserId(decoded.id);
      const userPermissionLevel = rolePermissions[useRole] || 0;

      if (userPermissionLevel < requireRolePermission) {
        throw new NotAuthorizedError();
      }
    } catch (error) {
      next(error);
    }
  };
};
