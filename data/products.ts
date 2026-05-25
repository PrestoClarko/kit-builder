export type BodySlot =
  | "top"
  | "shorts"
  | "compression"
  | "underwear"
  | "hoodie"
  | "jacket"
  | "tracksuit"
  | "set"
  | "gloves"
  | "gear"
  | "accessory";

export type CategoryId =
  | "fight-gear"
  | "compression"
  | "hoodies"
  | "tracksuits"
  | "tops"
  | "womens"
  | "equipment"
  | "accessories";

export interface Product {
  id: string;
  name: string;
  category: CategoryId;
  subcategory: string;
  bodySlot: BodySlot;
  styleTags: string[];
  accentColor: string;
  price: number;
}

export const CATEGORIES: { id: string; label: string; color: string }[] = [
  { id: "all", label: "All", color: "#c9a227" },
  { id: "fight-gear", label: "Fight Gear", color: "#c9a227" },
  { id: "compression", label: "Compression", color: "#7c3aed" },
  { id: "hoodies", label: "Hoodies & Jackets", color: "#1d4ed8" },
  { id: "tracksuits", label: "Track Suits", color: "#991b1b" },
  { id: "tops", label: "Tops & Jerseys", color: "#065f46" },
  { id: "womens", label: "Women's", color: "#9d174d" },
  { id: "equipment", label: "Gloves & Gear", color: "#1e3a5f" },
  { id: "accessories", label: "Accessories", color: "#44301a" },
];

