import Image1 from './Image/HeroImg1.png'
import Image2 from './Image/HeroImg2.png'

import Donghua_Banner from './Image/Donghua_Banner.png'
import Name_Banner from './Image/Name_Banner.png'
import BigBanner from './Image/BigBanner.jpeg'

import LiMuwanPortrait from './Image/Li_Muwan.jpeg'
import SituNanPortrait from './Image/Situ_Nan.jpeg'
import WangZhuoPortrait from './Image/Wang_Zhuo.jpeg'

import YoungWangLin from './Image/MortalWangLing.jpeg'
import WhiteHairWangLin from './Image/RuthlessWangLing.png'
import AncientGodWangLin from './Image/AnicentGodE.jpeg'
import EssenceMasterWangLin from './Image/VoidMasterImg.jpg'
import HeavenTramplerWangLin from './Image/EightWangLing.jpeg'

import BeadImg from './Image/HeavenDBead.jpeg'
import BannerImg from './Image/Soul_Banner.jpeg'
import SwordImg from './Image/FairySword.jpeg'
import GodArmor from './Image/GodArmor.jpeg'


export const AnimeImage = {
    Image1,
    Image2,
    Donghua_Banner,
    Name_Banner,
    BigBanner,
}

// ==========================================
// CULTIVATION LORE DATA
// ==========================================
export const CultivationLoreData = [
    {
        stepName: "The First Step (Mortal to Immortal)",
        realms: [
            { level: "Qi Condensation", type: "Mortal Base", desc: "Absorbing environmental spiritual energy into the meridians." },
            { level: "Foundation Establishment", type: "Mortal Base", desc: "Compressing liquid Qi to form a pristine immortal foundation." },
            { level: "Core Formation", type: "Mortal Base", desc: "Condensing the liquid Qi into a solid, spinning Golden Core." },
            { level: "Nascent Soul", type: "Immortal Ascension", desc: "The core shatters to form an immortal soul infant within the dantian." },
            { level: "Soul Formation", type: "Immortal Ascension", desc: "Gaining comprehension of the heavens and grasping a personal domain." },
            { level: "Soul Transformation", type: "Immortal Ascension", desc: "Feeding the domain to transform mortal soul energy into divine vital energy." },
            { level: "Ascendant", type: "Peak Mortal", desc: "The absolute peak of the First Step, preparing to break the mortal boundary." },
            { level: "Illusionary Yin & Corporeal Yang", type: "Boundary Checkpoint", desc: "A transitional checkpoint realm balancing the duality of soul and physical form." }
        ]
    },
    {
        stepName: "The Second Step (Dao Seekers & Heaven Breakers)",
        realms: [
            { level: "Nirvana Scourge", type: "Tribulation Realm", desc: "Surviving celestial tribulations to temper the physical body and divine soul." },
            { level: "Nirvana Cleansing", type: "Tribulation Realm", desc: "Purifying karma and shedding mortal filth to integrate fully with global Dao laws." },
            { level: "Nirvana Shatterer", type: "Law Master", desc: "Shattering one's internal cosmic boundaries to control complete laws of the universe." }
        ]
    },
    {
        stepName: "The Third Step (Essence Masters & Gods)",
        realms: [
            { level: "Life & Death Nirvanic Checkpoint", type: "Dao Origin", desc: "Peering into the fundamental origins of reincarnation and mortality." },
            { level: "Heaven's Blight (1st to 5th)", type: "Primordial Decay", desc: "Surviving five horrific decay tribulations of the body, soul, and mind." },
            { level: "Spirit Void", type: "Void Realm", desc: "Fusing with the natural essence of outer space and celestial realities." },
            { level: "Arcane Void", type: "Void Realm", desc: "Bending the structural fabrics of void matter to cast absolute domains." },
            { level: "Void Tribulation", type: "Essence Trial", desc: "Enduring devastating spatial trials to convert regular cultivation into Dao Essence." },
            { level: "Grand Supreme (Empyrean God)", type: "Galactic Sovereign", desc: "Standing as an unbeatable ancient powerhouse throughout entire galaxies." }
        ]
    },
    {
        stepName: "The Fourth Step (The Boundless Ultimate)",
        realms: [
            { level: "Heaven Trampling", type: "Boundless Supremacy", desc: "The ultimate realm achieved by Wang Lin. Crushing the celestial laws underfoot to achieve absolute freedom." }
        ]
    }
];

// ==========================================
// CHARACTER RELATIONSHIP DATA
// ==========================================

export const RelationshipData = [
    {
        name: "Li Muwan",
        role: "True Love / Wife",
        bond: "Wang Lin's deepest emotional anchor. He spent hundreds of years defying heaven and resurrecting her soul.",
        image: LiMuwanPortrait // Link your asset here
    },
    {
        name: "Situ Nan",
        role: "Mentor / Master",
        bond: "The soul inside the mysterious Heaven Defying Bead. Taught Wang Lin the brutal realities of the cultivation world.",
        image: SituNanPortrait // Link your asset here
    },
    {
        name: "Wang Zhuo",
        role: "Cousin / Rival",
        bond: "Started as an arrogant family rival, but their relationship evolved through tragic clan massacres.",
        image: WangZhuoPortrait // Link your asset here
    }
];

