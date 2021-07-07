document.addEventListener('DOMContentLoaded', function(e){
  let sec = 0
  let pause = false
  const counter = document.getElementById('counter')
  function incrementSec(){
    sec++;
    counter.innerHTML = sec
  }
  let cancel = setInterval(incrementSec, 1000)


  function clickHandler(){
    document.addEventListener('click', function(e){
      if (e.target.matches('#minus')){
        sec--;
        counter.innerHTML = sec
      }else if(e.target.matches('#plus')){
        sec++;
        counter.innerHTML = sec
      }else if(e.target.matches('#heart')){
        let ul = document.getElementsByClassName('likes')[0]
        let num = counter.innerText
        let li = document.querySelector(`[data-num="${num}"]`)
        if(li){
          li.dataset.like = parseInt(li.dataset.like) + 1
          li.innerText = `${num} has ${li.dataset.like} like`
        }else{
          let newLi = document.createElement('li')
          newLi.dataset.num = num
          newLi.dataset.like = 1
          newLi.innerText = `${num} has ${newLi.dataset.like} like`
          ul.appendChild(newLi)
        }

      }else if(e.target.matches('#pause')){
        if(pause === false){
          clearInterval(cancel)
          pause = true
          document.getElementById('plus').disabled = true
          document.getElementById('minus').disabled = true
          document.getElementById('heart').disabled = true
          document.getElementById('pause').innerText = 'resume'
        }else{
          cancel = setInterval(incrementSec, 1000)
          pause = false
          document.getElementById('plus').disabled = false
          document.getElementById('minus').disabled = false
          document.getElementById('heart').disabled = false
          document.getElementById('pause').innerText = 'pause'

        }
      }
    })
  }
  function submitHandler(){
    document.addEventListener('submit', function(e){
      if (e.target.matches('#comment-form')){
        let form = e.target
        let val = form.querySelector('#comment-input').value
        console.log(val)
        let comment = document.createElement('div')
        comment.innerText = val
        let div = document.getElementById('list')
        div.appendChild(comment)
        form.reset();
        e.preventDefault();
      }
    })
  }
  clickHandler();
  submitHandler();
})
