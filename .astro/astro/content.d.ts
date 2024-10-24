declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"game": {
"Balatro.mdx": {
	id: "Balatro.mdx";
  slug: "balatro";
  body: string;
  collection: "game";
  data: InferEntrySchema<"game">
} & { render(): Render[".mdx"] };
"Bodycam.mdx": {
	id: "Bodycam.mdx";
  slug: "bodycam";
  body: string;
  collection: "game";
  data: InferEntrySchema<"game">
} & { render(): Render[".mdx"] };
"Buckshot_Roulette.mdx": {
	id: "Buckshot_Roulette.mdx";
  slug: "buckshot_roulette";
  body: string;
  collection: "game";
  data: InferEntrySchema<"game">
} & { render(): Render[".mdx"] };
"Dying_Light.mdx": {
	id: "Dying_Light.mdx";
  slug: "dying_light";
  body: string;
  collection: "game";
  data: InferEntrySchema<"game">
} & { render(): Render[".mdx"] };
"Ghost_of_Tsushima.mdx": {
	id: "Ghost_of_Tsushima.mdx";
  slug: "ghost_of_tsushima";
  body: string;
  collection: "game";
  data: InferEntrySchema<"game">
} & { render(): Render[".mdx"] };
"Little_Kitty_Big_City.mdx": {
	id: "Little_Kitty_Big_City.mdx";
  slug: "little_kitty_big_city";
  body: string;
  collection: "game";
  data: InferEntrySchema<"game">
} & { render(): Render[".mdx"] };
"Marvels_SpiderMan_Remastered.mdx": {
	id: "Marvels_SpiderMan_Remastered.mdx";
  slug: "marvels_spiderman_remastered";
  body: string;
  collection: "game";
  data: InferEntrySchema<"game">
} & { render(): Render[".mdx"] };
"Murders_on_the_Yangtze_River.mdx": {
	id: "Murders_on_the_Yangtze_River.mdx";
  slug: "murders_on_the_yangtze_river";
  body: string;
  collection: "game";
  data: InferEntrySchema<"game">
} & { render(): Render[".mdx"] };
"Myth_of_Empires.mdx": {
	id: "Myth_of_Empires.mdx";
  slug: "myth_of_empires";
  body: string;
  collection: "game";
  data: InferEntrySchema<"game">
} & { render(): Render[".mdx"] };
"The_Hungry_Lamb_Traveling_in_the_Late_Ming_Dynasty.mdx": {
	id: "The_Hungry_Lamb_Traveling_in_the_Late_Ming_Dynasty.mdx";
  slug: "the_hungry_lamb_traveling_in_the_late_ming_dynasty";
  body: string;
  collection: "game";
  data: InferEntrySchema<"game">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}
