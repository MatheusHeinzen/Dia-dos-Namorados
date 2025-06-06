let card = document.getElementById("card");

// Exibir a mensagem caso seja selecionado o 'sim'
document.querySelector("#yes").addEventListener("click", function () {
    let question = document.getElementById("question");
    let message = document.getElementById("answer");

    card.style.backgroundImage =
        "url('https://img1.picmix.com/output/stamp/normal/5/1/0/1/1171015_f458c.gif')";
    question.style.display = "none";
    message.style.display = "flex";
    
    // Redirecionar para quiz.html após 3 segundos (3000 milissegundos)
    setTimeout(function() {
        window.location.href = "quiz.html";
    }, 3000);
});

// Movimento aleatório do botão 'não'
document.querySelector("#no").addEventListener("mouseover", function () {
    let width = window.innerWidth - 50;
    let height = window.innerHeight - 50;

    this.style.position = "absolute";
    this.style.top = Math.random() * width + "px";
    this.style.left = Math.random() * height + "px";
});