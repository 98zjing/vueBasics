/**
 * name:zj
 *Emial:1534741136@qq.com
 *Telephone：******
 *github:https://github.com/98zjing
 */
let vTextarea = {
    props:{
        value:{
            type:String,
            default:''
        },
        id:{
            type:String,
            default:'v-textarea'
        }
    },
    data:function(){
        return {
            currenValue:this.value
        }
    },
    render:function(h){
        var _this = this;
        return h('div',{
                attrs:{
                    id:this.id
                }
            },[
                h('textarea',{
                    attrs:{
                        placeholder:"请输入您的留言内容",
                        value:this.currenValue
                    },
                    domProps:{
                        value:_this.value
                    },
                    ref:'message',
                    on:{
                        input:function(event){
                            _this.currenValue = event.target.value;
                            _this.$emit('input',event.target.value);
                        }
                    }
                })
            ])
    },
    methods:{
        focus:function(){
            this.$refs.message.focus();
        }
    },
    mounted:function(){
    }
};