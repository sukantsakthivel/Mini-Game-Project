game();
function game()
{
let input = confirm("Can we play Rock,Paper,Scissors?");
let no1 = "rock";
let no2 = "paper";
let no3 = "scissors";
if(input)
{
    let player_input = prompt("Please Enter Rock or Paper or Scissor");
    player_input = player_input.toLowerCase();
    if(player_input)
    {
        if(player_input===no1 || player_input===no2 || player_input===no3)
        {
            let computer = Math.floor(Math.random()*4);
            if(computer==1)
                computer=no1;
            else if(computer==2)
                computer=no2;
            else
                computer=no3;
            let winner = 
            computer===player_input
            ?"Tie!"
            :computer===no1 && player_input===no3 || computer===no2 && player_input===no1 || computer===no3 && player_input===no2 
            ?"Computer Wins"
            :player_input===no1 && computer===no3 || player_input===no2 && computer===no1 || player_input===no3 && computer===no2
            ?"Player Wins"
            :"Computer Wins";
            
            alert(`${winner}`);

            let play_again = confirm("Shall we play again?")
            if(play_again)
            {
                game();
            }
            else
            {
                alert("Thank You");
            }

        
        }
        else
        {
            alert("Type properly in input box and refresh the page");
        }
    }
    else
    {
        alert("The input field is empty!");
    }
}
else
{
    alert("Thank you");
}
}