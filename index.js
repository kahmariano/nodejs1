const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido?",
    "O que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = (index = 0) => {
    process.stdout.write("\n\n" + questions[index] + ">")
}

ask ()

const answers = []
//process.stdin pega o dado e repete 
process.stdin.on("data", data => {
    answers.push(data.toString().trim() )
    if (answers.length < questions.length){
        ask (answers.length)
    }
    else {
        console.log(answers)
        process.exit()
        //process.exit desliga o processo 
    }

})

process.on('exit', () => {
    console.log(`
    Boaa Kah!
    
    O que voce aprendeu hoje foi:
    ${answers[0]}

    O que te aborreceu hoje foi:
    ${answers[1]}

    O que voce pode fazer para melhorar é:
    ${answers[2]}

    O que te deixou feliz foi:
    ${answers[3]}

    Voce ajudou ${answers[4]} pessoas hoje!

    Volte amanha e refaça as perguntas!!! :)

    `)
})