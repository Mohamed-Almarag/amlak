export default async function ({ redirect, $auth }) {
  let user = $auth.loggedIn
  if (user) {
    redirect('/')
  }
}
