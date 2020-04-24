/*
  Basic elements (HTML5 Elements):
  - PARENT -> egglement, [containegg]
 */
const basicElements = [
  // DIV
  {
    'name': 'div',
    'type': 'div',
    'egglement': true,
    'containegg': true,
    'width': 100,
    'height': 100,
    'attrs': {
      'hidden': false
    },
    'classes': {},
    'styles': {
      'overflow': 'hidden',
      'border-color': 'rgba(0, 0, 0, 0.15)',
      'border-style': 'solid',
      'border-width': '1px'
    },
    'children': []
  },
  
  // BUTTON
  {
    'name': 'button',
    'type': 'button',
    'text': 'Button',
    'egglement': true,
    'width': 200,
    'height': 40
  }

  
]

export default basicElements
