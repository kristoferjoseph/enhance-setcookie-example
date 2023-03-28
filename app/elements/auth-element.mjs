export default function AuthElement({ html, state }) {
  const { attrs, store } = state;
  console.log(state);
  const { message = "", bookId = "" } = store;

  return html`
    <div>
      <h3>${message}</h3>
      <pre>${JSON.stringify(state, null, 2)}</pre>
    </div>
  `;
}
