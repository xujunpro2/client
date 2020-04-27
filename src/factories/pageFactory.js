import shortid from 'shortid'

//画面对象
function newPage (name, path, height, width) {
  return {
    id: shortid.generate(), //画面ID
    name: name, //画面名称
    path: path, //路径
    width: width || '100%', //宽，默认100%
    height: height || '100%', //高 默认100%
    max_zIndex:1,//最大zIndex，默认值1，因为图元初始化zIndex=0
    min_zIndex:-1,//最小Zindex，默认值-1
    //样式
    styles: {
      'position': 'relative',
      'margin': 'auto',
      'background-color': '#ffffff',
      'overflow': 'hidden'
    },
    classes: [],
    children: []
  }
}

export default newPage
