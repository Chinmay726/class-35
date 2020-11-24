class Form{
constructor(){}
display(){
    var title= createElement('h2');
    title.html("MultiPlayer Car Racing Game");
    title.position(130,10);

    var input=createInput("Name");
    input.position(130,150);

    var button=createButton("Play");
    button.position(250,200);

    button.mousePressed(function(){
        input.hide();
        button.hide();

        var name=input.value();

        playerCount+=1;
        player.update(name);
        player.updateCount(playerCount);

        var greeting=createElement('h4');
        greeting.html("Hello "+name+"\nwaiting for other players to join.....");
        greeting.position(130,150);
    });
}
}