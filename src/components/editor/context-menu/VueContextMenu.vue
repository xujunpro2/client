<template>
	<div
		:style="style"
		style="display: block;"
		v-show="show"
		class="right-menu"
		@mousedown.stop
		@contextmenu.prevent
	>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "context-menu",
	data() {
		return {
			triggerShowFn: () => {},
			triggerHideFn: () => {},
			x: null,
			y: null,
			style: {},
			binded: false
		};
	},
	props: {
		target: null,
		show: Boolean
	},
	mounted() {
		this.bindEvents();
	},
	watch: {
		show(show) {
			if (show) {
				this.bindHideEvents();
			} else {
				this.unbindHideEvents();
			}
		},
		target(target) {
			this.bindEvents();
		}
	},
	methods: {
		// 初始化事件
		bindEvents() {
			this.$nextTick(() => {
				if (!this.target || this.binded) return;
				this.triggerShowFn = this.contextMenuHandler.bind(this);
				this.target.addEventListener("contextmenu", this.triggerShowFn);
				this.binded = true;
			});
		},

		// 取消绑定事件
		unbindEvents() {
			if (!this.target) return;
			this.target.removeEventListener("contextmenu", this.triggerShowFn);
		},

		// 绑定隐藏菜单事件
		bindHideEvents() {
			this.triggerHideFn = this.clickDocumentHandler.bind(this);
			document.addEventListener("mousedown", this.triggerHideFn);
			document.addEventListener("mousewheel", this.triggerHideFn);
		},

		// 取消绑定隐藏菜单事件
		unbindHideEvents() {
			document.removeEventListener("mousedown", this.triggerHideFn);
			document.removeEventListener("mousewheel", this.triggerHideFn);
		},

		// 鼠标按压事件处理器
		clickDocumentHandler(e) {
			this.$emit("update:show", false);
		},

		// 右键事件事件处理
		contextMenuHandler(e) {
            // 选中了图元，才弹出右键菜单
			let selectedElements = this.$store.state.app.selectedElements;
			if (selectedElements.length > 0) {
				this.x = e.clientX;
				this.y = e.clientY;
				this.layout();
				this.$emit("update:show", true);
				e.preventDefault();
			}
		},

		// 布局
		layout() {
			this.style = {
				left: this.x + "px",
				top: this.y + "px"
			};
		}
	}
};
</script>
<style scoped>
.right-menu {
	position: fixed;
	background: #fff;
	border: solid 1px rgba(0, 0, 0, 0.2);
	border-radius: 3px;
	z-index: 99999;
	display: none;
}
.right-menu a {
	width: 120px;
	height: 28px;
	line-height: 28px; /**文字垂直居中 */
	/* text-align: center; */
	display: block;
	padding: 2px 2px 2px 20px; /**上 右  下 左  */
	color: #606266;
	text-decoration: none;
	font-size: 14px;
}
.right-menu a:hover {
	background: #36a3f7;
	color: #fff;
}
.right-menu {
	border: 1px solid #eee;
	box-shadow: 0 0.5em 1em 0 rgba(0, 0, 0, 0.1);
	border-radius: 1px;
}
</style>