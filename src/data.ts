import { Book, Review, EventItem, BlogPost } from './types';
import theFaceOfLoveCover from './assets/images/the_face_of_love_cover.png';
import stormsOfLifeCover from './assets/images/storms_of_life_cover.png';
import suelaBaceAuthor from './assets/images/suela_bace_author.jpg';

export const AUTHOR_NAME = "Suela Baçe";
export const AUTHOR_TAGLINE = "STORIES THAT REVEAL. LESSONS THAT LAST.";

export const BOOKS: Book[] = [
  {
    id: "the-face-of-love",
    title: "The Face Of Love",
    subtitle: "A gripping mystery fiction debut of sisterhood, secrets, and the masks we wear to survive.",
    slug: "the-face-of-love",
    coverImage: theFaceOfLoveCover,
    description: "A gripping mystery of sisterhood, secrets, and the masks we wear to survive in a rapidly changing world.",
    longDescription: `Anjesa Rexha's mysterious disappearance amid late-1990s Albania's chaos of financial pyramids and human trafficking shattered her family and her sister Besa. 

One sister eventually surfaces in the United States, the other remains in Albania. Both are shaped by the contradictory power and trauma of their relationships with men. Their paths converge when Jim, an American soldier battling his own demons, enters the life of one sister.

"The Face of Love" is a gripping mystery fiction debut by native Albanian Suela Baçe, spanning countries, timelines, and blending dark humor, sensuality, intense emotions, and heartbreaks. The novel introduces a powerful new voice, illuminating a little-seen history while telling a deeply human story of guilt, resilience, love, and the enduring pull of home.`,
    excerpt: `Chapter 1: The Echo of Pyramids

Besa watched the television screen as the anchor spoke of another financial bank collapsing. Tirana was a city of whispers, but today, those whispers turned into a roar. The crowds gathered on the streets, desperate, furious, clinging to receipt stubs that promised fortunes that had vanished overnight. 

But Besa was not looking at the television. She was staring at her sister's empty bed. Anjesa's beaded necklace was still draped over the mirror, catching the red glare of the sunset filtering through the venetian blinds. On the desk lay an envelope, blank, heavy. 

She opened it with trembling fingers. Inside lay a single, dark red masquerade mask—velvet to the touch, framed with delicate black embroidery. No note, no explanation. Anjesa had always been the sister who wore her heart on her sleeve, yet she was also the sister who kept the key to the basement doors. 

"Where are you, Anje?" she whispered into the empty room, as the distant shouts of the city shook the windowpanes.`,
    purchaseUrl: "https://itascabooks.com/products/the-face-of-love-1",
    amazonUrl: "https://www.amazon.com/Face-Love-Suela-Bace/dp/1948192373/",
    barnesNobleUrl: "https://www.barnesandnoble.com/w/the-face-of-love-suela-bace/1149914673",
    pages: 267,
    publishDate: "March 2026",
    isbn: "978-1-948192-37-8",
    themes: ["Sisterhood", "Albanian Civil Crisis", "Trauma & Recovery", "Deception & Truth", "Immigration"]
  },
  {
    id: "storms-of-life",
    title: "Storms of Life",
    subtitle: "A powerful story of pain, resilience, and the wisdom found through life's storms.",
    slug: "storms-of-life",
    coverImage: stormsOfLifeCover,
    description: "A powerful story of pain, resilience, and the wisdom found through life's inevitable tempests.",
    longDescription: `Inspired by the emotional depth of traditional Albanian wisdom, "Storms of Life" explores the tumultuous journey of healing from profound loss and reclaiming one's inner voice. 
    
Setting its canvas against both the rugged, timeless highlands of Albania and the modern emotional struggles of survival, the novel delves deep into what it means to hold onto oneself when everything else is torn away by the gales of fate. 

Centering around a woman who stands starkly against her struggles, much like a solitary tree weathering a mountain storm, this narrative captures the breathtaking beauty of human endurance. It is a profound, beautifully written exploration that asks us to reflect upon our past, find strength in our scars, and appreciate the present.

To purchase or for further inquiries, please reach out to the author at suelabotime@gmail.com`,

    excerpt: `Prelude: The Flash of Light

They say the rain in the northern highlands cleanses the soil but leaves the heart wet. I stood on the craggy ledge, watching the sky split in two. The lightning did not scare me anymore. When you have lived through the collapse of your entire world, a spark in the dark is a welcome sight. It shows you the path, if only for a fraction of a second.

"Today's day is history, tomorrow's day is a mystery," my grandmother used to whisper when the winter gales shook the rafters of our stone kullë. Learn to appreciate what you have in front of you as time will teach you how to appreciate what you had. 

As the wind howled across the rocky crags, I finally understood her voice. The storm was not a punishment. It was a shedding of old skins, a cold reminder that the roots which grow in rocky ground must dig deeper to survive. I tightened my coat, took a breath of the crisp, electrified air, and stepped forward into the downpour.`,
    pages: 111,
    publishDate: "January 2020",
    isbn: "978-0-578-74759-0",
    themes: ["Resilience", "Highland Traditions", "Generational Wisdom", "Healing", "Nature Symbolism"]
  }
];

export const BIOGRAPHY = {
  shortBio: "Suela Baçe is an Albanian author whose stories explore love, loss, resilience, and the human spirit. Her novels shine a light on the strength it takes to survive—and the courage it takes to love again.",
  longBio: `Suela Baçe is a powerful, evocative voice in contemporary fiction, drawing deeply from her Albanian heritage and her unique perspective on migration, identity, and the complexity of human relationships. Born and raised in Albania during periods of profound political and social transformation, she witnessed firsthand the resilience of individuals and families negotiating historical crises.

Her literary debut, "The Face of Love," captures the dramatic realities of late-1990s Albania, blending dark mystery, sensuality, and historical tragedy with high-stakes emotional depth. Suela's work is characterized by its unflinching exploration of trauma, the complex bonds of sisterhood, and the delicate facades we construct to protect ourselves and those we love.

Now writing and speaking internationally, Suela seeks to bring little-seen Balkan histories and deeply human stories of survival, healing, and cultural voice into the global spotlight. She bridges the gap between traditional wisdom, such as the Albanian folk proverbs of her grandmother, and contemporary storytelling that speaks immediately to the heart.`,
  portraitImage: suelaBaceAuthor
};