const inputEl = document.getElementById('title')
const createBtn = document.getElementById('create')
const listEl = document.getElementById('list')

createBtn.onclick = function() {
  listEl.insertAdjacentHTML(
    'beforeend',
    `<li
    class="list-group-item d-flex justify-content-between align-items-center"
    >
      <span>${inputEl.value}</span>
      <span>
        <span class="btn btn-small btn-success">&check;</span>
        <span class="btn btn-small btn-danger">&times;</span>
      </span>
    </li>`
  )
}