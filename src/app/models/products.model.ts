export interface IProduct {
    id:number;
    nameProduct: string;
    price: number;
    img: string;
  }
  
  export const products: IProduct[] = [
    { 
      id: 1,
      nameProduct: "Radiance Glow Serum",
      price: 4000,
      img: "assets/img/radiance-glow-serum.png"
    },
    {
      id: 2,
      nameProduct: "Velvet Matte Lipstick",
      price: 1200,
      img: "assets/img/velvet-matte-lipstick.png"
    },
    {
      id: 3,
      nameProduct: "Hydrating Face Cream",
      price: 3500,
      img: "assets/img/hydrating-face-cream.png"
    },
    {
      id: 4,
      nameProduct: "Ultra-Defining Mascara",
      price: 1800,
      img: "assets/img/radiance-glow-serum.png"
    },
    {
      id: 5,
      nameProduct: "Brightening Eye Cream",
      price: 2900,
      img: "assets/img/velvet-matte-lipstick.png"
    },
    {
      id: 6,
      nameProduct: "Sculpting Contour Kit",
      price: 2500,
      img: "assets/img/hydrating-face-cream.png"
    },
    {
      id: 7,
      nameProduct: "Nourishing Hair Oil",
      price: 2700,
      img: "assets/img/radiance-glow-serum.png"
    },
    {
      id: 8,
      nameProduct: "Glow Booster Primer",
      price: 1500,
      img: "assets/img/velvet-matte-lipstick.png"
    },
    {
      id: 9,
      nameProduct: "Refreshing Facial Mist",
      price: 1300,
      img: "assets/img/hydrating-face-cream.png"
    },
    {
      id: 10,
      nameProduct: "Long-Wear Foundation",
      price: 3200,
      img: "assets/img/velvet-matte-lipstick.png"
    }
  ];
  
  

  export const responsiveOptions = [
    {
      breakpoint: '1500px', 
      numVisible: 4, 
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '480px',
      numVisible: 1,
      numScroll: 1
    }
  ];