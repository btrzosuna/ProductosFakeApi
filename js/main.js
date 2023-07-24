

function getData(){
    let promesa = fetch ("https://fakestoreapi.com/products/", {
        method: "GET"

    });

promesa.then((response)=>{
    response.json()
    .then((data)=>{
        createCards(data);
    })
    .catch(
        (error)=>{console.error("Problema en el JSON", error)}
    );
   
    }).catch((error)=>{
        console.error(error, "Ocurrio un error en la solicitud");

    });

}
    getData();
   /*  function createCards(data){
        data.forEach(producto => {
            console.log(producto.id, producto.title, producto.price);
           
        }); */
    
    let productos =document.getElementById("productos");
    
    function createCards(prods){
        
        prods.forEach(prods => {
            productos.insertAdjacentHTML("beforeend", `<div class="card" style="width: 18rem;">
            <img src="${prods.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${prods.title}</h5>
              <p class="card-text">${prods.description.slice(0,100)+".."}</p>
              <h2 class="card-text">$${prods.price}</h5>
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#moreinfo">
  Más info
</button>
            </div>
          </div>
            `);

            let modal = `<div class="modal fade" id="moreinfo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">${prods.title}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <p class="description">${prods.description}<p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>`;
          console.log("Hola"); //Solo es para ver si me esta escribiendo el la consola 
          

          document.getElementsByClassName("container")[0]
        .insertAdjacentHTML("afterend", modal);
            
        });
        
      

        

        
    }



    

 
