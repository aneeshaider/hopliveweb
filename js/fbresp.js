// Read a page's GET URL variables and return them as an associative array.
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

$(document).ready(function() {

  if(window.location.href.indexOf("error") < 0) {
    $('#fbresponse').html("<strong>Login Successfull</strong>");
  } else {
    $('#fbresponse').html("<strong>Error code:</strong>"+getUrlVars()["error_code"]+"<p /><strong>Error:</strong>"+getUrlVars()["error"]+"<p /><strong>Description:</strong>"+getUrlVars()["error_description"]+"<p /><strong>Reason:</strong>"+getUrlVars()["error_reason"]+"<p />");
  }
  
});
