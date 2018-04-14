/**
 * name:zj
 *Emial:1534741136@qq.com
 *Telephone：******
 *github:https://github.com/98zjing
 */
let inputCheckbox  = {
    template:"\
        <div class='input-checkbox'>\
            <slot>\
                <p>\
                    这是您的描述！\
                </p>\
            </slot>\
            <template v-for='(val,index) in currentVals'>\
                <input type='checkbox' v-model='currentVal' :value='val' :name='currenName'>\
                <span>{{val}}</span>\
                <br />\
            </template>\
            <p>{{currentVal}}</p>\
        </div>\
    ",
    props:{
        vals:{
            type:Array,
            default:[
                {
                    val:'input-checkbox',
                    name:'input-checkbox'
                }
            ]
        },
        value:{
            type:[String,Array],
            default:'input-checkbox'
        },
        name:{
            type:String,
            default:'input-checkbox'
        }
    },
    data:function () {
        return {
                currentVals:this.vals,
                currentVal:this.value,
                currenName:this.name
            }
    },
    watch:{
        currentVal:function (val) {
            /*外部数据接收接口*/
            run.$emit('on-input-checkbox',this.currentVal);
        }
    },
    methods:{

    },
    mounted:function () {
        /*外部默认数据重置接口*/
        run.$on("on-input-checkbox-reset",(val)=>{
            this.currentVal = val;
        });
    }
};