export interface AdminUser {
  id: string;
  username: string;
  role: string;
}

export function getAdminToken(): string | null {
  return localStorage.getItem("admin_token");
}

export function getAdminUser(): AdminUser | null {
  const userStr = localStorage.getItem("admin_user");
  if (!userStr) return null;
  
  try {
    return JSON.parse(userStr);
  } catch {
    return null;
  }
}

export function setAdminAuth(token: string, user: AdminUser): void {
  localStorage.setItem("admin_token", token);
  localStorage.setItem("admin_user", JSON.stringify(user));
}

export function clearAdminAuth(): void {
  localStorage.removeItem("admin_token");
  localStorage.removeItem("admin_user");
}

export function isAdminAuthenticated(): boolean {
  return !!getAdminToken() && !!getAdminUser();
}

// Add Authorization header to requests
export function getAuthHeaders(): Record<string, string> {
  const token = getAdminToken();
  if (!token) return {};
  
  return {
    Authorization: `Bearer ${token}`,
  };
}
