export default async function ({ redirect, $auth, store }) {
  let user = $auth.loggedIn
  let stateData = store.state.authentication.ResetPassword.ResetPassword
  if (!user && stateData == null) {
    redirect('/auth/forgot-password')
  } else if (user && stateData == null) {
    redirect('/')
  }
}
