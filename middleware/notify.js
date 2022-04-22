export default async function ({ redirect, store }) {
  let data = store.state.offer.SubscribeRequest

  if (!data) {
    redirect('/')
  }
}
