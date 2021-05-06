//global
///p5.play library most be enabled for this program to run!!!!


//game control
var stage = 4; //control which function to run
var escolha = 0
var escolha_pc = 0
var timer = 5
var está 
var resultado = 0
var vitoriajokenpo = 0

  //tug of war
   var rectX = 400
   var nivel = 0
   var winstr = 0
  //fechar tug of war
  //peteca
   var po1X = 45
   var po1Y = 80
   var pcY = 250
   var dcY = 10
   var pingpoints = 0
   var pingpoints_pc = 0
   //bola
   var ballX = 400
   var ballY = 250
   var dX = 5
   var dY = 3
    //fechar bola
  //fechar peteca

//close game control

//gravity
var jump = false;//are we jumping?
var direction = 1;//the force of gravity and in y direction
var velocipy = 1;//sppeed of the player
var jumpPower = 15;//power jump ;p
var fallingSpeed = 6;//equal velocipy
var minHeight = 305//min falling
var maxHeight = 50//height of sky
var jumpCounter = 0;//amount of jumps

//close gravity

//player
var p1X = 30;
var p1Y = 305;
var pWidth = 30;
var pHeight = 200;
var parado = 0
//close player

//boxes (plataforms)
var b1X = 200;
var b1Y = 300;
var bWidth = 200;
var bHeight = 40;
//close boxes

//var imgs
var fundo;
var credit;
var fundojogo;
var blitzcrank
var imgplayer;
var portaaberta;
//closed var imgs





function preload(){
 
  fundo = loadImage('instrucoes.png')
  credit = loadImage('Creditos.jpg')
  fundojogo = loadImage('Fundojogo.jpg')
  pedra = loadImage('pedra.png')
  papel = loadImage('papel.png')
  tesoura = loadImage('tesoura.png')
  blitzcrank = loadImage ('blitzcrank.png')
  imgplayer = loadImage('Sprites/1.png')
  cat = loadImage('Sprites/cat.png')
  blu = loadImage('image_2021-05-06_030452.png')
  dog = loadImage('image_2021-05-06_030920.png')
  imgplayerd = loadImage('Sprites/2.png')
  imgplayere = loadImage('Sprites/3.png')
  portaaberta = loadImage('portaaberta.png')
  portafechada = loadImage('portafechada.png')
  
  fundogame = loadImage('fundogame.jpg')
  stoneground = loadImage('stoneground.jpg')
  brasil = loadImage('brasil.png')
  japão = loadImage('japão.png')
  alemanha = loadImage('alemanha.png')
  puxacorda = loadImage('puxacorda.jpg')
  forest = loadImage('forest.png')
  corda = loadImage('corda.png')
  faixa = loadImage('faixa.png')
  byecat = loadImage('byecat.png')

  
  //peteca
  peteca = loadImage('peteca.png')
  petecae = loadImage('petecas/petecae.png')
  petecad = loadImage('petecas/petecad.png')
  petecaid = loadImage('petecas/petecaid.png')
  petecasd = loadImage('petecas/petecasd.png')
  petecaie = loadImage('petecas/petecaie.png')
  petecase = loadImage('petecas/petecase.png')
  fundopeteca = loadImage('fundopeteca.jpg')
  topdownbeach = loadImage('topdownbeach.png')
  raquetepeteca = loadImage('raquetepeteca.png')
  raquetepetecae = loadImage('raquetepetecae.png')
  //fechar peteca
  
  
}
 


/////setup
function setup(){
  createCanvas(800, 500);
  rectMode(CENTER);
  textAlign(CENTER);
  

  
  
  
}/////close setup


/////draw
function draw() {
  //call functions
  keyPressed();
  keyTyped();
  gravity();
  stages();
 
  
  
 
}/////close draw

function mousePressed(){
  if(mouseX>width/3.2 && mouseX<width/2+150 && mouseY> 125 && mouseY < 210 && stage == 4){
    stage = 0
    }///play
  if(mouseX>width/3.2 && mouseX<width/2+150 && mouseY> 210 && mouseY < 293 && stage == 4) {
    stage = 5
  }//instructions
  if(mouseX>width/3.2 && mouseX<width/2+150 && mouseY> 295 && mouseY < 383 && stage == 4 ){
    stage = 6
  }//creditos

  
}
function mouseClicked(){
  //puxada do jogador
  if(rectX != 45 && rectX < 665 && stage == 11){
  rectX = rectX + 80
  }
  
  if(rectX >= 665 && stage == 11){
    rectX = 665
  }
  
  
  //fechar puxada do jogador
}//tug of war player

