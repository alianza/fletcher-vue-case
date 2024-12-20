import { API_URL } from "~/lib/constants";

export default defineEventHandler(async (event) => {
  const reqBody = await readBody(event);
  const { email, password } = reqBody;
  const queryParam = new URLSearchParams({ email, password });

  const res = await fetch(`${API_URL}/auth/login?${queryParam}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resBody = await res.json();

  if (resBody.errors) {
    setResponseStatus(event, 400);
  }

  return resBody;
});
