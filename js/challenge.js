document.addEventListener('DOMContentLoaded', function(){
  const counter = document.getElementById('counter')
  let number = counter.textContent
  let pause = false
  let likesCount = {}
  let counterTime = parseInt(number, 10)
  let incrementTimer = function () {
    if (!pause) {
      counterTime++;
      counter.textContent = counterTime
    }
  }
  let intervalId = setInterval(incrementTimer, 1000)

  let pauseButton = document.getElementById('pause')
  pauseButton.addEventListener('click', function(){
    if (pauseButton.textContent === 'pause'){
      pause = true;
      pauseButton.textContent = "resume";
    } else {
      pause = false;
      pauseButton.textContent = 'pause';
    }
  })

  let minusButton = document.getElementById('minus')
  minusButton.addEventListener('click', function(){
    counterTime--;
  })

  let plusButton = document.getElementById('plus')
  plusButton.addEventListener('click', function(){
    counterTime++;
  })

  let likeButton = document.getElementById('heart')
  likeButton.addEventListener('click', function(){
    if (likesCount[counterTime]) {
      //increment likes by 1
      likesCount[counterTime]++
      string = ".class" + counterTime
      let newLi = document.querySelector(string)
      newLi.textContent = `${counterTime} has been liked ${likesCount[counterTime]} times.`
      console.log(newLi)
      console.log(likesCount[counterTime])
    }
    else {
      likesCount[counterTime] = 1
      let li = document.createElement('li')
      li.innerHTML = `${counterTime} has been liked 1 time.`
      li.classList = `class${counterTime}`
      // console.log(li)
      let ul = document.querySelector('.likes')
      ul.appendChild(li)
    }
        //create a new li and set likes to 1


    //1) Grab counterTime
    //2) If counterTime has already been liked, increment the like value by 1
    //3) If counterTime has not been liked yet, create new <li>

  })


  let commentForm = document.querySelector('#comment-form')
  commentForm.addEventListener('submit', function(e){
    let input = document.getElementById('comment-input').value
    let p = document.createElement('p')
    p.innerHTML = input
    let div = document.getElementById('list')
    div.appendChild(p)
    e.preventDefault()
  })

})
