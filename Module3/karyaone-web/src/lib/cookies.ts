import Cookies from "js-cookie";

interface CookieParams {
  userId: number;
  token: string;
  role: string;
  expiration?: number | Date | undefined;
}

export function setAuthCookie(data: CookieParams) {
  Cookies.set("token", data.token, { expires: data.expiration });
  Cookies.set("role", data.role);
  Cookies.set("userId", String(data.userId), { expires: data.expiration });
}

export function getAuthCookie() {
  return {
    token: Cookies.get("token"),
    role: Cookies.get("role"),
  };
}
