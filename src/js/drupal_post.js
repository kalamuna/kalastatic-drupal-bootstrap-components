// Simulate Drupal behaviors so we can so we can share js between prototype and
// the Derpals.
for (var key in Drupal.behaviors) {
  if (!Drupal.behaviors.hasOwnProperty(key)) continue;
  var obj = Drupal.behaviors[key];
  var body = $('body');
  obj.attach(body);
}
