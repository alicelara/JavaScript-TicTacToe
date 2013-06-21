  //definir as variaveis fora do document.ready para ter acesso do terminal
  var player1='X';
  var player2='O';
  var move_counter = 0;
  var board = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9    
  };


  // check that spots 1,2 or 3 are x's or o's
var check_win = function(){
  for (var i = 1; i <= 7; i+=3) {
      if (board[i] === board[i+1] && board[i+1] === board[i+2])
      {
       $('.robot').toggleClass('dont-display');
       $('.draw-board').text("Win!!").prepend("<br />").append("<br><a href='tictactoe.html'>Play again?</a>"); 
  
        console.log('Win!!')

      }
  }
  for (var i = 1; i <= 3; i++) {
      if (board[i] === board[i+3] && board[i+3] === board[i+6])
      {
       $('.robot').toggleClass('dont-display');
       $('.draw-board').text("Win!!").prepend("<br />").append("<br><a href='tictactoe.html'>Play again?</a>"); 
  
        console.log('Win!!')
      }
  }
  if ((board[1] === board[5] && board[5] === board[9]) || (board[3] === board[5] && board[5] === board[7])) 
      {
       $('.robot').toggleClass('dont-display');
       $('.draw-board').text("Win!!").prepend("<br />").append("<br><a href='tictactoe.html'>Play again?</a>"); 
  
        console.log('Win!!')
      }
      else if (move_counter===9){
       $('.robot').toggleClass('dont-display');
       $('.draw-board').text("Tie!!").prepend("<br />").append("<br><a href='tictactoe.html'>Play again?</a>"); 
  
        } 

};
  
 $(document).ready(function(){
 
    $('.box').on('click', function(){
    //$(this).text(player1);
    //for(var i = 0; i <= 9; i++){
   
    var mark = $(this).attr('id'); //track the id number 
  if (!isNaN(board[mark])){

  

    if((move_counter % 2) === 0){
      $(this).text(player1);
     // console.log(mark);     
      board[mark] = player1;
    }
    else{
      $(this).text(player2);
      //console.log(mark);
      board[mark] = player2;
    }
    move_counter++;
  }
  //}
    check_win();
    console.log(board);
    
  });
});