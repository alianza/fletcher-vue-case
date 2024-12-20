import { API_URL } from "~/lib/constants";

export default defineEventHandler(async (event) => {
  const reqBody = await readBody(event);
  const cookies = parseCookies(event);

  const { filters, url } = reqBody;

  for (const key in filters) {
    if (key !== "sort") {
      filters[`Filter[${key}]`] = filters[key]; // rename keys except for sort to Filter[key] for Api compatibility
      delete filters[key];
    }
  }

  const queryParams = new URLSearchParams(filters);
  const queryParamsString = decodeURIComponent(queryParams.toString());

  const finalUrl = url ? `${url}&${queryParamsString}` : `${API_URL}/hotels?${queryParamsString}`;

  const res = await fetch(finalUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies.apiToken}`,
    },
  });

  if (!res.ok) {
    setResponseStatus(event, res.status);
  }

  return await res.json();
});
