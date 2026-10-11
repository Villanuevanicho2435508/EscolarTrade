"use client"

import { useState } from "react"
import {
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Heart,
  LayoutGrid,
  List,
  MessageSquare,
  Plus,
  Search,
  ShoppingCart,
} from "lucide-react"
import { Logo } from "@/components/Logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { Field, FieldLabel } from "@/components/ui/field"
import { ListingCard } from "./ListingCard"
import { ListingItem } from "./ListingItem"
import { ItemGroup } from "@/components/ui/item"
import { CATEGORIES, CONDITIONS, MARKETPLACE_LISTINGS } from "./sample-listings"
import { cn } from "@/lib/utils"

export function MarketplaceBrowser() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("All Listings")
  const [zone, setZone] = useState("")
  const [condition, setCondition] = useState("")
  const [min, setMin] = useState("")
  const [max, setMax] = useState("")
  const [filters, setFilters] = useState({
    zone: "",
    condition: "",
    min: "",
    max: "",
  })
  const [sort, setSort] = useState("recent")
  const [layout, setLayout] = useState("grid")
  const listings = MARKETPLACE_LISTINGS.filter(
    (item) =>
      (category === "All Listings" || item.category === category) &&
      `${item.title} ${item.description}`
        .toLowerCase()
        .includes(query.toLowerCase()) &&
      (!filters.zone || item.location === filters.zone) &&
      (!filters.condition || item.condition === filters.condition) &&
      (!filters.min || item.price >= Number(filters.min)) &&
      (!filters.max || item.price <= Number(filters.max))
  ).sort((a, b) =>
    sort === "low" ? a.price - b.price : sort === "high" ? b.price - a.price : 0
  )
  function clear() {
    setZone("")
    setCondition("")
    setMin("")
    setMax("")
    setFilters({ zone: "", condition: "", min: "", max: "" })
  }
  return (
    <>
      <header className="border-b">
        <div className="border mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-4 py-4 lg:flex-nowrap lg:px-8">
          <Logo />
          <div className="order-last w-full lg:order-0 lg:flex-1">
            <InputGroup>
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
              <InputGroupInput
                type="search"
                aria-label="Search listings"
                placeholder="Search textbooks, calculators, uniforms, gadgets…"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </InputGroup>
          </div>
          <div className="ml-auto flex items-center gap-2">
            {[
              { icon: MessageSquare, label: "Messages" },
              { icon: Bell, label: "Notifications" },
              { icon: Heart, label: "Saved listings" },
              { icon: ShoppingCart, label: "Cart" },
            ].map(({ icon: Icon, label }) => (
              <Button
                key={label}
                variant="ghost"
									size="lg"
									className="px-1 py-1"
              >
                <Icon />
              </Button>
            ))}
          </div>
          <div className="hidden items-center gap-2 border-l pl-4 lg:flex">
            <span className="flex size-9 items-center justify-center rounded-full bg-muted text-xs font-semibold">
              BR
            </span>
            <div className="text-xs">
              <p className="font-semibold">Bea R.</p>
              <p className="text-muted-foreground">BS Nursing 3rd Yr</p>
            </div>
            <ChevronDown className="size-4 text-muted-foreground" />
          </div>
        </div>
        <div className="bg-muted/50">
          <nav
            aria-label="Listing categories"
            className="mx-auto flex max-w-7xl items-center gap-5 overflow-x-auto px-4 lg:px-8"
          >
            {["All Listings", ...CATEGORIES].map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
                className={cn(
                  "shrink-0 border-b-2 border-transparent py-3 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground",
                  category === item && "border-primary text-foreground"
                )}
              >
                {item}
              </button>
            ))}
            <Button variant="ghost" className="my-2 ml-auto" disabled>
              <Plus />
              Post a Listing
            </Button>
          </nav>
        </div>
      </header>
      <section
        aria-label="Marketplace listings"
        className="mx-auto max-w-7xl px-4 py-6 lg:px-8"
      >
        <form
          onSubmit={(event) => {
            event.preventDefault()
            setFilters({ zone, condition, min, max })
          }}
          className="grid gap-4 rounded-xl bg-muted p-4 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end lg:p-5"
        >
          <Field>
            <FieldLabel
              htmlFor="campus-zone"
              className="text-xs text-muted-foreground uppercase"
            >
              Campus Zone
            </FieldLabel>
            <NativeSelect
              id="campus-zone"
              className="w-full"
              value={zone}
              onChange={(event) => setZone(event.target.value)}
            >
              <NativeSelectOption value="">
                All Drop-off Locations
              </NativeSelectOption>
              {Array.from(
                new Set(MARKETPLACE_LISTINGS.map((item) => item.location))
              ).map((location) => (
                <NativeSelectOption key={location}>
                  {location}
                </NativeSelectOption>
              ))}
            </NativeSelect>
          </Field>
          <Field>
            <FieldLabel
              htmlFor="condition"
              className="text-xs text-muted-foreground uppercase"
            >
              Condition
            </FieldLabel>
            <NativeSelect
              id="condition"
              className="w-full"
              value={condition}
              onChange={(event) => setCondition(event.target.value)}
            >
              <NativeSelectOption value="">Any Condition</NativeSelectOption>
              {CONDITIONS.map((item) => (
                <NativeSelectOption key={item}>{item}</NativeSelectOption>
              ))}
            </NativeSelect>
          </Field>
          <Field>
            <FieldLabel
              htmlFor="minimum-price"
              className="text-xs text-muted-foreground uppercase"
            >
              Price Range (PHP)
            </FieldLabel>
            <div className="flex items-center gap-2">
              <Input
                id="minimum-price"
                aria-label="Minimum price in pesos"
                type="number"
                min="0"
                placeholder="₱0"
                value={min}
                onChange={(event) => setMin(event.target.value)}
              />
              <span className="text-muted-foreground">–</span>
              <Input
                aria-label="Maximum price in pesos"
                type="number"
                min={min || 0}
                placeholder="₱3,000"
                value={max}
                onChange={(event) => setMax(event.target.value)}
              />
            </div>
          </Field>
          <div className="flex gap-2">
            <Button type="submit" className="flex-1">
              Apply Filters
            </Button>
            <Button type="button" variant="ghost" onClick={clear}>
              Clear
            </Button>
          </div>
        </form>
        <div className="flex flex-col gap-4 py-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-baseline gap-2">
            <h1 className="font-heading text-2xl font-semibold">
              Fresh Listings
            </h1>
            <span className="text-xs text-muted-foreground">
              Sample campus listings
            </span>
          </div>
          <div className="flex items-center gap-2">
            <label
              htmlFor="listing-sort"
              className="text-xs text-muted-foreground"
            >
              Sort:
            </label>
            <NativeSelect
              id="listing-sort"
              value={sort}
              onChange={(event) => setSort(event.target.value)}
            >
              <NativeSelectOption value="recent">
                Most Recent
              </NativeSelectOption>
              <NativeSelectOption value="low">
                Price: Low to High
              </NativeSelectOption>
              <NativeSelectOption value="high">
                Price: High to Low
              </NativeSelectOption>
            </NativeSelect>
            <div className="flex gap-1 rounded-lg bg-muted p-1">
              <Button
                variant={layout === "grid" ? "secondary" : "ghost"}
                size="icon-sm"
                aria-label="Grid view"
                aria-pressed={layout === "grid"}
                onClick={() => setLayout("grid")}
              >
                <LayoutGrid />
              </Button>
              <Button
                variant={layout === "list" ? "secondary" : "ghost"}
                size="icon-sm"
                aria-label="List view"
                aria-pressed={layout === "list"}
                onClick={() => setLayout("list")}
              >
                <List />
              </Button>
            </div>
          </div>
        </div>
        {layout === "grid" ? (

          <div 
          	className="justify-items-center grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {listings.map((listing) => (
              <ListingCard
                key={listing.id}
                listing={listing}
              />
            ))}
          </div>
        ) : (
          <ItemGroup>
            {listings.map((listing) => (
              <ListingItem key={listing.id} listing={listing} />
            ))}
          </ItemGroup>
        )}
        {listings.length === 0 && (
          <p
            className="py-16 text-center text-sm text-muted-foreground"
            role="status"
          >
            No listings match your search and filters.
          </p>
        )}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-10 pb-2">
          <p className="text-xs text-muted-foreground" aria-live="polite">
            Showing {listings.length ? "1–" : ""}
            {listings.length} of {listings.length} sample listings
          </p>
          <nav aria-label="Listing pages" className="flex items-center gap-2">
            <Button variant="ghost" disabled>
              <ChevronLeft />
              Previous
            </Button>
            <Button aria-current="page">1</Button>
            <Button variant="ghost" disabled>
              Next
              <ChevronRight />
            </Button>
          </nav>
        </div>
      </section>
    </>
  )
}
