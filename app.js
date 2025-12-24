function submitComplaint() {
  const type = document.getElementById("type").value;
  const category = document.getElementById("category").value;
  const desc = document.getElementById("desc").value;

  if (!type || !category || !desc) {
    alert("Please fill all fields");
    return;
  }

  document.getElementById("result").innerHTML =
    "<b>Complaint Submitted!</b><br>ID: CMP" + Math.floor(Math.random()*1000) +
    "<br>Status: Submitted";
}
