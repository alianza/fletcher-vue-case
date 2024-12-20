export async function login(email: string, password: string) {
  try {
    return await $fetch("/api/login", {
      method: "post",
      body: { email, password },
    });
  } catch (error) {
    console.error(`error`, error);
  }
}
