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
        
        console.log('Win!!')
      }
  }
  for (var i = 1; i <= 3; i++) {
      if (board[i] === board[i+3] && board[i+3] === board[i+6])
      {
        console.log('Win!!')
      }
  }
  if ((board[1] === board[5] && board[5] === board[9]) || (board[3] === board[5] && board[5] === board[7])) 
      {
        console.log('Win!!')
      }
  
};
  
 $(document).ready(function(){
 
    $('.box').on('click', function(){
    //$(this).text(player1);
    //for(var i = 0; i <= 9; i++){
   
    var mark = $(this).attr('id'); //track the id number 
      
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
  //}
    check_win();
    console.log(board);
    move_counter++;
  });
});