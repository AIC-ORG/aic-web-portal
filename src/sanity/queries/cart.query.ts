export const productsQuery = `*[_type == "product" && productCategory->name == "clothing"] | order(_createdAt asc){
    "id":_id,
      "category": productCategory->name,
      name,
      "image": image.asset->url,
      description,
      price
  }`;

export const concertQuery = `*[_type == "product" && productCategory->name == "concert"] | order(_createdAt asc){
      "id":_id,
      "category": productCategory->name,
      name,
      "image": image.asset->url,
      description,
      price
  }`;
