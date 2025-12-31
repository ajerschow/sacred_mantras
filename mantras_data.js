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
},
{
  "type": "Hundred-Syllable Mantra of Vajrasattva",
  "verseIndex": "",
  "fullTransliteration": "Oṃ vajrasattva samayam anupālaya | Vajrasattva tvenopatiṣṭha | Dṛḍho me bhava | Sutoṣyo me bhava | Supoṣyo me bhava | Anurakto me bhava | Sarva siddhiṃ me prayaccha | Sarva karmasu ca me cittaṃ śreyaḥ kuru hūṃ | Ha ha ha ha hoḥ bhagavan sarva tathāgata vajra mā me muñca | Vajrī bhava mahāsamaya sattva āḥ ||",
  "fullTranslation": "Om. Oh Vajrasattva, preserve the bond (samaya). As Vajrasattva, stand near me. Be steadfast for me. Be well-pleased with me. Be fully nourishing for me. Be passionately loving towards me. Grant me all spiritual accomplishments (siddhis). And in all actions, make my mind virtuous/glorious. Hum. Ha Ha Ha Ha Hoh! Oh Blessed One, oh Vajra of all Tathagatas, do not abandon me. Make me a holder of the Vajra. Oh Great Bond Being. Ah!",
  "words": [
    {
      "text": "ॐ",
      "transliteration": "Oṃ",
      "translation": "Om",
      "hindi": "ॐ",
      "etym": "The Pranava.",
      "note": "The seed syllable of the Universe; body, speech, and mind."
    },
    {
      "text": "वज्रसत्त्व",
      "transliteration": "vajrasattva",
      "translation": "Oh Vajrasattva",
      "hindi": "हे वज्रसत्त्व",
      "etym": "vajra (diamond/thunderbolt) + sattva (being). Grammar: Vocative Singular Masculine.",
      "note": "Addressing the Diamond Being (indestructible purity)."
    },
    {
      "text": "समयम्",
      "transliteration": "samayam",
      "translation": "The Bond/Vow",
      "hindi": "समय (प्रतिज्ञा/बंधन) को",
      "etym": "Root: i (to go) + sam (together). Grammar: Accusative Singular Masculine.",
      "note": "Refers to the sacred pledge or tantric commitment."
    },
    {
      "text": "अनुपालय",
      "transliteration": "anupālaya",
      "translation": "Preserve/Protect",
      "hindi": "पालन करो / रक्षा करो",
      "etym": "Prefix: anu (following) + Root: pāl (to protect). Grammar: Imperative 2nd Person Singular (Causative form).",
      "note": "Asking the deity to help keep the vow."
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
      "text": "वज्रसत्त्व",
      "transliteration": "vajrasattva",
      "translation": "Oh Vajrasattva",
      "hindi": "हे वज्रसत्त्व",
      "etym": "Vocative Singular.",
      "note": "Repeated address."
    },
    {
      "text": "त्वेनोपतिष्ठ",
      "transliteration": "tvenopatiṣṭha",
      "translation": "Stand near (as yourself)",
      "hindi": "मेरे समीप स्थित हो",
      "etym": "Sandhi: tvena (त्वेन) + upatiṣṭha (उपतिष्ठ). tvena (by your nature/instrumental) + upa-sthā (stand near/support). Grammar: Imperative 2nd Person Singular.",
      "note": "Meaning: 'Stay close to me with your Vajra-nature.'"
    },
    {
      "text": "दृढो",
      "transliteration": "dṛḍho",
      "translation": "Firm/Steadfast",
      "hindi": "दृढ़ (मजबूत)",
      "etym": "Sandhi: dṛḍhaḥ (दृढः). Root: dṛh (to be fixed). Grammar: Nominative Singular Masculine.",
      "note": "Qualifies the state of the deity's presence."
    },
    {
      "text": "मे",
      "transliteration": "me",
      "translation": "For me",
      "hindi": "मेरे लिए",
      "etym": "Pronoun: asmad. Grammar: Dative/Genitive Singular.",
      "note": "-"
    },
    {
      "text": "भव",
      "transliteration": "bhava",
      "translation": "Be",
      "hindi": "हो जाओ",
      "etym": "Root: bhū (to be). Grammar: Imperative 2nd Person Singular.",
      "note": "Command/Prayer."
    },
    {
      "text": "<br>",
      "transliteration": "<br>"
    },
    {
      "text": "सुतोष्यो",
      "transliteration": "sutoṣyo",
      "translation": "Well Pleased",
      "hindi": "अच्छी तरह से संतुष्ट",
      "etym": "Sandhi: sutoṣyaḥ (सुतोष्यः). su (well) + root tuṣ (to satisfy) + ya (gerundive). Grammar: Nominative Singular Masculine.",
      "note": "Be easily satisfied with me."
    },
    {
      "text": "सुपोष्यो",
      "transliteration": "supoṣyo",
      "translation": "Well Nourishing",
      "hindi": "अच्छी तरह से पोषण करने वाला",
      "etym": "Sandhi: supoṣyaḥ (सुपोष्यः). su (well) + root puṣ (to nourish). Grammar: Nominative Singular Masculine.",
      "note": "Make me grow/prosper spiritually."
    },
    {
      "text": "अनुरक्तो",
      "transliteration": "anurakto",
      "translation": "Passionately Loving",
      "hindi": "अनुरक्त (स्नेही/प्रेमी)",
      "etym": "Sandhi: anuraktaḥ (अनुरक्तः). anu + root rañj (to color/redden) + kta. Grammar: Nominative Singular Masculine.",
      "note": "Compassionate attachment."
    },
    {
      "text": "मे",
      "transliteration": "me",
      "translation": "To me",
      "hindi": "मुझ पर",
      "etym": "Dative/Genitive.",
      "note": "Repeated for emphasis."
    },
    {
      "text": "भव",
      "transliteration": "bhava",
      "translation": "Be",
      "hindi": "हो जाओ",
      "etym": "Imperative.",
      "note": "-"
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
      "text": "सर्वसिद्धिं",
      "transliteration": "sarva-siddhiṃ",
      "translation": "All Accomplishments",
      "hindi": "सभी सिद्धियों को",
      "etym": "sarva (all) + siddhi (attainment). Grammar: Accusative Singular Feminine.",
      "note": "Spiritual powers or realizations."
    },
    {
      "text": "मे",
      "transliteration": "me",
      "translation": "To me",
      "hindi": "मुझे",
      "etym": "Dative/Genitive.",
      "note": "-"
    },
    {
      "text": "प्रयच्छ",
      "transliteration": "prayaccha",
      "translation": "Grant/Bestow",
      "hindi": "प्रदान करें",
      "etym": "pra (forth) + root yam (to give/hold). Grammar: Imperative 2nd Person Singular.",
      "note": "-"
    },
    {
      "text": "<br>",
      "transliteration": "<br>"
    },
    {
      "text": "सर्वकर्मसु",
      "transliteration": "sarva-karmasu",
      "translation": "In All Actions",
      "hindi": "सभी कर्मों में",
      "etym": "sarva + karman. Grammar: Locative Plural.",
      "note": "In everything I do."
    },
    {
      "text": "च",
      "transliteration": "ca",
      "translation": "And",
      "hindi": "और",
      "etym": "Indeclinable conjunction.",
      "note": "-"
    },
    {
      "text": "मे",
      "transliteration": "me",
      "translation": "My",
      "hindi": "मेरे",
      "etym": "Genitive.",
      "note": "-"
    },
    {
      "text": "चित्तं",
      "transliteration": "cittaṃ",
      "translation": "Mind",
      "hindi": "चित्त (मन) को",
      "etym": "Root: cit (to perceive). Grammar: Accusative Singular Neuter.",
      "note": "The object of transformation."
    },
    {
      "text": "श्रेयः",
      "transliteration": "śreyaḥ",
      "translation": "Virtuous/Glorious",
      "hindi": "श्रेयस (कल्याणकारी/श्रेष्ठ)",
      "etym": "Original: śreyas. Comparative of śrī (splendor/virtue). Grammar: Accusative Singular Neuter.",
      "note": "Make my mind 'more excellent' or good."
    },
    {
      "text": "कुरु",
      "transliteration": "kuru",
      "translation": "Make/Do",
      "hindi": "करो",
      "etym": "Root: kṛ (to do). Grammar: Imperative 2nd Person Singular.",
      "note": "-"
    },
    {
      "text": "हुं",
      "transliteration": "hūṃ",
      "translation": "Hum",
      "hindi": "हुं",
      "etym": "Bija Mantra.",
      "note": "Seed syllable of the Enlightened Mind."
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
      "text": "ह",
      "transliteration": "ha",
      "translation": "Ha",
      "hindi": "ह",
      "etym": "Exclamation.",
      "note": "Four 'Ha's represent the Four Immeasurables or the four kinds of joy."
    },
    {
      "text": "ह",
      "transliteration": "ha",
      "translation": "Ha",
      "hindi": "ह",
      "etym": "-",
      "note": "-"
    },
    {
      "text": "ह",
      "transliteration": "ha",
      "translation": "Ha",
      "hindi": "ह",
      "etym": "-",
      "note": "-"
    },
    {
      "text": "ह",
      "transliteration": "ha",
      "translation": "Ha",
      "hindi": "ह",
      "etym": "-",
      "note": "-"
    },
    {
      "text": "होः",
      "transliteration": "hoḥ",
      "translation": "Hoh",
      "hindi": "होः",
      "etym": "Exclamation.",
      "note": "Expression of joyous amazement at non-dual wisdom."
    },
    {
      "text": "<br>",
      "transliteration": "<br>"
    },
    {
      "text": "भगवन्",
      "transliteration": "bhagavan",
      "translation": "Oh Blessed One",
      "hindi": "हे भगवान",
      "etym": "Vocative Singular Masculine.",
      "note": "Epithet of the Buddha."
    },
    {
      "text": "सर्वतथागत",
      "transliteration": "sarva-tathāgata",
      "translation": "All Tathagatas",
      "hindi": "सभी तथागत",
      "etym": "Vocative Compound.",
      "note": "Addressing all Enlightened Ones."
    },
    {
      "text": "वज्र",
      "transliteration": "vajra",
      "translation": "Oh Vajra",
      "hindi": "हे वज्र",
      "etym": "Vocative Singular.",
      "note": "Addressing the indestructible nature."
    },
    {
      "text": "मा",
      "transliteration": "mā",
      "translation": "Do Not",
      "hindi": "मत",
      "etym": "Prohibitive particle.",
      "note": "Used with Imperative for prohibition."
    },
    {
      "text": "मे",
      "transliteration": "me",
      "translation": "Me",
      "hindi": "मुझे",
      "etym": "Accusative here (object of abandon).",
      "note": "-"
    },
    {
      "text": "मुञ्च",
      "transliteration": "muñca",
      "translation": "Abandon",
      "hindi": "छोड़ो",
      "etym": "Root: muc (to release/let go). Grammar: Imperative 2nd Person Singular.",
      "note": "Meaning: 'Do not let me go' or 'Do not forsake me'."
    },
    {
      "text": "<br>",
      "transliteration": "<br>"
    },
    {
      "text": "वज्री",
      "transliteration": "vajrī",
      "translation": "Vajra-Holder",
      "hindi": "वज्र धारण करने वाला",
      "etym": "vajrin (one possessing the vajra). Grammar: Nominative Singular Masculine.",
      "note": "Refers to the nature of the Deity (or the practitioner becoming one)."
    },
    {
      "text": "भव",
      "transliteration": "bhava",
      "translation": "Be",
      "hindi": "भव (हो)",
      "etym": "Imperative.",
      "note": "Context implies: 'You are the Vajra holder' or 'Make me a Vajra holder'."
    },
    {
      "text": "महासमयसत्त्व",
      "transliteration": "mahā-samaya-sattva",
      "translation": "Great Bond Being",
      "hindi": "हे महा समय सत्त्व",
      "etym": "mahā (great) + samaya (bond/vow) + sattva (being). Grammar: Vocative Singular Masculine.",
      "note": "The being who encompasses the great vow."
    },
    {
      "text": "आः",
      "transliteration": "āḥ",
      "translation": "Ah",
      "hindi": "आः",
      "etym": "Bija Mantra.",
      "note": "Seed syllable of Speech and the non-arising nature of phenomena."
    },
    {
      "text": "||",
      "transliteration": "||"
    }
  ]
},
{
  "type": "Namaskāra Mantra from the Devi Mahatmya / Durga Saptashati",
  "verseIndex": "",
  "fullTransliteration": "Sarvamaṅgalamāṅgalye śive sarvārthasādhike | Śaraṇye tryambake gauri nārāyaṇi namo'stu te ||",
  "fullTranslation": "Oh the Auspiciousness in all that is auspicious, Oh Auspicious One, Oh Accomplisher of all objectives. Oh Source of Refuge, Oh Three-Eyed One, Oh Gauri, Oh Narayani, salutations be to You.",
  "words": [
    {
      "text": "सर्वमङ्गलमाङ्गल्ये",
      "transliteration": "sarva-maṅgala-māṅgalye",
      "translation": "Auspiciousness of all Auspiciousness",
      "hindi": "सभी मंगलों में मंगलमयी",
      "etym": "Compound: sarva (all) + maṅgala (auspicious) + māṅgalye (locative/vocative of māṅgalyā - auspiciousness). Grammar: Vocative Singular Feminine.",
      "note": "She is the essence of goodness in everything that is good."
    },
    {
      "text": "शिवे",
      "transliteration": "śive",
      "translation": "Oh Auspicious One",
      "hindi": "हे शिवे (कल्याणकारी)",
      "etym": "Root: śiva (auspicious/benevolent). Grammar: Vocative Singular Feminine of Śivā (Consort of Shiva).",
      "note": "Addressing the Goddess as the source of welfare."
    },
    {
      "text": "सर्वार्थसाधिके",
      "transliteration": "sarvārtha-sādhike",
      "translation": "Accomplisher of All Goals",
      "hindi": "सभी अर्थों (कामनाओं) को सिद्ध करने वाली",
      "etym": "Compound: sarva (all) + artha (purpose/wealth) + sādhike (accomplisher). Grammar: Vocative Singular Feminine.",
      "note": "She who grants Dharma, Artha, Kama, and Moksha."
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
      "text": "शरण्ये",
      "transliteration": "śaraṇye",
      "translation": "Oh Refuge",
      "hindi": "शरण देने वाली",
      "etym": "Root: śaraṇa (protection/shelter). Grammar: Vocative Singular Feminine of Śaraṇyā (Worthy of refuge).",
      "note": "The one to whom we turn for protection."
    },
    {
      "text": "त्र्यम्बके",
      "transliteration": "tryambake",
      "translation": "Oh Three-Eyed One",
      "hindi": "हे त्रिनेत्रा",
      "etym": "Compound: tri (three) + ambaka (eye). Grammar: Vocative Singular Feminine of Tryambakā.",
      "note": "Refers to her insight into the past, present, and future (or Sun, Moon, and Fire)."
    },
    {
      "text": "गौरी",
      "transliteration": "gauri",
      "translation": "Oh Gauri",
      "hindi": "हे गौरी (स्वर्णवर्णा)",
      "etym": "Root: gaurī (golden/white/shining). Grammar: Vocative Singular Feminine (Short 'i').",
      "note": "An epithet of Parvati, signifying purity and radiance."
    },
    {
      "text": "<br>",
      "transliteration": "<br>"
    },
    {
      "text": "नारायणि",
      "transliteration": "nārāyaṇi",
      "translation": "Oh Narayani",
      "hindi": "हे नारायणी",
      "etym": "Feminine form of Nārāyaṇa. Grammar: Vocative Singular Feminine (Short 'i').",
      "note": "Refers to Devi as the sister of Vishnu or the Shakti of Narayana (Maya)."
    },
    {
      "text": "नमोऽस्तु",
      "transliteration": "namo'stu",
      "translation": "Salutations be",
      "hindi": "नमस्कार हो",
      "etym": "Sandhi: namaḥ (bow) + astu (let it be). Visarga becomes 'o' and 'a' is elided (avagraha ऽ).",
      "note": "The act of surrendering."
    },
    {
      "text": "ते",
      "transliteration": "te",
      "translation": "To You",
      "hindi": "आपको",
      "etym": "Pronoun: yauṣmad. Grammar: Dative Singular.",
      "note": "The recipient of the salutation."
    },
    {
      "text": "||",
      "transliteration": "||"
    }
  ]
},
{
  "type": "Devi Dhyana Mantra",
  "verseIndex": "",
  "fullTransliteration": "Oṃ jaṭājūṭasamāyuktā ardhendukṛtalakṣaṇā | Locanatrayasaṃyuktā pātu māṃ sarvatomukhī ||",
  "fullTranslation": "Om. May She who is adorned with matted locks, who bears the mark of the crescent moon, who possesses three eyes, and who faces all directions, protect me.",
  "words": [
    {
      "text": "ॐ",
      "transliteration": "Oṃ",
      "translation": "Om",
      "hindi": "ॐ",
      "etym": "The Pranava.",
      "note": "Sacred syllable."
    },
    {
      "text": "जटाजूटसमायुक्ता",
      "transliteration": "jaṭājūṭa-samāyuktā",
      "translation": "Adorned with Matted Locks",
      "hindi": "जटाओं के समूह से युक्त",
      "etym": "Compound: jaṭā (matted hair) + jūṭa (bundled/twisted hair) + samāyuktā (united with/endowed). Grammar: Nominative Singular Feminine.",
      "note": "Describes the ascetic appearance of the Goddess (Shiva-Shakti union)."
    },
    {
      "text": "अर्धेन्दुकृतलक्षणा",
      "transliteration": "ardhendu-kṛta-lakṣaṇā",
      "translation": "Marked by the Crescent Moon",
      "hindi": "अर्धचंद्र के चिह्न वाली",
      "etym": "Sandhi: ardha (half) + indu (moon) = ardhendu (Guna Sandhi). kṛta (made) + lakṣaṇā (mark/characteristic). Grammar: Nominative Singular Feminine.",
      "note": "She wears the crescent moon like Lord Shiva (Chandrashekhara)."
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
      "text": "लोचनत्रयसंयुक्ता",
      "transliteration": "locana-traya-saṃyuktā",
      "translation": "Endowed with Three Eyes",
      "hindi": "तीन नेत्रों से युक्त",
      "etym": "Compound: locana (eye) + traya (three/triad) + saṃyuktā (endowed). Grammar: Nominative Singular Feminine.",
      "note": "The third eye represents the fire of knowledge and destruction of ignorance."
    },
    {
      "text": "पातु",
      "transliteration": "pātu",
      "translation": "May She Protect",
      "hindi": "रक्षा करें",
      "etym": "Root: pā (to protect). Grammar: Imperative (Lot Lakara), 3rd Person Singular.",
      "note": "The main verb of the verse."
    },
    {
      "text": "मां",
      "transliteration": "māṃ",
      "translation": "Me",
      "hindi": "मेरी / मुझको",
      "etym": "Pronoun: asmad. Grammar: Accusative Singular.",
      "note": "The object receiving protection."
    },
    {
      "text": "सर्वतोमुखी",
      "transliteration": "sarvatomukhī",
      "translation": "She Who Faces All Directions",
      "hindi": "सब ओर मुख वाली (सर्वव्यापी)",
      "etym": "sarvataḥ (from all sides/everywhere) + mukhī (faced). Grammar: Nominative Singular Feminine.",
      "note": "Signifies her Omnipresence; she sees everything."
    },
    {
      "text": "||",
      "transliteration": "||"
    }
  ]
},
{
  "type": "Karpura Gauram Shloka",
  "verseIndex": "",
  "fullTransliteration": "Karpūragauraṃ karuṇāvatāraṃ saṃsārasāraṃ bhujagendrahāram | Sadāvasantaṃ hṛdayāravinde bhavaṃ bhavānīsahitaṃ namāmi ||",
  "fullTranslation": "I bow to the One who is as pure white as camphor, the incarnation of compassion, the essence of worldly existence, and who wears the King of Serpents as a garland. I bow to Lord Shiva (Bhava), accompanied by Goddess Parvati (Bhavani), who always dwells in the lotus of the heart.",
  "words": [
    {
      "text": "कर्पूरगौरं",
      "transliteration": "karpūra-gauraṃ",
      "translation": "White as Camphor",
      "hindi": "कपूर के समान गौर वर्ण वाले",
      "etym": "Compound: karpūra (camphor) + gauraṃ (white/shining). Grammar: Accusative Singular Masculine.",
      "note": "Describes Shiva's pure, transcendental nature."
    },
    {
      "text": "करुणावतारं",
      "transliteration": "karuṇāvatāraṃ",
      "translation": "Incarnation of Compassion",
      "hindi": "करुणा के अवतार",
      "etym": "Sandhi: karuṇā (compassion) + avatāraṃ (descent/incarnation). Grammar: Accusative Singular Masculine.",
      "note": "Dirgha Sandhi (ā + a = ā). Shiva is the embodiment of mercy."
    },
    {
      "text": "<br>",
      "transliteration": "<br>"
    },
    {
      "text": "संसारसारं",
      "transliteration": "saṃsāra-sāraṃ",
      "translation": "Essence of the World",
      "hindi": "संसार के सार (तत्व)",
      "etym": "Compound: saṃsāra (world/cycle of existence) + sāraṃ (essence/core). Grammar: Accusative Singular Masculine.",
      "note": "He is the only reality in the transient world."
    },
    {
      "text": "भुजगेन्द्रहारम्",
      "transliteration": "bhujagendra-hāram",
      "translation": "Garlanded with the Snake King",
      "hindi": "सर्पों के राजा (वासुकी) का हार पहनने वाले",
      "etym": "Compound: bhujaga (snake) + indra (king) + hāram (garland). Grammar: Accusative Singular Masculine.",
      "note": "Guna Sandhi (a + i = e). Refers to Vasuki around his neck."
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
      "text": "सदावसंतं",
      "transliteration": "sadā-vasantaṃ",
      "translation": "Always Dwelling",
      "hindi": "सदा निवास करने वाले",
      "etym": "sadā (always) + vasantaṃ (dwelling/residing). Grammar: Accusative Singular Masculine (Present Participle).",
      "note": "Vasanta comes from root 'vas' (to live)."
    },
    {
      "text": "हृदयारविन्दे",
      "transliteration": "hṛdayāravinde",
      "translation": "In the Lotus of the Heart",
      "hindi": "हृदय रूपी कमल में",
      "etym": "Sandhi: hṛdaya (heart) + aravinde (in the lotus). Grammar: Locative Singular Neuter.",
      "note": "Dirgha Sandhi (a + a = ā). The spiritual center of the devotee."
    },
    {
      "text": "<br>",
      "transliteration": "<br>"
    },
    {
      "text": "भवं",
      "transliteration": "bhavaṃ",
      "translation": "To Bhava (Shiva)",
      "hindi": "भगवान शिव (भव) को",
      "etym": "Root: bhū (becoming/existence). Grammar: Accusative Singular Masculine.",
      "note": "The object of the verb 'namāmi'."
    },
    {
      "text": "भवानीसहितं",
      "transliteration": "bhavānī-sahitaṃ",
      "translation": "Accompanied by Bhavani",
      "hindi": "भवानी (पार्वती) सहित",
      "etym": "Compound: bhavānī (Parvati) + sahitaṃ (with/accompanied). Grammar: Accusative Singular Masculine.",
      "note": "Shiva is never separate from his Shakti."
    },
    {
      "text": "नमामि",
      "transliteration": "namāmi",
      "translation": "I Bow",
      "hindi": "मैं नमन करता हूँ",
      "etym": "Root: nam (to bow). Grammar: Present Indicative (Lat Lakara), 1st Person Singular.",
      "note": "The action performed by the devotee."
    },
    {
      "text": "||",
      "transliteration": "||"
    }
  ]
},
{
  "type": "Maha Mrityunjaya Mantra",
  "verseIndex": "",
  "fullTransliteration": "Oṃ tryambakaṃ yajāmahe sugandhiṃ puṣṭi-vardhanam | Urvārukamiva bandhanān mṛtyor mukṣīya mā'mṛtāt ||",
  "fullTranslation": "Om. We worship the Three-Eyed One (Lord Shiva), who is fragrant and who nourishes all beings. As a cucumber is severed from its bondage (to the creeper), may I be liberated from death, but not from immortality.",
  "words": [
    {
      "text": "ॐ",
      "transliteration": "Oṃ",
      "translation": "Om",
      "hindi": "ॐ",
      "etym": "The Pranava.",
      "note": "The primordial sound."
    },
    {
      "text": "त्र्यम्बकं",
      "transliteration": "tryambakaṃ",
      "translation": "The Three-Eyed One",
      "hindi": "तीन नेत्रों वाले (शिव)",
      "etym": "Sandhi: tri (three) + ambakam (eye/father). Grammar: Accusative Singular Masculine.",
      "note": "Refers to Shiva who sees past, present, and future."
    },
    {
      "text": "यजामहे",
      "transliteration": "yajāmahe",
      "translation": "We Worship",
      "hindi": "हम यजन (पूजा) करते हैं",
      "etym": "Root: yaj (to sacrifice/worship). Grammar: Present Indicative (Lat), 1st Person Plural (Atmanepada).",
      "note": "The collective action of the devotees."
    },
    {
      "text": "सुगन्धिं",
      "transliteration": "sugandhiṃ",
      "translation": "The Fragrant One",
      "hindi": "सुगंधित",
      "etym": "su (good) + gandha (smell). Grammar: Accusative Singular Masculine.",
      "note": "Possessing the essence of divinity/virtue."
    },
    {
      "text": "पुष्टिवर्धनम्",
      "transliteration": "puṣṭi-vardhanam",
      "translation": "Nourisher of Prosperity",
      "hindi": "पुष्टि (पोषण) को बढ़ाने वाले",
      "etym": "puṣṭi (nourishment) + vardhanam (increaser). Grammar: Accusative Singular Masculine.",
      "note": "He who increases health and vitality."
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
      "text": "उर्वारुकमिव",
      "transliteration": "urvārukam-iva",
      "translation": "Like a Cucumber",
      "hindi": "ककड़ी की तरह",
      "etym": "urvārukam (cucumber) + iva (like). Grammar: Accusative Singular Neuter.",
      "note": "Simile for effortless separation."
    },
    {
      "text": "बन्धनान्",
      "transliteration": "bandhanān",
      "translation": "From Bondage",
      "hindi": "बंधन (डंठल) से",
      "etym": "Sandhi: bandhanāt (बन्धनात्). The 't' changes to 'n' before 'm'. Grammar: Ablative Singular Neuter.",
      "note": "Refers to the stem binding the fruit to the vine."
    },
    {
      "text": "मृत्योर्",
      "transliteration": "mṛtyor",
      "translation": "From Death",
      "hindi": "मृत्यु से",
      "etym": "Sandhi: mṛtyoḥ (मृत्योः). Visarga becomes 'r'. Grammar: Ablative Singular Masculine.",
      "note": "The state of mortality/ignorance."
    },
    {
      "text": "मुक्षीय",
      "transliteration": "mukṣīya",
      "translation": "May I be Liberated",
      "hindi": "मैं मुक्त हो जाऊँ",
      "etym": "Root: muc (to free). Grammar: Benedictive/Optative (Ashir Lin), 1st Person Singular (Atmanepada).",
      "note": "A prayer for spiritual freedom (Moksha)."
    },
    {
      "text": "मामृतात्",
      "transliteration": "mā'mṛtāt",
      "translation": "Not from Immortality",
      "hindi": "अमृतत्व से नहीं",
      "etym": "Sandhi: mā (not) + amṛtāt (from immortality). Savarna Dirgha Sandhi (ā + a = ā). Grammar: Ablative Singular.",
      "note": "Meaning: 'Save me from death, but do not separate me from immortality.'"
    },
    {
      "text": "||",
      "transliteration": "||"
    }
  ]
},
{
  "type": "Saha Nāvavatu Mantra",
  "verseIndex": "",
  "fullTransliteration": "Oṃ saha nāvavatu | Saha nau bhunaktu | Saha vīryaṃ karavāvahai | Tejasvi nāvadhītamastu mā vidviṣāvahai | Oṃ śāntiḥ śāntiḥ śāntiḥ ||",
  "fullTranslation": "Om. May He protect us both (teacher and student) together. May He nourish us both together. May we both work together with great energy. May our study be brilliant and effective. May there be no misunderstanding between us. Om Peace, Peace, Peace.",
  "words": [
    {
      "text": "ॐ",
      "transliteration": "Oṃ",
      "translation": "Om",
      "hindi": "ॐ",
      "etym": "The Pranava.",
      "note": "Invocation of the Supreme."
    },
    {
      "text": "सह",
      "transliteration": "saha",
      "translation": "Together",
      "hindi": "साथ-साथ",
      "etym": "Indeclinable particle.",
      "note": "Emphasizes unity in the journey."
    },
    {
      "text": "नाववतु",
      "transliteration": "nāvavatu",
      "translation": "May He Protect Us Both",
      "hindi": "हम दोनों की रक्षा करें",
      "etym": "Sandhi: nau (नौ - us two) + avatu (अवतु - may he protect). nau is Accusative Dual of 'asmad'. avatu is Imperative 3rd Person Singular of root 'av'.",
      "note": "Awadi Sandhi (au + a = āv). 'Us two' refers to Guru and Shishya."
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
      "text": "सह",
      "transliteration": "saha",
      "translation": "Together",
      "hindi": "साथ-साथ",
      "etym": "Indeclinable.",
      "note": "-"
    },
    {
      "text": "नौ",
      "transliteration": "nau",
      "translation": "Us Both",
      "hindi": "हम दोनों को",
      "etym": "Pronoun: asmad. Grammar: Accusative Dual.",
      "note": "-"
    },
    {
      "text": "भुनक्तु",
      "transliteration": "bhunaktu",
      "translation": "May He Nourish",
      "hindi": "पालन/पोषण करें",
      "etym": "Root: bhuj (to enjoy/eat/protect). Grammar: Imperative (Lot Lakara), 3rd Person Singular (Parasmaipada).",
      "note": "Refers to the enjoyment of the fruits of knowledge."
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
      "text": "सह",
      "transliteration": "saha",
      "translation": "Together",
      "hindi": "साथ में",
      "etym": "-",
      "note": "-"
    },
    {
      "text": "वीर्यं",
      "transliteration": "vīryaṃ",
      "translation": "Energy/Strength",
      "hindi": "शक्ति / पराक्रम",
      "etym": "Root: vīr (to be brave). Grammar: Accusative Singular Neuter.",
      "note": "The vigor required for spiritual practice."
    },
    {
      "text": "करवावहै",
      "transliteration": "karavāvahai",
      "translation": "May We Generate",
      "hindi": "हम प्राप्त करें / करें",
      "etym": "Root: kṛ (to do). Grammar: Imperative (Lot), 1st Person Dual (Atmanepada).",
      "note": "Action performed for the benefit of the self (Atmanepada)."
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
      "text": "तेजस्वि",
      "transliteration": "tejasvi",
      "translation": "Brilliant",
      "hindi": "तेजस्वी (प्रकाशमान)",
      "etym": "Base: tejasvin. Grammar: Nominative Singular Neuter (agreeing with adhītam).",
      "note": "Illuminated knowledge."
    },
    {
      "text": "नावधीतमस्तु",
      "transliteration": "nāvadhītam-astu",
      "translation": "May Our Study Be",
      "hindi": "हम दोनों का अध्ययन हो",
      "etym": "Sandhi: nau (of us two) + adhītam (study) + astu (let it be). nau is Genitive Dual. adhītam is Past Passive Participle. astu is Imperative of 'as'.",
      "note": "Awadi Sandhi (au + a = āv). Meaning: Let what we have studied be full of light."
    },
    {
      "text": "मा",
      "transliteration": "mā",
      "translation": "Do Not",
      "hindi": "नहीं",
      "etym": "Prohibitive particle.",
      "note": "-"
    },
    {
      "text": "विद्विषावहै",
      "transliteration": "vidviṣāvahai",
      "translation": "May We Hate",
      "hindi": "हम द्वेष करें",
      "etym": "Prefix: vi + Root: dviṣ (to hate). Grammar: Imperative, 1st Person Dual (Atmanepada).",
      "note": "With 'mā', it means 'May we never dislike each other' (removing misunderstandings)."
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
      "transliteration": "Oṃ",
      "translation": "Om",
      "hindi": "ॐ",
      "etym": "-",
      "note": "-"
    },
    {
      "text": "शान्तिः",
      "transliteration": "śāntiḥ",
      "translation": "Peace",
      "hindi": "शांति (दैहिक)",
      "etym": "Root: śam (to be calm).",
      "note": "Peace from physical obstacles (Adhi-bhautika)."
    },
    {
      "text": "शान्तिः",
      "transliteration": "śāntiḥ",
      "translation": "Peace",
      "hindi": "शांति (दैविक)",
      "etym": "-",
      "note": "Peace from natural/divine disturbances (Adhi-daivika)."
    },
    {
      "text": "शान्तिः",
      "transliteration": "śāntiḥ",
      "translation": "Peace",
      "hindi": "शांति (आत्मिक)",
      "etym": "-",
      "note": "Peace from internal disturbances (Adhyātmika)."
    },
    {
      "text": "||",
      "transliteration": "||"
    }
  ]
},
{
  "type": "Pavamana Mantra",
  "verseIndex": "",
  "fullTransliteration": "Oṃ asato mā sadgamaya | Tamaso mā jyotirgamaya | Mṛtyor mā'mṛtaṃ gamaya | Oṃ śāntiḥ śāntiḥ śāntiḥ ||",
  "fullTranslation": "Om. Lead me from the unreal to the real. Lead me from darkness to light. Lead me from death to immortality. Om Peace, Peace, Peace.",
  "words": [
    {
      "text": "ॐ",
      "transliteration": "Oṃ",
      "translation": "Om",
      "hindi": "ॐ",
      "etym": "The Pranava.",
      "note": "The primordial sound."
    },
    {
      "text": "असतो",
      "transliteration": "asato",
      "translation": "From the Unreal",
      "hindi": "असत्य से",
      "etym": "Sandhi: asataḥ (असतः). Root: as (to be) -> a-sat (non-existence/untruth). Grammar: Ablative Singular Neuter.",
      "note": "Visarga becomes 'o' before voiced 'm'. Refers to the illusory world."
    },
    {
      "text": "मा",
      "transliteration": "mā",
      "translation": "Me",
      "hindi": "मुझे",
      "etym": "Pronoun: asmad. Grammar: Accusative Singular.",
      "note": "The object of the verb 'lead'."
    },
    {
      "text": "सद्गमय",
      "transliteration": "sad-gamaya",
      "translation": "Lead to the Real",
      "hindi": "सत्य की ओर ले चलो",
      "etym": "Sandhi: sat (सत् - Truth/Real) + gamaya (lead). The 't' changes to 'd' (Jashvta Sandhi) before voiced 'g'. Grammar: sat is Accusative Singular. gamaya is Causative Imperative, 2nd Person Singular.",
      "note": "Guide me to the Ultimate Reality."
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
      "text": "तमसो",
      "transliteration": "tamaso",
      "translation": "From Darkness",
      "hindi": "अंधकार से",
      "etym": "Sandhi: tamasaḥ (तमसः). Visarga becomes 'o' (Utva Sandhi) before voiced 'm'. Grammar: Ablative Singular Neuter.",
      "note": "Refers to the darkness of ignorance (avidya)."
    },
    {
      "text": "मा",
      "transliteration": "mā",
      "translation": "Me",
      "hindi": "मुझे",
      "etym": "Accusative Singular.",
      "note": "-"
    },
    {
      "text": "ज्योतिर्गमय",
      "transliteration": "jyotir-gamaya",
      "translation": "Lead to Light",
      "hindi": "प्रकाश की ओर ले चलो",
      "etym": "Sandhi: jyotiḥ (ज्योतिः - Light) + gamaya. Visarga becomes 'r' (Rutva Sandhi) before voiced 'g'. Grammar: jyotiḥ is Accusative Singular Neuter.",
      "note": "Refers to the light of Knowledge/Wisdom."
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
      "text": "मृत्योर्",
      "transliteration": "mṛtyor",
      "translation": "From Death",
      "hindi": "मृत्यु से",
      "etym": "Sandhi: mṛtyoḥ (मृत्योः). Visarga becomes 'r' (Rutva Sandhi) before voiced 'm'. Grammar: Ablative Singular Masculine.",
      "note": "Refers to the cycle of Samsara (birth and death)."
    },
    {
      "text": "मा",
      "transliteration": "mā",
      "translation": "Me",
      "hindi": "मुझे",
      "etym": "Accusative Singular.",
      "note": "-"
    },
    {
      "text": "ऽमृतं",
      "transliteration": "'mṛtaṃ",
      "translation": "To Immortality",
      "hindi": "अमरता की ओर",
      "etym": "Sandhi: mā + amṛtam. Savarna Dirgha Sandhi (ā + a = ā). Represented by Avagraha (ऽ) to show the merged vowel. Grammar: Accusative Singular Neuter.",
      "note": "Refers to Moksha (Liberation)."
    },
    {
      "text": "गमय",
      "transliteration": "gamaya",
      "translation": "Lead",
      "hindi": "ले चलो",
      "etym": "Root: gam (to go). Grammar: Causative Imperative, 2nd Person Singular.",
      "note": "-"
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
      "transliteration": "Oṃ",
      "translation": "Om",
      "hindi": "ॐ",
      "etym": "-",
      "note": "-"
    },
    {
      "text": "शान्तिः",
      "transliteration": "śāntiḥ",
      "translation": "Peace",
      "hindi": "शांति",
      "etym": "Root: śam. Grammar: Nominative Singular Feminine.",
      "note": "Peace from Adhi-bhautika (physical) obstacles."
    },
    {
      "text": "शान्तिः",
      "transliteration": "śāntiḥ",
      "translation": "Peace",
      "hindi": "शांति",
      "etym": "-",
      "note": "Peace from Adhi-daivika (divine/natural) obstacles."
    },
    {
      "text": "शान्तिः",
      "transliteration": "śāntiḥ",
      "translation": "Peace",
      "hindi": "शांति",
      "etym": "-",
      "note": "Peace from Adhyātmika (internal/self) obstacles."
    },
    {
      "text": "||",
      "transliteration": "||"
    }
  ]
},
{
  "type": "Anusara Invocation",
  "verseIndex": "",
  "fullTransliteration": "Oṃ namaḥ śivāya gurave | Saccidānanda-mūrtaye | Niṣprapañcāya śāntāya | Nirālambāya tejase ||",
  "fullTranslation": "Om. I bow to Shiva, the Supreme Teacher, who is the embodiment of Truth, Consciousness, and Bliss. I bow to Him who is beyond this world, who is Peace, who is independent of all support, and who is the illuminating Light.",
  "words": [
    {
      "text": "ॐ",
      "transliteration": "Oṃ",
      "translation": "Om",
      "hindi": "ॐ",
      "etym": "The Pranava.",
      "note": "The sacred primordial sound."
    },
    {
      "text": "नमः",
      "transliteration": "namaḥ",
      "translation": "Salutations",
      "hindi": "नमस्कार / नमन",
      "etym": "Indeclinable. Root: nam (to bow).",
      "note": "Governs the Dative case (implies 'to')."
    },
    {
      "text": "शिवाय",
      "transliteration": "śivāya",
      "translation": "To Shiva",
      "hindi": "शिव (कल्याणस्वरूप) को",
      "etym": "Root: śi (in whom all things lie). Grammar: Dative Singular Masculine of 'Śiva'.",
      "note": "The Auspicious One; the Supreme Self."
    },
    {
      "text": "गुरवे",
      "transliteration": "gurave",
      "translation": "To the Guru",
      "hindi": "गुरु (अंधकार मिटाने वाले) को",
      "etym": "Root: gṝ (to invoke/swallow darkness). Grammar: Dative Singular Masculine of 'Guru' (u-stem noun).",
      "note": "The spiritual teacher or the inner guiding light."
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
      "text": "सच्चिदानन्द",
      "transliteration": "sac-cid-ānanda",
      "translation": "Truth-Consciousness-Bliss",
      "hindi": "सत्-चित्-आनंद",
      "etym": "Sandhi: sat (existence) + cit (consciousness) + ānanda (bliss). 't' becomes 'c' before 'c' (Schutva Sandhi).",
      "note": "The essential nature of the Divine."
    },
    {
      "text": "मूर्तये",
      "transliteration": "mūrtaye",
      "translation": "To the Form/Embodiment",
      "hindi": "मूर्ति (स्वरूप) को",
      "etym": "Root: mūrch (to thicken/solidify). Grammar: Dative Singular Masculine of 'Mūrti' (i-stem noun).",
      "note": "He who takes the form of Existence-Knowledge-Bliss."
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
      "text": "निष्प्रपञ्चाय",
      "transliteration": "niṣprapañcāya",
      "translation": "To the Transcendent One",
      "hindi": "प्रपंच (संसार) से रहित को",
      "etym": "Compound: nis (without) + prapañca (expansion/manifest world). Grammar: Dative Singular Masculine.",
      "note": "He who is beyond the illusion of worldly multiplicity."
    },
    {
      "text": "शान्ताय",
      "transliteration": "śāntāya",
      "translation": "To the Peaceful",
      "hindi": "शांत स्वरूप को",
      "etym": "Root: śam (to be calm). Grammar: Dative Singular Masculine.",
      "note": "He who is the embodiment of absolute peace."
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
      "text": "निरालम्बाय",
      "transliteration": "nirālambāya",
      "translation": "To the Independent",
      "hindi": "आलंबन (सहारे) से रहित को",
      "etym": "Compound: nir (without) + ālamba (support). Grammar: Dative Singular Masculine.",
      "note": "He who needs no support because He supports everything else."
    },
    {
      "text": "तेजसे",
      "transliteration": "tejase",
      "translation": "To the Radiance",
      "hindi": "तेज (प्रकाश) स्वरूप को",
      "etym": "Root: tij (to be sharp/shine). Grammar: Dative Singular Neuter of 'Tejas' (s-stem noun).",
      "note": "The illuminating light of consciousness."
    },
    {
      "text": "||",
      "transliteration": "||"
    }
  ]
},
{
  "type": "Cirañjīviśloka (चिरञ्जीविश्लोक)",
  "verseIndex": "",
  "fullTransliteration": "Aśvatthāmā balirvyāso hanumāṃśca vibhīṣaṇaḥ | Kṛpaḥ paraśurāmaśca saptaite cirañjīvinaḥ || Saptaitān saṃsmarennityaṃ mārkaṇḍeyamathāṣṭamam | Jīvedvarṣaśataṃ so'pi sarvavyādhivivarjitaḥ ||",
  "fullTranslation": "Ashwatthama, King Bali, Vyasa, Hanuman, Vibhishana, Kripacharya, and Parashurama; these are the seven Chiranjeevis (Immortals). One who remembers these seven daily, along with Markandeya as the eighth, lives for a hundred years, free from all diseases.",
  "words": [
    {
      "text": "अश्वत्थामा",
      "transliteration": "aśvatthāmā",
      "translation": "Ashwatthama",
      "hindi": "अश्वत्थामा (द्रोण पुत्र)",
      "etym": "Noun. Grammar: Nominative Singular Masculine.",
      "note": "Son of Drona, cursed to roam the earth eternally."
    },
    {
      "text": "बलिर्व्यासो",
      "transliteration": "balir-vyāso",
      "translation": "Bali and Vyasa",
      "hindi": "राजा बलि और महर्षि व्यास",
      "etym": "Sandhi: baliḥ (बलिः) + vyāsaḥ (व्यासः). Visarga becomes 'r' before 'v'. Grammar: Nominative Singular Masculine.",
      "note": "Bali: The generous Daitya King. Vyasa: Author of the Mahabharata."
    },
    {
      "text": "हनुमांश्च",
      "transliteration": "hanumāṃśca",
      "translation": "And Hanuman",
      "hindi": "और हनुमान जी",
      "etym": "Sandhi: hanumān (हनुमान्) + ca (च). 'n' becomes anusvara and 's' is inserted (Schutva Sandhi).",
      "note": "The supreme devotee of Lord Rama."
    },
    {
      "text": "विभीषणः",
      "transliteration": "vibhīṣaṇaḥ",
      "translation": "Vibhishana",
      "hindi": "विभीषण",
      "etym": "Noun. Grammar: Nominative Singular Masculine.",
      "note": "Ravana's brother who stood for righteousness."
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
      "text": "कृपः",
      "transliteration": "kṛpaḥ",
      "translation": "Kripacharya",
      "hindi": "कृपाचार्य",
      "etym": "Noun. Grammar: Nominative Singular Masculine.",
      "note": "The Royal Guru of the Kuru dynasty."
    },
    {
      "text": "परशुरामश्च",
      "transliteration": "paraśurāmaśca",
      "translation": "And Parashurama",
      "hindi": "और परशुराम",
      "etym": "Sandhi: paraśurāmaḥ (परशुरामः) + ca (च). Visarga becomes 'ś' (Schutva Sandhi).",
      "note": "The warrior avatar of Vishnu."
    },
    {
      "text": "सप्तैते",
      "transliteration": "saptaite",
      "translation": "These Seven",
      "hindi": "ये सात",
      "etym": "Sandhi: sapta (seven) + ete (these). Vriddhi Sandhi (a + e = ai). Grammar: Nominative Plural Masculine.",
      "note": "Refers to the group listed above."
    },
    {
      "text": "चिरञ्जीविनः",
      "transliteration": "cirañjīvinaḥ",
      "translation": "The Immortals",
      "hindi": "चिरंजीवी (अमर)",
      "etym": "ciram (long time) + jīvinaḥ (living). Grammar: Nominative Plural Masculine.",
      "note": "Those who live until the end of the Kalpa."
    },
    {
      "text": "||",
      "transliteration": "||"
    },
    {
      "text": "<br>",
      "transliteration": "<br>"
    },
    {
      "text": "सप्तैतान्",
      "transliteration": "saptaitān",
      "translation": "These Seven",
      "hindi": "इन सातों को",
      "etym": "Sandhi: sapta (seven) + etān (these). Vriddhi Sandhi (a + e = ai). Grammar: Accusative Plural Masculine.",
      "note": "Object of the verb 'remember'."
    },
    {
      "text": "संस्मरेन्नित्यं",
      "transliteration": "saṃsmaren-nityaṃ",
      "translation": "Should Remember Daily",
      "hindi": "प्रतिदिन स्मरण करें",
      "etym": "Sandhi: saṃsmaret (should remember) + nityam (daily). 't' becomes 'n' (Anunasika Sandhi). Grammar: Potential (Vidhilin), 3rd Person Singular.",
      "note": "Instruction for the devotee."
    },
    {
      "text": "मार्कण्डेयमथाष्टमम्",
      "transliteration": "mārkaṇḍeyam-athāṣṭamam",
      "translation": "And Markandeya the Eighth",
      "hindi": "और आठवें मार्कण्डेय को",
      "etym": "Sandhi: mārkaṇḍeyam (Markandeya) + atha (then/also) + aṣṭamam (eighth). Savarna Dirgha Sandhi (a + a = ā).",
      "note": "Sage Markandeya is added as the 8th immortal."
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
      "text": "जीवेद्वर्षशतं",
      "transliteration": "jīved-varṣaśataṃ",
      "translation": "Lives for 100 Years",
      "hindi": "सौ वर्ष तक जीता है",
      "etym": "Sandhi: jīvet (should live) + varṣaśataṃ (century). 't' becomes 'd' (Jashvta Sandhi).",
      "note": "The fruit (phala) of the prayer."
    },
    {
      "text": "सोऽपि",
      "transliteration": "so'pi",
      "translation": "He Also",
      "hindi": "वह भी",
      "etym": "Sandhi: saḥ (he) + api (also). Visarga -> o, a -> Avagraha (Utva Sandhi).",
      "note": "-"
    },
    {
      "text": "सर्वव्याधिविवर्जितः",
      "transliteration": "sarvavyādhi-vivarjitaḥ",
      "translation": "Free from All Diseases",
      "hindi": "सभी रोगों से मुक्त",
      "etym": "Compound: sarva (all) + vyādhi (disease) + vivarjitaḥ (abandoned/freed). Grammar: Nominative Singular Masculine.",
      "note": "Total health and well-being."
    },
    {
      "text": "||",
      "transliteration": "||"
    }
  ]
},
{
  "type": "Sutra Passage",
  "verseIndex": "Heart Sutra 1",
  "fullTransliteration": "Oṃ namo bhagavatyai ārya-prajñāpāramitāyai | Āryāvalokiteśvaro bodhisattvo gambhīrāṃ prajñāpāramitā-caryāṃ caramāṇo vyavalokayati sma | Pañca-skandhās tāṃś ca svabhāva-śūnyān paśyati sma ||",
  "fullTranslation": "Om, homage to the Blessed Noble Perfection of Wisdom. The Noble Bodhisattva Avalokiteshvara, while practicing the deep practice of the Perfection of Wisdom, looked down; he beheld the five aggregates and saw that they were empty in their essential nature.",
  "words": [
    {
      "text": "ॐ नमो",
      "transliteration": "oṃ namo",
      "translation": "Om Homage",
      "hindi": "ॐ नमन",
      "etym": "Sacred syllable + namas (bow/homage).",
      "note": "-"
    },
    {
      "text": "भगवत्यै",
      "transliteration": "bhagavatyai",
      "translation": "To the Blessed One (Fem)",
      "hindi": "भगवती को",
      "etym": "Dative Singular Feminine.",
      "note": "Personifying Wisdom as a Goddess."
    },
    {
      "text": "आर्यावलोकितेश्वरो",
      "transliteration": "āryāvalokiteśvaro",
      "translation": "Noble Avalokiteshvara",
      "hindi": "आर्य अवलोकितेश्वर",
      "etym": "ārya (noble) + avalokita (gazed) + īśvara (lord).",
      "note": "The Bodhisattva of Compassion."
    },
    {
      "text": "गम्भीरां",
      "transliteration": "gambhīrāṃ",
      "translation": "Deep/Profound",
      "hindi": "गहरी",
      "etym": "Adjective. Accusative Singular.",
      "note": "-"
    },
    {
      "text": "चर्यां चरमाणो",
      "transliteration": "caryāṃ caramāṇo",
      "translation": "Practicing the Practice",
      "hindi": "चर्या (साधना) करते हुए",
      "etym": "caryā (conduct) + car (to move/practice). Participle.",
      "note": "-"
    },
    {
      "text": "व्यवलोकयति स्म",
      "transliteration": "vyavalokayati sma",
      "translation": "Looked Down/Observed",
      "hindi": "देखा",
      "etym": "vi + ava + lok. 'Sma' indicates past tense.",
      "note": "-"
    },
    {
      "text": "पञ्चस्कन्धास्",
      "transliteration": "pañca-skandhās",
      "translation": "Five Aggregates",
      "hindi": "पाँच स्कंध",
      "etym": "pañca (5) + skandha (heaps/components).",
      "note": "Form, feeling, perception, mental formations, consciousness."
    },
    {
      "text": "स्वभावशून्यान्",
      "transliteration": "svabhāva-śūnyān",
      "translation": "Empty of Self-Nature",
      "hindi": "स्वभाव से शून्य",
      "etym": "svabhāva (own nature) + śūnya (empty).",
      "note": "Lacking independent existence."
    },
    {
      "text": "पश्यति स्म",
      "transliteration": "paśyati sma",
      "translation": "Saw",
      "hindi": "देखा",
      "etym": "Root: dṛś (see).",
      "note": "-"
    }
  ]
},
{
  "type": "Sutra Passage",
  "verseIndex": "Heart Sutra 2",
  "fullTransliteration": "Iha śāriputra rūpaṃ śūnyatā śūnyataiva rūpam | Rūpānna pṛthak śūnyatā śūnyatāyā na pṛthag rūpam | Yad rūpaṃ sā śūnyatā yā śūnyatā tad rūpam | Evam eva vedanā-saṃjñā-saṃskāra-vijñānāni ||",
  "fullTranslation": "Here, O Shariputra, form is emptiness and emptiness is form. Form is not different from emptiness, and emptiness is not different from form. That which is form is emptiness, and that which is emptiness is form. The same applies to feeling, perception, mental formations, and consciousness.",
  "words": [
    {
      "text": "इह शारिपुत्र",
      "transliteration": "iha śāriputra",
      "translation": "Here O Shariputra",
      "hindi": "यहाँ हे शारिपुत्र",
      "etym": "-",
      "note": "-"
    },
    {
      "text": "रूपं शून्यता",
      "transliteration": "rūpaṃ śūnyatā",
      "translation": "Form is Emptiness",
      "hindi": "रूप शून्यता है",
      "etym": "-",
      "note": "-"
    },
    {
      "text": "एवमेव",
      "transliteration": "evam-eva",
      "translation": "Just So/In the Same Way",
      "hindi": "वैसे ही",
      "etym": "-",
      "note": "-"
    },
    {
      "text": "वेदना",
      "transliteration": "vedanā",
      "translation": "Feeling/Sensation",
      "hindi": "वेदना",
      "etym": "2nd Skandha.",
      "note": "-"
    },
    {
      "text": "संज्ञा",
      "transliteration": "saṃjñā",
      "translation": "Perception",
      "hindi": "संज्ञा",
      "etym": "3rd Skandha.",
      "note": "-"
    },
    {
      "text": "संस्कार",
      "transliteration": "saṃskāra",
      "translation": "Mental Formations",
      "hindi": "संस्कार",
      "etym": "4th Skandha (Volition).",
      "note": "-"
    },
    {
      "text": "विज्ञाननि",
      "transliteration": "vijñānāni",
      "translation": "Consciousness(es)",
      "hindi": "विज्ञान",
      "etym": "5th Skandha.",
      "note": "-"
    }
  ]
},
{
  "type": "Sutra Passage",
  "verseIndex": "Heart Sutra 3",
  "fullTransliteration": "Iha śāriputra sarva-dhamāḥ śūnyatā-lakṣaṇā anutpannā aniruddhā amalā avimalā anūnā asampūrṇāḥ ||",
  "fullTranslation": "Here, O Shariputra, all phenomena (dharmas) are marked by emptiness; they are not born, not destroyed, not stained, not pure, not deficient, and not complete.",
  "words": [
    {
      "text": "सर्वधर्माः",
      "transliteration": "sarva-dharmāḥ",
      "translation": "All Phenomena",
      "hindi": "सभी धर्म (तत्व)",
      "etym": "Nominative Plural.",
      "note": "All elements of existence."
    },
    {
      "text": "शून्यता लक्षणा",
      "transliteration": "śūnyatā-lakṣaṇā",
      "translation": "Marked by Emptiness",
      "hindi": "शून्यता के लक्षण वाले",
      "etym": "lakṣaṇa (characteristic/mark).",
      "note": "-"
    },
    {
      "text": "अनुत्पन्ना",
      "transliteration": "anutpannā",
      "translation": "Unborn",
      "hindi": "उत्पन्न नहीं हुए",
      "etym": "an (not) + utpanna (arisen).",
      "note": "-"
    },
    {
      "text": "अनिरुद्धा",
      "transliteration": "aniruddhā",
      "translation": "Unceasing/Not Destroyed",
      "hindi": "नष्ट नहीं होते",
      "etym": "an + niruddha (stopped).",
      "note": "-"
    },
    {
      "text": "अमला",
      "transliteration": "amalā",
      "translation": "Not Stained/Impure",
      "hindi": "मलिन नहीं",
      "etym": "a + mala (dirt).",
      "note": "-"
    },
    {
      "text": "अविमला",
      "transliteration": "avimalā",
      "translation": "Not Pure",
      "hindi": "विमल (शुद्ध) भी नहीं",
      "etym": "a + vimala (pure).",
      "note": "Beyond the duality of purity/impurity."
    },
    {
      "text": "अनूना",
      "transliteration": "anūnā",
      "translation": "Not Deficient",
      "hindi": "कम नहीं",
      "etym": "a + ūna (less).",
      "note": "-"
    },
    {
      "text": "असम्पूर्णाः",
      "transliteration": "asampūrṇāḥ",
      "translation": "Not Complete/Full",
      "hindi": "पूरे नहीं",
      "etym": "a + sampūrṇa.",
      "note": "They do not increase or decrease."
    }
  ]
},
{
  "type": "Sutra Passage",
  "verseIndex": "Heart Sutra 4",
  "fullTransliteration": "Tasmācchāriputra śūnyatāyāṃ na rūpaṃ na vedanā na saṃjñā na saṃskārā na vijñānam | Na cakṣuḥ-śrotra-ghrāṇa-jihvā-kāya-manāṃsi | Na rūpa-śabda-gandha-rasa-spraṣṭavya-dharmāḥ ||",
  "fullTranslation": "Therefore, O Shariputra, in emptiness there is no form, no feeling, no perception, no mental formations, no consciousness. There is no eye, ear, nose, tongue, body, or mind. There is no form, sound, smell, taste, touch, or mental object.",
  "words": [
    {
      "text": "तस्मात्",
      "transliteration": "tasmāt",
      "translation": "Therefore",
      "hindi": "इसलिए",
      "etym": "Ablative of Tad.",
      "note": "-"
    },
    {
      "text": "शून्यतायां",
      "transliteration": "śūnyatāyāṃ",
      "translation": "In Emptiness",
      "hindi": "शून्यता में",
      "etym": "Locative Singular.",
      "note": "-"
    },
    {
      "text": "न चक्षुः...",
      "transliteration": "na cakṣuḥ...",
      "translation": "No Eye...",
      "hindi": "न आँख...",
      "etym": "List of the 6 sense organs (Indriyas).",
      "note": "Negating the internal bases."
    },
    {
      "text": "न रूप...",
      "transliteration": "na rūpa...",
      "translation": "No Form...",
      "hindi": "न रूप...",
      "etym": "List of the 6 sense objects (Vishayas).",
      "note": "Negating the external bases."
    }
  ]
},
{
  "type": "Sutra Passage",
  "verseIndex": "Heart Sutra 5",
  "fullTransliteration": "Na cakṣur-dhātur yāvan na mano-vijñāna-dhātuḥ | Na avidyā na avidyā-kṣayo yāvan na jarā-maraṇaṃ na jarā-maraṇa-kṣayo | Na duḥkha-samudaya-nirodha-mārgā | Na jñānaṃ na prāptir na aprāptiḥ ||",
  "fullTranslation": "There is no eye-element and so forth up to no mind-consciousness element. There is no ignorance, no extinction of ignorance, and so forth up to no old age and death and no extinction of old age and death. There is no suffering, no origin, no cessation, no path. There is no knowledge, no attainment, and no non-attainment.",
  "words": [
    {
      "text": "चक्षुर्धातुर्",
      "transliteration": "cakṣur-dhātur",
      "translation": "Eye Element",
      "hindi": "चक्षु धातु",
      "etym": "dhātu (element/realm).",
      "note": "-"
    },
    {
      "text": "यावन्",
      "transliteration": "yāvan",
      "translation": "Up to/Until",
      "hindi": "जहाँ तक",
      "etym": "-",
      "note": "Used to abbreviate the list."
    },
    {
      "text": "मनोविज्ञानधातुः",
      "transliteration": "mano-vijñāna-dhātuḥ",
      "translation": "Mind-Consciousness Element",
      "hindi": "मनोविज्ञान धातु",
      "etym": "The 18th element.",
      "note": "-"
    },
    {
      "text": "न अविद्या",
      "transliteration": "na avidyā",
      "translation": "No Ignorance",
      "hindi": "न अविद्या",
      "etym": "The 1st link of Dependent Origination.",
      "note": "-"
    },
    {
      "text": "न जरामरणं",
      "transliteration": "na jarā-maraṇaṃ",
      "translation": "No Old Age & Death",
      "hindi": "न बुढ़ापा और मृत्यु",
      "etym": "The 12th link.",
      "note": "-"
    },
    {
      "text": "न दुःख...",
      "transliteration": "na duḥkha...",
      "translation": "No Suffering...",
      "hindi": "न दुःख...",
      "etym": "Negating the 4 Noble Truths.",
      "note": "Suffering, Origin, Cessation, Path."
    },
    {
      "text": "न प्राप्तिर्",
      "transliteration": "na prāptir",
      "translation": "No Attainment",
      "hindi": "न प्राप्ति",
      "etym": "prāpti (achievement).",
      "note": "Even enlightenment is not something 'attained'."
    }
  ]
},
{
  "type": "Sutra Passage",
  "verseIndex": "Heart Sutra 6",
  "fullTransliteration": "Tasmācchāriputra aprāptitvād bodhisattvasya prajñāpāramitām āśritya viharatyacittāvaraṇaḥ | Cittāvaraṇa-nāstitvād atrasto viparyāsātikrānto niṣṭhā-nirvāṇa-prāptaḥ ||",
  "fullTranslation": "Therefore, O Shariputra, because of non-attainment, the Bodhisattva, relying on the Perfection of Wisdom, dwells without obscuration of mind. Because of the absence of mental obscuration, he is fearless, having transcended falsity, and attains complete Nirvana.",
  "words": [
    {
      "text": "अप्राप्तित्वाद्",
      "transliteration": "aprāptitvād",
      "translation": "Because of Non-attainment",
      "hindi": "अप्राप्ति के कारण",
      "etym": "Ablative.",
      "note": "Because there is nothing to gain."
    },
    {
      "text": "आश्रित्य",
      "transliteration": "āśritya",
      "translation": "Relying On/Taking Refuge",
      "hindi": "आश्रय लेकर",
      "etym": "Gerund.",
      "note": "-"
    },
    {
      "text": "विहरति",
      "transliteration": "viharati",
      "translation": "Dwells/Lives",
      "hindi": "विहार करता है",
      "etym": "vi + hṛ (to dwell).",
      "note": "-"
    },
    {
      "text": "अचित्तावरणः",
      "transliteration": "acittāvaraṇaḥ",
      "translation": "Without Mind-Coverings",
      "hindi": "चित्त आवरण रहित",
      "etym": "a (without) + citta (mind) + āvaraṇa (obstruction).",
      "note": "Free from mental blocks/hindrances."
    },
    {
      "text": "अत्रस्तो",
      "transliteration": "atrasto",
      "translation": "Fearless",
      "hindi": "भयरहित",
      "etym": "a (no) + trasta (fear/trembling).",
      "note": "-"
    },
    {
      "text": "विपर्यास",
      "transliteration": "viparyāsa",
      "translation": "Illusions/Upside-down Views",
      "hindi": "भ्रम / विपर्यय",
      "etym": "Noun.",
      "note": "-"
    },
    {
      "text": "अतिक्रान्तो",
      "transliteration": "atikrānto",
      "translation": "Transcended/Stepped Beyond",
      "hindi": "पार किया हुआ",
      "etym": "ati + kram.",
      "note": "-"
    },
    {
      "text": "निष्ठानिर्वाण",
      "transliteration": "niṣṭhā-nirvāṇa",
      "translation": "Final/Complete Nirvana",
      "hindi": "परम निर्वाण",
      "etym": "-",
      "note": "-"
    }
  ]
},
{
  "type": "Sutra Passage",
  "verseIndex": "Heart Sutra 7",
  "fullTransliteration": "Tryadhva-vyavasthitāḥ sarva-buddhāḥ prajñāpāramitām āśrityānuttarāṃ samyak-saṃbodhim abhisaṃbuddhāḥ | Tasmāj jñātavyaṃ prajñāpāramitā mahā-mantro mahā-vidyā-mantro 'nuttara-mantro 'samasama-mantraḥ sarva-duḥkha-praśamanaḥ satyam amithyatvāt | Prajñāpāramitāyām ukto mantraḥ tadyathā: gate gate pāragate pārasaṃgate bodhi svāhā ||",
  "fullTranslation": "All Buddhas existing in the three times, relying on the Perfection of Wisdom, have fully awakened to the unsurpassed, perfect enlightenment. Therefore, one should know that the Perfection of Wisdom is the great mantra, the mantra of great knowledge, the unsurpassed mantra, the equal-to-the-unequalled mantra, which appeases all suffering; it is truth because it is not false. The mantra spoken in the Perfection of Wisdom is: Gate gate pāragate pārasaṃgate bodhi svāhā.",
  "words": [
    {
      "text": "त्र्यध्व",
      "transliteration": "tryadhva",
      "translation": "Three Times",
      "hindi": "तीन काल",
      "etym": "tri + adhvan (path/time).",
      "note": "Past, Present, Future."
    },
    {
      "text": "व्यवस्थिताः",
      "transliteration": "vyavasthitāḥ",
      "translation": "Situated/Existing",
      "hindi": "स्थित",
      "etym": "-",
      "note": "-"
    },
    {
      "text": "अनुत्तरां",
      "transliteration": "anuttarāṃ",
      "translation": "Unsurpassed",
      "hindi": "अनुत्तर (सर्वश्रेष्ठ)",
      "etym": "an + uttara (higher).",
      "note": "Nothing higher."
    },
    {
      "text": "सम्यक्संबोधिम्",
      "transliteration": "samyak-saṃbodhim",
      "translation": "Perfect Enlightenment",
      "hindi": "सम्यक सम्बोधि",
      "etym": "samyak (right/perfect) + bodhi.",
      "note": "-"
    },
    {
      "text": "महामन्त्रो",
      "transliteration": "mahā-mantro",
      "translation": "Great Mantra",
      "hindi": "महामंत्र",
      "etym": "-",
      "note": "-"
    },
    {
      "text": "असमसम",
      "transliteration": "asama-sama",
      "translation": "Unequalled/Equal to the Unequalled",
      "hindi": "असम-सम",
      "etym": "asama (unequal) + sama (equal).",
      "note": "A paradox implying supreme status."
    },
    {
      "text": "प्रशमनः",
      "transliteration": "praśamanaḥ",
      "translation": "Pacifier/Appeaser",
      "hindi": "शमन करने वाला",
      "etym": "pra + śam.",
      "note": "Removes suffering."
    },
    {
      "text": "अमिथ्यत्वात्",
      "transliteration": "amithyatvāt",
      "translation": "Because of Non-falsity",
      "hindi": "मिथ्या न होने से",
      "etym": "a + mithyā.",
      "note": "-"
    },
    {
      "text": "गते गते...",
      "transliteration": "gate gate...",
      "translation": "Gone, Gone...",
      "hindi": "गए, गए...",
      "etym": "See previous entry.",
      "note": "The Mantra."
    }
  ]
}
]