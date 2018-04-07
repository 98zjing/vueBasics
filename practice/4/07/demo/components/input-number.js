function siValuNumber(val){
	return (/(^-[0-9]+\.{1}\d+$) | (^-?[1-9][0-9]*$)/).test(val);
}
let run = new Vue();
let inputNumber = {
	template:"\
		<div class='input-number'>\
			<input \
				type='text'\
				:value='currentVal'\
				@change='handleChange'\
				@keyup.prevent.38='keyUp'\
				@keyup.prevent.40='keyUp'>\
			<button \
				v-if='isStep'\
				@click='valReduce(stepNum)'\
				:disabled='currentVal+stepNum <= min'\
			>-{{stepNum}}\
			</button>\
			<button \
				@click='valReduce(1)'\
				:disabled='currentVal <= min'\
			>-\
			</button>\
			<button \
				@click='valAddd(1)'\
				:disabled='currentVal >= max'>\
				+\
			</button>\
			<button \
				v-if='isStep'\
				@click='valAddd(stepNum)'\
				:disabled='currentVal-stepNum >= max'>\
				+{{stepNum}}\
			</button>\
		</div>\
	",
	props:{
		max:{
			type:Number,
			default:10
		},
		min:{
			type:Number,
			default:1
		},
		value:{
			type:Number,
			default:1
		},
		num:{
			type:Number,
			default:10
		},
		step:{
			type:Boolean,
			default:false
		}
	},
	data:function(){
		return {
			currentVal:this.value,
			stepNum:this.num,
			isStep:this.step
		}
	},
	watch:{
		currentVal:function(val){
			this.$emit('input',val);
			run.$emit('on-change',val);
		},
		value:function(val){
			this.updatVal(val)
		}
	},
	methods:{
		valAddd:function(val){
			let _val = Number(val);
			if(this.currentVal+_val > this.max) return;
			this.currentVal += _val;
		},
		valReduce:function(val){
			let _val = Number(val);
			if(this.currentVal-_val < this.min) return;
			this.currentVal -= _val;
		},
		updatVal:function(val){
			if(val > this.max) val = this.max;
			if(val < this.min) val = this.min;
			this.currentVal = val;
		},
		handleChange:function(e){
			let _val = e.target.value.trim();
			let _max = this.max;
			let _min = this.min;
			if(siValuNumber(_val)){
				_val = Number(_val);
				this.currentVal = _val;
				if(_val > _max){
					this.currentVal = _max;
				}
				if(_val < _min){
					this.currentVal = _min;
				}
			}else{
				e.target.value = this.currentVal;
			}
		},
		keyUp:function(e){
			let _e = e || window.event;
			let _key = _e.keyCode;
			if(_key == 38) this.valAddd();
			if(_key == 40) this.valReduce();
		}
	},
	mounted:function(){
		this.updatVal(this.value);
	},
	
};