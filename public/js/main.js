function addButton() {
  // document.getElementById('name').innerHTML ="Sean Smyth";
  document.getElementById('job').innerHTML ="Web Developer";
  document.getElementById('experience').innerHTML ='Financial Professional';
}

function onLoad() {
  document.getElementById('name').innerHTML = "Sean Smyth"
}

var skillsArray = ['HTML', "CSS", "JavaScript","Ruby", "SQL"]

function addSkills() {
  var ul = document.createElement('ul');
  document.getElementById('home-text').appendChild(ul);
  document.getElementById('home-text').appendChild(document.createElement('li'));

  // document.write("hello")
}


// document.createElement('<ul><li>' + skillsArray.join('</li><li>') + '</li></ul>')
