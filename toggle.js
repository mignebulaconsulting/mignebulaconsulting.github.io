<script>
document.addEventListener("DOMContentLoaded", function() {
  var toggleFields = document.querySelectorAll('.toggle-right');
  
  toggleFields.forEach(function(field) {
    var label = field.querySelector('.field-label');
    var valueContainer = field.querySelector('span.value');
    var radios = field.querySelectorAll('input[type="radio"]');
    
    if (radios.length === 2) {
      var switchElement = document.createElement('label');
      switchElement.className = 'rm-switch';
      
      var sliderElement = document.createElement('span');
      sliderElement.className = 'rm-slider';
      
      switchElement.appendChild(sliderElement);
      valueContainer.appendChild(switchElement);
      
      function updateSwitchState() {
        if (radios[0].checked) {
          switchElement.classList.add('is-checked');
        } else {
          switchElement.classList.remove('is-checked');
        }
      }
      
      switchElement.addEventListener('click', function() {
        if (radios[0].checked) {
          radios[1].checked = true;
        } else {
          radios[0].checked = true;
        }
        updateSwitchState();
      });
      updateSwitchState();
    }
  });
});
</script>
