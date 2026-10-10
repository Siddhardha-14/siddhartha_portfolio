export default function Toast({ message, visible }) {
  return (
    <div className={`toast-popup${visible ? ' show' : ''}`} id="toastPopup">
      {message}
    </div>
  )
}
