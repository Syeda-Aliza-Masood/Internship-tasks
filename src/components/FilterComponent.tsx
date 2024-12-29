"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Star } from 'lucide-react'

interface FilterComponentProps {
  onChange: (filters: FilterState) => void
}

interface FilterState {
  categories: string[]
  brands: string[]
  features: string[]
  minPrice: number
  maxPrice: number
  condition: string
  rating: number
}

const categories = ["Mobile accessory", "Electronics", "Smartphones", "Modern tech"]
const brands = ["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"]
const features = ["Metallic", "Plastic cover", "8GB Ram", "Super power", "Large Memory"]
const conditions = ["Any", "Refurbished", "Brand new", "Old Items"]

export default function FilterComponent({ onChange }: FilterComponentProps) {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    brands: [],
    features: [],
    minPrice: 0,
    maxPrice: 999999,
    condition: "Any",
    rating: 0,
  })

  const toggleSelection = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key as keyof Pick<FilterState, "categories" | "brands" | "features">].includes(value)
        ? prev[key as keyof Pick<FilterState, "categories" | "brands" | "features">].filter((item) => item !== value)
        : [...prev[key as keyof Pick<FilterState, "categories" | "brands" | "features">], value],
    }))
  }

  const handlePriceChange = (value: number[]) => {
    setFilters((prev) => ({
      ...prev,
      minPrice: value[0],
      maxPrice: value[1],
    }))
  }

  const handleApply = () => {
    onChange(filters)
  }

  return (
    <div className="bg-white shadow-md p-6 rounded-lg space-y-6">
      {/* Categories */}
      <section className="space-y-4">
        <h3 className="font-semibold text-lg">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={filters.categories.includes(category)}
                onCheckedChange={() => toggleSelection("categories", category)}
              />
              <Label htmlFor={`category-${category}`}>{category}</Label>
            </div>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section className="space-y-4">
        <h3 className="font-semibold text-lg">Brands</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={`brand-${brand}`}
                checked={filters.brands.includes(brand)}
                onCheckedChange={() => toggleSelection("brands", brand)}
              />
              <Label htmlFor={`brand-${brand}`}>{brand}</Label>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="space-y-4">
        <h3 className="font-semibold text-lg">Features</h3>
        <div className="space-y-2">
          {features.map((feature) => (
            <div key={feature} className="flex items-center space-x-2">
              <Checkbox
                id={`feature-${feature}`}
                checked={filters.features.includes(feature)}
                onCheckedChange={() => toggleSelection("features", feature)}
              />
              <Label htmlFor={`feature-${feature}`}>{feature}</Label>
            </div>
          ))}
        </div>
      </section>

      {/* Price Range */}
      <section className="space-y-4">
        <h3 className="font-semibold text-lg">Price range</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <Label htmlFor="min-price">Min</Label>
              <Input
                id="min-price"
                type="number"
                value={filters.minPrice}
                onChange={(e) => handlePriceChange([Number(e.target.value), filters.maxPrice])}
                min={0}
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="max-price">Max</Label>
              <Input
                id="max-price"
                type="number"
                value={filters.maxPrice}
                onChange={(e) => handlePriceChange([filters.minPrice, Number(e.target.value)])}
                min={0}
              />
            </div>
          </div>
          <Slider
            defaultValue={[filters.minPrice, filters.maxPrice]}
            max={999999}
            step={1000}
            onValueChange={handlePriceChange}
          />
        </div>
      </section>

      {/* Condition */}
      <section className="space-y-4">
        <h3 className="font-semibold text-lg">Condition</h3>
        <RadioGroup
          value={filters.condition}
          onValueChange={(value) => setFilters((prev) => ({ ...prev, condition: value }))}
        >
          {conditions.map((condition) => (
            <div key={condition} className="flex items-center space-x-2">
              <RadioGroupItem value={condition} id={`condition-${condition}`} />
              <Label htmlFor={`condition-${condition}`}>{condition}</Label>
            </div>
          ))}
        </RadioGroup>
      </section>

      {/* Ratings */}
      <section className="space-y-4">
        <h3 className="font-semibold text-lg">Ratings</h3>
        <RadioGroup
          value={String(filters.rating)}
          onValueChange={(value) => setFilters((prev) => ({ ...prev, rating: Number(value) }))}
        >
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <RadioGroupItem value={String(rating)} id={`rating-${rating}`} />
              <Label htmlFor={`rating-${rating}`} className="flex">
                {Array.from({ length: rating }).map((_, index) => (
                  <Star
                    key={index}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </section>

      <Button onClick={handleApply} className="w-full">
        Apply Filters
      </Button>
    </div>
  )
}
