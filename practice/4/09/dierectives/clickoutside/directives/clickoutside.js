/**
 * name:zenjign
 *Emial:1534741136@qq.com
 *Telephone：7612742615
 */
let clickOutside = {
    bind:function(el,binding,vnode){
        function documentHandler(e) {
            if(el.contains(e.target)){
                return false;
            }
            if(binding.expression){
                binding.value();
            }
        }
        el.__valClickOutside__ = documentHandler;
        document.addEventListener('click',documentHandler);
    },
    unbind:function(el,binding,vnode){
        document.removeEventListener('click',el.__valClickOutside__);
        delete el.__valClickOutside__;
    }
}