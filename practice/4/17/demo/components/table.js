/**
 * name:zj
 *Emial:1534741136@qq.com
 *Telephone：******
 *github:https://github.com/98zjing
 */
let vTable = {
    props:{
        columns:{
            type:Array,
            default:function(){
                return [];
            }
        },
        data:{
            type:Array,
            default:function(){
                return [];
            }
        }
    },
    data:function(){
        return {
            currentColumns:[],
            currentData:[]
        }
    },
    render:function(h){
        let _ths = [];
        let _trs = [];
        let _this = this;
        /*表头*/
        this.currentColumns.forEach(function(val,index){
            if(val.isSort){
                /*有排序要求*/
                _ths.push(h('th',[
                    h('span',val.title),
                    /*升序*/
                    h('a',{
                        class:{
                            on:val._sortType === 'asc'
                        },
                        on:{
                            click:function(){
                                _this.handleSortByAsc(index);
                            }
                        }
                    },'↑'),
                    /*降序*/
                    h('a',{
                        class:{
                            on:val._sortType === 'desc'
                        },
                        on:{
                            click:function(){
                                _this.handleSortByDesc(index);
                            }
                        }
                    },'↓'),
                ]))
            }else{
                /*不用排序*/
                _ths.push(h('th',val.title));
            }
        });
        /*表主题*/
        this.currentData.forEach(function(val,index){
            let __tds = [];
            _this.currentColumns.forEach(function(cell){
                __tds.push(h('td',val[cell.key]));
            });
            _trs.push(h('tr',__tds));
        });
        return h('table',{
                attrs:{
                    id:'v-table'
                }
            },[
                h('thead',[
                    h('tr',_ths)
                ]),
                h('tbody',_trs)
            ]);
    },
    methods:{
        makeColumns:function(){
            this.currentColumns = this.columns.map(function(val,index){
                val._sortType = 'normal';
                val._index = index;
                return val;
            });
        },
        makeData:function(){
            this.currentData = this.data.map(function(val,index){
                val._index = index;
                return val;
            });
        },
        handleSortByAsc:function (index) {
            let _key = this.currentColumns[index].key;
            this.currentColumns.forEach(function(val){
                val._sortType = 'normal';
            })
            this.currentColumns[index]._sortType = 'asc';
            this.currentData.sort(function(a,b){
                return a[_key] > b[_key] ? 1 :-1;
            });
        },
        handleSortByDesc:function (index) {
            let _key = this.currentColumns[index].key;
            this.currentColumns.forEach(function(val){
                val._sortType = 'normal';
            })
            this.currentColumns[index]._sortType = 'desc';
            this.currentData.sort(function(a,b){
                return a[_key] < b[_key] ? 1 :-1;
            });
        }
    },
    mounted:function(){
        this.makeColumns();
        this.makeData();
    }
}