const permission = (requiredPermission) => {
    return (req, res, next) => {
      const user = req.user;
      
      if (user.role && user.role.permission.length > 0) {
        // Check if any permission matches the required one
        const hasPermission = user.role.permission.some((p) => p.permission === requiredPermission);
        
        if (hasPermission) {
          return next(); // Call next only if permission is granted
        }
      }
      
      // If no matching permission, return a 403 error
      res.status(403).json({ error: "Unauthorized Access!" });
    };
  };
  
  module.exports = permission;
  