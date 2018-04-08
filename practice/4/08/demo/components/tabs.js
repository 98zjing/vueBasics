let tabs = {
	template:"\
		<div class='tabs'>\
			<div class='tabs-bar'>\
				<div :class='tabCls(item)'\
					v-for='(item,index) in navList'\
					@click='handleChange(index)'>\
					{{item.label}}\
				</div>\
			</div>\
			<div class='tabs-content'>\
				<slot></slot>\
			</div>\
		</div>\
	",
	props:{
		value:{
			type:[String,Number]
		}
	},
	data:function(){
		return {
			currentVal:this.value,
			navList:[],
		}
	},
	watch:{
		value:function(val){
			this.currentVal = val;
		},
		currentVal:function(){
			this.updateStatus();
		}
	},
	methods:{
		tabCls:function(item){
			return [
				'tabs-tab',
				{
					'tabs-tab-active':item.name === this.currentVal
				}
			]
		},
		handleChange:function(index){
			let _nav = this.navList[index];
			let _name = _nav.name;
			this.currentVal = _name;
			this.$emit('input',_name);
			run.$emit('on-click',_name);
		},
		getTabs:function(){
			return this.$children.filter( (parent)=>{
				return parent.$options.name === 'pane';
			});
		},
		updateNav:function(){
			this.navList = [];
			this.getTabs().forEach( (pane,index)=>{
				this.navList.push({
					label:pane.label,
					name:pane.name || index
				});
				if(!pane.name) pane.name = index;
				if(index === 0) {
					if(!this.currentVal){
						this.currentVal = pane.name || index;
					}
				}
			});
			this.updateStatus();
		},
		updateStatus:function(){
			let tabs = this.getTabs();
			tabs.forEach( (tab)=>{
				return tab.show = tab.name == this.currentVal;
			});
		}
	},
};