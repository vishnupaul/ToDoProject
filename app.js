const addBtn = document.querySelector('.fa-plus')
const tasks = document.querySelector('.tasks')
const input = document.querySelector('#add-task')

addBtn.addEventListener('click', function () {
  let todoText = input.value
  console.log(todoText)
  if (todoText === '') {
    alert('you must add a task')
  } else {
    let li = document.createElement('li')
    li.innerHTML = `<span class="check"><input type="checkbox" name="" id="" /></span><p>
      ${todoText}
      </p><span class="remove"><i class="far fa-times-circle"></i></span>`

    tasks.insertBefore(li, tasks.childNodes[0])
    input.value = ''
    const remove = li.querySelector('.remove')
    remove.addEventListener('click', function (e) {
      console.log(this.parentNode)
      tasks.removeChild(this.parentNode)
    })
    const check = li.querySelector('.check')
    console.log(check)
    check.addEventListener('click', function () {
      console.log(this.parentNode)
      let dc = this.parentNode
      dc.classList.toggle('completed')
    })
  }
})
