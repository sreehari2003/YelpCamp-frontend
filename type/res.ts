interface review{
  body: string;
  rating: number;
}
export interface response {
    _id: number;
    title: string;
    description: string;
    location: string;
    image: string;
    price: number;
    reviews: review[];
  }

  export interface child{
    children: React.ReactNode;
}