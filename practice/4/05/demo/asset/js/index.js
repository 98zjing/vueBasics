    let list = null;
   $.ajax({
		url: './asset/data/listData.json',
		datType: 'json',
		type: 'post',
		success: function (data) {
            list = data;
            /*数据请求完毕后再渲染*/
            isLoader();
		}
	});
   function isLoader(){
		let vueApp = new Vue({
			el:'#app',
			data:list,
			computed:{
				totbalPrice:function(){
					let _price = 0;
					for(var i=0;i<this.list.length;i++){
						_price += this.list[i].price * this.list[i].counts;
					}
					return _price;
				}
			},
			methods:{
				reduce:function(index){
					if(this.list[index].counts == 1) return;
					this.list[index].counts--;
				},
				add:function(index){
					this.list[index].counts++;
				},
				remove:function(index){
					this.list.splice(index,1);
				}
			}
		});
   }