import { Brand } from "@/types/brand";
import { Category } from "@/types/category";
import { Gender } from "@/types/common";
import { Image } from "@/types/image";
import { Review } from "@/types/review";

export interface Size {
  value: string;
  isAvailable: boolean;
}

export interface Color {
  id: string;
  name: string;
  hexCode: string;
  isAvailable: boolean;
}

export interface Product {
  id: string;
  name: string;
  brand: Brand;
  price: number;
  originalPrice?: number;
  description: string;
  categories: Category[];
  gender: Gender;
  images: Image[];
  sizes: Size[];
  colors: Color[];
  releaseDate: Date;
  isNewArrival: boolean;
  isOnSale: boolean;
  isLimitedEdition: boolean;
  stockQuantity: number;
  reviews: Review[];
  rating: number;
  slug: string;
}

export interface ProductFilterOptions {
  brands?: Brand[];
  // categories?: string[];
  gender?: Gender;
  priceRange?: {
    min?: number;
    max?: number;
  };
  sizes?: string[];
  colors?: string[];
  isOnSale?: boolean;
  isNewArrival?: boolean;
  sortBy?: "price_asc" | "price_desc" | "newest" | "rating" | "popularity";
  page: number;
  limit: number;
  searchQuery?: string;
}
