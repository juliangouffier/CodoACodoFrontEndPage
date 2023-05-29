
const valorTicket = 200;

function calcular() {
   const select = document.getElementById("selec");

   const cantidad = document.getElementById('cantidad');
   if(cantidad.value > 0){
   	if(select.value ==1){
   			//1
            const valorAPagar= 200 * cantidad.value;
            const valorTotal = valorAPagar - valorAPagar * 0.8;
            
            response.innerHTML =  valorAPagar + ' Total con descuento: $ ' + valorTotal   ;
   	}else if(select.value==2){
   			//2
            const valorAPagar= 200 * cantidad.value;
            const valorTotal = valorAPagar - valorAPagar * 0.5;
            
            response.innerHTML =   valorAPagar + ' Total con descuento: $ ' + valorTotal   ;
   	}else if(select.value ==3){
   		//3
         const valorAPagar= 200 * cantidad.value;
            const valorTotal = valorAPagar - valorAPagar * 0.15;
            
            response.innerHTML =  valorAPagar + ' Total con descuento: $ ' + valorTotal   ;
   	}else{
         response.innerHTML = "Error";
      }
      
   }else{

      response.innerHTML = "Error";

   	// error
   }
  
  
}
