import newProject from './projectFactory'

function newState(project) {
    return {
        app: 
        {
            isLoading: false,
            isBlockLoading: false,
            hasChanges: false,
            isSyncing: false,
            canUndo: false,
            canRedo: false,
            pageDialog: 
            {
                isNew: true,
                isOpen: false
            },
            selectedPage: null,
            selectedElements: [],
            editorZoom: 1
        },
        project: project || newProject('default project') //如果传来的project为null，就构造一个默认项目对象
    }
}

export default newState
