const input = document.getElementById('input');
const btn = document.getElementById('btn');
const message = document.getElementById('message')
const countMessage = document.getElementById('count');
let count = 0;
const randomNumber = Math.floor(Math.random() * 100) + 1
const myTimeout = null
btn.addEventListener("click", () => {
  if (!input.value) {
    message.textContent = "Please enter a number"
    return
  } else if (input.value < randomNumber) {
    message.textContent = "Too low"
    count++
    countMessage.textContent = `Count: ${count}`
  } else if (input.value > randomNumber) {
    message.textContent = "Too high"
    count++
    countMessage.textContent = `Count: ${count}`
  } else {
    message.textContent = "You got it in " + count + " times! 🎉 \n Number was " + randomNumber + ".";
    myTimeout = setTimeout(() => {
      if (confirm("Do you want to play again?")) {
        location.reload()
      }
    }, 2000)
    clearTimeout(myTimeout)
  }
})


