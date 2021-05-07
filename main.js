var names=[];
function submit(){
    var names_1= document.getElementById("names_i").value;
    names.push(names_1);
    console.log(names);
}
function show(){
    console.log(names);
    document.getElementById("show").innerHTML=names;
}
function sort(){
    names.sort();
    document.getElementById("sort").innerHTML=names;
}

function sear(){
    var n_o_p_t_s=document.getElementById("searchh").value;
    var found=0;
    var j;
    for (j=0; j<names.length; j++){
        if(n_o_p_t_s==names[j]){
            found=found-=1;
        }
    }

    document.getElementById("search").innerHTML= "name found "+found+" time/s";
}
    
