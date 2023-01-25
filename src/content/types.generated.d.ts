declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		typeof entryMap[C][keyof typeof entryMap[C]] & Render;

	type BaseCollectionConfig<S extends import('astro/zod').ZodRawShape> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<import('astro/zod').ZodObject<S>>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends import('astro/zod').ZodRawShape>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	export function getEntry<C extends keyof typeof entryMap, E extends keyof typeof entryMap[C]>(
		collection: C,
		entryKey: E
	): Promise<typeof entryMap[C][E] & Render>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends keyof typeof entryMap[C]
	>(
		collection: C,
		filter?: (data: typeof entryMap[C][E]) => boolean
	): Promise<(typeof entryMap[C][E] & Render)[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		import('astro/zod').ZodObject<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			injectedFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"ervaringen": {
"jeanet.md": {
  id: "jeanet.md",
  slug: "jeanet",
  body: string,
  collection: "ervaringen",
  data: any
},
"jolande.md": {
  id: "jolande.md",
  slug: "jolande",
  body: string,
  collection: "ervaringen",
  data: any
},
"marieke.md": {
  id: "marieke.md",
  slug: "marieke",
  body: string,
  collection: "ervaringen",
  data: any
},
"mirjam.md": {
  id: "mirjam.md",
  slug: "mirjam",
  body: string,
  collection: "ervaringen",
  data: any
},
"nanda.md": {
  id: "nanda.md",
  slug: "nanda",
  body: string,
  collection: "ervaringen",
  data: any
},
"romy.md": {
  id: "romy.md",
  slug: "romy",
  body: string,
  collection: "ervaringen",
  data: any
},
"saskia.md": {
  id: "saskia.md",
  slug: "saskia",
  body: string,
  collection: "ervaringen",
  data: any
},
},
"producten": {
"aloeveragel-150-ml.md": {
  id: "aloeveragel-150-ml.md",
  slug: "aloeveragel-150-ml",
  body: string,
  collection: "producten",
  data: any
},
"aloeveragel-30-ml.md": {
  id: "aloeveragel-30-ml.md",
  slug: "aloeveragel-30-ml",
  body: string,
  collection: "producten",
  data: any
},
"antioxidantenserum-50-ml.md": {
  id: "antioxidantenserum-50-ml.md",
  slug: "antioxidantenserum-50-ml",
  body: string,
  collection: "producten",
  data: any
},
"argananti-rimpelcremeuva-100-ml.md": {
  id: "argananti-rimpelcremeuva-100-ml.md",
  slug: "argananti-rimpelcremeuva-100-ml",
  body: string,
  collection: "producten",
  data: any
},
"argananti-rimpelcremeuva-50-ml.md": {
  id: "argananti-rimpelcremeuva-50-ml.md",
  slug: "argananti-rimpelcremeuva-50-ml",
  body: string,
  collection: "producten",
  data: any
},
"arganmultirepaircremeuva-50-ml.md": {
  id: "arganmultirepaircremeuva-50-ml.md",
  slug: "arganmultirepaircremeuva-50-ml",
  body: string,
  collection: "producten",
  data: any
},
"balancingdagcreme-50-ml.md": {
  id: "balancingdagcreme-50-ml.md",
  slug: "balancingdagcreme-50-ml",
  body: string,
  collection: "producten",
  data: any
},
"balancingnachtcreme-50-ml.md": {
  id: "balancingnachtcreme-50-ml.md",
  slug: "balancingnachtcreme-50-ml",
  body: string,
  collection: "producten",
  data: any
},
"beengel-150-ml.md": {
  id: "beengel-150-ml.md",
  slug: "beengel-150-ml",
  body: string,
  collection: "producten",
  data: any
},
"bodylotion-150-ml.md": {
  id: "bodylotion-150-ml.md",
  slug: "bodylotion-150-ml",
  body: string,
  collection: "producten",
  data: any
},
"calendula-mandarijncalendula-rijstkiem-100-ml.md": {
  id: "calendula-mandarijncalendula-rijstkiem-100-ml.md",
  slug: "calendula-mandarijncalendula-rijstkiem-100-ml",
  body: string,
  collection: "producten",
  data: any
},
"calendula-mandarijncalendula-rijstkiem-150-ml.md": {
  id: "calendula-mandarijncalendula-rijstkiem-150-ml.md",
  slug: "calendula-mandarijncalendula-rijstkiem-150-ml",
  body: string,
  collection: "producten",
  data: any
},
"calendula-mandarijncalendula-rijstkiem-200-ml.md": {
  id: "calendula-mandarijncalendula-rijstkiem-200-ml.md",
  slug: "calendula-mandarijncalendula-rijstkiem-200-ml",
  body: string,
  collection: "producten",
  data: any
},
"calendula-mandarijncalendula-rijstkiem-200-ml1.md": {
  id: "calendula-mandarijncalendula-rijstkiem-200-ml1.md",
  slug: "calendula-mandarijncalendula-rijstkiem-200-ml1",
  body: string,
  collection: "producten",
  data: any
},
"calendula-mandarijncalendula-rijstkiem-250-ml.md": {
  id: "calendula-mandarijncalendula-rijstkiem-250-ml.md",
  slug: "calendula-mandarijncalendula-rijstkiem-250-ml",
  body: string,
  collection: "producten",
  data: any
},
"calendula-mandarijncalendula-rijstkiem-30-ml.md": {
  id: "calendula-mandarijncalendula-rijstkiem-30-ml.md",
  slug: "calendula-mandarijncalendula-rijstkiem-30-ml",
  body: string,
  collection: "producten",
  data: any
},
"calendula-mandarijncalendula-rijstkiem-350-ml.md": {
  id: "calendula-mandarijncalendula-rijstkiem-350-ml.md",
  slug: "calendula-mandarijncalendula-rijstkiem-350-ml",
  body: string,
  collection: "producten",
  data: any
},
"calendula-mandarijncalendula-rijstkiem-500-ml.md": {
  id: "calendula-mandarijncalendula-rijstkiem-500-ml.md",
  slug: "calendula-mandarijncalendula-rijstkiem-500-ml",
  body: string,
  collection: "producten",
  data: any
},
"dag-ennachtcremein1-50-ml.md": {
  id: "dag-ennachtcremein1-50-ml.md",
  slug: "dag-ennachtcremein1-50-ml",
  body: string,
  collection: "producten",
  data: any
},
"dodezeebadzout-850-ml.md": {
  id: "dodezeebadzout-850-ml.md",
  slug: "dodezeebadzout-850-ml",
  body: string,
  collection: "producten",
  data: any
},
"dodezeemoddermaskerpuur-50-ml.md": {
  id: "dodezeemoddermaskerpuur-50-ml.md",
  slug: "dodezeemoddermaskerpuur-50-ml",
  body: string,
  collection: "producten",
  data: any
},
"dodezeewaterpuur-150-ml.md": {
  id: "dodezeewaterpuur-150-ml.md",
  slug: "dodezeewaterpuur-150-ml",
  body: string,
  collection: "producten",
  data: any
},
"dodezeewaterpuur-30-ml.md": {
  id: "dodezeewaterpuur-30-ml.md",
  slug: "dodezeewaterpuur-30-ml",
  body: string,
  collection: "producten",
  data: any
},
"faceliftingmasker-50-ml.md": {
  id: "faceliftingmasker-50-ml.md",
  slug: "faceliftingmasker-50-ml",
  body: string,
  collection: "producten",
  data: any
},
"facewash-150-ml.md": {
  id: "facewash-150-ml.md",
  slug: "facewash-150-ml",
  body: string,
  collection: "producten",
  data: any
},
"goudsbloembalsem-100-ml.md": {
  id: "goudsbloembalsem-100-ml.md",
  slug: "goudsbloembalsem-100-ml",
  body: string,
  collection: "producten",
  data: any
},
"handcreme-150-ml.md": {
  id: "handcreme-150-ml.md",
  slug: "handcreme-150-ml",
  body: string,
  collection: "producten",
  data: any
},
"lavendelroos-200-ml.md": {
  id: "lavendelroos-200-ml.md",
  slug: "lavendelroos-200-ml",
  body: string,
  collection: "producten",
  data: any
},
"lavendelroos-50-ml.md": {
  id: "lavendelroos-50-ml.md",
  slug: "lavendelroos-50-ml",
  body: string,
  collection: "producten",
  data: any
},
"lavendelrooseucalyptus-mint-100-ml.md": {
  id: "lavendelrooseucalyptus-mint-100-ml.md",
  slug: "lavendelrooseucalyptus-mint-100-ml",
  body: string,
  collection: "producten",
  data: any
},
"lavendelrooseucalyptus-mint-125-ml.md": {
  id: "lavendelrooseucalyptus-mint-125-ml.md",
  slug: "lavendelrooseucalyptus-mint-125-ml",
  body: string,
  collection: "producten",
  data: any
},
"lavendelrooseucalyptus-mint-150-ml.md": {
  id: "lavendelrooseucalyptus-mint-150-ml.md",
  slug: "lavendelrooseucalyptus-mint-150-ml",
  body: string,
  collection: "producten",
  data: any
},
"lavendelrooseucalyptus-mint-25-ml.md": {
  id: "lavendelrooseucalyptus-mint-25-ml.md",
  slug: "lavendelrooseucalyptus-mint-25-ml",
  body: string,
  collection: "producten",
  data: any
},
"lavendelrooseucalyptus-mint-250-ml.md": {
  id: "lavendelrooseucalyptus-mint-250-ml.md",
  slug: "lavendelrooseucalyptus-mint-250-ml",
  body: string,
  collection: "producten",
  data: any
},
"lavendelrooseucalyptus-mint-30-ml.md": {
  id: "lavendelrooseucalyptus-mint-30-ml.md",
  slug: "lavendelrooseucalyptus-mint-30-ml",
  body: string,
  collection: "producten",
  data: any
},
"lavendelrooseucalyptus-mint-350-ml.md": {
  id: "lavendelrooseucalyptus-mint-350-ml.md",
  slug: "lavendelrooseucalyptus-mint-350-ml",
  body: string,
  collection: "producten",
  data: any
},
"lavendelrooseucalyptus-mint-500-ml.md": {
  id: "lavendelrooseucalyptus-mint-500-ml.md",
  slug: "lavendelrooseucalyptus-mint-500-ml",
  body: string,
  collection: "producten",
  data: any
},
"lavendelskinspray-150-ml.md": {
  id: "lavendelskinspray-150-ml.md",
  slug: "lavendelskinspray-150-ml",
  body: string,
  collection: "producten",
  data: any
},
"mediumcalendula-mandarijncalendula-rijstkiem-150-ml.md": {
  id: "mediumcalendula-mandarijncalendula-rijstkiem-150-ml.md",
  slug: "mediumcalendula-mandarijncalendula-rijstkiem-150-ml",
  body: string,
  collection: "producten",
  data: any
},
"mediumlavendelroos-150-ml.md": {
  id: "mediumlavendelroos-150-ml.md",
  slug: "mediumlavendelroos-150-ml",
  body: string,
  collection: "producten",
  data: any
},
"oogcreme-30-ml.md": {
  id: "oogcreme-30-ml.md",
  slug: "oogcreme-30-ml",
  body: string,
  collection: "producten",
  data: any
},
"reinigingslotion-150-ml.md": {
  id: "reinigingslotion-150-ml.md",
  slug: "reinigingslotion-150-ml",
  body: string,
  collection: "producten",
  data: any
},
"reinigingslotion-30-ml.md": {
  id: "reinigingslotion-30-ml.md",
  slug: "reinigingslotion-30-ml",
  body: string,
  collection: "producten",
  data: any
},
"reinigingsmelk-150-ml.md": {
  id: "reinigingsmelk-150-ml.md",
  slug: "reinigingsmelk-150-ml",
  body: string,
  collection: "producten",
  data: any
},
"reinigingsmelk-30-ml.md": {
  id: "reinigingsmelk-30-ml.md",
  slug: "reinigingsmelk-30-ml",
  body: string,
  collection: "producten",
  data: any
},
"rosewaterskinspray-150-ml.md": {
  id: "rosewaterskinspray-150-ml.md",
  slug: "rosewaterskinspray-150-ml",
  body: string,
  collection: "producten",
  data: any
},
"rosewaterskinspray-30-ml.md": {
  id: "rosewaterskinspray-30-ml.md",
  slug: "rosewaterskinspray-30-ml",
  body: string,
  collection: "producten",
  data: any
},
"smallcalendula-mandarijncalendula-rijstkiem-30-ml.md": {
  id: "smallcalendula-mandarijncalendula-rijstkiem-30-ml.md",
  slug: "smallcalendula-mandarijncalendula-rijstkiem-30-ml",
  body: string,
  collection: "producten",
  data: any
},
"smalllavendelroos-30-ml.md": {
  id: "smalllavendelroos-30-ml.md",
  slug: "smalllavendelroos-30-ml",
  body: string,
  collection: "producten",
  data: any
},
"voetenbalsem-150-ml.md": {
  id: "voetenbalsem-150-ml.md",
  slug: "voetenbalsem-150-ml",
  body: string,
  collection: "producten",
  data: any
},
"zonnemelk-100-ml.md": {
  id: "zonnemelk-100-ml.md",
  slug: "zonnemelk-100-ml",
  body: string,
  collection: "producten",
  data: any
},
"zonnemelk-30-ml.md": {
  id: "zonnemelk-30-ml.md",
  slug: "zonnemelk-30-ml",
  body: string,
  collection: "producten",
  data: any
},
},

	};

	type ContentConfig = never;
}
