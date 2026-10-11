"use client"

import { useState } from "react"
import { Heart, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import type { Listing } from "@/types/market.types"

export function ListingItem({ listing }: { listing: Listing }) {
  const [saved, setSaved] = useState(false)

  return (
    <Item
      variant="outline"
      role="listitem"
      className="items-start lg:items-center"
    >
      <ItemMedia className="w-20 overflow-hidden rounded-lg lg:w-40">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={listing.image}
          alt={listing.title}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover"
        />
      </ItemMedia>
      <ItemContent className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{listing.condition}</Badge>
          <span className="text-xs text-muted-foreground">
            {listing.category}
          </span>
        </div>
        <ItemTitle className="line-clamp-none">{listing.title}</ItemTitle>
        <ItemDescription>{listing.description}</ItemDescription>
        <div className="mt-1 flex flex-col gap-1 text-xs lg:flex-row lg:flex-wrap lg:gap-4">
          <p>
            <span className="font-medium">{listing.seller.name}</span>
            <span className="text-muted-foreground">
              {" "}
              · {listing.seller.program}
            </span>
          </p>
          <p className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="size-3 shrink-0" />
            {listing.location}
          </p>
        </div>
      </ItemContent>
      <ItemActions className="basis-full justify-end lg:basis-auto">
        <p className="font-semibold">
          ₱{listing.price.toLocaleString("en-PH")}
        </p>
        <Button
          variant="ghost"
          size="icon"
          aria-label={`${saved ? "Unsave" : "Save"} ${listing.title}`}
          aria-pressed={saved}
          onClick={() => setSaved(!saved)}
        >
          <Heart className={saved ? "fill-current text-primary" : ""} />
        </Button>
      </ItemActions>
    </Item>
  )
}
