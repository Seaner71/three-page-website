function addButton() {
  document.getElementById('name').innerHTML ="Sean Smyth";
  document.getElementById('job').innerHTML ="Web Developer";
  document.getElementById('experience').innerHTML ='Financial Professional';
}


function addSkills() {
  (function(){
      var ul = document.createElement('ul');
      ul.setAttribute('id','skillList');

      var t;
      skillsArray = ['HTML', "CSS", "JavaScript","Ruby", "SQL","React"]
      document.getElementById('home-text').appendChild(ul);
      skillsArray.forEach(renderSkillsArray);

      function renderSkillsArray(element, index, arr) {
          var li = document.createElement('li');
          li.setAttribute('class','item');

          ul.appendChild(li);

          t = document.createTextNode(element);

          li.innerHTML=li.innerHTML + element;
      }
  })();
}

setTimeout(addButton, 2000)
