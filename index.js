/* global AFRAME */

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

/**
 * Stl Model component for A-Frame.
 */
AFRAME.registerComponent('drag-and-drop', {
  schema: {
    event: {type: 'string', default: ''}
  },

  /**
   * Set if component needs multiple instancing.
   */
  multiple: false,

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function () {
    var el = this.el;
    var eventName = 'drag-and-drop';

    if (this.data.event != '') {
      eventName = this.data.event;
    }

    document.addEventListener('dragover',function(event){
      event.preventDefault();
      return false;
    },false);

    document.addEventListener('drop',function(event){
      event.preventDefault();
      for (let f of event.dataTransfer.files) {
        el.emit(eventName, {file: f}, false);
      }
        return false;
      },false);

  },

  /**
   * Called when component is attached and when component data changes.
   * Generally modifies the entity based on the data.
   */
  update: function (oldData) {
  },

  /**
   * Called when a component is removed (e.g., via removeAttribute).
   * Generally undoes all modifications to the entity.
   */
  remove: function () {
  },

  /**
   * Called on each scene tick.
   */
  // tick: function (t) { },

  /**
   * Called when entity pauses.
   * Use to stop or remove any dynamic or background behavior such as events.
   */
  pause: function () { },

  /**
   * Called when entity resumes.
   * Use to continue or add any dynamic or background behavior such as events.
   */
  play: function () { }
});
