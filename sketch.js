let teamA = [];
let teamB = [];
let turn = 0;
let centerX;
let centerY;
let text="MAX/MIN";
function setup() {
  createCanvas(windowWidth, windowHeight);
   let button = createButton(text);
  button.position(19, 0);
  button.mousePressed(fullCanvas);
  for (let i = 0; i < 8; i++) {
    teamA[i] = new curlingBall(true);
    teamB[i] = new curlingBall(false);
  }
}

function draw() {
  screen();

  // show the balls for all the turns
  for (i = 0; i < 16; i++) {
    let ball = getBall(i)
    if (i == turn &
        mouseIsPressed &
        mouseX < windowWidth/4 &
        mouseY > windowHeight/4 &
        mouseY < windowHeight-windowHeight/4)
      ball.grab()
    else if (i + 1 == turn)
      ball.slide()
    ball.show()
  }
}
function fullCanvas() {
    let fs = fullscreen();
    fullscreen(!fs);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function screen() {
  centerX = windowWidth * 5 / 6;
  centerY = windowHeight / 2;
  background(220);
  stroke(0);
  strokeWeight(windowHeight / 40);
  line(0, windowHeight / 4, windowWidth, windowHeight / 4);
  line(0, windowHeight - windowHeight / 4, windowWidth, windowHeight - windowHeight / 4);
  line(windowWidth / 4, windowHeight / 4, windowWidth / 4, windowHeight * 3 / 4);
  fill(0, 0, 255);
  noStroke();
  circle(centerX, centerY, windowHeight / 2);
  fill(255);
  circle(centerX, centerY, windowHeight / 3);
  fill(255, 0, 0);
  circle(centerX, centerY, windowHeight / 6);
  fill(255);
  circle(centerX, centerY, windowHeight / 15);
  let xA = [];
  let yA = [];
  let xB = [];
  let yB = [];
  for (let i = 1; i < 9; i++) {
    xA[i] = (windowHeight / 25 * i);
    yA[i] = windowHeight / 4 - windowHeight / 25;
    fill("Yellow")
    circle(xA[i], yA[i], windowHeight / 25)
    xB[i] = (windowHeight / 25 * i);
    yB[i] = windowHeight * 3 / 4 + windowHeight / 25;
    fill("Green")
    circle(xB[i], yB[i], windowHeight / 25)
  }
}

function mouseReleased() {
  if (turn < 16) {
    getBall(turn).throw()
    if (++turn == 16)
      endMatch()
  }
}

  /**
   * Decide which team has won according to the scores and print the result.
   * TODO: we should print a nicer dialoge
   */
  function endMatch() {
  
    let scoreA = score(teamA)
    let scoreB = score(teamB)
    near(teamA);
    if (scoreA < scoreB)
      console.log("Yellow team wins!")
    else if (scoreA > scoreB)
      console.log("Green team wins!")
    else
      console.log("It's a draw!")
  }

  /**
   * Returns the score for the specified team, 
   * based on the sum of the distances to the center of each ball.
   */
  function score(team) {
    let score = 0;
    for (let i = 0; i < 8; i++) {
      score += team[i].distanceTo(centerX, centerY)
    }
    return score
  }

  /**
   * Returns the curlingBall for the specified turn.
   */
  function getBall(turn) {
    let team = (turn % 2 == 0) ? teamA : teamB // team for the turn
    let pos = Math.floor(turn / 2) // position in the team array for the turn
    return team[pos]
  }
function near(team){
  let lowestToHighest=[];
  for(let i=0;i<8;i++){
    lowestToHighest[i]=1000;
  }
  lowestToHighest=sort(team.distance);
  console.log(lowestToHighest)
}