// ==========================================
// SKILLS & ABILITIES DATA
// ==========================================

export const SkillsData = [
    {
        name: "Ji Realm (Slaughter Divine Flash)",
        type: "Innate Realm Spell",
        desc: "A mutation power born from absolute vengeance. It allows Wang Lin to instantly destroy the soul of any cultivator at or below his level with a single glance.",
        image: AnimeImage.JiRealmBg // Add an epic background or aura snippet image
    },
    {
        name: "Underworld River Spell",
        type: "Divine Ability",
        desc: "Summons the freezing waters of the underworld, creating a massive torrent of negative energy capable of eroding magical treasures, physical bodies, and defensive barriers."
    },
    {
        name: "Dao of Life and Death",
        type: "Dao Comprehension",
        desc: "Wang Lin's signature domain. It allows him to manipulate the boundaries of mortality, eventually evolving into his absolute Karma and True Essence paths.",
        image: AnimeImage.DaoDomainBg
    },
    {
        name: "Ancient God Tactics",
        type: "Body Refinement Technique",
        desc: "Inherited from Tu Si, a 8-star Ancient God. It reconstructs Wang Lin's physical body into a colossal cosmic entity, granting him catastrophic physical strength and rapid planetary-tier regeneration."
    },
    {
        name: "Finger of Death",
        type: "Offensive Spell",
        desc: "Concentrates all of Wang Lin's cold, murderous intent and spiritual power into a single finger tip, firing a dark beam that completely decays the target's life force upon contact."
    },
    {
        name: "Flowing Time",
        type: "Time Manipulation Spell",
        desc: "A spell that warps time around the target, forcing them to rapidly age thousands of years in seconds or slowing down enemy movements to a complete crawl."
    }
];

// ==========================================
// WEAPONS & ARTIFACTS DATA
// ==========================================

export const WeaponsData = [
    {
        name: "Heaven Defying Bead",
        type: "Chaos-Tier Artifact",
        desc: "A mysterious, realm-crossing treasure that alters time dilation inside its internal space, allowing Wang Lin to cultivate for decades while only days pass outside.",
        image: BeadImg // Add your image keys from assets here!
    },
    {
        name: "Golden Fairy Sword",
        type: "Flying Sword / Soul Bound",
        desc: "A deceptively rusty iron sword infused with Wang Lin's brutal Ji Realm energy, capable of shattering top-tier defensive magical barriers effortlessly.",
        image: SwordImg
    },
    {
        name: "One-Billion Soul Banner",
        type: "Malicious Ghost Artifact",
        desc: "Plundered from the Soul Refining Sect. It holds countless powerful cultivator souls, allowing him to unleash devastating tsunamis of vengeful spiritual entities.",
        image: BannerImg
    },
    {
        name: "Ancient God Leather Armor",
        type: "Defensive Relic",
        desc: "Crafted directly from the preserved scales and hide of a high-ranked royal ancient god. It absorbs massive cosmic impacts, granting supreme raw defense matching his physical refinement paths.",
        image: GodArmor
    }
];

// ==========================================
// IDENTITY EXISTENTIAL STATUS DATA
// ==========================================

export const StatusTrackerData = [
    {
        era: "Mortal Beginnings",
        title: "The Untalented Youth",
        status: "Born with zero spiritual talent, constantly rejected by testing elders. Relied entirely on absolute willpower and the sudden discovery of the Heaven Defying Bead.",
        image: YoungWangLin // Link your early mortal asset here
    },
    {
        era: "The Blood Path Ascension",
        title: "The Ruthless White-Haired Fiend",
        status: "Following the brutal destruction of his clan, Wang Lin developed a cold, merciless heart, systematically wiping out entire lineages and awakening the Ji Realm.",
        image: WhiteHairWangLin // Link your white-haired asset here
    },
    {
        era: "Ancient Legacy Era",
        title: "The Royal 8-Star Ancient God",
        status: "Inherited the memories and bloodline of the ancient god Tu Si. Grew to a massive physical stature capable of crushing whole planets with a single slap.",
        image: AncientGodWangLin // Link your ancient god asset here
    },
    {
        era: "Ultimate Dao Manifestation",
        title: "Lord of the Void & Essence Master",
        status: "Gained true understanding of life, death, karma, and essence lines. No longer restricted by regular laws, he began establishing independent dimensional sectors.",
        image: EssenceMasterWangLin
    },
    {
        era: "The End of Heaven",
        title: "The Fourth-Step Heaven Trampler",
        status: "Wang Lin's absolute peak state. He completely breaks away from the control of cosmic constraints, stepping directly over the celestial boundaries to wander the boundless multiverse.",
        image: HeavenTramplerWangLin
    }
];