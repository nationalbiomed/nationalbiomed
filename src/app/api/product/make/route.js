//by brand name and category name

// import { NextResponse } from "next/server";
// import db from "@/lib/db";

// export async function GET(req) {
//   try {
//     const { searchParams } = new URL(req.url);

//     // Extract multiple brand and category parameters
//     const brands = searchParams.getAll("brand");
//     const categories = searchParams.getAll("category");

//     const filters = {};

//     // Handle multiple brands
//     if (brands.length > 0) {
//       filters.brand = {
//         name: {
//           in: brands, // Matches any of the specified brand names
//         },
//       };
//     }

//     // Handle multiple categories
//     if (categories.length > 0) {
//       filters.category = {
//         name: {
//           in: categories, // Matches any of the specified category names
//         },
//       };
//     }

//     const products = await db.product.findMany({
//       where: filters,
//       orderBy: {
//         id: "desc",
//       },
//       include: {
//         category: true,
//         brand: true,
//       },
//     });

//     return NextResponse.json(
//       {
//         data: products,
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return NextResponse.json(
//       { error: "Error getting products" },
//       { status: 500 }
//     );
//   }
// }



//By Category id or brand id

import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    // Extract multiple brandId and categoryId parameters
    const brandIds = searchParams.getAll("brandId");
    const categoryIds = searchParams.getAll("categoryId");

    const filters = {};

    // Handle multiple brandIds
    if (brandIds.length > 0) {
      filters.brandId = {
        in: brandIds.map((id) => parseInt(id, 10)), // Convert to integers
      };
    }

    // Handle multiple categoryIds
    if (categoryIds.length > 0) {
      filters.categoryId = {
        in: categoryIds.map((id) => parseInt(id, 10)), // Convert to integers
      };
    }

    const products = await db.product.findMany({
      where: filters,
      orderBy: {
        id: "desc",
      },
      include: {
        category: true,
        brand: true,
      },
    });

    return NextResponse.json(
      {
        data: products,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Error getting products" },
      { status: 500 }
    );
  }
}
