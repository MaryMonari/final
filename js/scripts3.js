$(document).ready(function(){
 $("#button").click(function(){
        var x = $("radio").serializeArray();
       $.each(x, function(i, field){
           $("#results").append(name.value);

       });
        event.preventDefault();
          });


      // $.fn.serializeObject = function () {
      // var o = {};
      // var a = this.serializeArray();
      // $.each(a, function () {
      //     if (o[this.name] !== undefined) {
      //         if (!o[this.name].push) {
      //             o[this.name] = [o[this.name]];
      //         }
      //         o[this.name].push(this.value || '');
      //     } else {
      //         o[this.name] = this.value || '';
      //     }
      // });
      // var $radio = $('input[type=radio],input[type=checkbox]',this);
      // $.each($radio,function(){
      //     if(!o.hasOwnProperty(this.name)){
      //         o[this.name] = '';
      //     }
      // });
      // return o;
      // };
      // event.preventDefault();

      var arr = $("radio").serializeArray();
      var len = arr.length;
      var dataObj = {};
      for (i=0; i<len; i++) {
        dataObj [arr [i].name]= [arr[i].value];
      }
      .console.log(dataObj ["name"]);
      .show(dataObj ["value"]);
});
