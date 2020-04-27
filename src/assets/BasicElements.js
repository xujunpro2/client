/*
  Basic elements (HTML5 Elements):
  - PARENT -> egglement, [containegg]
 */
const basicElements = [

  // 输入框
  {
    'name': 'cell-text', 
    'displayName':'输入框',
    'tooltip':'输入框',
    'width': 180, 
    'height': 40
  },
  // 按钮
  {
    'name': 'cell-button', //图元的el名称，对应cell/index.js中注册的VueComponent CellButton
    'displayName':'按钮',
    'tooltip':'按钮',
    'width': 100, 
    'height': 35
  }

  
]

export default basicElements
