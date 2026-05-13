//Nagybetus
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('#nagybetus');
  const defaultCSS = document.querySelector('#alapccs');
  const altCSS = document.querySelector('#nagybccs');

  toggleButton.addEventListener('click', function() {
    if (defaultCSS.disabled) {
      defaultCSS.disabled = false;
      altCSS.disabled = true;
      toggleButton.innerText = 'Nagybetűs, kontrasztos téma';
    } else {
      defaultCSS.disabled = true;
      altCSS.disabled = false;
      toggleButton.innerText = 'Normál téma';
}});
});
