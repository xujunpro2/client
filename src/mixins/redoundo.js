import cloneDeep from 'clone-deep'
import {
    checkLastSaved,
    _toggleCanUndo,
    _toggleCanRedo
} from '@/store/types'

const MAX_HISTORY = 250

/**
 * Vue Mixin to control the State history and undo/redo functionality
 *
 * @type {Vue.mixin}
 * @see {@link https://vuejs.org/v2/guide/mixins.html|Vue Mixins}
 */
const redoundo = {
    data: function () {
        return {
            done: [],
            undone: []
        }
    },

    created: function () {
        // 订阅 store 的 mutation。handler 会在每个 mutation 完成后调用，接收 mutation 和经过 mutation 后的状态作为参数：

        // store.subscribe((mutation, state) => {
        //   console.log(mutation.type)
        //   console.log(mutation.payload)
        // })

        // 要停止订阅，调用此方法返回的函数即可停止订阅。
        this.$store.subscribe((mutation, state) => {
            //操作命令最多保留250个，超过就先清除队列中的第一个
            if (this.done.length === MAX_HISTORY) {
                this.done.shift()
            }
            //mutation.type返回的是当前调用的mutation名称，这里做个判断，只有非'_'开头的，才是我们需要保存的命令
            if (mutation.type.charAt(0) !== '_') {
                //redo增加一个
                this.done.push(cloneDeep(state))
                //undo初始化，undo只有在触发redo操作之后才会可用，并且redo之后如果如执行其他操作，undo都初始化
                this.undone = []

                // To display if changes had happened to the project
                this.updateCanRedoUndo()
                //TODO ： 设置一个状态，用来监测关闭的时候，是否提醒保存
                //this.$store.dispatch(checkLastSaved)
            }
        })

        this.$root.$on('undo', this.undo)
        this.$root.$on('redo', this.redo)
    },

    beforeDestroy: function () {
        this.$root.$off('undo', this.undo)
        this.$root.$off('redo', this.redo)
    },

    computed: {
        canUndo() {
            // There should always be at least one state (initializeState)
            //注意这里判断的条件是:this.done.length > 1,而不是>0 。因为编辑器一打开的时候，为了初始化，会调用initializeState
            return this.done.length > 1
        },
        canRedo() {
            return this.undone.length > 0
        }
    },

    methods: {
        undo() {
            if (this.canUndo) {
                this.undone.push(this.done.pop())
                let undoState = this.done[this.done.length - 1]
                this.$store.replaceState(cloneDeep(undoState))
                this.$root.$emit('rebaseState')
                this.updateCanRedoUndo()
            }
        },

        redo() {
            if (this.canRedo) {
                let redoState = this.undone.pop()
                this.done.push(redoState)
                this.$store.replaceState(cloneDeep(redoState))
                this.$root.$emit('rebaseState')
                this.updateCanRedoUndo()
            }
        },
        //更新store中的canUndo和canRedo
        updateCanRedoUndo() {
            let flag = this.canUndo;
            this.$store.commit(_toggleCanUndo, this.canUndo)
            this.$store.commit(_toggleCanRedo, this.canRedo)
        }
    }
}

export default redoundo