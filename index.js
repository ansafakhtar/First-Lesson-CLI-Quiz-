var readlineSync = require("readline-sync");
const CFonts = require('cfonts');
var term = require( 'terminal-kit' ).terminal ;
var chalk = require('chalk');

var score = 0;

questionSet =[
    {question: 'If soccer is called football in England, what is American football called in England?',
    optionA:'American football',
    optionB:'Combball',
    optionC:'Handball',
    optionD:'Touchdown',
    answer: 'a',
    },
    {question: 'What is the largest country in the world?',
    optionA:'India',
    optionB:'Russia',
    optionC:'China',
    optionD:'United States',
    answer: 'b',
    },
    {question: 'An organic compound is considered an alcohol if it has what functional group?',
    optionA:'Aldehyde',
    optionB:'Carbonyl',
    optionC:'Alkyl',
    optionD:'Hydroxyl',
    answer: 'd',
    },
    {question: 'What is the 100th digit of Pi?',
    optionA:'2',
    optionB:'4',
    optionC:'7',
    optionD:'9',
    answer: 'd',
    },
    {question: 'A doctor with a PhD is a doctor of what?',
    optionA:'Philosophy',
    optionB:'Psychology',
    optionC:'Phrenology',
    optionD:'Physical Therapy',
    answer: 'a',
    },
    {question: 'What year did World War I begin?',
    optionA:'1919',
    optionB:'1905',
    optionC:'1914',
    optionD:'1925',
    answer: 'c',
    },
    {question: 'How many manned moon landings have there been?',
    optionA:'1',
    optionB:'6',
    optionC:'7',
    optionD:'3',
    answer: 'b',
    },
    {question: 'What country saw a world record 315 million voters turn out for elections on May 20, 1991?',
    optionA:'United States of America',
    optionB:'India',
    optionC:'Poland',
    optionD:'Soviet Union',
    answer: 'b',
    },
    {question: 'Who wrote "Harry Potter"?',
    optionA:'Terry Pratchett',
    optionB:'Daniel Radcliffe',
    optionC:'J.K. Rowling',
    optionD:'J.R.R. Tolkien',
    answer: 'c',
    },
    {question: 'How many Harry Potter books are there?',
    optionA:'8',
    optionB:'5',
    optionC:'7',
    optionD:'6',
    answer: 'c',
    }
  ]
highScores =[
{
name: 'Babu Bhaiyya',
score:'9.5',
},
{
name: 'Sardar Khan',
score:'8.5',
},
{
name: 'Munna Bhaiyya',
score:'8.0',
},
{
name: 'Majnu Bhai',
score:'6.5',
},
{
name: 'Jethalal',
score:'6.0',
}
]

welcome();
begin();
leaderBoard();

function title(playerName){
  CFonts.say(`Welcome ${playerName}`, {
    font: 'chrome',
    align: 'left',
    colors: ['#61b15a','#f3eac2','#ec524b'],
    background: 'transparent',
    letterSpacing: 1,
    lineHeight: 1,
    space: true,           
    maxLength: '0',
    gradient: false,     
    independentGradient: false,
    transitionGradient: false,
    env: 'node'      
  });
}

function welcome(){
  var playerName = readlineSync.question((chalk.hex('#0be882')('PLEASE ENTER YOUR NAME\n\n')));
       console.log((chalk.hex('#61b15a')
      ("\n***********************************************************************************")));
      title(playerName);
      console.log((chalk.hex('#ec524b')
      ("***********************************************************************************\n")));
      console.log("~ Each question has one correct answer, you'll be provided with four options.\n");
      console.log("~ Please input A,B,C or D as per your answer.\n");
      console.log("~ You'll receieve +1 for correct answer and -0.5 for wrong answer.\n");
      console.log((chalk.hex('#ec524b')
      ("***********************************************************************************\n")));
      readlineSync.question((chalk.hex('#0be882')("------------------------Shall we begin? Press ENTER to start-----------------------\n")));
}

function optionTable(optionA,optionB,optionC,optionD){
  term.table( [
      [ '(A)', optionA ,'(B)', optionB ] ,
      [ '(C)', optionC ,'(D)', optionD] ,
      ] , {
      hasBorder: true ,
      contentHasMarkup: true ,
      borderChars: 'light' ,
      borderAttr: { color: 'blue' } ,
      textAttr: { bgColor: 'default' } ,
      width: 40,
      fit: true 
    }
  ) ;
}

function begin(){
  for(var i=0;i<questionSet.length;i++){
    currentQuestion = questionSet[i];
    game(currentQuestion.question,currentQuestion.optionA,currentQuestion.optionB,currentQuestion.optionC,currentQuestion.optionD,currentQuestion.answer,i);
  }
  console.log((chalk.green("Final Score: " + score)));
  var repeat = readlineSync.question((chalk.green("\nWant to play again? [Y/N]" )));
  if (repeat === 'y' || repeat === 'Y') begin();
  else if (repeat === 'n' || repeat === 'N') console.log((chalk.green("\nThank you for playing!")));
  else console.log((chalk.green("\nSorry, invalid input")));
}

 function game(question,optionA,optionB,optionC,optionD,answer,i){
   console.log((chalk.hex('#ffa62b')("----------------------------Question "+(++i)+"----------------------------\n")));
   console.log("Question: "+question+"\n");
   optionTable(optionA,optionB,optionC,optionD);
   console.log("\n");
   var userAnswer = readlineSync.question("Your answer: ");
    if(userAnswer === answer){
      console.log((chalk.hex('#0e918c')("------------------------------------------------------------------")));
      console.log((chalk.green("CORRECT  ✔️\n")));
      score ++;
      }
      else{
      console.log((chalk.hex('#0e918c')("------------------------------------------------------------------")));
      console.log((chalk.hex('#f6830f')("WRONG  ❌\n")));
      score = score - 0.5;
      }
      console.log((chalk.red("YOUR SCORE: ")) + chalk.red(score));
      console.log((chalk.hex('#0e918c')("------------------------------------------------------------------\n")));
 }

function leaderBoard(){
  console.log((chalk.hex('#ffa62b')("\n----------------------------L E A D E R   B O A R D----------------------------\n")));
  console.log(" Name     Score");
  for(var i=0;i<highScores.length;i++){
	var currentScore = highScores[i];
			
term.table( [
      [currentScore.name,currentScore.score] ,
      ] , {
      hasBorder: true ,
      contentHasMarkup: true ,
      borderChars: 'light' ,
      borderAttr: { color: 'blue' } ,
      textAttr: { bgColor: 'default' } ,
      width: 15,
      fit: true 
    }
  ) ;			
}	
  console.log((chalk.hex('#ffa62b')("\nIf your score is higher than 6. Please let me know, I'll update the leader board")));
}