export const products: Product[] = [
  // ── FIGHT SHORTS ──────────────────────────────────────────
  { id: "pro-fight-shorts", name: "Pro Fight Shorts", category: "fight-gear", subcategory: "shorts", bodySlot: "shorts", styleTags: ["mma", "boxing", "training", "pro"], accentColor: "#c9a227", price: 89 },
  { id: "lifestyle-shorts", name: "Lifestyle Shorts", category: "fight-gear", subcategory: "shorts", bodySlot: "shorts", styleTags: ["streetwear", "casual", "lifestyle"], accentColor: "#1a1a1a", price: 65 },
  { id: "team-twitch-muay-thai-shorts", name: "Team Twitch Muay Thai Shorts", category: "fight-gear", subcategory: "shorts", bodySlot: "shorts", styleTags: ["muay thai", "boxing", "team"], accentColor: "#c9a227", price: 79 },
  { id: "nl-boxing-shorts-white-pink-croc", name: "NL Boxing Shorts — White & Pink Croc", category: "fight-gear", subcategory: "shorts", bodySlot: "shorts", styleTags: ["boxing", "luxury", "pink", "white", "croc"], accentColor: "#f0c0d0", price: 95 },
  { id: "dally-custom-boxing-shorts", name: "Dally the Dentist Custom Boxing Shorts", category: "fight-gear", subcategory: "shorts", bodySlot: "shorts", styleTags: ["boxing", "custom", "signature", "limited"], accentColor: "#c9a227", price: 120 },
  { id: "nl-boxing-bad-baby-gold-pink", name: "NL Boxing \"Bad Baby\" Shorts — Gold & Pink", category: "fight-gear", subcategory: "shorts", bodySlot: "shorts", styleTags: ["boxing", "gold", "pink", "bold"], accentColor: "#c9a227", price: 89 },
  { id: "nl-boxing-bmf-blue", name: "NL Boxing \"BMF\" Shorts — Blue", category: "fight-gear", subcategory: "shorts", bodySlot: "shorts", styleTags: ["boxing", "blue", "bold", "bmf"], accentColor: "#1a3a7a", price: 89 },
  { id: "nl-boxing-matrix-green", name: "NL Boxing Matrix Shorts — Green", category: "fight-gear", subcategory: "shorts", bodySlot: "shorts", styleTags: ["boxing", "green", "matrix"], accentColor: "#1a5a2a", price: 89 },
  { id: "nl-boxing-bad-baby-white-pink", name: "NL Boxing \"Bad Baby\" Shorts — White & Pink", category: "fight-gear", subcategory: "shorts", bodySlot: "shorts", styleTags: ["boxing", "white", "pink", "bold"], accentColor: "#f0c0d0", price: 89 },
  { id: "nl-boxing-diamond-black-gold", name: "NL Boxing Diamond Shorts — Black & Gold", category: "fight-gear", subcategory: "shorts", bodySlot: "shorts", styleTags: ["boxing", "black", "gold", "diamond", "luxury"], accentColor: "#c9a227", price: 99 },
  { id: "nl-boxing-muay-thai-gold-camo", name: "NL Boxing Muay Thai Shorts — Gold Camo", category: "fight-gear", subcategory: "shorts", bodySlot: "shorts", styleTags: ["muay thai", "gold", "camo", "boxing"], accentColor: "#8b7a1a", price: 85 },

  // ── COMPRESSION / UNDERWEAR ───────────────────────────────
  { id: "compression-spats", name: "Compression Spats", category: "compression", subcategory: "spats", bodySlot: "compression", styleTags: ["mma", "compression", "training", "grappling"], accentColor: "#1a1a1a", price: 75 },
  { id: "ufw-royal-crest-boxers", name: "UFW Royal Crest Boxer Briefs", category: "compression", subcategory: "underwear", bodySlot: "underwear", styleTags: ["luxury", "gold", "boxing", "royal", "crest"], accentColor: "#c9a227", price: 45 },
  { id: "ufw-fk-around-boxers", name: "UFW F*ck Around & Find Out Boxer Briefs", category: "compression", subcategory: "underwear", bodySlot: "underwear", styleTags: ["bold", "streetwear", "attitude"], accentColor: "#c0392b", price: 40 },
  { id: "ufw-bare-knuckle-white-skulls", name: "UFW Bare Knuckle Boxers — White Skulls", category: "compression", subcategory: "underwear", bodySlot: "underwear", styleTags: ["skulls", "mma", "white", "bare knuckle"], accentColor: "#e8e8e8", price: 40 },
  { id: "ufw-bare-knuckle-gold-skulls", name: "UFW Bare Knuckle Boxers — Gold Skulls", category: "compression", subcategory: "underwear", bodySlot: "underwear", styleTags: ["skulls", "gold", "boxing", "bare knuckle"], accentColor: "#c9a227", price: 42 },
  { id: "ufw-bare-knuckle-fists", name: "UFW Bare Knuckle Fists Boxer Briefs", category: "compression", subcategory: "underwear", bodySlot: "underwear", styleTags: ["fists", "boxing", "bare knuckle"], accentColor: "#c0392b", price: 40 },
  { id: "ufw-heart-of-gold", name: "UFW Heart of Gold Boxer Briefs", category: "compression", subcategory: "underwear", bodySlot: "underwear", styleTags: ["gold", "luxury", "boxing"], accentColor: "#c9a227", price: 45 },
  { id: "ufw-baroque-boxers", name: "Under Fight Wear Baroque Boxer Briefs", category: "compression", subcategory: "underwear", bodySlot: "underwear", styleTags: ["baroque", "luxury", "premium"], accentColor: "#8b6914", price: 48 },
  { id: "xrumble-get-smacked-boxers", name: "X Rumble \"Get Smacked!\" Boxer Briefs", category: "compression", subcategory: "underwear", bodySlot: "underwear", styleTags: ["bold", "streetwear", "xrumble"], accentColor: "#c0392b", price: 40 },

  // ── HOODIES / JACKETS / PARKAS ────────────────────────────
  { id: "fighter-hoodie", name: "Fighter Hoodie", category: "hoodies", subcategory: "hoodie", bodySlot: "hoodie", styleTags: ["fight", "streetwear", "casual", "hoodie"], accentColor: "#1a1a1a", price: 110 },
  { id: "nlc-jacket", name: "NLC Jacket", category: "hoodies", subcategory: "jacket", bodySlot: "jacket", styleTags: ["nlc", "premium", "streetwear"], accentColor: "#c9a227", price: 145 },
  { id: "nl-boxing-camo-parka-wings", name: "NL Boxing Camo Parka — Wings Edition", category: "hoodies", subcategory: "parka", bodySlot: "jacket", styleTags: ["military", "luxury", "streetwear", "camo", "wings"], accentColor: "#4a5e3a", price: 280 },
  { id: "nl-boxing-camo-parka-nlb", name: "NL Boxing Camo Parka — New Level Boxing", category: "hoodies", subcategory: "parka", bodySlot: "jacket", styleTags: ["boxing", "camo", "parka", "luxury"], accentColor: "#4a5e3a", price: 260 },
  { id: "xrumble-varsity-jacket", name: "X Rumble Fighting Championships Varsity Jacket", category: "hoodies", subcategory: "varsity", bodySlot: "jacket", styleTags: ["varsity", "sport", "premium", "xrumble"], accentColor: "#c9a227", price: 220 },
  { id: "nl-boxing-puffer", name: "NL Boxing Puffer Jacket", category: "hoodies", subcategory: "puffer", bodySlot: "jacket", styleTags: ["puffer", "luxury", "winter"], accentColor: "#1a1a1a", price: 200 },
  { id: "nl-boxing-varsity-parka-gold", name: "NL Boxing Varsity Parka — The Gold Standard", category: "hoodies", subcategory: "parka", bodySlot: "jacket", styleTags: ["varsity", "gold", "luxury", "premium", "standard"], accentColor: "#c9a227", price: 320 },
  { id: "xrumble-boxing-varsity", name: "X Rumble Boxing Varsity Jacket", category: "hoodies", subcategory: "varsity", bodySlot: "jacket", styleTags: ["boxing", "varsity", "xrumble"], accentColor: "#c0392b", price: 210 },
  { id: "nl-boxing-marvin-leather", name: "NL Boxing Marvin Leather Jacket", category: "hoodies", subcategory: "leather", bodySlot: "jacket", styleTags: ["leather", "luxury", "premium", "marvin"], accentColor: "#1a0a00", price: 450 },
  { id: "xrumble-parka", name: "X Rumble Parka", category: "hoodies", subcategory: "parka", bodySlot: "jacket", styleTags: ["parka", "xrumble", "premium"], accentColor: "#1a1a1a", price: 240 },
  { id: "nlc-womens-parka", name: "NLC Women's Parka", category: "hoodies", subcategory: "parka", bodySlot: "jacket", styleTags: ["women", "parka", "nlc", "premium"], accentColor: "#9d174d", price: 230 },
  { id: "xrumble-bomber", name: "X Rumble Fighting Championships Bomber Jacket", category: "hoodies", subcategory: "bomber", bodySlot: "jacket", styleTags: ["bomber", "xrumble", "premium"], accentColor: "#1a1a4a", price: 220 },
  { id: "xrumble-track-jacket", name: "X Rumble Fighting Championships Track Jacket", category: "hoodies", subcategory: "track jacket", bodySlot: "jacket", styleTags: ["track", "xrumble", "athletic"], accentColor: "#c0392b", price: 165 },
  { id: "xrumble-fur-parka", name: "X Rumble Fighting Championships Fur-Lined Parka", category: "hoodies", subcategory: "parka", bodySlot: "jacket", styleTags: ["fur", "luxury", "xrumble", "premium"], accentColor: "#1a1a1a", price: 380 },

  // ── TRACK SUITS ────────────────────────────────────────────
  { id: "nl-black-track-suit", name: "NL Black Track Suit", category: "tracksuits", subcategory: "set", bodySlot: "tracksuit", styleTags: ["athletic", "streetwear", "black", "clean"], accentColor: "#1a1a1a", price: 175 },
  { id: "xrumble-baroque-track", name: "X Rumble Baroque Track Suit", category: "tracksuits", subcategory: "set", bodySlot: "tracksuit", styleTags: ["baroque", "luxury", "xrumble"], accentColor: "#c9a227", price: 240 },
  { id: "xrumble-monogram-feldman", name: "X Rumble Monogram Track Suit Feldman Edition", category: "tracksuits", subcategory: "set", bodySlot: "tracksuit", styleTags: ["monogram", "limited", "xrumble", "signature"], accentColor: "#c9a227", price: 280 },
  { id: "xrumble-luxury-monogram", name: "X Rumble Luxury Monogram Track Suit", category: "tracksuits", subcategory: "set", bodySlot: "tracksuit", styleTags: ["luxury", "monogram", "xrumble", "premium"], accentColor: "#c9a227", price: 260 },
  { id: "nl-baroque-team-black", name: "NL Boxing Baroque Team Collection — Black", category: "tracksuits", subcategory: "set", bodySlot: "tracksuit", styleTags: ["baroque", "team", "black", "boxing"], accentColor: "#c9a227", price: 220 },
  { id: "nl-baroque-team-red", name: "NL Boxing Baroque Team Collection — Red", category: "tracksuits", subcategory: "set", bodySlot: "tracksuit", styleTags: ["baroque", "team", "red", "boxing"], accentColor: "#c0392b", price: 220 },
  { id: "xrumble-track-fighters", name: "X Rumble Track Suit Fighters Edition", category: "tracksuits", subcategory: "set", bodySlot: "tracksuit", styleTags: ["fighters", "premium", "xrumble", "athletic"], accentColor: "#c0392b", price: 235 },
  { id: "nl-royal-baroque-track", name: "NL Boxing Royal Baroque Track Suit", category: "tracksuits", subcategory: "set", bodySlot: "tracksuit", styleTags: ["royal", "baroque", "luxury", "gold"], accentColor: "#c9a227", price: 260 },
  { id: "nl-royal-blue-track", name: "NL Boxing Royal Blue Track Suit", category: "tracksuits", subcategory: "set", bodySlot: "tracksuit", styleTags: ["royal", "blue", "luxury", "boxing"], accentColor: "#1a3a7a", price: 240 },
  { id: "xrumble-track-suit", name: "X Rumble Fighting Championships Track Suit", category: "tracksuits", subcategory: "set", bodySlot: "tracksuit", styleTags: ["championship", "xrumble", "premium"], accentColor: "#c0392b", price: 250 },
  { id: "nl-dragon-track-black", name: "NL Boxing Dragon Track Suit — Black", category: "tracksuits", subcategory: "set", bodySlot: "tracksuit", styleTags: ["dragon", "black", "gold", "luxury"], accentColor: "#c9a227", price: 270 },
  { id: "xrumble-commemorative-track", name: "X Rumble Commemorative Track Suit", category: "tracksuits", subcategory: "set", bodySlot: "tracksuit", styleTags: ["commemorative", "limited", "xrumble"], accentColor: "#c9a227", price: 290 },
  { id: "nl-royal-baroque-royal-blue", name: "NL Boxing Royal Baroque Track Suit — Royal Blue", category: "tracksuits", subcategory: "set", bodySlot: "tracksuit", styleTags: ["royal", "baroque", "blue", "luxury"], accentColor: "#1a3a7a", price: 260 },
  { id: "nl-dragon-track-bomber", name: "NL Boxing Dragon Track Suit — Bomber Style", category: "tracksuits", subcategory: "set", bodySlot: "tracksuit", styleTags: ["dragon", "bomber", "luxury", "gold"], accentColor: "#c9a227", price: 280 },
  { id: "nl-track-grey-white", name: "NL Boxing Track Suit — Grey/White", category: "tracksuits", subcategory: "set", bodySlot: "tracksuit", styleTags: ["grey", "white", "clean", "athletic"], accentColor: "#aaaaaa", price: 180 },
  { id: "nl-track-yellow-white", name: "NL Boxing Track Suit — Yellow/White", category: "tracksuits", subcategory: "set", bodySlot: "tracksuit", styleTags: ["yellow", "white", "bold", "athletic"], accentColor: "#e8d020", price: 180 },
  { id: "nl-track-pink", name: "NL Boxing Track Suit — Pink", category: "tracksuits", subcategory: "set", bodySlot: "tracksuit", styleTags: ["pink", "bold", "athletic"], accentColor: "#d4608a", price: 180 },
  { id: "nl-track-red", name: "NL Boxing Track Suit — Red", category: "tracksuits", subcategory: "set", bodySlot: "tracksuit", styleTags: ["red", "bold", "athletic"], accentColor: "#c0392b", price: 180 },
  { id: "nl-track-hot-pink", name: "NL Boxing Track Suit — Hot Pink", category: "tracksuits", subcategory: "set", bodySlot: "tracksuit", styleTags: ["hot pink", "bold", "vibrant"], accentColor: "#e0206a", price: 180 },
  { id: "nl-track-black-white", name: "NL Boxing Track Suit — Black/White", category: "tracksuits", subcategory: "set", bodySlot: "tracksuit", styleTags: ["black", "white", "clean", "classic"], accentColor: "#222222", price: 180 },
  { id: "nl-track-navy", name: "NL Boxing Track Suit — Navy Blue", category: "tracksuits", subcategory: "set", bodySlot: "tracksuit", styleTags: ["navy", "blue", "classic", "athletic"], accentColor: "#1a2a5a", price: 180 },
  { id: "nl-track-monogram-red-black", name: "NL Boxing Track Suit — Monogram Red/Black", category: "tracksuits", subcategory: "set", bodySlot: "tracksuit", styleTags: ["monogram", "red", "black", "luxury"], accentColor: "#c0392b", price: 200 },
  { id: "nl-track-monogram-white-black", name: "NL Boxing Track Suit — Monogram White/Black", category: "tracksuits", subcategory: "set", bodySlot: "tracksuit", styleTags: ["monogram", "white", "black", "luxury"], accentColor: "#e8e8e8", price: 200 },
  { id: "nl-track-monogram-grey-red", name: "NL Boxing Track Suit — Monogram Grey/Red", category: "tracksuits", subcategory: "set", bodySlot: "tracksuit", styleTags: ["monogram", "grey", "red", "luxury"], accentColor: "#aaaaaa", price: 200 },
  { id: "nl-track-suits-black", name: "NL Track Suits Black", category: "tracksuits", subcategory: "set", bodySlot: "tracksuit", styleTags: ["black", "clean", "athletic"], accentColor: "#1a1a1a", price: 175 },
  { id: "xrumble-sweat-suit", name: "X Rumble Sweat Suit", category: "tracksuits", subcategory: "set", bodySlot: "tracksuit", styleTags: ["sweat suit", "casual", "xrumble"], accentColor: "#1a1a1a", price: 160 },
  { id: "team-twitch-tracksuit", name: "Team Twitch Premium Tracksuit", category: "tracksuits", subcategory: "set", bodySlot: "tracksuit", styleTags: ["team", "premium", "twitch"], accentColor: "#6441a5", price: 210 },

  // ── TOPS / TEES / JERSEYS ──────────────────────────────────
  { id: "xrumble-monogram-tee", name: "X Rumble Boxing Monogram Tee", category: "tops", subcategory: "tee", bodySlot: "top", styleTags: ["monogram", "boxing", "xrumble", "streetwear"], accentColor: "#1a1a1a", price: 55 },
  { id: "xrumble-gold-chain-jersey", name: "X Rumble Gold Chain Boxing Jersey", category: "tops", subcategory: "jersey", bodySlot: "top", styleTags: ["gold", "chain", "boxing", "jersey", "luxury"], accentColor: "#c9a227", price: 110 },
  { id: "xrumble-muscle-shirt", name: "X Rumble Muscle Shirt", category: "tops", subcategory: "tank", bodySlot: "top", styleTags: ["muscle", "training", "xrumble", "athletic"], accentColor: "#1a1a1a", price: 45 },
  { id: "hockey-jersey", name: "Hockey Jersey", category: "tops", subcategory: "jersey", bodySlot: "top", styleTags: ["hockey", "sport", "jersey"], accentColor: "#c9a227", price: 120 },
  { id: "football-jersey", name: "Football Jersey", category: "tops", subcategory: "jersey", bodySlot: "top", styleTags: ["football", "sport", "jersey"], accentColor: "#c9a227", price: 120 },
  { id: "basketball-jersey", name: "Basketball Jersey", category: "tops", subcategory: "jersey", bodySlot: "top", styleTags: ["basketball", "sport", "jersey"], accentColor: "#c9a227", price: 110 },
  { id: "xrumble-womens-tee", name: "X Rumble Boxing Women's Tee", category: "tops", subcategory: "tee", bodySlot: "top", styleTags: ["women", "boxing", "xrumble", "tee"], accentColor: "#c0392b", price: 50 },
  { id: "nl-boxing-womens-crown-black", name: "NL Boxing Women's Crown Tee — Black", category: "tops", subcategory: "tee", bodySlot: "top", styleTags: ["women", "crown", "black", "premium"], accentColor: "#c9a227", price: 55 },
  { id: "nl-boxing-womens-crown-grey", name: "NL Boxing Women's Crown Tee — Grey", category: "tops", subcategory: "tee", bodySlot: "top", styleTags: ["women", "crown", "grey", "premium"], accentColor: "#aaaaaa", price: 55 },
  { id: "xrumble-basketball-jersey-76", name: "X Rumble Boxing Basketball Jersey #76", category: "tops", subcategory: "jersey", bodySlot: "top", styleTags: ["basketball", "boxing", "jersey", "xrumble", "76"], accentColor: "#c9a227", price: 125 },
  { id: "nl-muay-thai-tee-gold", name: "NL Boxing Muay Thai Tee — Gold & Black", category: "tops", subcategory: "tee", bodySlot: "top", styleTags: ["muay thai", "gold", "black", "boxing", "premium"], accentColor: "#c9a227", price: 60 },
  { id: "nl-text-pattern-tee", name: "NL Boxing Text Pattern Tee — Gold & Black", category: "tops", subcategory: "tee", bodySlot: "top", styleTags: ["text", "pattern", "gold", "black", "boxing"], accentColor: "#c9a227", price: 58 },
  { id: "nl-baroque-crest-tee", name: "NL Boxing Baroque Crest Tee — Gold & Black", category: "tops", subcategory: "tee", bodySlot: "top", styleTags: ["baroque", "crest", "gold", "black", "luxury"], accentColor: "#c9a227", price: 65 },
  { id: "cutman-basketball-jersey", name: "The Cut Man Basketball Jersey — Olive Green", category: "tops", subcategory: "jersey", bodySlot: "top", styleTags: ["basketball", "olive", "green", "boxing", "cutman"], accentColor: "#4a5e3a", price: 115 },
  { id: "nl-craftsmanship-tank-gold", name: "NL Boxing Craftsmanship Tank — Gold", category: "tops", subcategory: "tank", bodySlot: "top", styleTags: ["tank", "gold", "craftsmanship", "premium"], accentColor: "#c9a227", price: 50 },
  { id: "nl-bloody-fists-tank", name: "NL Boxing \"Bloody Fists Clean Money\" Tank", category: "tops", subcategory: "tank", bodySlot: "top", styleTags: ["tank", "bold", "boxing", "streetwear"], accentColor: "#c0392b", price: 48 },
  { id: "nl-premium-shirt-design2", name: "NL Boxing Premium Shirt — Design 2", category: "tops", subcategory: "tee", bodySlot: "top", styleTags: ["premium", "boxing", "signature"], accentColor: "#c9a227", price: 70 },
  { id: "xrumble-monogram-performance-tee", name: "X Rumble Boxing Monogram Performance Tee", category: "tops", subcategory: "tee", bodySlot: "top", styleTags: ["monogram", "performance", "xrumble", "athletic"], accentColor: "#c0392b", price: 65 },
  { id: "nl-black-gold-baroque-tee", name: "NL Boxing Black & Gold Baroque Premium Tee", category: "tops", subcategory: "tee", bodySlot: "top", styleTags: ["baroque", "black", "gold", "luxury", "premium"], accentColor: "#c9a227", price: 72 },
  { id: "training-joggers", name: "Training Joggers", category: "tops", subcategory: "pants", bodySlot: "compression", styleTags: ["training", "athletic", "joggers"], accentColor: "#1a1a1a", price: 85 },
  { id: "warmup-zip", name: "Warm-Up Zip", category: "tops", subcategory: "zip", bodySlot: "hoodie", styleTags: ["training", "athletic", "warmup", "zip"], accentColor: "#1a1a1a", price: 95 },

  // ── WOMEN'S ────────────────────────────────────────────────
  { id: "nlc-womens-pink-crown-set", name: "NLC Women's Pink Crown Sports Set", category: "womens", subcategory: "set", bodySlot: "set", styleTags: ["women", "pink", "crown", "sports", "set"], accentColor: "#d4608a", price: 130 },
  { id: "nl-womens-pink-gold-athletic", name: "NL Boxing Women's Pink & Gold Luxury Athletic Set", category: "womens", subcategory: "set", bodySlot: "set", styleTags: ["women", "pink", "gold", "luxury", "athletic"], accentColor: "#d4608a", price: 160 },
  { id: "nl-misfit-queen-of-violence-robe", name: "NL Boxing Misfit \"Queen of Violence\" Robe", category: "womens", subcategory: "robe", bodySlot: "jacket", styleTags: ["women", "robe", "luxury", "fight", "gold", "queen"], accentColor: "#c9a227", price: 195 },
  { id: "nl-misfit-sports-bra-shorts", name: "NL Boxing Misfit Sports Bra & Shorts Set", category: "womens", subcategory: "set", bodySlot: "set", styleTags: ["women", "sports bra", "shorts", "misfit", "fitness"], accentColor: "#1a1a1a", price: 115 },
  { id: "nl-red-queen-robe-set", name: "NL Boxing Red Queen Robe & Outfit Set", category: "womens", subcategory: "set", bodySlot: "set", styleTags: ["women", "red", "queen", "robe", "luxury"], accentColor: "#c0392b", price: 220 },
  { id: "nl-tier1-core-collection", name: "NL Boxing Tier 1 Core Collection — Multiple Sets", category: "womens", subcategory: "set", bodySlot: "set", styleTags: ["women", "core", "tier1", "athletic", "set"], accentColor: "#c9a227", price: 175 },
  { id: "nl-cherub-sports-bra-leggings", name: "NL Boxing Cherub Black & Gold Sports Bra & Leggings Set", category: "womens", subcategory: "set", bodySlot: "set", styleTags: ["women", "cherub", "black", "gold", "leggings", "luxury"], accentColor: "#c9a227", price: 145 },
  { id: "nl-womens-pink-black-athletic", name: "NL Boxing Women's Pink & Black Luxury Athletic Set", category: "womens", subcategory: "set", bodySlot: "set", styleTags: ["women", "pink", "black", "luxury", "athletic"], accentColor: "#d4608a", price: 155 },
  { id: "nl-womens-white-pink-splatter", name: "NL Boxing Women's White & Pink Splatter Training Set", category: "womens", subcategory: "set", bodySlot: "set", styleTags: ["women", "white", "pink", "splatter", "training"], accentColor: "#f0c0d0", price: 140 },
  { id: "nl-womens-teal-green-sets", name: "NL Boxing Women's Teal & Green Luxury Athletic Sets", category: "womens", subcategory: "set", bodySlot: "set", styleTags: ["women", "teal", "green", "luxury", "athletic"], accentColor: "#0d7a5f", price: 150 },

  // ── GLOVES / GEAR ──────────────────────────────────────────
  { id: "team-twitch-shin-guards", name: "Team Twitch Shin Guards", category: "equipment", subcategory: "shin guards", bodySlot: "gear", styleTags: ["shin guards", "muay thai", "training", "team"], accentColor: "#c9a227", price: 95 },
  { id: "team-twitch-boxing-gloves", name: "Team Twitch Boxing Gloves", category: "equipment", subcategory: "gloves", bodySlot: "gloves", styleTags: ["boxing", "gloves", "team", "training"], accentColor: "#c9a227", price: 120 },
  { id: "xrumble-gloves-red-black", name: "X Rumble Boxing Gloves - Red/Black", category: "equipment", subcategory: "gloves", bodySlot: "gloves", styleTags: ["boxing", "gloves", "red", "black", "xrumble"], accentColor: "#c0392b", price: 140 },
  { id: "xrumble-glove-single-red", name: "X Rumble Boxing Glove - Red/Black Single", category: "equipment", subcategory: "gloves", bodySlot: "gloves", styleTags: ["boxing", "glove", "red", "single", "xrumble"], accentColor: "#c0392b", price: 75 },
  { id: "xrumble-gloves-blue-red", name: "X Rumble Boxing Gloves - Blue & Red Pair", category: "equipment", subcategory: "gloves", bodySlot: "gloves", styleTags: ["boxing", "gloves", "blue", "red", "xrumble"], accentColor: "#1a3a7a", price: 140 },
  { id: "xrumble-mma-gloves-black-gold", name: "X Rumble Fighting Championships MMA Gloves - Black/Gold", category: "equipment", subcategory: "gloves", bodySlot: "gloves", styleTags: ["mma", "gloves", "black", "gold", "championship", "xrumble"], accentColor: "#c9a227", price: 120 },

  // ── ACCESSORIES ────────────────────────────────────────────
  { id: "bkfc-poster", name: "BKFC Bloody Hands Clean Money Poster", category: "accessories", subcategory: "poster", bodySlot: "accessory", styleTags: ["poster", "bkfc", "bare knuckle", "art"], accentColor: "#c0392b", price: 35 },
  { id: "leather-bag", name: "Leather Bag", category: "accessories", subcategory: "bag", bodySlot: "accessory", styleTags: ["leather", "bag", "luxury", "streetwear"], accentColor: "#3a1a00", price: 185 },
  { id: "xrumble-leather-gym-bag", name: "X Rumble Fighting Championships Leather Gym Bag", category: "accessories", subcategory: "bag", bodySlot: "accessory", styleTags: ["leather", "gym bag", "xrumble", "training", "premium"], accentColor: "#1a1a1a", price: 220 },
];
