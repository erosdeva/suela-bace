import { Book, Review, EventItem, BlogPost } from './types';

export const AUTHOR_NAME = "Suela Baçe";
export const AUTHOR_TAGLINE = "STORIES THAT REVEAL. LESSONS THAT LAST.";

export const BOOKS: Book[] = [
  {
    id: "the-face-of-love",
    title: "The Face Of Love",
    subtitle: "A gripping mystery fiction debut of sisterhood, secrets, and the masks we wear to survive.",
    slug: "the-face-of-love",
    coverImage: "/src/assets/images/the_face_of_love_cover_1782044649688.jpg",
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
    pages: 312,
    publishDate: "November 2023",
    isbn: "978-1-950453-84-1",
    themes: ["Sisterhood", "Albanian Civil Crisis", "Trauma & Recovery", "Deception & Truth", "Immigration"]
  },
  {
    id: "storms-of-life",
    title: "Storms of Life",
    subtitle: "A powerful story of pain, resilience, and the wisdom found through life's storms.",
    slug: "storms-of-life",
    coverImage: "/src/assets/images/storms_of_life_cover_1782044660879.jpg",
    description: "A powerful story of pain, resilience, and the wisdom found through life's inevitable tempests.",
    longDescription: `Inspired by the emotional depth of traditional Albanian wisdom, "Storms of Life" explores the tumultuous journey of healing from profound loss and reclaiming one's inner voice. 
    
Setting its canvas against both the rugged, timeless highlands of Albania and the modern emotional struggles of survival, the novel delves deep into what it means to hold onto oneself when everything else is torn away by the gales of fate. 

Centering around a woman who stands starkly against her struggles, much like a solitary tree weathering a mountain storm, this narrative captures the breathtaking beauty of human endurance. It is a profound, beautifully written exploration that asks us to reflect upon our past, find strength in our scars, and appreciate the present.`,
    excerpt: `Prelude: The Flash of Light

They say the rain in the northern highlands cleanses the soil but leaves the heart wet. I stood on the craggy ledge, watching the sky split in two. The lightning did not scare me anymore. When you have lived through the collapse of your entire world, a spark in the dark is a welcome sight. It shows you the path, if only for a fraction of a second.

"Mëso të vlerësosh atë që ke përpara se koha do të mësojë të vlerësosh atë që kishe," my grandmother used to whisper when the winter gales shook the rafters of our stone kullë. Learn to appreciate what you have in front of you as time will teach you how to appreciate what you had. 

As the wind howled across the rocky crags, I finally understood her voice. The storm was not a punishment. It was a shedding of old skins, a cold reminder that the roots which grow in rocky ground must dig deeper to survive. I tightened my coat, took a breath of the crisp, electrified air, and stepped forward into the downpour.`,
    pages: 284,
    publishDate: "May 2025",
    isbn: "978-1-950453-99-5",
    themes: ["Resilience", "Highland Traditions", "Generational Wisdom", "Healing", "Nature Symbolism"]
  }
];

export const BIOGRAPHY = {
  shortBio: "Suela Baçe is an Albanian author whose stories explore love, loss, resilience, and the human spirit. Her novels shine a light on the strength it takes to survive—and the courage it takes to love again.",
  longBio: `Suela Baçe is a powerful, evocative voice in contemporary fiction, drawing deeply from her Albanian heritage and her unique perspective on migration, identity, and the complexity of human relationships. Born and raised in Albania during periods of profound political and social transformation, she witnessed firsthand the resilience of individuals and families negotiating historical crises.

Her literary debut, "The Face of Love," captures the dramatic realities of late-1990s Albania, blending dark mystery, sensuality, and historical tragedy with high-stakes emotional depth. Suela's work is characterized by its unflinching exploration of trauma, the complex bonds of sisterhood, and the delicate facades we construct to protect ourselves and those we love.

Now writing and speaking internationally, Suela seeks to bring little-seen Balkan histories and deeply human stories of survival, healing, and cultural voice into the global spotlight. She bridges the gap between traditional wisdom, such as the Albanian folk proverbs of her grandmother, and contemporary storytelling that speaks immediately to the heart.`,
  portraitImage: "/src/assets/images/suela_bace_author_1782045279239.jpg"
};

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    bookId: "the-face-of-love",
    author: "Elena Vasili",
    role: "Literary Critic, Tirana Reviews",
    rating: 5,
    text: "An absolute masterclass in suspense and historical authenticity. Baçe weaves the painful history of late-90s Albania with a deeply touching story of sisterhood that lingers in your mind weeks after finishing.",
    date: "December 2023",
    isVerified: true
  },
  {
    id: "rev-2",
    bookId: "the-face-of-love",
    author: "Richard K.",
    role: "Reader & Book Blogger",
    rating: 5,
    text: "The pairing of Jim's struggles with Besa's grief is breathtaking. The writing is passionate, poetic, and raw. A magnificent debut!",
    date: "January 2024",
    isVerified: true
  },
  {
    id: "rev-3",
    bookId: "storms-of-life",
    author: "Prof. Ardian Q.",
    role: "Balkan Culture & Literature Journal",
    rating: 5,
    text: "Storms of Life is a cinematic triumph. The author utilizes the natural landscape of the Albanian Highlands as a living, breathing mirror of the soul's inner tempests. The incorporation of native proverbs gives it extraordinary cultural weight.",
    date: "June 2025",
    isVerified: false
  },
  {
    id: "rev-4",
    bookId: "storms-of-life",
    author: "Grace Peterson",
    role: "Avenue Literary Magazine",
    rating: 4,
    text: "A beautiful, evocative read about finding peace inside emotional chaos. Suela Baçe has solidified her role as a must-read author for lovers of profound international fiction.",
    date: "May 2025",
    isVerified: true
  }
];