function player(){
  if(parado == 0){
  image(imgplayer,p1X,p1Y,100,150)
  }
 
  if(keyIsDown(LEFT_ARROW)){
    image(imgplayere,p1X,p1Y,100,150)
    parado = 1
  }  
  else(parado = 0)
  
  if(keyIsDown(RIGHT_ARROW)){
    image(imgplayerd,p1X,p1Y,100,150)
    parado = 1
  }
 
  
  //the player
}////close player
//gravity
function gravity(){
  ////ground
  if(p1Y >= minHeight && jump == false){
//STOP FALLING
    p1Y = p1Y;//IN THE GROUND
    jumpCounter = 0
  }////close on ground
 else(p1Y = p1Y +(direction * velocipy)) //gravity working
  
  if(jump == true){
    if(p1Y <= maxHeight || jumpCounter >= jumpPower){
      if(p1Y >= minHeight){
      p1Y = minHeight
      }//close min height
      else{
      velocipy = fallingSpeed
      }//fall at maximums jump
    }//close to max
    else{
    velocipy = -jumpPower;
    jumpCounter = jumpCounter + 1;//add jump counter
    }//close not at max
  }//close jump
  if(jump == false){
    velocipy = fallingSpeed
    
  }
  
  
}/////close gravity
//Controls
function keyPressed(){
  if(keyIsDown(LEFT_ARROW)){
    image(imgplayere,p1X,p1Y,100,150)
    p1X = p1X - 4;//move left
  }//close left
  if(keyIsDown(RIGHT_ARROW)){
    image(imgplayerd,p1X,p1Y,100,150)
    p1X = p1X + 4;//move right
  
  
  
  }//close right 
}////close keyPressed
function keyTyped(){
if(keyIsDown(UP_ARROW)){
    jump = true
  }
  else{jump = false
  }//no jump
if(keyIsDown(ENTER) && stage == 4 ){
  vitoriajokenpo = 0
  pingpoints = 0
  dX = 5
  dY = 3
  dcY = 10  
  resultado = 0
  nivel = 0
  winstr = 0
  rectX = 400
}
//close a
  
}////close keyTyped
//close controls
//stages
function stages(){
  
  if(stage == 0){
  
    //vitoria do jogo
    if(winstr == 3 && pingpoints == 3 && vitoriajokenpo == 1){
      stage = 12
    }
    //fechar vitoria do jogo
    //limte aos lados
  if(p1X<=0){
    p1X = 3
  }
  if(p1X>=700){
    p1X = 699
  }
  //fechar limite aos lados
    timer = 5
  //apparance of the game
  if(keyIsDown(ESCAPE) && (stage == 0 || stage == 2|| stage == 5 || stage ==  6 || stage == 7)){
    stage = 4
    
  }//voltar menu
  //sky
  image(fundogame,0,0,800,500);//close sky
//ground
  noStroke();
  fill(112,128,144);
  image(stoneground,0, 400 ,width , 100);//close ground
//borderline 
  noFill();
  stroke(56);
  strokeWeight(10)
  rect(width/2,height/2,width,height)//close bordeline
//the box doors
  
  image(portafechada,width/5.35, height - 301)   
  textSize(25)
  
  if(p1X>70 && p1X < 230){
      strokeWeight(3)
      stroke(255)     
      fill(0)
      text('Brasil',width/3.9, height/3.6)
      image(brasil,width/5.2,height/3.4,100,50)
    
    
    
      image(portaaberta,width/13, height - 310,200,220)
      
       if(key =="ArrowDown" && p1X >= 100 && p1X <= 300){
        stage = 8
    
       }
       
  }//selector stage 1
  

  image(portafechada,width/2.28, height - 301) 

  if(p1X>260 && p1X<440){
  strokeWeight(3)  
  stroke(255)
  fill(0)
  text('Japão',width/2,height/3.6)
  image(japão,width/2.3,height/3.4,100,50)
    
    
    
     
      image(portaaberta,width/3.14, height - 310,200,220)
    if(key == "ArrowDown" && p1X >= 300 && p1X <= 500){
      stage = 2
    }
    
  }//selector stage 2
  
  
 
  image(portafechada,width/1.45, height - 301)
    
    //close the box doors

  if(p1X>460 && p1X < 640){
      strokeWeight(3)
      stroke(255)
      fill(0)
      text('Alemanha',width/1.33,height/3.6)    
      image(alemanha,width/1.453,height/3.4,100,50)
    
      
      image(portaaberta,width/1.75, height - 310,200,220)
    //selector stage 1
      
      if(key == "ArrowDown" && p1X >= 500 && p1X <= 700){
        stage = 3
      }//selector stage 3
  
    }//selector stage 3
//player
//remember to replace by a draw
  player();//call player
  }//Game
  if(stage == 1){
   stage = 8
  }//Brasil
  if(stage == 2){
    //retorno menu
     if(keyIsDown(ESCAPE) && (stage == 0 || stage == 2|| stage == 5 || stage ==  6 || stage == 7 || stage == 8)){
    stage = 4
    
  }
    strokeWeight(3)
    //close retorno menu
    //limitador
    
    if(resultado > 3){
      resultado = 3
    }
    if(resultado < -3){
      resultado = -3
    }
    
    //fechar limitador
    //escolha_pc
    escolha_pc = 0
    if(escolha_pc == 0){
      var comp_choices = ['pedra','papel','tesoura']
      var comp_display = random(comp_choices)
       if(comp_display == 'pedra'){
         escolha_pc = 1
       }
       if(comp_display == 'papel'){
         escolha_pc = 2
       }
      if(comp_display == 'tesoura'){
        escolha_pc = 3
      }
    }
    //fechar escolha_pc
    //vitoria
    
    //fechar vitoria

    //appareance
    background(131,111,255)
    noStroke()
    fill(80)
    rect(310,80,600,150,15)
    image(pedra,50,10,120,120)
    image(papel,240,10,120,120)
    image(tesoura,450,10,120,120)
    stroke(173,216,230)
    fill(0)
    textSize(45)
    text('Computador',140,195)
    image(blitzcrank,640,10,140,140)
    image(cat,640,340)
    fill(139,69,19)
    text('Pontos: '+resultado,300,330)
    //close apparance
 
    
    
    //cardbord jogador
    noStroke()
    fill(80)
    rect(310,413,600,150,15)
    
    stroke(173,216,230)
    fill(0)
    textSize(45)
    text('Jogador',100,330)
    //fechar cardbord jogador
    //Pedra
    if(mouseX >= 40 && mouseX < 170 && mouseY >= 358 && mouseY < 485 && stage == 2 && timer == 0 && vitoriajokenpo == 0){
      if(mouseIsPressed){
        escolha = 1
        stage = 7
        
      }
    stroke(0)
    fill(70,130,180)
    rect(105,420,120,120,15)
    }
    image(pedra,50,365,120,120)
    //fecha pedra
    //papel
    if(mouseX >= 235 && mouseX < 365 && mouseY >= 358 && mouseY < 485 && stage == 2 && timer == 0 && vitoriajokenpo == 0){
      if(mouseIsPressed){
        stage = 7
        escolha = 2
      }
    stroke(0)
    fill(70,130,180)
    rect(305,420,120,120,15)
    }    
    image(papel,240,365,120,120)
    //fecha papel
    //tesoura
    if(mouseX >= 440 && mouseX <565 && mouseY >= 358 && mouseY < 485 && stage == 2 && timer == 0 && vitoriajokenpo == 0){
      if(mouseIsPressed){
        stage = 7
        escolha = 3
      }
    stroke(0)
    fill(70,130,180)
    rect(505,420,120,120,15)
    }
    image(tesoura,450,365,120,120)
    //fecha tesoura
    //escolhapc
    
    //fechar escolhapc
    //popUp intructions
    if (frameCount % 60 == 0 && timer > 0 && stage == 2) { 
    timer --;
  }
    if(timer != 0 && vitoriajokenpo != 1){
    noStroke()
    fill(176,196,222)
    rect(width/2,height/2,width,height/3,15)
    textSize(30)
    stroke(0)
    fill(255)
    text('Junte 3 pontos para ganhar contra o Blitzcrank!',width/2,height/2)
    }
    
    //fechar popUp instructions
    //popUp Vitoria
    if(vitoriajokenpo == 1){
      noStroke()
    fill(176,196,222)
    rect(width/2,height/2,width,height/3,15)
    textSize(30)
    stroke(0)
    fill(255)
    text('Você ja ganhou contra o Blitzcrank! Volte para o menu',width/2,height/2)
      
    }
    //fechar popUp vitoria
  }//Japão
  if(stage == 3){
   stage = 11
  }//Alemanha
  if(stage == 4){
 strokeWeight(3)
  background(79,79,79)////close sky
  image(fundojogo,0,0)
  ////title
  textSize(45)
  fill(0,255,127)
  stroke(47,79,79)
  text('Aqui e ali, antes e agora',width/2,height/8)////close title
  ////Jogar
  stroke(0)
  fill(102,205,170)
  rect(width/2,height/3,300,80,15)////rect externo
    
  if(mouseX>width/3.2 && mouseX<width/2+150 && mouseY> 125 && mouseY < 210){
  noStroke() 
  fill(72,61,139)
  rect(width/2,height/3,300,80,15)
    
  }////jogarfrufru
    
  fill(20)
  noStroke()
  text('Jogar',width/2.02,height/2.8)////closed jogar
    
  ////Instruções 
  
  stroke(0)
  fill(102,205,170)
  rect(width/2,height/2,300,80,15)
    
  if(mouseX>width/3.2 && mouseX<width/2+150 && mouseY> 210 && mouseY < 293){
  noStroke() 
  fill(72,61,139)
  rect(width/2,height/2,300,80,15)
    
 
    
  }
    
  fill(20)
  noStroke()
  text('Instruções',width/2.02,height/1.9)////closed Instruções
    
  ////Creditos
  stroke(0)
  fill(102,205,170)
  rect(width/2,height/1.5,300,80,15)
    
  if(mouseX>width/3.2 && mouseX<width/2+150 && mouseY> 295 && mouseY < 383){
    noStroke() 
  fill(72,61,139)
  rect(width/2,height/1.5,300,80,15)
    
  }
   
  fill(20)
  noStroke()
  text('Creditos',width/2,height/1.45)////closed Creditos
  }//menu
  if(stage == 5){
    if(keyIsDown(ESCAPE) && (stage == 0 || stage == 5 || stage ==  6)){
    stage = 4
    
  }//voltar menu
    createCanvas(800, 500)
    image(fundo,0,0)
    
  }//Instruções -
  if(stage == 6){
    createCanvas(800,500)
    background(0)
    image(credit,0,0)
    if(keyIsDown(ESCAPE) && (stage == 0 || stage == 5 || stage ==  6)){
    stage = 4
    
  }//voltar menu
    
  }//creditos
  if(stage == 7){
    //appareance
    background(131,111,255)
    noStroke()
    fill(80)
    rect(310,80,600,150,15)
    image(pedra,50,10,120,120)
    image(papel,240,10,120,120)
    image(tesoura,450,10,120,120)
    stroke(173,216,230)
    fill(0)
    textSize(45)
    text('Computador',140,195)
    image(blitzcrank,640,10,140,140)
    image(cat,640,340)
    //close apparance
   //zerou
    if(resultado == 3){
      vitoriajokenpo = 1
    }
     if(vitoriajokenpo == 1){
      noStroke()
    fill(176,196,222)
    rect(width/2,height/2,width,height/3,15)
    textSize(30)
    stroke(0)
    fill(255)
    text('Você ja ganhou contra o Blitzcrank! Volte para o menu',width/2,height/2)
      
    }
  //fechar zerou
    
    
    //cardbord jogador
    noStroke()
    fill(80)
    rect(310,413,600,150,15)
    
    stroke(173,216,230)
    fill(0)
    textSize(45)
    text('Jogador',100,330)
    fill(139,69,19)
    text('Pontos: '+resultado,300,330)
    //fechar cardbord jogador
    //Pedra
  
    image(pedra,50,365,120,120)
    //fecha pedra
    //papel
   
    image(papel,240,365,120,120)
    //fecha papel
    //tesoura

    image(tesoura,450,365,120,120)
    //fecha tesoura
    
    //popup
    noStroke()
    fill(80)
    rect(width/2,height/2,width/1,height/3,15)
    //close popup
    
    //botões popup
   
    textSize(24)
    stroke(0)
    fill(54,54,54)
    rect(width/1.5,height/1.7,width/4,height/8,15)
    stroke(0)
    fill(255)
    text('Tentar de novo',width/1.5,height/1.65)
    if(mouseX >= 430  && mouseX < 635 && mouseY >= 265 && mouseY <330 && stage == 7){
     if(mouseIsPressed){
       stage = 2
       está = true
     }
    stroke(0)
    fill(65,105,225)
    rect(width/1.5,height/1.7,width/4,height/8,15)
    stroke(0)
    fill(255)
    text('Tentar de novo',width/1.5,height/1.65)
    }
    //close botões popup
    
    //o jogo em si
    stroke(0)
    fill(255)
    if(escolha == 1){
     
    if(escolha_pc == 1){
      
      textSize(25)
      
      text("Você e o Computador escolheram PEDRA, Empatou!",400,200)
   
  }
    if(escolha_pc == 2){
      textSize(25)
      
      text("Você escolheu PEDRA e o Computador PAPEL, Você perdeu!",400,200)
     if(está == true && stage == 7 ){
      resultado = resultado - 1
       está = false
      
    }}
    if(escolha_pc == 3){
      textSize(25)
      
      text("Você escolheu PEDRA e o computador  TESOURA, Você ganhou!",400,200)
      if(está == true && stage == 7 ){
      resultado = resultado + 1
       está = false
  }
  }
    }
    if(escolha == 2){
    if(escolha_pc == 1){
      textSize(25)
      
      text("Você escolheu PAPEL, e o computador PEDRA, Você ganhou!",400,200)
     if(está == true && stage == 7 ){
      resultado = resultado + 1
       está = false}
    }
    if(escolha_pc == 2){
      textSize(25)
      
      text("Você e o computador escolheram PAPEL, Empatou!",400,200)
    }
    if(escolha_pc == 3){
      textSize(25)
      
      text("Você escolheu PAPEL e o computador TESOURA, Você perdeu!",400,200)
      if(está == true && stage == 7 ){
      resultado = resultado - 1
       está = false
    }
  }
    }
    if(escolha == 3){
    if(escolha_pc == 1){
      textSize(25)    
      text("Você escolheu TESOURA, e o computador PEDRA, Você perdeu!",400,200)
      if(está == true && stage == 7 ){
      resultado = resultado - 1
       está = false
    }
      
    }
    if(escolha_pc == 2){
      textSize(25)
      
      text("Você escolheu TESOURA, e o computador PAPEL, Você ganhou!",400,200)
     if(está == true && stage == 7 ){
      resultado = resultado + 1
       está = false
     }
     
    }
    if(escolha_pc == 3){
      textSize(25)
      
      text("Você e o computador escolheram TESOURA, Empatou!",400,200)
    }
  }
    //fechar o jogo em si
    
    //zero
    
    //fechar zero
    
  }//jokenpo
  if(stage == 8){
  //retorno
    if(keyIsDown(ESCAPE) && (stage == 0 || stage == 2|| stage == 5 || stage ==  6 || stage == 7 || stage == 8 || stage == 9)){
    stage = 4
    
  }
  //fechar retorno
    
     //timer
    if (frameCount % 60 == 0 && timer > 0 && stage == 8 || stage == 9 && pingpoints != 3) { 
    timer --;
  }
    if(timer != 0 && pingpoints != 3){
      stage = 9
    }
    
        
    
    
    //timer
    
  //aparencia
  image(topdownbeach,width/2,height/2)
  image(cat,width/4,30,50,50)
  image(blu,width/1.33,30,50,50)
  noStroke()
  fill(0,200)
  rect(width/2, height/2,3,900)
  //fechar aparencia
    
  //calculadores
  ballX = ballX - dX
  ballY = ballY + dY
  pcY = pcY + dcY
  //fechar calculadores
    if(stage == 8){
    imageMode(CENTER)
    }
    else(imageMode(CORNER))
   
  //jogador
    
    //desenho
    noStroke()
    fill(15)
    if(mouseY<470 && mouseY>40 && (pingpoints != 3 || pingpoints_pc != 3) && stage == 8){
      image(raquetepeteca,30,mouseY,po1X,po1Y)
    }
    if(mouseY > 470 && (pingpoints != 3 || pingpoints_pc != 3) && stage == 8){
      image(raquetepeteca,30 ,470,po1X,po1Y)
    }
    if(mouseY < 40 && (pingpoints != 3 || pingpoints_pc != 3) && stage == 8){
     image(raquetepeteca,30,40,po1X,po1Y)
   }
    //fechar desenho
    
  //fechar jogador
    
  //a peteca em si
   
    if(ballX < 50 && ballX >25 &&  ( ballY < mouseY +40 && ballY > mouseY - 40 ) || ballX > 750 && ( ballY < pcY +40 && ballY > pcY - 40 ) && stage == 8){
      dX = -dX
      dX = dX * 1.2
      dY = dY * 1.2
    }
    
    if(ballX < -20 || ballX > 820){
      ballX = 400
      
      dX = 5
      dY = 3
    
  }
     if(ballY >= 480 || ballY <= 10 ){
       
      dY = -dY
      dX = dX * 1.2
      dY = dY * 1.2
     
    }     
    stroke(0)
    image(petecaid,ballX,ballY,50,30)    
    
  //fechar a peteca em si
    
    //AI
    if(pcY >460 || pcY < 40){
    dcY = -dcY
  }
    noStroke()
    fill(15)
    image(raquetepetecae,770,pcY,35,80)
    //fechar AI
    
    //pingp
    está = true
    textSize(40)
    text(pingpoints,width/3,height/10)
    if(ballX > 813 && stage == 8 ){
     
      pingpoints = pingpoints + 1
    }
  
    text(pingpoints_pc,width/1.5,height/10 )
    if(ballX < -14  && stage == 8){
      
      pingpoints_pc = pingpoints_pc + 1 
    }
    strokeWeight(3)
    if(pingpoints == 3 && stage == 8){
    noStroke()
    fill(0,255,0)
    rect(width/2,height/2,800,300,15)
    textSize(24)
    stroke(255) 
    fill(0)
    text("Parabéns você venceu! Retorne ao menu",420,height/2)
    dX = 0
    dY = 0
   dcY = 0
    ballX = 400
    ballY = 250
  }
    if(pingpoints_pc == 3 && stage == 8){
    
      
    noStroke()
    fill(255,0,0)
    rect(width/2,height/2,800,300,15)
    
    stroke(255) 
    fill(0)
    text("Você perdeu!",390,height/2)
    
    
    stroke(0)
    fill(230)
    rect(width/2,height/1.5,200,60,15)
    
    textSize(25)
    stroke(255)
    fill(0)
    text('Tentar de novo',width/2,height/1.47)
    
    dX = 0
    dY = 0
    dcY = 0
    ballX = 400
    ballY = 250
    
    
    if(mouseX > width/2.7 && mouseX < width/2.7 +200 && mouseY > height/1.7 && mouseY < height/1.7 + 70){
      if(mouseIsPressed){
    pingpoints_pc = 0
    pingpoints = 0
    dX = 5
    dY = 3
    dcY = 10
        
      }
    stroke(0)
    fill(200,0,0)
    rect(width/2,height/1.5,200,60,15)
      
    stroke(255)
    fill(0)
    text('Tentar de novo',width/2.,height/1.47)
      
    }
  
  }
    //fechar pingp
    
   
    
    
    
    
    
  }//peteca
  if(stage == 9){
    image(fundopeteca,0,0,800,500)
    stroke(0)
    fill(240)
    text('O jogo vai começar em '+timer+"\n"+"Mova o mouse e rebata!",width/2,height/2)
     //timer
    if (frameCount % 60 == 0 && timer > 0 && stage == 9) { 
    timer --;
  }
    if(timer == 0){
      stage = 8}
 if(keyIsDown(ESCAPE) && (stage == 0 || stage == 2|| stage == 5 || stage ==  6 || stage == 7 || stage == 8 || stage == 9)){
    stage = 4
    
  }
    
    
    //timer
  }//tela de espera
  if(stage == 10){
    background(255)
    image(puxacorda,0,0,800,500)
    stroke(0)
    fill(255)
    text('O jogo vai começar em '+timer+'\n'+'Aperte o botão direito do mouse rapidamente'+"\n"+"Ganhe 3 vezes",400, height/2)
  if (frameCount % 60 == 0 && timer > 0 && stage == 10) { 
    timer --;
  }
  if(timer == 0){
      stage = 11}
 if(keyIsDown(ESCAPE) && (stage == 0 || stage == 2|| stage == 5 || stage ==  6 || stage == 7 || stage == 8 || stage == 9 || stage == 10)){
    stage = 4
    
  }
  }//tela de espera 2
  if(stage == 11){
    //voltar menu
    if(keyIsDown(ESCAPE) && (stage == 0 || stage == 2|| stage == 5 || stage ==  6 || stage == 7 ||     stage == 11))
    {
    stage = 4 
    }
    //fechar voltar menu
    //timer
    if (frameCount % 60 == 0 && timer > 0 && (stage == 10 || stage == 11) && winstr != 3) { 
    timer --;
  }
    if(timer != 0 && winstr != 3){
      stage = 10
    }
    //timer
    //puxador_pc
    strokeWeight(3)
    if(rectX < 665){
  rectX = rectX - 3
  }
    if(rectX <= 135){
    rectX = rectX
    
    textSize(24)
    stroke(0)
    fill(255,0,0)
    text('Você perdeu',width/2.5 , height/2.2)
  }
    if(rectX >= 665){
    rectX = rectX
     
    textSize(24)
    stroke(0)
    fill(0,255,0)
    text('Você ganhou',width/2.5 , height/2.2)
  }
    //fechar puxador_pc
    
    //aparencia
    if(stage == 11){
      textAlign(LEFT);
    }
    else(textAlign(CENTER))
    image(forest,0,0,800,500)
    image(cat,width/1.33,30,50,50)
    image(dog,width/4,30,50,50)
    strokeWeight(3)
    stroke(0)
    fill(0)
    image(corda,0,0,800,500)
  
    noStroke()
    fill(0,0,255)
    image(faixa,rectX,230,100,100)
  
    noStroke()
    fill(0,255,0,160)
    rect(700,height/2,25,100)
  
    noStroke()
    fill(255,0,0,160)
    rect(100,height/2,25,100)
    //aparencia
    
    //dificuldade
    strokeWeight(3)
    if(nivel == 0){
    
    if(rectX < 665){
  rectX = rectX - 2
  }
    if(rectX <= 45 && nivel == 0){
    rectX = 45
    
    textSize(24)
    stroke(0)
    fill(255,0,0)
    text('Você perdeu',width/2.5 , height/2.2)
  }
    if(rectX >= 665 && nivel == 0){
    rectX = rectX
     
    textSize(24)
    stroke(0)
    fill(0,255,0)
    text('Você ganhou',width/2.5 , height/2.2)
    winstr = 1  
  }
    
}
    if(nivel == 1){
    if(rectX < 665){
  rectX = rectX - 3
  }
    if(rectX <= 45 && nivel == 1){
     rectX = 45
    
    textSize(24)
    stroke(0)
    fill(255,0,0)
    text('Você perdeu',width/2.5 , height/2.2)
  }
    if(rectX >= 665 && nivel == 1){
    rectX = rectX
     
    textSize(24)
    stroke(0)
    fill(0,255,0)
    text('Você ganhou',width/2.5 , height/2.2)
      winstr = 2
  }
}
    if(nivel == 2){
    if(rectX < 665){
  rectX = rectX - 3.5
  }
    if(rectX <= 45 && nivel == 2){
    rectX = 45
    
    textSize(24)
    stroke(0)
    fill(255,0,0)
    text('Você perdeu',width/2.5 , height/2.2)
  }
    if(rectX >= 665 && nivel == 2){
    rectX = rectX
     
    textSize(24)
    stroke(0)
    fill(0,255,0)
    text('Você ganhou',width/2.5 , height/2.2)
    winstr = 3
  }
}
    //fechar dificuldade
    
    //vitoria
    if(rectX >= 635 && winstr == 1 && nivel == 0){
    stroke(0)
    fill(255,255,255,80)
    rect(width/2.3,height/1.33,200,80,15)
    
    strokeWeight(3)
    stroke(0)
    fill(255)
    text('Proximo Nivel',width/2.9,height/1.33 + 8)
    
    if(mouseX >= width/3.3 && mouseX <= width/3.3 + 200 && mouseY >= height/1.5 && mouseY <= height/1.5 + 80 ){
      if(mouseIsPressed){
        nivel = 1
        rectX = 400
      }
     stroke(0)
     fill(50)
     rect(width/2.3,height/1.33,200,80,15)
      
     strokeWeight(3)
     stroke(0)
     fill(255)
     text('Proximo Nivel',width/2.9,height/1.33 + 8)
    
    
    
    }
    
  } 
    if(rectX >= 635 && winstr == 2 && nivel == 1){
    stroke(0)
    fill(255,255,255,80)
    rect(width/2.3,height/1.33,200,80,15)
    
    strokeWeight(3)
    stroke(0)
    fill(255)
    text('Proximo Nivel',width/2.9,height/1.33 + 8)
    
    if(mouseX >= width/3.3 && mouseX <= width/3.3 + 200 && mouseY >= height/1.5 && mouseY <= height/1.5 + 80 ){
      if(mouseIsPressed){
        nivel = 2
        rectX = 400
      }
     stroke(0)
     fill(50)
     rect(width/2.3,height/1.33,200,80,15)
      
     strokeWeight(3)
     stroke(0)
     fill(255)
     text('Proximo Nivel',width/2.9,height/1.33 + 8)
    
    
    
    }
    
  }
    if(rectX >= 635 && winstr == 3 && nivel == 2){
    stroke(0)
    fill(0,255,0)
    rect(width/2,height/2,width,400,15)
      
    textSize(30)
    stroke(0)
    fill(255)
    text("Parabéns você ganhou! Retorne para o menu",120,250)
    
 
    
    
    }
    //fechar vitoria
    
    //derrota
    if(rectX <= 45 && nivel == 0){
    stroke(0)
    fill(255,255,255,80)
    rect(width/2.3,height/1.33,200,80,15)
    
    strokeWeight(3)
    stroke(0)
    fill(255)
    text('Tentar de novo',width/3,height/1.33 + 8)
    
    if(mouseX >= width/3.3 && mouseX <= width/3.3 + 200 && mouseY >= height/1.5 && mouseY <= height/1.5 + 80 ){
      if(mouseIsPressed){
        rectX = 400
      }
     stroke(0)
     fill(50)
     rect(width/2.3,height/1.33,200,80,15)
      
     strokeWeight(3)
     stroke(0)
     fill(255)
     text('Tentar de novo',width/3,height/1.33 + 8)
    
    
    
    }
  }
    if(rectX <= 45 && nivel == 1){
     stroke(0)
    fill(255,255,255,80)
    rect(width/2.3,height/1.33,200,80,15)
    
    strokeWeight(3)
    stroke(0)
    fill(255)
    text('Tentar de novo',width/3,height/1.33 + 8)
    
    if(mouseX >= width/3.3 && mouseX <= width/3.3 + 200 && mouseY >= height/1.5 && mouseY <= height/1.5 + 80 ){
      if(mouseIsPressed){
        rectX = 400
      }
     stroke(0)
     fill(50)
     rect(width/2.3,height/1.33,200,80,15)
      
     strokeWeight(3)
     stroke(0)
     fill(255)
     text('Tentar de novo',width/3,height/1.33 + 8)
    
    
    
    }
  }
    if(rectX <= 45 && nivel == 2){
    stroke(0)
    fill(255,255,255,80)
    rect(width/2.3,height/1.33,200,80,15)
    
    strokeWeight(3)
    stroke(0)
    fill(255)
    text('Tentar de novo',width/3,height/1.33 + 8)
    
    if(mouseX >= width/3.3 && mouseX <= width/3.3 + 200 && mouseY >= height/1.5 && mouseY <= height/1.5 + 80 ){
      if(mouseIsPressed){
        rectX = 400
      }
     stroke(0)
     fill(50)
     rect(width/2.3,height/1.33,200,80,15)
      
     strokeWeight(3)
     stroke(0)
     fill(255)
     text('Tentar de novo',width/3,height/1.33 + 8)
    
    
    
    }
  }
    //fechar derrota
    
  }//tug of war
  if(stage == 12){
    image(byecat,0,0)
    textSize(24)
    strokeWeight(3)
    stroke(0)
    fill(255)
    text('Muito obrigado por jogar'+'\n'+'Aqui e Ali, Antes e Depois'+'\n'+'caso queira jogar novamente'+"\n"+"volte para o menu e aperte Enter",400,250)
     if(keyIsDown(ESCAPE) && (stage == 0 || stage == 2|| stage == 5 || stage ==  6 || stage == 7 || stage == 12)){
    stage = 4
    
  }//voltar menu
  }//end of the game
  
}////close stages

//link do video explicativo:
///https://youtu.be/XNgXbBJ9GTk