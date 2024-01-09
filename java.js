
question1=['What is the second tallest mountain?','MountK2','Sagarmatha','Kanchangunja','Makalu','1']
question2=['Who is the president of Nepal?','Kshitij','KP oli','Ram Babu Dhakal','Prachanda','3']
question3=['What is the capital of Canada?','Berlin','Tokyo','Ottawa','London','3']
question4=['How many countries are there in the continent Asia','50','65','69','49','4']
question5=['What is the sixth largest country','Canada','Australia','America','India','2']
question6=['Who is second person to step on moon','NeilArmstrong','Buzz Aldrin','Junko Taibei','MichaelCollins','2']
question7=['Who wrote the play "Romeo and Juliet"?','William Shakespeare','Christopher Marlowe','John Webster','Ben Jonson','1']
question8=['what does the acronym "DNA" stand for?','Deoxyribonucleic Acid','Digital Networking Algorithm','Dynamic Nuclear Architecture','Dihydroxy Nitric Acid','1']
question9=[' In 1928, Sir Alexander Fleming discovered the first antibiotic. What was its name?','Penicillin', 'Streptomycin', 'Tetracycline', 'Amoxicillin','1']
question10=['What is the currency of South Africa?','Peso', 'Zloty','Rand', 'Baht','3']
question11=['In which year did the Chernobyl nuclear disaster occur?','1991', '1979', '2000', '1986','4']
question12=['Who is the author of the novel "One Hundred Years of Solitude"?','Isabel Allende', 'Gabriel Garcia Marquez', 'Jorge Luis Borges', 'Haruki Murakami','2']
question13=['In what year did the Berlin Wall fall?','1989', '1991', '1975', '2001','1']
question14=['Who painted the famous artwork "Starry Night"?','Leonardo da Vinci', 'Vincent van Gogh', 'Claude Monet', 'Pablo Picasso','2']
question15=['What is the chemical symbol for the element with the highest atomic number on the periodic table?','Lv', 'Uup', 'Og', 'Fl','1']

path=window.location.pathname
let question;
switch(path){
    case'/question1.html':
    question=question1
    string='question2.html'
    break;
    case'/question2.html':
    question=question2
    string='question3.html'
    break;
    case'/question3.html':
    question=question3
    string='question4.html'
    break;
    case'/question4.html':
    string='question5.html'
    question=question4
    break;
    case'/question5.html':
    string='question6.html'
    question=question5
    break;
    case'/question6.html':
    string='question7.html'
    question=question6
    break;
    case'/question7.html':
    string='question8.html'
    question=question7
    break;
    case'/question8.html':
    string='question9.html'
    question=question8
    break;
    case'/question9.html':
    string='question10.html'
    question=question9
    break;
    case'/question10.html':
    string='question11.html'
    question=question10
    break;
    case'/question11.html':
    string='question12.html'
    question=question11
    break;
    case'/question12.html':
    string='question13.html'
    question=question12
    break;
    case'/question13.html':
    string='question14.html'
    question=question13
    break;
    case'/question14.html':
    string='question15.html'
    question=question14
    break;
    case'/question15.html':
    string='endpage.html'
    question=question15
    break;
    

}
document.querySelector('h4').textContent=question[0]
document.getElementById('1').textContent=question[1]
document.getElementById('2').textContent=question[2]
document.getElementById('3').textContent=question[3]
document.getElementById('4').textContent=question[4]
buttons=document.querySelectorAll('button')
button=Array.from(buttons)



button.forEach((butt)=>{
    butt.addEventListener('click',(event)=>{

        id=event.target.id
        myaudio=new Audio('answercheck.mp3');
        myaudio.play();

        setTimeout(()=>{
            document.getElementById(question[5]).classList.add('rightans')
        if(id!=question[5]){
            document.getElementById(id).classList.add('wrongans')
            document.querySelector('h1').textContent='You got the wrong answer'
        }
        else{
            document.querySelector('h1').textContent='You won Rs 1000'
            setTimeout(() => {
                window.location.href=string
            }, 2000);
           
        }
        },5000)
       
        
    })
})
