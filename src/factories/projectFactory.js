import shortid from 'shortid'
import newPage from './pageFactory'

//项目对象
function newProject (title) {
  return {
    id: shortid.generate(), //项目ID
    title: title, //项目标题
    components: [], //项目包含的图元
    pages: [newPage('default page', '/')] //项目包含的画面,先创建一个默认画面
  }
}

export default newProject
