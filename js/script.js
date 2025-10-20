function createSrc(originalSrc, newSrc) {
  return "<span>" + "git checkout " + originalSrc + "<br>"+
  "git pull<br>"+
  "git checkout -b " + newSrc + " origin/" + originalSrc + "<br>"+
  "git commit --allow-empty -m \"first commit\"<br>"+
  "git push -u origin " + newSrc + "</span>";
}

$('#submit').on('click', function(){
let originalBranch = $('#originalBranch').val();
let newBranch = $('#newBranch').val();
let generateSrc = "";
console.log("originalBranch:" + originalBranch);
console.log("newBranch:" + newBranch);
if($('#addFeatureTrue').prop('checked')) {
  generateSrc = createSrc("feature/" + originalBranch, "feature/" + newBranch);
} else {
  generateSrc = createSrc(originalBranch, newBranch);
}

  $('#generateBranch').html(generateSrc);
});
