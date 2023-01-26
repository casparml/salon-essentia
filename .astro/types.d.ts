declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (data: CollectionEntry<C>) => boolean
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"ervaringen": {
"jeanet.md": {
  id: "jeanet.md",
  slug: "jeanet",
  body: string,
  collection: "ervaringen",
  data: InferEntrySchema<"ervaringen">
},
"jolande.md": {
  id: "jolande.md",
  slug: "jolande",
  body: string,
  collection: "ervaringen",
  data: InferEntrySchema<"ervaringen">
},
"marieke.md": {
  id: "marieke.md",
  slug: "marieke",
  body: string,
  collection: "ervaringen",
  data: InferEntrySchema<"ervaringen">
},
"mirjam.md": {
  id: "mirjam.md",
  slug: "mirjam",
  body: string,
  collection: "ervaringen",
  data: InferEntrySchema<"ervaringen">
},
"nanda.md": {
  id: "nanda.md",
  slug: "nanda",
  body: string,
  collection: "ervaringen",
  data: InferEntrySchema<"ervaringen">
},
"romy.md": {
  id: "romy.md",
  slug: "romy",
  body: string,
  collection: "ervaringen",
  data: InferEntrySchema<"ervaringen">
},
"saskia.md": {
  id: "saskia.md",
  slug: "saskia",
  body: string,
  collection: "ervaringen",
  data: InferEntrySchema<"ervaringen">
},
},
"gezichtsbehandelingen": {
"bijwerkenwenkbrauwen-.md": {
  id: "bijwerkenwenkbrauwen-.md",
  slug: "bijwerkenwenkbrauwen-",
  body: string,
  collection: "gezichtsbehandelingen",
  data: InferEntrySchema<"gezichtsbehandelingen">
},
"harsenbovenlip-.md": {
  id: "harsenbovenlip-.md",
  slug: "harsenbovenlip-",
  body: string,
  collection: "gezichtsbehandelingen",
  data: InferEntrySchema<"gezichtsbehandelingen">
},
"harsencompleetbovenlipkinkaakwangen-.md": {
  id: "harsencompleetbovenlipkinkaakwangen-.md",
  slug: "harsencompleetbovenlipkinkaakwangen-",
  body: string,
  collection: "gezichtsbehandelingen",
  data: InferEntrySchema<"gezichtsbehandelingen">
},
"harsencompleetwenkbrauwen-.md": {
  id: "harsencompleetwenkbrauwen-.md",
  slug: "harsencompleetwenkbrauwen-",
  body: string,
  collection: "gezichtsbehandelingen",
  data: InferEntrySchema<"gezichtsbehandelingen">
},
"harsenkin-.md": {
  id: "harsenkin-.md",
  slug: "harsenkin-",
  body: string,
  collection: "gezichtsbehandelingen",
  data: InferEntrySchema<"gezichtsbehandelingen">
},
"modellerenwenkbrauwen-.md": {
  id: "modellerenwenkbrauwen-.md",
  slug: "modellerenwenkbrauwen-",
  body: string,
  collection: "gezichtsbehandelingen",
  data: InferEntrySchema<"gezichtsbehandelingen">
},
"overvloed.md": {
  id: "overvloed.md",
  slug: "overvloed",
  body: string,
  collection: "gezichtsbehandelingen",
  data: InferEntrySchema<"gezichtsbehandelingen">
},
"verrukkung.md": {
  id: "verrukkung.md",
  slug: "verrukkung",
  body: string,
  collection: "gezichtsbehandelingen",
  data: InferEntrySchema<"gezichtsbehandelingen">
},
"vrijheid.md": {
  id: "vrijheid.md",
  slug: "vrijheid",
  body: string,
  collection: "gezichtsbehandelingen",
  data: InferEntrySchema<"gezichtsbehandelingen">
},
"wenkbrauwen-.md": {
  id: "wenkbrauwen-.md",
  slug: "wenkbrauwen-",
  body: string,
  collection: "gezichtsbehandelingen",
  data: InferEntrySchema<"gezichtsbehandelingen">
},
"wimpers-.md": {
  id: "wimpers-.md",
  slug: "wimpers-",
  body: string,
  collection: "gezichtsbehandelingen",
  data: InferEntrySchema<"gezichtsbehandelingen">
},
"wimperswenkbrauwen-.md": {
  id: "wimperswenkbrauwen-.md",
  slug: "wimperswenkbrauwen-",
  body: string,
  collection: "gezichtsbehandelingen",
  data: InferEntrySchema<"gezichtsbehandelingen">
},
},
"producten": {
"aloeveragel-150-ml.md": {
  id: "aloeveragel-150-ml.md",
  slug: "aloeveragel-150-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"aloeveragel-30-ml.md": {
  id: "aloeveragel-30-ml.md",
  slug: "aloeveragel-30-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"antioxidantenserum-50-ml.md": {
  id: "antioxidantenserum-50-ml.md",
  slug: "antioxidantenserum-50-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"argananti-rimpelcremeuva-100-ml.md": {
  id: "argananti-rimpelcremeuva-100-ml.md",
  slug: "argananti-rimpelcremeuva-100-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"argananti-rimpelcremeuva-50-ml.md": {
  id: "argananti-rimpelcremeuva-50-ml.md",
  slug: "argananti-rimpelcremeuva-50-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"arganmultirepaircremeuva-50-ml.md": {
  id: "arganmultirepaircremeuva-50-ml.md",
  slug: "arganmultirepaircremeuva-50-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"balancingdagcreme-50-ml.md": {
  id: "balancingdagcreme-50-ml.md",
  slug: "balancingdagcreme-50-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"balancingnachtcreme-50-ml.md": {
  id: "balancingnachtcreme-50-ml.md",
  slug: "balancingnachtcreme-50-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"beengel-150-ml.md": {
  id: "beengel-150-ml.md",
  slug: "beengel-150-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"bodylotion-150-ml.md": {
  id: "bodylotion-150-ml.md",
  slug: "bodylotion-150-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"calendula-mandarijncalendula-rijstkiem-100-ml.md": {
  id: "calendula-mandarijncalendula-rijstkiem-100-ml.md",
  slug: "calendula-mandarijncalendula-rijstkiem-100-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"calendula-mandarijncalendula-rijstkiem-150-ml.md": {
  id: "calendula-mandarijncalendula-rijstkiem-150-ml.md",
  slug: "calendula-mandarijncalendula-rijstkiem-150-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"calendula-mandarijncalendula-rijstkiem-200-ml.md": {
  id: "calendula-mandarijncalendula-rijstkiem-200-ml.md",
  slug: "calendula-mandarijncalendula-rijstkiem-200-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"calendula-mandarijncalendula-rijstkiem-200-ml1.md": {
  id: "calendula-mandarijncalendula-rijstkiem-200-ml1.md",
  slug: "calendula-mandarijncalendula-rijstkiem-200-ml1",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"calendula-mandarijncalendula-rijstkiem-250-ml.md": {
  id: "calendula-mandarijncalendula-rijstkiem-250-ml.md",
  slug: "calendula-mandarijncalendula-rijstkiem-250-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"calendula-mandarijncalendula-rijstkiem-30-ml.md": {
  id: "calendula-mandarijncalendula-rijstkiem-30-ml.md",
  slug: "calendula-mandarijncalendula-rijstkiem-30-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"calendula-mandarijncalendula-rijstkiem-350-ml.md": {
  id: "calendula-mandarijncalendula-rijstkiem-350-ml.md",
  slug: "calendula-mandarijncalendula-rijstkiem-350-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"calendula-mandarijncalendula-rijstkiem-500-ml.md": {
  id: "calendula-mandarijncalendula-rijstkiem-500-ml.md",
  slug: "calendula-mandarijncalendula-rijstkiem-500-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"dag-ennachtcremein1-50-ml.md": {
  id: "dag-ennachtcremein1-50-ml.md",
  slug: "dag-ennachtcremein1-50-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"dodezeebadzout-850-ml.md": {
  id: "dodezeebadzout-850-ml.md",
  slug: "dodezeebadzout-850-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"dodezeemoddermaskerpuur-50-ml.md": {
  id: "dodezeemoddermaskerpuur-50-ml.md",
  slug: "dodezeemoddermaskerpuur-50-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"dodezeewaterpuur-150-ml.md": {
  id: "dodezeewaterpuur-150-ml.md",
  slug: "dodezeewaterpuur-150-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"dodezeewaterpuur-30-ml.md": {
  id: "dodezeewaterpuur-30-ml.md",
  slug: "dodezeewaterpuur-30-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"faceliftingmasker-50-ml.md": {
  id: "faceliftingmasker-50-ml.md",
  slug: "faceliftingmasker-50-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"facewash-150-ml.md": {
  id: "facewash-150-ml.md",
  slug: "facewash-150-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"goudsbloembalsem-100-ml.md": {
  id: "goudsbloembalsem-100-ml.md",
  slug: "goudsbloembalsem-100-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"handcreme-150-ml.md": {
  id: "handcreme-150-ml.md",
  slug: "handcreme-150-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"lavendelroos-200-ml.md": {
  id: "lavendelroos-200-ml.md",
  slug: "lavendelroos-200-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"lavendelroos-50-ml.md": {
  id: "lavendelroos-50-ml.md",
  slug: "lavendelroos-50-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"lavendelrooseucalyptus-mint-100-ml.md": {
  id: "lavendelrooseucalyptus-mint-100-ml.md",
  slug: "lavendelrooseucalyptus-mint-100-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"lavendelrooseucalyptus-mint-125-ml.md": {
  id: "lavendelrooseucalyptus-mint-125-ml.md",
  slug: "lavendelrooseucalyptus-mint-125-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"lavendelrooseucalyptus-mint-150-ml.md": {
  id: "lavendelrooseucalyptus-mint-150-ml.md",
  slug: "lavendelrooseucalyptus-mint-150-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"lavendelrooseucalyptus-mint-25-ml.md": {
  id: "lavendelrooseucalyptus-mint-25-ml.md",
  slug: "lavendelrooseucalyptus-mint-25-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"lavendelrooseucalyptus-mint-250-ml.md": {
  id: "lavendelrooseucalyptus-mint-250-ml.md",
  slug: "lavendelrooseucalyptus-mint-250-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"lavendelrooseucalyptus-mint-30-ml.md": {
  id: "lavendelrooseucalyptus-mint-30-ml.md",
  slug: "lavendelrooseucalyptus-mint-30-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"lavendelrooseucalyptus-mint-350-ml.md": {
  id: "lavendelrooseucalyptus-mint-350-ml.md",
  slug: "lavendelrooseucalyptus-mint-350-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"lavendelrooseucalyptus-mint-500-ml.md": {
  id: "lavendelrooseucalyptus-mint-500-ml.md",
  slug: "lavendelrooseucalyptus-mint-500-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"lavendelskinspray-150-ml.md": {
  id: "lavendelskinspray-150-ml.md",
  slug: "lavendelskinspray-150-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"mediumcalendula-mandarijncalendula-rijstkiem-150-ml.md": {
  id: "mediumcalendula-mandarijncalendula-rijstkiem-150-ml.md",
  slug: "mediumcalendula-mandarijncalendula-rijstkiem-150-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"mediumlavendelroos-150-ml.md": {
  id: "mediumlavendelroos-150-ml.md",
  slug: "mediumlavendelroos-150-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"oogcreme-30-ml.md": {
  id: "oogcreme-30-ml.md",
  slug: "oogcreme-30-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"reinigingslotion-150-ml.md": {
  id: "reinigingslotion-150-ml.md",
  slug: "reinigingslotion-150-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"reinigingslotion-30-ml.md": {
  id: "reinigingslotion-30-ml.md",
  slug: "reinigingslotion-30-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"reinigingsmelk-150-ml.md": {
  id: "reinigingsmelk-150-ml.md",
  slug: "reinigingsmelk-150-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"reinigingsmelk-30-ml.md": {
  id: "reinigingsmelk-30-ml.md",
  slug: "reinigingsmelk-30-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"rosewaterskinspray-150-ml.md": {
  id: "rosewaterskinspray-150-ml.md",
  slug: "rosewaterskinspray-150-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"rosewaterskinspray-30-ml.md": {
  id: "rosewaterskinspray-30-ml.md",
  slug: "rosewaterskinspray-30-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"smallcalendula-mandarijncalendula-rijstkiem-30-ml.md": {
  id: "smallcalendula-mandarijncalendula-rijstkiem-30-ml.md",
  slug: "smallcalendula-mandarijncalendula-rijstkiem-30-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"smalllavendelroos-30-ml.md": {
  id: "smalllavendelroos-30-ml.md",
  slug: "smalllavendelroos-30-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"voetenbalsem-150-ml.md": {
  id: "voetenbalsem-150-ml.md",
  slug: "voetenbalsem-150-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"zonnemelk-100-ml.md": {
  id: "zonnemelk-100-ml.md",
  slug: "zonnemelk-100-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
"zonnemelk-30-ml.md": {
  id: "zonnemelk-30-ml.md",
  slug: "zonnemelk-30-ml",
  body: string,
  collection: "producten",
  data: InferEntrySchema<"producten">
},
},
"schilderijen": {
"test-20x32.md": {
  id: "test-20x32.md",
  slug: "test-20x32",
  body: string,
  collection: "schilderijen",
  data: InferEntrySchema<"schilderijen">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
