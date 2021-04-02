const correctAnswers=["A", "A", "A", "A", "A"]
const form=document.querySelector(".quiz-form");
const result=document.querySelector(".result");
const span=document.querySelector("span");

form.addEventListener("submit", e => {
    e.preventDefault();
    let score=0;
    const userAnswers=[form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value,];
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score+=20;
        }
    });
    result.classList.remove("d-none");
    scrollTo(0,0);
    let output=0;
    let timer = setInterval(() => {
        span.innerText=`${output}%`;
        if(output === score){
            clearInterval(timer);
        }else{
            output++;
        }
    }, 10);
    
    

});

