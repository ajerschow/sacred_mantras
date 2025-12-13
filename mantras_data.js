// decide whether should make it into json format (could not hurt)
const mantrasData = [
{
        type: "Invocation to Patanjali",
        verseIndex: "",
        fullTransliteration: "Yogena cittasya padena vācāṃ malaṃ śarīrasya ca vaidyakena | Yopākarottaṃ pravaraṃ munīnāṃ patañjaliṃ prāñjalirānato’smi ||",
        fullTranslation: "I bow with folded hands to Patanjali, the greatest of sages, who removed the impurities of the mind through Yoga, of speech through Grammar, and of the body through Medicine.",
        words: [
            { 
                text: "योगेन", 
                transliteration: "yogena", 
                translation: "By Yoga", 
                hindi: "योग के द्वारा", 
                etym: "Root: yoga (योग). Grammar: Instrumental Singular (Tritiya Vibhakti). Usage: 'Through/By means of Yoga'.", 
                note: "Refers to the Yoga Sutras for purifying the mind." 
            },
            { 
                text: "चित्तस्य", 
                transliteration: "cittasya", 
                translation: "Of the mind", 
                hindi: "चित्त का", 
                etym: "Root: citta (चित्त). Grammar: Genitive Singular (Shasthi Vibhakti). Usage: 'Belonging to the consciousness'.", 
                note: "Citta includes mind, intellect, and ego." 
            },
            { 
                text: "पदेन", 
                transliteration: "padena", 
                translation: "By Grammar/Words", 
                hindi: "पद (व्याकरण) के द्वारा", 
                etym: "Root: pada (पद). Grammar: Instrumental Singular. Lit: 'By the word/foot'. Refers to Vyakarana (Grammar).", 
                note: "Refers to the Mahabhashya (commentary on grammar) for purifying speech." 
            },
            { 
                text: "वाचाम्", 
                transliteration: "vācām", 
                translation: "Of speech", 
                hindi: "वाणी की", 
                etym: "Root: vāc (वाच्). Grammar: Genitive Plural (Shasthi Vibhakti).", 
                note: "Impurity of speech is removed by correct grammar." 
            },
            { text: "<br>", transliteration: "<br>"},
            { 
                text: "मलम्", 
                transliteration: "malam", 
                translation: "Impurity", 
                hindi: "मल / दोष", 
                etym: "Root: mala (मल). Grammar: Accusative Singular (Dvitiya Vibhakti). Object of 'removed'.", 
                note: "The dirt or defects of the three levels of human existence." 
            },
            { 
                text: "शरीरस्य", 
                transliteration: "śarīrasya", 
                translation: "Of the body", 
                hindi: "शरीर का", 
                etym: "Root: śarīra (शरीर). Grammar: Genitive Singular (Shasthi Vibhakti).", 
                note: "-" 
            },
            { 
                text: "च", 
                transliteration: "ca", 
                translation: "And", 
                hindi: "और", 
                etym: "Indeclinable conjunction.", 
                note: "-" 
            },
            { 
                text: "वैद्यकेन", 
                transliteration: "vaidyakena", 
                translation: "By Medicine", 
                hindi: "वैद्यक (आयुर्वेद) के द्वारा", 
                etym: "Root: vaidyaka (वैद्यक). Grammar: Instrumental Singular. Refers to Ayurveda.", 
                note: "Patanjali is traditionally credited with writing the Charaka Samhita (or a commentary on it) to purify the body." 
            },
            { text: "|", transliteration: "|"},
            { text: "<br>", transliteration: "<br>"},
            { 
                text: "योपाकरोत्तम्", 
                transliteration: "yopākarottam", 
                translation: "Who removed him", 
                hindi: "जिन्होंने दूर किया उसको", 
                etym: "Sandhi: yaḥ (यः) + apākarot (अपाकरोत्) + tam (तम्). 1. yaḥ: 'Who' (Nom. Sg). 2. apākarot: 'Removed' (Verb, Imperfect Past, 3rd Person Sg). 3. tam: 'Him' (Acc. Sg).", 
                note: "Combines the subject (who), the action (removed), and the object (him/that impurity)." 
            },
            { 
                text: "प्रवरम्", 
                transliteration: "pravaram", 
                translation: "Best/Excellent", 
                hindi: "श्रेष्ठ", 
                etym: "Root: pravara (प्रवर). Grammar: Accusative Singular. Adjective describing Patanjali.", 
                note: "The most exalted among the Munis." 
            },
            { 
                text: "मुनीनाम्", 
                transliteration: "munīnām", 
                translation: "Of sages", 
                hindi: "मुनियों में", 
                etym: "Root: muni (मुनि). Grammar: Genitive Plural (Shasthi Vibhakti).", 
                note: "-" 
            },
            { text: "<br>", transliteration: "<br>"},
            { 
                text: "पतञ्जलिम्", 
                transliteration: "patañjalim", 
                translation: "To Patanjali", 
                hindi: "पतंजलि को", 
                etym: "Root: patañjali (पतञ्जलि). Grammar: Accusative Singular (Dvitiya Vibhakti). The object of the bow.", 
                note: "The sage who compiled the Yoga Sutras." 
            },
            { 
                text: "प्राञ्जलिरानतोऽस्मि", 
                transliteration: "prāñjalirānato’smi", 
                translation: "I bow with folded hands", 
                hindi: "मैं हाथ जोड़कर नमन करता हूँ", 
                etym: "Sandhi: prāñjaliḥ (प्राञ्जलिः) + ānataḥ (आनतः) + asmi (अस्मि). 1. prāñjaliḥ: 'Hands folded' (Nom. Sg). 2. ānataḥ: 'Bowed' (Past Participle, Nom. Sg). 3. asmi: 'I am' (Verb, Present Tense, 1st Person Sg).", 
                note: "The complete action of the devotee surrendering to the teacher." 
            },
            { text: "||", transliteration: "||"},
        ]
    },
    {
        type: "Gayatri Mantra",
        verseIndex: "", // You can adjust this index based on where you place it
        fullTransliteration: "Oṃ bhūr bhuvaḥ svaḥ | Tat savitur vareṇyaṃ bhargo devasya dhīmahi | Dhiyo yo naḥ pracodayāt ||",
        fullTranslation: "We meditate on that most adorable radiance of the Divine Creator (Sun), may He guide and inspire our intellects.",
        words: [
            { 
                text: "ॐ", 
                transliteration: "Oṃ", 
                translation: "Om", 
                hindi: "ॐ (परम चेतना)", 
                etym: "The Pranava Mantra.", 
                note: "The primordial sound representing the Supreme Reality." 
            },
            { 
                text: "भूर्", 
                transliteration: "bhūr", 
                translation: "Earth", 
                hindi: "पृथ्वी लोक", 
                etym: "Sandhi: bhūḥ (भूः). Vyāhṛti (Utterance).", 
                note: "The physical plane of existence." 
            },
            { 
                text: "भुवः", 
                transliteration: "bhuvaḥ", 
                translation: "Atmosphere", 
                hindi: "अन्तरिक्ष लोक", 
                etym: "Vyāhṛti. Represents Prana (Life Force).", 
                note: "The mental/astral plane." 
            },
            { 
                text: "स्वः", 
                transliteration: "svaḥ", 
                translation: "Heavens", 
                hindi: "स्वर्ग लोक", 
                etym: "Vyāhṛti. Represents the Soul.", 
                note: "The celestial/causal plane." 
            },
            { text: "|", transliteration: "|"},
            { text: "<br>", transliteration: "<br>"},
            { 
                text: "तत्", 
                transliteration: "tat", 
                translation: "That", 
                hindi: "उस", 
                etym: "Pronoun: tad (तद्). Grammar: Accusative Singular Neuter. Refers to 'Bhargas' (Radiance).", 
                note: "Pointing to the Ultimate Reality." 
            },
            { 
                text: "सवितुर्", 
                transliteration: "savitur", 
                translation: "Of Savitr", 
                hindi: "सविता (सूर्य देव) का", 
                etym: "Sandhi: savituḥ (सवितुः). Root: sū (सू - to create/give birth). Grammar: Genitive Singular (Shasthi Vibhakti).", 
                note: "Refers to the Divine Creator or the Sun God." 
            },
            { 
                text: "वरेण्यम्", 
                transliteration: "vareṇyam", 
                translation: "Adorable/Choicest", 
                hindi: "वरेण्य (श्रेष्ठ)", 
                etym: "Root: vṛ (वृ - to choose). Grammar: Accusative Singular Neuter. Gerundive (Potential Participle).", 
                note: "That which is fit to be chosen or sought after." 
            },
            { 
                text: "भर्गो", 
                transliteration: "bhargo", 
                translation: "Radiance", 
                hindi: "तेज / भर्ग", 
                etym: "Sandhi: bhargaḥ (भर्गः). Root: bhṛjj (to roast/destroy sins). Grammar: Accusative Singular Neuter (or Masc).", 
                note: "The effulgence that destroys ignorance and sin." 
            },
            { text: "<br>", transliteration: "<br>"},
            { 
                text: "देवस्य", 
                transliteration: "devasya", 
                translation: "Of the Divine", 
                hindi: "देव का", 
                etym: "Root: div (to shine). Grammar: Genitive Singular (Shasthi Vibhakti).", 
                note: "Belonging to the shining one (God)." 
            },
            { 
                text: "धीमहि", 
                transliteration: "dhīmahi", 
                translation: "We Meditate", 
                hindi: "हम ध्यान करते हैं", 
                etym: "Root: dhyai (ध्यै - to meditate). Grammar: Vedic Optative/Subjunctive, 1st Person Plural (Atmanepada).", 
                note: "Meaning 'May we meditate' or simply 'We meditate'." 
            },
            { text: "|", transliteration: "|"},
            { text: "<br>", transliteration: "<br>"},
            { 
                text: "धियो", 
                transliteration: "dhiyo", 
                translation: "Intellects", 
                hindi: "बुद्धियों को", 
                etym: "Sandhi: dhiyaḥ (धियः). Root: dhī. Grammar: Accusative Plural. Object of 'impel'.", 
                note: "Our faculty of understanding/wisdom." 
            },
            { 
                text: "यो", 
                transliteration: "yo", 
                translation: "Who", 
                hindi: "जो", 
                etym: "Sandhi: yaḥ (यः). Relative Pronoun. Grammar: Nominative Singular Masculine.", 
                note: "Refers back to Savitr (The Sun/Creator)." 
            },
            { 
                text: "नः", 
                transliteration: "naḥ", 
                translation: "Our", 
                hindi: "हमारी", 
                etym: "Pronoun: asmad. Grammar: Genitive/Accusative Plural.", 
                note: "-" 
            },
            { 
                text: "प्रचोदयात्", 
                transliteration: "pracodayāt", 
                translation: "May He Impel", 
                hindi: "प्रेरित करें", 
                etym: "Prefix: pra (forward) + Root: chud (to drive/impel). Grammar: Causative Optative (or Imperative), 3rd Person Singular.", 
                note: "Meaning: Guide, stimulate, or inspire towards righteousness." 
            },
            { text: "||", transliteration: "||"},
        ]
    },
    {
  "type": "Amitabha Pure Land Rebirth Dharani",
  "verseIndex": "",
  "fullTransliteration": "Namo ratna trayāya namaḥ ārya amitābhāya tathāgatāya arhate samyaksaṃbuddhāya | Tadyathā oṃ amṛte amṛtodbhave amṛta saṃbhave amṛta garbhe amṛta siddhe amṛta teje amṛta vikrānte amṛta vikrānta gāmine amṛta gagana kīrti kare amṛta dundubhi svare sarvārtha sādhane sarva karma kleśa kṣayaṃ kare svāhā || Oṃ bhrūṃ hūṃ ||",
  "fullTranslation": "Homage to the Three Jewels. Homage to the Noble Amitabha, the Tathagata, the Worthy One, the Perfectly Enlightened One. It is thus: Om! Oh Nectar (Immortality)! Oh You who arose from Nectar! Oh You born of Nectar! Oh You who contain Nectar! Oh You perfected by Nectar! Oh Brilliance of Nectar! Oh Valour of Nectar! Oh You who proceed with the valour of Nectar! Oh You who create glory as vast as the sky with Nectar! Oh Sound of the Nectar drum! Oh Accomplisher of all goals! Oh You who bring about the destruction of all karma and afflictions! So be it! Om Bhrum Hum.",
  "words": [
    {
      "text": "नमो",
      "transliteration": "namo",
      "translation": "Homage",
      "hindi": "नमन",
      "etym": "Sandhi: namaḥ (नमः). Root: nam (to bow). Grammar: Nominative Singular Neuter.",
      "note": "Salutation or bowing in reverence."
    },
    {
      "text": "रत्नत्रयाय",
      "transliteration": "ratna-trayāya",
      "translation": "To the Three Jewels",
      "hindi": "तीन रत्नों (बुद्ध, धर्म, संघ) को",
      "etym": "Compound: ratna (jewel) + traya (three). Grammar: Dative Singular (Chaturthi Vibhakti).",
      "note": "The recipient of the homage."
    },
    {
      "text": "<br>",
      "transliteration": "<br>"
    },
    {
      "text": "नमः",
      "transliteration": "namaḥ",
      "translation": "Homage",
      "hindi": "नमन",
      "etym": "Root: nam. Grammar: Nominative Singular Neuter.",
      "note": "Repeated for emphasis before the deity's name."
    },
    {
      "text": "आर्यामिताभाय",
      "transliteration": "āryāmitābhāya",
      "translation": "To Noble Amitabha",
      "hindi": "आर्य अमिताभ को",
      "etym": "Sandhi: ārya (noble) + amitābhāya (to infinite light). Grammar: Dative Singular.",
      "note": "Amita (infinite) + Ābhā (light/splendor)."
    },
    {
      "text": "<br>",
      "transliteration": "<br>"
    },
    {
      "text": "तथागताय",
      "transliteration": "tathāgatāya",
      "translation": "To the Tathagata",
      "hindi": "तथागत को",
      "etym": "tathā (thus) + gata (gone/come). Grammar: Dative Singular.",
      "note": "Title of a Buddha: 'One who has thus gone (to enlightenment).'"
    },
    {
      "text": "अर्हते",
      "transliteration": "arhate",
      "translation": "To the Worthy One",
      "hindi": "अर्हत (पूज्य) को",
      "etym": "Root: arh (to deserve). Grammar: Dative Singular of Arhat.",
      "note": "One who has destroyed the inner enemies."
    },
    {
      "text": "सम्यक्संबुद्धाय",
      "transliteration": "samyak-saṃbuddhāya",
      "translation": "To the Perfectly Enlightened",
      "hindi": "सम्यक सम्बुद्ध को",
      "etym": "samyak (perfectly/correctly) + saṃbuddhāya (awakened). Grammar: Dative Singular.",
      "note": "The fully awakened one."
    },
    {
      "text": "|",
      "transliteration": "|"
    },
    {
      "text": "<br>",
      "transliteration": "<br>"
    },
    {
      "text": "तद्यथा",
      "transliteration": "tadyathā",
      "translation": "It is thus / As follows",
      "hindi": "वह इस प्रकार है",
      "etym": "tad (that) + yathā (how/like). Indeclinable.",
      "note": "Standard opening for the mantra proper."
    },
    {
      "text": "ॐ",
      "transliteration": "oṃ",
      "translation": "Om",
      "hindi": "ॐ",
      "etym": "The Pranava.",
      "note": "Sacred seed syllable."
    },
    {
      "text": "अमृते",
      "transliteration": "amṛte",
      "translation": "Oh Nectar/Immortality",
      "hindi": "हे अमृत",
      "etym": "a (not) + mṛta (dead). Grammar: Vocative Singular Feminine (Buddhist Hybrid Sanskrit).",
      "note": "Addressing the quality of immortality/nectar."
    },
    {
      "text": "अमृतोद्भवे",
      "transliteration": "amṛtodbhave",
      "translation": "Arisen from Nectar",
      "hindi": "अमृत से उत्पन्न",
      "etym": "Sandhi: amṛta + udbhave (origin/birth). Grammar: Vocative Singular Feminine.",
      "note": "Guna Sandhi (a + u = o)."
    },
    {
      "text": "अमृतसंभवे",
      "transliteration": "amṛta-saṃbhave",
      "translation": "Born of Nectar",
      "hindi": "अमृत से संभव (उत्पन्न)",
      "etym": "amṛta + saṃbhave (born/produced). Grammar: Vocative Singular Feminine.",
      "note": "Similar meaning to udbhave."
    },
    {
      "text": "अमृतगर्भे",
      "transliteration": "amṛta-garbhe",
      "translation": "Womb of Nectar",
      "hindi": "अमृत गर्भ",
      "etym": "amṛta + garbhe (womb/inside). Grammar: Vocative Singular Feminine.",
      "note": "One who holds immortality within."
    },
    {
      "text": "<br>",
      "transliteration": "<br>"
    },
    {
      "text": "अमृतसिद्धे",
      "transliteration": "amṛta-siddhe",
      "translation": "Perfected by Nectar",
      "hindi": "अमृत सिद्ध",
      "etym": "amṛta + siddhe (accomplished/perfected). Grammar: Vocative Singular Feminine.",
      "note": "-"
    },
    {
      "text": "अमृततेजे",
      "transliteration": "amṛta-teje",
      "translation": "Brilliance of Nectar",
      "hindi": "अमृत के तेज वाली",
      "etym": "amṛta + teje (brilliance/fire). Grammar: Vocative Singular Feminine.",
      "note": "Tejas typically neuter, but adapted here to feminine vocative flow."
    },
    {
      "text": "अमृतविक्रान्ते",
      "transliteration": "amṛta-vikrānte",
      "translation": "Valour of Nectar",
      "hindi": "अमृत पराक्रम वाली",
      "etym": "amṛta + vikrānte (valour/power/step). Grammar: Vocative Singular Feminine.",
      "note": "Refers to the power to overcome obstacles."
    },
    {
      "text": "<br>",
      "transliteration": "<br>"
    },
    {
      "text": "अमृतविक्रान्तगमिने",
      "transliteration": "amṛta-vikrānta-gāmine",
      "translation": "Goer with Nectar's Valour",
      "hindi": "अमृत पराक्रम से जाने वाले",
      "etym": "Compound ending in gāmine (one who goes). Grammar: Dative/Vocative Singular.",
      "note": "Movement towards enlightenment."
    },
    {
      "text": "अमृतगगनकीर्तिकरे",
      "transliteration": "amṛta-gagana-kīrti-kare",
      "translation": "Creator of Nectar-Sky-Glory",
      "hindi": "अमृत और आकाश जैसी कीर्ति करने वाली",
      "etym": "gagana (sky) + kīrti (fame) + kare (doer/maker). Grammar: Vocative Singular Feminine.",
      "note": "Fame/Glory as boundless as the sky."
    },
    {
      "text": "अमृतदुंदुभिस्वरे",
      "transliteration": "amṛta-dundubhi-svare",
      "translation": "Sound of Nectar Drums",
      "hindi": "अमृत दुंदुभि (नगाड़ा) के स्वर वाली",
      "etym": "dundubhi (drum) + svare (sound/voice). Grammar: Vocative Singular Feminine.",
      "note": "The proclamation of the Dharma."
    },
    {
      "text": "<br>",
      "transliteration": "<br>"
    },
    {
      "text": "सर्वार्थसाधने",
      "transliteration": "sarvārtha-sādhane",
      "translation": "Accomplisher of All Goals",
      "hindi": "सर्व अर्थ (प्रयोजन) सिद्ध करने वाली",
      "etym": "sarva (all) + artha (purpose) + sādhane (means/accomplishing). Grammar: Vocative Singular Feminine.",
      "note": "Siddhartha (Buddha's name) relates to this."
    },
    {
      "text": "सर्वकर्मक्लेश",
      "transliteration": "sarva-karma-kleśa",
      "translation": "All Karma and Afflictions",
      "hindi": "सभी कर्म और क्लेश",
      "etym": "Compound noun.",
      "note": "Kleshas are mental obscurations (anger, greed, ignorance)."
    },
    {
      "text": "क्षयं",
      "transliteration": "kṣayaṃ",
      "translation": "Destruction",
      "hindi": "क्षय (नाश)",
      "etym": "Root: kṣi (to decay). Grammar: Accusative Singular.",
      "note": "Object of the verb 'kare'."
    },
    {
      "text": "करे",
      "transliteration": "kare",
      "translation": "Maker/Doer",
      "hindi": "करने वाली",
      "etym": "Root: kṛ (to do). Grammar: Vocative Singular Feminine.",
      "note": "Context: 'Oh one who causes the destruction of...'"
    },
    {
      "text": "स्वाहा",
      "transliteration": "svāhā",
      "translation": "So be it",
      "hindi": "समर्पित / स्वाहा",
      "etym": "Indeclinable.",
      "note": "Ritual ending; offering to the fire."
    },
    {
      "text": "|",
      "transliteration": "|"
    },
    {
      "text": "<br>",
      "transliteration": "<br>"
    },
    {
      "text": "ॐ",
      "transliteration": "oṃ",
      "translation": "Om",
      "hindi": "ॐ",
      "etym": "-",
      "note": "-"
    },
    {
      "text": "भ्रूं",
      "transliteration": "bhrūṃ",
      "translation": "Bhrum",
      "hindi": "भ्रूं",
      "etym": "Bija Mantra.",
      "note": "Seed syllable of purification and absolute reality (Ushnisha Vijaya)."
    },
    {
      "text": "हुं",
      "transliteration": "hūṃ",
      "translation": "Hum",
      "hindi": "हुं",
      "etym": "Bija Mantra.",
      "note": "Seed syllable of the enlightened mind; destroys suffering."
    },
    {
      "text": "||",
      "transliteration": "||"
    }
  ]
}
]