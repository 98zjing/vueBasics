/**
 * name:zj
 *Emial:1534741136@qq.com
 *Telephone：******
 *github:https://github.com/98zjing
 */
let vInput = {
    props:{
        id:{
            type:String,
            default:'v-input'
        },
        value:{
            type:String,
            default:''
        }
    },
    data:function(){
        return{
            currentValue:this.value
        }
    },
    render:function(h){
        let _this = this;
        return h('div',[
            h('span','昵称'),
            h('input',{
                attrs:{
                    id:this.id,
                    type:'text'
                },
                domProps:{
                    value:this.currentValue
                },
                on:{
                    input:function(e){
                        _this.currentValue = e.target.value;
                        _this.$emit('input',e.target.value);
                    }
                }
            },[

            ])
        ]);
    },
    methods:{

    },
    mounted:function(){

    }
};