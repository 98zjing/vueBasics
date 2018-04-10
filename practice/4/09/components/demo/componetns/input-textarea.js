/**
 * name:zj
 *Emial:1534741136@qq.com
 *Telephone：******
 *github:https://github.com/98zjing
 */
let inputTextarea = {
    template:"\
        <div class='input-textarea'>\
            <slot>\
                <p>\
                    这是您的一描述！\
                </p>\
            </slot>\
            <textarea \
                :rows='rows'\
                :cols='cols'\
                :maxlength='maxlength'\
                :name='name'\
                :id='id'\
                @focus='delHtml'\
                @blur='addHtml'\
                v-html='currenHtml'>\
            </textarea>\
        </div>\
    ",
    props:{
        rows:{
            type:[String,Number],
            default:10
        },
        cols:{
            type:[String,Number],
            default:40
        },
        html:{
            type:String,
            default:'请开始你的表演！'
        },
        maxlength:{
            type:[String,Number],
            default:100
        },
        name:{
            type:String,
            default:'input-textarea'
        },
        id:{
            type:String,
            default:'input-textarea'
        }
    },
    data:function () {
        return {
                currenHtml:this.html,
        }
    },
    watch:{
        currenHtml:function (val) {
            run.$emit('on-input-textarea',val);
        }
    },
    methods:{
        delHtml:function () {
            this.currenHtml = '';
        },
        addHtml:function (event) {
            this.currenHtml = event.target.innerHTML;
        }
    },
    mounted:function(){
        run.$emit('on-input-textarea','');
        run.$on('on-input-textarea-reset', (val)=>{
            this.currenHtml = val;
            alert(this.currenHtml);
        });
    }
};