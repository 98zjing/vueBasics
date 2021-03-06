/**
 * name:zj
 *Emial:1534741136@qq.com
 *Telephone：******
 *github:https://github.com/98zjing
 */
let inputRadio = {
    template:"\
        <div class='input-radio'>\
            <slot>\
                <p>\
                    这是您的描述！\
                </p>\
            </slot>\
             <template \
                v-for='(val,index) in currentVals' \
                v-model='currenVal'>\
                <input type='radio' \
                    :value='val' \
                    :name='currenName' \
                    v-model='currenVal'>\
                <span >{{val}}</span>\
             </template>\
        </div>\
    ",
    props:{
        name:{
            type:String,
            default:'input-radio'
        },
        vals:{
            type:Array,
            default:['input-radio']
        },
        val:{
            type:String,
            default:'input-radio'
        }
    },
    data:function(){
        return {
            currenName:this.name,
            currentVals:this.vals,
            currenVal:this.val
        }
    },
    watch:{
        currenVal:function (val) {
            /*外部数据接收接口*/
            run.$emit('on-input-radio',val);
        }
    },
    methods:{
        Reset:function () {
            
        }
    },
    mounted:function(){
        run.$emit('on-input-radio',this.currenVal);
        /*用于外部接口数据重置*/
        run.$on('on-input-radio-reset',(val)=> {
            this.currenVal = val;
        })
    }
}