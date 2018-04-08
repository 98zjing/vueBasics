let run = new Vue();
let inputNumber = {
	template:"\
		<div class='input-number'>\
			<input type='text' v-model='currentVal' @change='handleChange'>\
			<button v-if='isDefaults' @click='numReduce(num)'>-{{num}}</button>\
			<button @click='numReduce(1)'>-</button>\
			<button @click='numAdd(1)'>+</button>\
			<button v-if='isDefaults' @click='numAdd(num)'>+{{num}}</button>\
			\
		</div>\
	",
	props:{
		defaultVal:{
			type:[String,Number],
			default:1
		},
		max:{
			type:[String,Number],
			default:10
		},
		min:{
			type:[String,Number],
			default:1
		},
		isDefaults:{
			type:Boolean,
			default:false
		},
		num:{
			type:[String,Number],
			default:10
		}
	},
	data:function(){
		return {
			currentVal:Number(this.defaultVal),
			is:this.isDefaults
		}
	},
	watch:{
		currentVal:function(val){
			this.$emit('input',val);
			run.$emit('input',val);
		},
		defaultVal:function(val){
			this.updataVal(val);
		}
	},
	methods:{
		numAdd:function(val){
			if(this.currentVal + Number(val) > this.max) return;
			this.currentVal += Number(val); 
		},
		numReduce:function(val){
			if(this.currentVal - Number(val) < this.min) return;
			this.currentVal -= Number(val);
		},
		updataVal:function(val){
			if(val > this.max) val = this.max;
			if(val < this.min) val = this.min;
			this.currentVal = val;
		},
		handleChange:function(event){
			let _val = parseInt(event.target.value);
			if(_val < this.min) {this.currentVal = this.min;return;}
			if(_val > this.min) {this.currentVal = this.max;return;}
			this.currentVal = _val;
		}
	},
	mounted:function(){
		this.updataVal(Number(this.defaultVal));
	}
};