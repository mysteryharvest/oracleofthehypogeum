const imageData = [
  {
    fileName: 'achocard.png',
    description: 'Stability. A firm foundation. Sentience within the inanimate.'
  },
  {
    fileName: 'aircard.png',
    description: 'The root of Air. Intellect. Meaning depends on card context.'
  },
  {
    fileName: 'animalcard.png',
    description: 'Something obvious.'
  },
  {
    fileName: 'animalculecard.png',
    description: 'Raw, unfettered magic. A minuscule change without which a system would collapse. Transformation/inner alchemy.'
  },
  {
    fileName: 'anthuorcard.png',
    description: 'Wild energy and potential, but the kind that the diviner has no control over. A system which persists in the face of great turmoil or trouble. The origin of a thing or situation. Amplifies the effect of other cards, except monsters, which are automatically negated by Anthuor.'
  },
  {
    fileName: 'barbarocard.png',
    description: 'Power, but powerful ambiguity. The end of a system, caused not by outright destruction, but by the inability of some party to act. A kind of temporal malleability.'
  },
  {
    fileName: 'buorthcard.png',
    description: 'Heaven. Wisdom to look for answers from ancestors. A perfected state. Completion.'
  },
  {
    fileName: 'cavecard.png',
    description: 'Going deep, into places not usually visited, that become sanctuaries. Ancestral contributions that require thought to unravel. Safety, unless a bear’s in there. Sometimes a literal cave.'
  },
  {
    fileName: 'eggcard.png',
    description: ' A gift given by the final survivors of an ancient culture. Something valuable found in the wilderness. The Golden Gift of the Sasquatch. A double-yolked egg.'
  },
  {
    fileName: 'firecard.png',
    description: 'The root of Fire. Passion. Meaning depends on card context.'
  },
  {
    fileName: 'forestcard.png',
    description: 'Growth. Community. Interdependence.'
  },
  {
    fileName: 'fungicard.png',
    description: 'A vast network underneath something mundane. The visible aspects can be toxic, delicious, or enlightening. Communication across a long distance, either space or time.'
  },
  {
    fileName: 'humancard.png',
    description: 'The querent, specifically. Home, community. A default state.'
  },
  {
    fileName: 'insectcard.png',
    description: 'Small, considered motions that don’t waste energy. Small changes at the onset gradually turning into huge changes. A tiny representative of a large force that could easily destroy the planet if they could only get organized.'
  },
  {
    fileName: 'lifeforcecard.png',
    description: ' Inner vitality/strength. A shared power. Art. Something available to all. Health, wellness.'
  },
  {
    fileName: 'lightcard.png',
    description: 'Purifying exposure. An ultimate energy transferred from the sun, through a plant, into a person. A directed source of inspiration (i.e. from something external acting as a spotlight).'
  },
     {
    fileName: 'magician-akker-card.png',
    description: 'The Giver. Holly and Ivy. Akker gives gifts. Holly and Ivy– both so prolific that in some places they’re considered invasive– have long been associated with protection against malevolent influences. Often, when looking at plants, one only considers the physical benefits: how can I eat this or how can this be used as medicine? Holly and Ivy, however, provide gifts which aren’t so obvious, as does Akker.'
  },
  {
    fileName: 'magician-azer-card.png',
    description: 'The Hilarious. Wonga Wonga and Thistle. Azer is freaking hilarious. As opposed to joy, hilarity may be more fleeting, but the absolute release of sheer comedy is immensely helpful for the querent. Wonga Wonga (Pandorea pandorana) isn’t inherently funny– the querent has to define what makes it funny. Thistle is dangerous, but in the proper hands, is delicious, and artichoke flavored.'
  },
  {
    fileName: 'magician-mether-card.png',
    description: 'The Bountiful. Gourd and Locust. Mether helps the querent recognize and benefit from all positive currents flowing in her direction. The Bounty in question might not be physical, and may be slowly accumulating, but it’s definitely happening. Like the gourd, Mether not only can be used in many ways, but when left in one’s compost, will produce fertile soil and sometimes additional gourds. And, like the locust, Mether increases the fertility of any soil into which it is planted.'
  },
  {
    fileName: 'magician-pip-card.png',
    description: 'The Joyous. Poison Ivy and Hawthorn. Pip! What does Poison Ivy have to do with Joy? To the Quatrians, poison ivy represented joy when one finally stopped itching! Pip is the kind of “joy” one experiences when something particularly vexing has been overcome. Hawthorn, sacred to Anthuor, brings joy in both winter (when the berries appear, colorful and useful as a medicine for the heart), but also in spring when the white flowers snow upon children.'
  },
  {
    fileName: 'magician-sezar-card.png',
    description: 'The Wonderful. Nightshade and Devil’s Club.  Sezar defeats Monsters by disguising itself as a toxin, which can be neutralized if the querent knows how. Black Nightshade (Solanum nigrum), in Western culture, is a poison according to “common knowledge,” so toxic it’s destroyed and befouled as often as possible. However, Solanum nigrum is actually completely safe to eat when identified correctly. It’s made into pies, cooked as greens, and generally just fine. Devil’s Club, a horrifying collection of spikes and thorns, is a ginseng relative whose roots are powerful medicine. When initiated into Sezar’s mysteries, one cannot help but experience success.'
  },
  {
    fileName: 'magician-tan-card.png',
    description: ' The Kind. Honeysuckle and Nettle. Tan means kindness both received and delivered. Honeysuckle cannot be eaten, but the scent and the flavor produced by its flowers represent the kind of kindness the querent will receive, or give. Nettle is a useful plant, but only after one learns how to safely use it.'
  },
  {
    fileName: 'magician-tether-card.png',
    description: 'The Calm. Sweet Pea and Rose. Tether provides the kind of simple calmness one experiences just before falling asleep. This Magician is, perhaps, the most peaceful of the Magicians. Tether can represent happiness in love and relationships. As with Sweet Pea and Rose, even though the flowers wither/fall, the plants in question produce delightful and useful fruit.'
  },
  {
    fileName: 'magician-yan-card.png',
    description: 'The Temperate. Grape and Blackberry.  Yan, the First Magician, is kind and mild. Yan deescalates bad situations, and provides sweetness and contentment. Grape is cultivated, as are Yan’s influences, but Blackberry, often invasive, represents Yan’s wilder side. Blackberries heal the scarred soil beneath, and grapes are sweet, refreshing, and delicious.'
  },
  {
    fileName: 'maidencard.png',
    description: 'Like Hermes, Messenger of the Gods, the Maiden acts as a conduit between the Hypogeum and “reality.” And, like Artemis, the Maiden is both the act of questioning (hunting), and the results thereof (the hunted).'
  },
  {
    fileName: 'memlencard.png',
    description: 'The session must immediately be closed to avoid attracting the attention of unwanted negative energies and entities with questionable intent. A new session may be started at least one hour after the Memlen appear.'
  },
  {
    fileName: 'monster-djerr-card.png',
    description: 'Ruler of Waste/Pollution. Bird-headed. Any surplus for which the querent doesn’t have a plan becomes pollution. Djerr celebrates overages: too much, too fast, too intense. The Bird-headed Monster is an avalanche. How do you survive an avalanche?'
  },
  {
    fileName: 'monster-djuwet-card.png',
    description: 'Ruler of Anxiety. Hare-headed. Like the hare on the moors, anxiety lifts its head above the grasses and then bolts. Djuewet wants the querent to run away as fast as possible.'
  },
  {
    fileName: 'monster-gneuth-card.png',
    description: 'Ruler of Stench. Sow-headed. Stench of the kind represented by Gneuth is like just a tiny amount of dog poop on your shoe. You’ll never find it, and nobody will point it out to you. You need to either keep cleaning the shoes or just get new ones.'
  },
  {
    fileName: 'monster-gnew-card.png',
    description: 'Ruler of Smoke. Wolf-headed. Smoke not only obfuscates; it also makes breathing difficult. Gnew is an all-pervasive, general nastiness.'
  },
  {
    fileName: 'monster-kehket-card.png',
    description: 'Ruler of Shame/Guilt. Serpent-headed. Shame and guilt are insinuated into the querent’s by Kehket. This is one of the worst Monsters, as it can infect even positive experience.'
  },
  {
    fileName: 'monster-kekew-card.png',
    description: 'Ruler of Spite. Frog-headed. Spite directed at the querent doesn’t have to have a reason. Brekoax revels in spite for spite’s sake, and the querent shouldn’t look for a ‘reason’ for a bad situation.'
  },
  {
    fileName: 'monster-wehneh-card.png',
    description: 'Ruler of Strife. Hyena-headed. Strife happens. Wehneh makes the strife within the querent’s life more meaningful and significant. Wehneh also waits to feed off of the remains of whatever strife has caused.'
  },
  {
    fileName: 'monster-weweu-card.png',
    description: 'Ruler of Drudgery. Scorpion-headed. Work that doesn’t matter is like holding a scorpion that just keeps stinging you over and over. Weweu is the “protestant work ethic”– meaningless work that doesn’t benefit the querent.'
  },
  {
    fileName: 'mountaincard.png',
    description: 'The most nakedly auspicious symbol as concerns wealth, wellness, the body, etc. An increase in the flow of positive energies into the querent’s life.'
  },
  {
    fileName: 'musiciancard.png',
    description: 'A major change within the power of the querent to make.'
  },
  {
    fileName: 'mysterycard.png',
    description: 'An initiation. Confronting one’s darkness in order to understand life and death. Descending into the Hypogeum via the Imaginal Realm and finding an answer.'
  },
  {
    fileName: 'plaincard.png',
    description: 'Exposure. Monotony that one can escape by viewing the details.'
  },
  {
    fileName: 'plantcard.png',
    description: 'Knowledge hidden in plain sight. A slow, contemplative process with big rewards.'
  },
  {
    fileName: 'shadowcard.png',
    description: 'Darkness for sun lovers, but cool shade for those who thrive in it.'
  },
  {
    fileName: 'silencecard.png',
    description: 'Silence.'
  },
  {
    fileName: 'soilcard.png',
    description: 'The root of Earth. Physicality. Meaning depends on card context.'
  },
  {
    fileName: 'stonebookcard.png',
    description: 'A new story. A shift of the timeline. Reshuffle the deck and begin a new reading.'
  },
  {
    fileName: 'timehuntercard.png',
    description: 'Something from the querent’s past—or future!—manifests. At the most mundane level, bureaucracy.'
  },
  {
    fileName: 'vernowcard.png',
    description: 'Unexpected trouble. Worshiped as a deity by the Monsters. Automatically negates the magicians. Reverses the effect of other cards, or it intensifies their most “challenging” currents.'
  },
  {
    fileName: 'watercard.png',
    description: 'The root of Water. Emotion. Meaning depends on card context.'
  },
  {
    fileName: 'wormwoodcard.png',
    description: ' A resetting of the landscape. Digging up the garden at the end of the season. Destruction, but in order to restore.'
  }
];

const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const description1 = document.getElementById('description1');
const description2 = document.getElementById('description2');
const generateBtn = document.getElementById('generate-btn');

function generateImages() {
    let randomIndex1 = Math.floor(Math.random() * imageData.length);
    let randomIndex2 = Math.floor(Math.random() * imageData.length);

    while (randomIndex1 === randomIndex2) {
        randomIndex2 = Math.floor(Math.random() * imageData.length);
    }

    image1.src = imageData[randomIndex1].fileName;
    image2.src = imageData[randomIndex2].fileName;
    description1.textContent = imageData[randomIndex1].description;
    description2.textContent = imageData[randomIndex2].description;
}

generateBtn.addEventListener('click', generateImages);

// Initial image generation
generateImages();
