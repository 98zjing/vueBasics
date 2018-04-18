/**
 * name:zj
 *Emial:1534741136@qq.com
 *Telephone：******
 *github:https://github.com/98zjing
 */
let vList = {
    props:{
        list:{
            type:Array,
            default:function(){
                return [];
            }
        },
        id:{
            type:String,
            default:'v-list'
        }
    },
    data:function(){
        return {

        }
    },
    render:function(h){
        let _this = this;
        let _list = [];
        this.list.forEach(function(val,index){
            let _doms = h('div',{
                attrs:{
                    class:'list-item'
                }
            },[
                h('span',val.name + ": "),
                h('div',{
                    attrs:{
                        class:'list-msg'
                    }
                },[
                    h('p',val.message),
                    h('a',{
                        attrs:{
                            class:'list-reply'
                        },
                        on:{
                            click:function () {
                                _this.handelReply(index);
                            }
                        }
                    },'回复')
                ])
            ]);
            _list.push(_doms);
        })
        if(this.list.length){
            return h('div',{
                attrs:{
                    class:'list-nothing',
                    id:this.id
                }
            },[
                _list
            ]);
        }else {
            return h('div',{
                attrs:{
                    class:'list-nothing',
                    id:this.id
                }
            },'留言为空！');
        }
    },
    methods:{
        handelReply:function (index) {
            this.$emit('reply',index);
        }
    }
};