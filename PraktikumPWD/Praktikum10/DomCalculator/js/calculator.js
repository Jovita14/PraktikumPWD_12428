var answer;
function init()
{
    answer = document.getElementById("ans").firstChild;
    CompositionEvent("uin");
}

function comp(id)
{
    var el = document.getElementById(id);
    var res = eval(el.value);
    answer.data = res;
}