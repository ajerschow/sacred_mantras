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
}
]