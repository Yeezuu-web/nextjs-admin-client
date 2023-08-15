import Cookie from "js-cookie";

export function setAuthCredentials(token: string) {
  Cookie.set("AUTH_CRED", JSON.stringify({ token }));
}

export function clearAuthCredentials() {
  Cookie.remove("AUTH_CRED");
}
