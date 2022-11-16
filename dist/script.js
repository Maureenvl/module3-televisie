
// hiermee bedien je de knopjes op de televisie //
var buttons = document.querySelectorAll('.television__channel a');

for(var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(e) {
    document.querySelector('.television__screen iframe').src = this.href;
    e.preventDefault();
  });
}
