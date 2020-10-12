document.addEventListener('DOMContentLoaded', function(e){

	const likeCount = {}

	let timer = setInterval(function(){
		incrementCounter(1)
	}, 1000)

	document.addEventListener('submit', function(e){
		e.preventDefault()
		const form = e.target
		const comment = form.comment.value
		const p = document.createElement('p')
		p.textContent = comment
		document.querySelector('#list').append(p)
		form.reset()
	})

	document.addEventListener('click', function(e){
		if(e.target.id === "minus"){
			incrementCounter(-1)
		} else if (e.target.id === "plus"){
			incrementCounter(1)
		} else if (e.target.id === "heart"){
			// base case number is liked for the first time
			const counter = document.getElementById('counter')
			const currentNumber = parseInt(counter.textContent)

			if(!likeCount[currentNumber]){ //number not in like count
				likeCount[currentNumber] = 1
				const ul = document.querySelector('.likes')
				const li = document.createElement('li')
				li.dataset.number = currentNumber //keep track of number for each li
				li.textContent = `${currentNumber} has been liked 1 time!!`
				ul.append(li)
			} else if(likeCount[currentNumber]){ // number has been liked
				// increment the like count
				// find the li for the current number and update it
				likeCount[currentNumber] += 1
				const li = document.querySelector(`[data-number="${currentNumber}"]`)
				li.textContent = `${currentNumber} has been liked ${likedCount[currentNumber]} times!!`
			}
			 //if a number is being liked for the first time(never been liked before)
			 //it shouldn't be in the likeCount and then we can add that number to likeCount
			 //create the li for it.

		} else if(e.target.id === "pause"){
			clearInterval(timer) // have to put the set interval in variable and pass it in clear interval to stop it.

			document.querySelector('#minus').disabled = true
			document.querySelector('#plus').disabled = true 
			document.querySelector('#heart').disabled = true 
			document.querySelector('#submit').disabled = true 

		} else if (e.target.id === 'resume'){
			timer = setInterval(function(){
				incrementCounter(1)
			}, 1000)

			document.querySelector('#minus').disabled = false
			document.querySelector('#plus').disabled = false 
			document.querySelector('#heart').disabled = false 
			document.querySelector('#submit').disabled = false 

			e.target.textContent = 'pause'
			e.target.id = 'pause'
		}
	})

	function incrementCounter(n){
		const counter = document.getElementById('counter')
    const currentNumber = parseInt(counter.textContent)
    const newNumber = currentNumber + n
    counter.textContent = newNumber 
	}	

})
