import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getUsers,
  getUserById,
  getCurrentUser,
  createUser,
  updateUser,
  updateCurrentUser,
  deleteUser,
  getInstructors,
  getAdmins,
  activateUser,
  deactivateUser,
  changePassword,
  resetPassword,
  uploadProfilePicture,
  updatePreferences,
} from "../api/usersApi";

// Current user hook
export const useCurrentUser = () => {
  return useQuery(["currentUser"], getCurrentUser, {
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// All users hook (admin only)
export const useUsers = (params) => {
  return useQuery(["users", params], () => getUsers(params));
};

// Single user hook
export const useUser = (id) => {
  return useQuery(["user", id], () => getUserById(id), {
    enabled: !!id,
  });
};

// Instructors hook
export const useInstructors = () => {
  return useQuery(["instructors"], getInstructors);
};

// Admins hook
export const useAdmins = () => {
  return useQuery(["admins"], getAdmins);
};

// User mutations
export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation(createUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation(updateUser, {
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries(["users"]);
      queryClient.invalidateQueries(["user", variables[0]]);
      queryClient.invalidateQueries(["currentUser"]);
    },
  });
};

export const useUpdateCurrentUser = () => {
  const queryClient = useQueryClient();
  return useMutation(updateCurrentUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(["currentUser"]);
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });
};

export const useActivateUser = () => {
  const queryClient = useQueryClient();
  return useMutation(activateUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });
};

export const useDeactivateUser = () => {
  const queryClient = useQueryClient();
  return useMutation(deactivateUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });
};

export const useChangePassword = () => {
  return useMutation(changePassword);
};

export const useResetPassword = () => {
  return useMutation(resetPassword);
};

export const useUploadProfilePicture = () => {
  const queryClient = useQueryClient();
  return useMutation(uploadProfilePicture, {
    onSuccess: () => {
      queryClient.invalidateQueries(["currentUser"]);
    },
  });
};

export const useUpdatePreferences = () => {
  const queryClient = useQueryClient();
  return useMutation(updatePreferences, {
    onSuccess: () => {
      queryClient.invalidateQueries(["currentUser"]);
    },
  });
}; 