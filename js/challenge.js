document.addEventListener('DOMContentLoaded', () => {

  const counter = document.querySelector('h1#counter')
  const basket = []


  // Deliverable #1
  let intervlcounter = function() {
    const currentCounter = parseInt(counter.textContent)
    const newCounter = currentCounter + 1
    counter.textContent = newCounter
  }

  var myCounter = setInterval(intervlcounter, 1000)




  // Deliverable #2
  const minusButton = document.querySelector('button#minus')
  const plusButton = document.querySelector('button#plus')

  plusButton.addEventListener('click', function(e) {
    const currentCounter = parseInt(counter.textContent)
    const newCounter = currentCounter + 1
    counter.textContent = newCounter
    console.log(button)
  })

  minusButton.addEventListener('click', function(e) {
    const currentCounter = parseInt(counter.textContent)
    const newCounter = currentCounter - 1
    counter.textContent = newCounter
    console.log(button)
  })




  // Deliverable #3
  let i = 0

  const likeButton = document.querySelector('button#heart')

  likeButton.addEventListener('click', function() {
    const currentCounter = parseInt(counter.textContent)
    basket.push(currentCounter)
    console.log(basket)

    const favorList = document.querySelector('ul#favor')
    const favorLi = document.createElement('li')
    favorLi.innerHTML = `<p style="color:red;">❤️ #${i+1}: ${basket[i]}</p>`
    i += 1
    console.log(i)
    favorList.append(favorLi)
  })


  // Deliverable #4

  const pause = document.querySelector('button#pause')

  pause.addEventListener('click', function() {
    clearInterval(myCounter)
    plusButton.setAttribute("disabled", "")
    minusButton.setAttribute("disabled", "")
    likeButton.setAttribute("disabled", "")
    // pause.textContent = "resume"
    // pause.classList.add("resume")
  })

  const resume = document.querySelector('button#resume')
  resume.addEventListener('click', function() {
    setInterval(intervlcounter, 1000)
    plusButton.removeAttribute("disabled", "")
    minusButton.removeAttribute("disabled", "")
    likeButton.removeAttribute("disabled", "")
    // pause.textContent = "resume"
    // pause.classList.add("resume")
  })


  // const inputBox = document.querySelector('input#comment-input').value
  // const submitButton = document.querySelector()

  function submitHandler() {
    const inputBox = document.querySelector('#comment-form')
    inputBox.addEventListener('submit', function(e){
      e.preventDefault()
      const form = e.target
      const input = form["comment"].value

      const commentSection = document.querySelector('ul#comment')
      const commentLi = document.createElement('li')
      commentLi.textContent = input
      commentSection.append(commentLi)

      form.reset()
    })
  }

  submitHandler()

})
