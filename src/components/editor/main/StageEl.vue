<script>
import { mapState, mapMutations } from "vuex";
import { _clearSelectedElements, _addSelectedElement } from "@/store/types";

import MrEl from "@/components/editor/common/mr-vue/MrEl"
import StageEl from "./StageEl"



export default {
	name: "stage-el",
	props: ["elem", "isPlain"],
	components: { MrEl },
	render: function(createElement) {
		let elementO = this.elem.global? { ...this.elem, ...this.componentRef, id: this.elem.id }: this.elem;
		const data = {
			attrs: {
				id: elementO.id,
				"data-global": elementO.global,
				"data-egglement": elementO.egglement,
				"data-containegg": elementO.containegg,
				"data-componegg": elementO.componegg,
				"data-wrappegg": elementO.wrappegg,
				...elementO.attrs
			}
		};

        let mrElProps = {
			active: this.isActive,
			left: elementO.left,
			top: elementO.top,
			right: elementO.right,
			bottom: elementO.bottom,
			zIndex: elementO.zIndex,
			width: elementO.width,
			height: elementO.height,
			minWidth: elementO.minWidth,
			minHeight: elementO.minHeight
		};
        //MrEl的mousedown事件触发activated,绑定这里的activatedHandler(),用于选中操作
        let stageElem = createElement(MrEl,{
			    props: elementO.global? { ...mrElProps, handles: null }: mrElProps,
				on: { activated: this.activatedHandler }
            },
            //专门添加一个ref引用，为了能在StageEL中通过$refs快速查找到图元的VueComponent对象
            [createElement('cell-button',{ref: elementO.id,attrs:{id: elementO.id}})]
        );

        console.info('创建的图元id:'+elementO.id)
			// stageElem = createElement(MrEl, {
			//     'props': (elementO.global) ? {...mrElProps, handles: null} : mrElProps,
			//     'on': { activated: this.activatedHandler }
			// }, [ createElement(elementO.type, data2, children) ])

		return stageElem;
	},
	computed: {
		isActive() {
			return (
				this.selectedElements.findIndex(
					el => el.id === this.elem.id
				) !== -1
			);
		},

		componentRef() {
			return this.projectComponents[
				this.projectComponents.findIndex(
					comp => comp.name === this.elem.name
				)
			];
		},

		...mapState({
			selectedElements: state => state.app.selectedElements,
			projectComponents: state => state.project.components
		})
	},
	methods: {
		activatedHandler(e) {
			e.stopPropagation();
			e.preventDefault();
            //按住shift键，那么连续选中
            if (e.shiftKey && !this.isActive) 
            {
				this._addSelectedElement(this.elem);
            } 
            //没有按住shift键，先清空之前选中的
            else if (!e.shiftKey && !this.isActive) 
            {
				this._clearSelectedElements();
				this._addSelectedElement(this.elem);
			}
		},

		...mapMutations([_clearSelectedElements, _addSelectedElement])
	}
};
</script>
