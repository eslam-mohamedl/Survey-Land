// Date formatting
export const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch (error) {
    return "Invalid Date";
  }
};

export const formatDateTime = (dateString) => {
  if (!dateString) return "N/A";
  
  try {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch (error) {
    return "Invalid Date";
  }
};

// Role management
export const USER_ROLES = {
  USER: "user",
  INSTRUCTOR: "instructor",
  ADMIN: "admin",
};

export const ROLE_LABELS = {
  [USER_ROLES.USER]: "User",
  [USER_ROLES.INSTRUCTOR]: "Instructor",
  [USER_ROLES.ADMIN]: "Admin",
};

export const ROLE_COLORS = {
  [USER_ROLES.USER]: "bg-green-100 text-green-800",
  [USER_ROLES.INSTRUCTOR]: "bg-blue-100 text-blue-800",
  [USER_ROLES.ADMIN]: "bg-red-100 text-red-800",
};

export const getRoleLabel = (role) => {
  return ROLE_LABELS[role] || role;
};

export const getRoleColor = (role) => {
  return ROLE_COLORS[role] || "bg-gray-100 text-gray-800";
};

export const isAdmin = (user) => {
  return user?.role === USER_ROLES.ADMIN;
};

export const isInstructor = (user) => {
  return user?.role === USER_ROLES.INSTRUCTOR;
};

export const isUser = (user) => {
  return user?.role === USER_ROLES.USER;
};

export const hasRole = (user, role) => {
  return user?.role === role;
};

export const hasAnyRole = (user, roles) => {
  return roles.includes(user?.role);
};

// User status
export const getUserStatus = (user) => {
  if (!user) return "unknown";
  return user.isActive ? "active" : "inactive";
};

export const getStatusColor = (isActive) => {
  return isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800";
};

// Validation
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
};

export const validatePassword = (password) => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

// User data formatting
export const formatUserName = (user) => {
  if (!user) return "Unknown User";
  return user.name || user.email || "Unknown User";
};

export const getUserInitials = (user) => {
  if (!user?.name) return "U";
  
  const names = user.name.split(" ");
  if (names.length >= 2) {
    return `${names[0][0]}${names[1][0]}`.toUpperCase();
  }
  return user.name[0].toUpperCase();
};

export const getUserAvatar = (user) => {
  if (user?.avatar) return user.avatar;
  
  // Generate placeholder avatar with initials
  const initials = getUserInitials(user);
  const colors = [
    "bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500",
    "bg-purple-500", "bg-pink-500", "bg-indigo-500", "bg-gray-500"
  ];
  const colorIndex = user?.id ? user.id % colors.length : 0;
  
  return {
    type: "placeholder",
    initials,
    color: colors[colorIndex]
  };
};

// Search and filtering
export const filterUsersByRole = (users, role) => {
  if (!role) return users;
  return users.filter(user => user.role === role);
};

export const filterUsersByStatus = (users, isActive) => {
  if (isActive === undefined) return users;
  return users.filter(user => user.isActive === isActive);
};

export const searchUsers = (users, searchTerm) => {
  if (!searchTerm) return users;
  
  const term = searchTerm.toLowerCase();
  return users.filter(user => 
    user.name?.toLowerCase().includes(term) ||
    user.email?.toLowerCase().includes(term) ||
    user.phone?.toLowerCase().includes(term)
  );
};

// Sorting
export const sortUsersByName = (users, ascending = true) => {
  return [...users].sort((a, b) => {
    const nameA = (a.name || "").toLowerCase();
    const nameB = (b.name || "").toLowerCase();
    return ascending ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
  });
};

export const sortUsersByDate = (users, field = "createdAt", ascending = false) => {
  return [...users].sort((a, b) => {
    const dateA = new Date(a[field] || 0);
    const dateB = new Date(b[field] || 0);
    return ascending ? dateA - dateB : dateB - dateA;
  });
};

// Permissions
export const canEditUser = (currentUser, targetUser) => {
  if (!currentUser || !targetUser) return false;
  
  // Admin can edit anyone
  if (isAdmin(currentUser)) return true;
  
  // Users can edit their own profile
  if (currentUser.id === targetUser.id) return true;
  
  // Instructors can edit users but not admins
  if (isInstructor(currentUser) && !isAdmin(targetUser)) return true;
  
  return false;
};

export const canDeleteUser = (currentUser, targetUser) => {
  if (!currentUser || !targetUser) return false;
  
  // Admin can delete anyone except themselves
  if (isAdmin(currentUser) && currentUser.id !== targetUser.id) return true;
  
  return false;
};

export const canChangeUserRole = (currentUser, targetUser, newRole) => {
  if (!currentUser || !targetUser) return false;
  
  // Only admins can change roles
  if (!isAdmin(currentUser)) return false;
  
  // Cannot change own role
  if (currentUser.id === targetUser.id) return false;
  
  // Cannot promote to admin unless super admin
  if (newRole === USER_ROLES.ADMIN && !currentUser.isSuperAdmin) return false;
  
  return true;
}; 