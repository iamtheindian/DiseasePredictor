demo = new DualListbox('.demo');

DualListbox('.demo',{
    addEvent: function(value) {
        console.log(value);
    },
    removeEvent: function(value) {
        console.log(value);
    },
    availableTitle: 'Different title',
    selectedTitle: 'Different title',
    addButtonText: '>',
    removeButtonText: '<', addAllButtonText: '>>',
    removeAllButtonText: '<<',
    options: [
        {text:"Option 1", value: "OPTION1"},
        {text:"Option 2", value: "OPTION2"},
        {text:"Selected option", value: "OPTION3", selected:true}
    ]
  });