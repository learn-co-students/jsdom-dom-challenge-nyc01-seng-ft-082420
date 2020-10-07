const counter = document.getElementById("counter")
const pauseButton = document.getElementById("pause")
const minusButton = document.getElementById("minus")
const plusButton = document.getElementById("plus")
const likeButton = document.getElementById("heart")
const submitButton = document.getElementById("submit")
const comInput = document.getElementById('comment-input')
const comments = document.getElementById('list')

// let paused = false;
// let num = 1;

const testObj = {
    paused: false,
    num: 1
}

function incrementCounter(num) {
    counter.textContent = parseInt(counter.textContent) + num;
}

function decrementCounter() {
    counter.textContent = parseInt(counter.textContent) - 1
}

const handle = setInterval(() => incrementCounter(testObj.num), 1000);





plusButton.addEventListener('click', incrementCounter);

minusButton.addEventListener('click', decrementCounter);

pauseButton.addEventListener('click', pauseThings);

likeButton.addEventListener('click', function(e){
    console.log(counter.textContent)
    handleLike(e);
})

allButtons = document.querySelectorAll('button')

submitButton.addEventListener('click', function(e){
    handleSubmit(e)
})

function pauseThings() {
    if (testObj.paused === false ){
    testObj.num = 0;
    allButtons.forEach(butt => {
        if (butt.id === "pause") {
        pauseButton.textContent = "resume";
        } else {
        butt.disabled = true
        }
    });
    testObj.paused = true;
    }
    else {
    testObj.num = 1;
    allButtons.forEach(butt => {
        if (butt.id === "pause") {
        pauseButton.textContent = "pause";
        } else {
        butt.disabled = false
        }
    });
    testObj.paused = false;
    }
}

// function to listen for click on:
  // like button
// listen for submit on form input - invoke submit function


// like button function
  // add a like to current counter number
    // if element with data-number exists
      // increment span by 1
    // else create li with data-number = counter number
      // begin span number at 1
      // append li to <ul class='likes'></ul>


function handleSubmit(e){
    e.preventDefault();
    newComment = document.createElement('p');
    newComment.textContent = comInput.value ;
    comments.append(newComment);
    document.querySelector('#comment-form').reset();
}