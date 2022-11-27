import React,{useState}from 'react';
import './App.css';

function App() {
    const [Value,setInitialValue]=useState(0);
    const handleClickEvent=(e)=>{
        console.log(e.target.innerText);
        if(e.target.innerText==='Add to cart'){
            setInitialValue(Value + 1);
            e.target.innerText='Remove From Cart';
        }
        else{
            setInitialValue(Value - 1);
            e.target.innerText='Add to cart';
        }
    }
        
            
        
    
  
  return (
    <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#!">HELMETS</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#!">All Products</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-outline-dark" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">{Value}</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    
        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Helmets</h1>
                    <p class="lead fw-normal text-white-50 mb-0">Crown of Bikers<span>&nbsp;<i class="fa fa-apple"></i>
</span></p>
                </div>
            </div>
        </header>
        
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div class="col mb-5">
                        <div class="card h-100">
                           
                            <img class="card-img-top" src="https://outletcascos.com/wp-content/uploads/2021/05/CASCO-MT-KRE-CARBON-PROJECTILE-D2-GLOSS-PAERL-GRAY-1-510x510.png" alt="..." />
                            
                            <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder"> MT KRE +</h5>
                                    <span class="text-muted text-decoration-line-through">$$$$</span>
                                    <b>Price:$$$$</b><br></br>
                                    Carbon fiber ECE and DOT certified weight:1450+-
                                </div>
                            </div>
                            
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a onClick={(e)=>handleClickEvent(e)} class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            
                            <div class="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
                            
                            <img class="card-img-top" src="https://th.bing.com/th/id/OIP.vIy3KA7X9j4NZwpRQGJNVQHRHR?pid=ImgDet&rs=1" />
                        
                            <div class="card-body p-4">
                                <div class="text-center">
                                  
                                    <h5 class="fw-bolder">MT Thunder 4 SV</h5>
                                   
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                   
                                    <span class="text-muted text-decoration-line-through">$$$$</span>
                                    <b>Price:$$$$</b><br></br>
                                    CompositeMaterial ECE and DOT certified weight:1450+-

                                </div>
                            </div>
                            
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a onClick={(e)=>handleClickEvent(e)} class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                         
                            <div class="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
                           
                            <img class="card-img-top" src="https://mthelmets.com/wp-content/uploads/CrazyDog-amarillo-ESCORZO.png"/>
                            
                            <div class="card-body p-4">
                                <div class="text-center">
                                   
                                    <h5 class="fw-bolder"> MT Targo</h5>
                                    
                                    <span class="text-muted text-decoration-line-through">$$$$</span>
                                    <b>Price:$$$$</b><br></br>
                                    CompositeMaterial ECE and DOT certified weight:1450+-

                                </div>
                            </div>
                           
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a onClick={(e)=>handleClickEvent(e)} class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            
                        <img class="card-img-top" src="https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/LusAAOSwmx9ZqGCu/$_57.JPG"/>
                        
                            <div class="card-body p-4">
                                <div class="text-center">
                                
                                    <h5 class="fw-bolder">German Helmet</h5>
                                   
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    
                                    $$$$$<br></br>
                                    DOT ECE certified
                                </div>
                            </div>
                           
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a onClick={(e)=>handleClickEvent(e)} class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                           
                            <div class="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
                          
                            <img class="card-img-top" src="https://www.lovebigbike.com/wp-content/uploads/2020/08/2_rx_100.jpg" alt="..." />
                          
                            <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder">Retro1</h5>
                                    
                                    <span class="text-muted text-decoration-line-through">$$$$</span>
                                    $$$$<br></br>
                                    DOT certified
                                </div>
                            </div>
                            
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a onClick={(e)=>handleClickEvent(e)} class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                           
                            <img class="card-img-top" src="https://th.bing.com/th/id/OIP.B-Siix6PucmZG5rdosuqOgHaHa?pid=ImgDet&w=750&h=750&rs=1" />
                         
                            <div class="card-body p-4">
                                <div class="text-center">
                                 
                                    <h5 class="fw-bolder">Retro2</h5>
                                 
                                    $$$$<br></br>
                                  DOT certified

                                </div>
                            </div>
                          
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a onClick={(e)=>handleClickEvent(e)} class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                           
                            <div class="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
                          
                            <img class="card-img-top" src="https://i5.walmartimages.com/asr/3b3add41-6597-4d42-9313-7cbf8343a34d_1.f89124ed81d69ba6ee8e774fd68828d6.jpeg" />
                          
                            <div class="card-body p-4">
                                <div class="text-center">
                                   
                                    <h5 class="fw-bolder">LS23</h5>
                                  
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                  
                                    <span class="text-muted text-decoration-line-through">$1099.00</span>
                                    $$$$<br></br>
                                  DOT certified
                                </div>
                            </div>
                           
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a onClick={(e)=>handleClickEvent(e)} class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            
                            <img class="card-img-top" src="https://cdn11.bigcommerce.com/s-de554/images/stencil/1280x1280/products/2775/12930/M.BLK-LS-14__96461.1578763452.jpg?c=2" />
                            
                            <div class="card-body p-4">
                                <div class="text-center">
                                  
                                    <h5 class="fw-bolder">AG</h5>
                                   
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                   
                                    $$$$<br></br>
                                    ECE DOT certified
                                </div>
                            </div>
                           
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a onClick={(e)=>handleClickEvent(e)} class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
        </footer>
       
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
   
       

    </div>
  );
}

export default App;
