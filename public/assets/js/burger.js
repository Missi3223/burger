//logic for updating devoured state
$(".devour").on("click", function(event) {
    //set id to equal the burger id associated w/ this button
    let id = $(this).data("id");
    console.log("devour id: ", id);
    //set newDevour variable to be this newdevour
    let newDevour = $(this).data("newDevour");
    

    //set newDevour state to equal newDevour
    let newDevourState = {
        devoured: newDevour
    };

    //Send the PUT update request
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
    }).then(
        function() {
            console.log("changed devour to ", newDevour);
            //Reload the page to get new updated list
            location.reload();
        })
    })
