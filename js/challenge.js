document.addEventListener("DOMContentLoaded", () => {
    let d = document;
  
    const counter = d.querySelector("#counter");
    const minus = d.querySelector("#minus");
    const plus = d.querySelector("#plus");
    const heart = d.querySelector("#heart");
    const pause = d.querySelector("#pause");
  
    const likes = d.querySelector("ul.likes");
    const comments = d.querySelector("div.comments");
  
    const commentForm = d.querySelector("#comment-form");
    const commentInput = d.querySelector("#comment-input");
    const submit = d.querySelector("#submit");
    const buttonsToDisable = d.querySelectorAll("button:not(#pause)");
  
    const increaseCounter = () => {
      counter.innerText = parseInt(counter.innerText) + 1;
    };
  
    let count = setInterval(increaseCounter, 1000);
  
    commentForm.addEventListener("submit", e => {
      e.preventDefault();
      if (commentInput.value != "") {
        const comment = d.createElement("div");
        comment.innerText = commentInput.value;
        comments.appendChild(comment);
        event.target.reset();
      }
    });
  
    const disableButtons = () => {
      for (let i = 0; i < buttonsToDisable.length; i++) {
        buttonsToDisable[i].disabled = true;
      }
      commentInput.disabled = true;
    };
  
    const enableButtons = () => {
      for (let i = 0; i < buttonsToDisable.length; i++) {
        buttonsToDisable[i].disabled = false;
      }
      commentInput.disabled = false;
    };
  
    const decreaseCounter = () => {
      counter.innerText = parseInt(counter.innerText) - 1;
    };
  
    const pauseCounter = () => {
      clearInterval(count);
      disableButtons();
      pause.innerText = "resume";
    };
  
    const resumeCounter = () => {
      count = setInterval(increaseCounter, 1000);
      startCounting();
      pause.innerText = "pause";
    };
  
    plus.addEventListener("click", e => {
      increaseCounter();
    });
  
    minus.addEventListener("click", e => {
      decreaseCounter();
    });
  
    pause.addEventListener("click", e => {
      if (pause.innerText == "pause") {
        pauseCounter();
      } else if (pause.innerText == "resume") {
        resumeCounter();
      }
    });
  
    const startCounting = () => {
      enableButtons();
      count;
    };
  
    const likeCount = () => {
      const like = document.createElement("li");
      like.innerText = `❤️ ${counter.innerText}`;
      likes.appendChild(like);
    };
  
    heart.addEventListener("click", e => {
      likeCount();
    });
  
    startCounting();
  });