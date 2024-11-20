

export const registerFormControls = [
    {
        name: 'userName',
        label: 'User Name',
        placeholder: 'Enter your name',
        componentType: 'input',
        type: 'text',
    },
    {
        name: 'email',
        label: 'Email',
        placeholder: 'Enter your Email',
        componentType: 'input',
        type: 'email',
    },
    {
        name: 'password',
        label: 'User Password',
        placeholder: 'Enter your password',
        componentType: 'input',
        type: 'password',
    }
];

export const loginFormControls = [
  
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your Email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "User Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];


export const addProductFormElements = [
  {
    label: "Product Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
    // required: true,
  },
  {
    label: "Product Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
    // type: "textarea",
    // required: true,
  },
  {
    label: "Product Category",
    name: "category",
    componentType: "select",
    placeholder: "Select product category",
    options: [
      { id: "men", label: "Men" },
      { id: "women", label: "Women" },
      { id: "kids", label: "Kids" },
      { id: "accessories", label: "Accessories" },
      { id: "footwear", label: "Footwear" },
    ],
    // required: true,
  },
  {
    label: "Product Brand",
    name: "brand",
    componentType: "select",
    placeholder: "Select product brand",
    options: [
      { id: "nike", label: "Nike" },
      { id: "adidas", label: "Adidas" },
      { id: "puma", label: "Puma" },
      { id: "reebok", label: "Reebok" },
      { id: "converse", label: "Converse" },
      { id: "vans", label: "Vans" },
      { id: "levi", label: "Levi's" },
      { id: "zara", label: "Zara" },
      { id: "hm", label: "H&M" },
      { id: "flick", label: "Flick" },
      { id: "other", label: "Others" },
    ],
    // type: "text",
    // placeholder: "Enter product brand",
    // required: true,
  },
  {
    label: "Product Price",
    name: "price",
    componentType: "input",
    placeholder: "Enter product price",
    type: "number",
    placeholder: "Enter product price",
    // required: true,
    min: 0,
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
    // required: false,
    // min: 0,
    // max: 100,
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
    // required: true,
    // min: 0,
  },
  // productImage: {
  //   type: "file",
  //   label: "Product Image",
  //   accept: "image/*",
  //   required: true,
  // },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shopping/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shopping/listing",
  },
  {
    id: "men",
    label: "Men",
    path: "/shopping/listing",
  },
  {
    id: "women",
    label: "Women",
    path: "/shopping/listing",
  },
  {
    id: "kids",
    label: "Kids",
    path: "/shopping/listing",
  },
  {
    id: "footwear",
    label: "Footwear",
    path: "/shopping/listing",
  },
  {
    id: "accessories",
    label: "Accessories",
    path: "/shopping/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shopping/search",
  },
];


export const categoryOptionsMap = {
  men: "Men",
  women: "Women",
  kids: "Kids",
  accessories: "Accessories",
  footwear: "Footwear",
};

export const brandOptionsMap = {
  nike: "Nike",
  adidas: "Adidas",
  puma: "Puma",
  levi: "Levi",
  zara: "Zara",
  "h&m": "H&M",
};

export const filterOptions = {
  category: [
    { id: "men", label: "Men" },
    { id: "women", label: "Women" },
    { id: "kids", label: "Kids" },
    { id: "accessories", label: "Accessories" },
    { id: "footwear", label: "Footwear" },
  ],
  brand: [
    { id: "nike", label: "Nike" },
    { id: "adidas", label: "Adidas" },
    { id: "puma", label: "Puma" },
    { id: "levi", label: "Levi's" },
    { id: "zara", label: "Zara" },
    { id: "h&m", label: "H&M" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