export const EVENTS: EventItem[] = [
  {
    id: "evt-1",
    title: "Virtual Author Reading & Q&A",
    date: "2026-07-15",
    time: "7:00 PM EST",
    location: "Zoom Interactive Webinar",
    type: "Virtual",
    description: "Join Suela for a live reading of selected chapters from 'Storms of Life', followed by an open discussion about Albanian folklore and the creative writing process.",
    linkText: "Register for Zoom Link"
  },
  {
    id: "evt-2",
    title: "Annual Tirana Cultural Book Fair",
    date: "2026-09-10",
    time: "2:00 PM - 5:00 PM CET",
    location: "Palace of Congresses, Tirana",
    type: "In-Person",
    description: "Suela returns to Albania for a guest author slot. Meet her in person, get your copies of both books signed, and attend her panel discussion 'Unveiling Hidden Crises in Fiction'.",
    linkText: "Fair Details & Tickets"
  },
  {
    id: "evt-3",
    title: "An Evening of Balkan Literature",
    date: "2026-10-22",
    time: "6:30 PM EST",
    location: "Center for Book Arts, New York, NY",
    type: "Reading",
    description: "A collaborative panel featuring three prominent Balkan-diaspora authors discussing identity, trauma, and immigration in contemporary literature.",
    linkText: "RSVP for Free Seat"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "The Symbolism of the Mask: Exploring Deception and Survival",
    excerpt: "In 'The Face of Love', the masquerade mask serves as a central emblem. Why do we hide our wounds from those we love, and what happens when the mask eventually cracks?",
    content: `When I set out to write "The Face of Love," the central theme of 'the mask' stood at the core of my creative vision. In the novel, a tangible Venetian mask links Besa and her vanished sister, Anjesa. But the actual mask is far deeper—it is internal. 

In late-1990s Albania, survival wasn't just a physical hurdle; it was psychological. Families faced financial ruin, communities fragmented under the pressure of pyramid schemes, and young women were targeted by predators. To withstand this structural trauma, individuals did what human beings have done for millennia: they designed masks. 

We wear masks of strength, masking our terror; masks of indifference to guard our sensitivities; and masks of routine to cover our grief. But as Besa discovers, while a mask might protect you from the immediate gaze of a harsh world, it also prevents you from being truly seen. True healing commences only when the fingers are brave enough to lift the velvet edge and expose the naked scars beneath.`,
    date: "March 14, 2026",
    readTime: "5 min read",
    tag: "Writing & Symbolism"
  },
  {
    id: "blog-2",
    title: "The Wisdom of My Grandmother's Proverbs",
    excerpt: "Exploring the powerful Albanian folk sayings that drive 'Storms of Life' and provide direct guidance for navigating the challenges of modern life.",
    content: `Growing up in Albania, language was not just a tool for conversation; it was a tapestry of heritage. My grandmother spoke in proverbs—rhythmic, brief declarations that carried the weight of hundreds of winters.

One particular proverb guided the architectural focus of my latest book, "Storms of Life": 
"Mëso të vlerësosh atë që ke përpara se koha do të mësojë të vlerësosh atë që kishe" (Learn to appreciate what you have in front of you as time will teach you how to appreciate what you had).

In our fast-paced modern spaces, we are constantly leaning into the future, planning our next conquests, or looking backward in regret. My grandmother's proverb is an anchor. It reminds us that peace is not found in the resolution of the storm, but in acknowledging the strength of the branch that stands high right now. Traditional wisdom isn't obsolete; it is a vital life raft for the contemporary soul.`,
    date: "May 10, 2026",
    readTime: "4 min read",
    tag: "Heritage"
  }
];
