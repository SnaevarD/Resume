// Translations for the résumé, used by vue-i18n (see js/main.js)
var messages = {
    en: {
        meta: {
            title: 'Snævar Dagur résumé',
            switchLanguage: 'Switch language',
            downloadPdf: 'Download CV as PDF',
            navigation: 'Sections'
        },
        contact: {
            profileAlt: 'Profile picture',
            nationality: 'Nationality',
            iceland: 'Iceland',
            location: 'Location',
            email: 'Email'
        },
        about: {
            title: 'About me',
            text: 'I am a Software Developer with a BSc in Computer Science and over 10 years of experience in designing, developing and maintaining software solutions, primarily within e-commerce and cybersecurity.\n\nThroughout my career, I have been involved in technical decision-making, coordinating development work and taking responsibility for seeing projects through to completion. I work well both independently and as part of a team, and value clear communication, collaboration and a solution-oriented approach.\n\nI have a strong interest in technology and continuously seek opportunities to develop my knowledge and skills.',
            familyTitle: 'Family',
            family: 'I live with my partner, Sigrún Gunnarsdóttir, who works as an Account Manager at Landsnet. Together, we have two children, Lára (born in 2021) and Gunnar Óliver (born in 2026).',
            interestsTitle: 'Interests & Hobbies',
            interests: 'I have a background in competitive swimming, having trained for 13 years and represented Iceland on the national team. I enjoy running, climbing and Brazilian jiu-jitsu, and have recently taken up golf. I also enjoy gaming in my spare time.'
        },
        skills: {
            title: 'Skills',
            vue: 'Progressive JavaScript framework for building reactive, component-based user interfaces',
            nuxt: 'Vue meta-framework adding server-side rendering, file-based routing and static site generation',
            react: 'JavaScript library from Meta for building user interfaces out of reusable components',
            angular: "Google's MVC framework for building dynamic single-page web applications",
            typescript: 'Typed superset of JavaScript that catches errors at compile time and scales to large codebases',
            csharp: "Microsoft's statically typed, object-oriented language for .NET back-end development",
            tailwind: 'Utility-first CSS framework for building custom designs directly in the markup',
            sass: 'CSS preprocessor adding variables, nesting and mixins for maintainable stylesheets',
            less: 'CSS preprocessor with variables, mixins and functions, compiled to plain CSS',
            dynamicweb: 'All-in-one .NET platform for CMS, e-commerce and PIM, used to build webstores',
            lisa: 'CRM system built by Advania, now rebranded as VEVA CMS',
            mssql: 'Microsoft SQL Server, a relational database management system'
        },
        languages: {
            title: 'Languages',
            icelandic: 'Icelandic',
            native: '(native)',
            english: 'English',
            professional: '(professional)'
        },
        sections: {
            workExperience: 'Work Experience',
            timeline: 'Timeline',
            notableProjects: 'Notable Projects',
            education: 'Education',
            overview: 'Overview',
            recommendations: 'Recommendations',
            references: 'References',
            availableOnRequest: 'Available upon request'
        },
        dates: {
            to: 'To',
            currentPrefix: '',
            current: 'Present',
            dec: 'Dec',
            janToMay: 'Jan To May'
        },
        jobs: {
            softwareDeveloper: 'Software Developer',
            seniorSoftwareDeveloper: 'Senior Software Developer',
            juniorSoftwareDeveloper: 'Junior Software Developer',
            teachingAssistant: 'Teaching assistant',
            pavementWorker: 'Pavement Worker',
            assistantGuide: 'Assistant Tour Guide',
            reykjavikUniversity: 'Reykjavik University',
            aftra1: "Part of the development team building Aftra's attack surface management platform, helping organizations identify and monitor their external exposure.",
            aftra2: "Worked on the core architecture and components of the platform's frontend.",
            aftra3: "Led the integration of AwareGO's security awareness training into the Aftra platform, with over 4,000 users completing training within the first month.",
            syndis1: "Worked on the early development of Aftra's attack surface management platform, which initially started as a project within Syndis.",
            syndis2: 'Gained experience in cybersecurity while contributing to the development of what would later become an independent startup.',
            advaniaSenior1: 'Developed and maintained e-commerce solutions for major Icelandic companies.',
            advaniaSenior2: 'Worked directly with clients to understand business requirements and develop tailored technical solutions.',
            advaniaSenior3: 'Worked alongside project managers to coordinate development work, including task planning and prioritization.',
            advaniaSenior4: "Played a major role in complex integrations and custom functionality, including combining S4S's separate webstores into one shared shopping cart so customers could browse and buy across brands in a single checkout.",
            advaniaJunior: 'Developed new features and maintained a variety of websites using HTML, CSS, JavaScript, XSLT and C#.',
            ruSeminar: 'Three-week seminar for first-year students, focused on building a full-fledged MVC application.',
            ruWebDev: 'Graded projects for Web Development II, an advanced web development course focused on front-end development.',
            colas: 'Summer job in road paving, including setting up roadblocks and paving roads.',
            ultimaThule: 'Part-time position as an assistant tour guide, ranging from long camping trips to daily cave tours.'
        },
        projects: {
            aftra1: 'Frontend architecture and development of the platform',
            aftra2: 'Led the AwareGO integration: 4,000+ users trained in the first month',
            s4s1: 'Key role in a shared cart connecting three separate webstores',
            s4s2: 'Customers buy across brands in a single checkout',
            olgerdin1: 'B2B webstores for Ölgerðin and Danól in DynamicWeb',
            olgerdin2: 'Business customers place orders online',
            advania1: 'Original DynamicWeb version of the webstore, migrated from LiSA',
            advania2: 'First Icelandic webstore built on DynamicWeb',
            byko1: "Contributed to BYKO's webstore with the Advania team",
            byko2: "Supported the company's expansion into online sales",
            arion1: "Iceland's first online loan affordability assessment",
            arion2: 'Customers complete the process online in minutes'
        },
        education: {
            reykjavikUniversity: 'Reykjavík University',
            ruText: 'BSc Computer Science with a grade of 8.1/10',
            universityOfIceland: 'University of Iceland',
            uiText: 'Completed coursework in pharmaceutical sciences and biology before pursuing Computer Science.',
            flensborg: 'Flensborg',
            flensborgText: 'High school / junior college with a focus on biology.'
        }
    },
    is: {
        meta: {
            title: 'Ferilskrá Snævars Dags',
            switchLanguage: 'Skipta um tungumál',
            downloadPdf: 'Sækja ferilskrá sem PDF',
            navigation: 'Kaflar'
        },
        contact: {
            profileAlt: 'Prófílmynd',
            nationality: 'Þjóðerni',
            iceland: 'Ísland',
            location: 'Staðsetning',
            email: 'Netfang'
        },
        about: {
            title: 'Um mig',
            text: 'Ég er hugbúnaðarsérfræðingur með BSc í tölvunarfræði og yfir 10 ára reynslu af hönnun, þróun og viðhaldi hugbúnaðarlausna, einkum á sviði netverslunar og netöryggis.\n\nÁ starfsferli mínum hef ég komið að tæknilegum ákvörðunum, samhæft þróunarvinnu og axlað ábyrgð á að fylgja verkefnum eftir til enda. Ég vinn vel bæði sjálfstætt og í teymi og legg áherslu á skýr samskipti, gott samstarf og lausnamiðaða nálgun.\n\nÉg hef mikinn áhuga á tækni og leita stöðugt tækifæra til að efla þekkingu mína og færni.',
            familyTitle: 'Fjölskylda',
            family: 'Ég bý með sambýliskonu minni, Sigrúnu Gunnarsdóttur, sem starfar sem viðskiptastjóri hjá Landsneti. Saman eigum við tvö börn, Láru (fædd 2021) og Gunnar Óliver (fæddur 2026).',
            interestsTitle: 'Áhugamál',
            interests: 'Ég á bakgrunn í keppnissundi, æfði í 13 ár og keppti fyrir hönd Íslands með landsliðinu. Ég hef gaman af hlaupum, klifri og brasilísku jiu-jitsu og hef nýlega byrjað í golfi. Í frítíma mínum hef ég einnig gaman af tölvuleikjum.'
        },
        skills: {
            title: 'Færni',
            vue: 'Framsækin JavaScript-umgjörð til að smíða gagnvirk, einingaskipt notendaviðmót',
            nuxt: 'Umgjörð ofan á Vue sem bætir við netþjónsbirtingu, skráarbyggðri leiðsögn og myndun kyrrstæðra vefsíðna',
            react: 'JavaScript-safn frá Meta til að smíða notendaviðmót úr endurnýtanlegum einingum',
            angular: 'MVC-umgjörð frá Google til að smíða gagnvirk einnar síðu vefforrit',
            typescript: 'Útvíkkun á JavaScript með tögum sem grípur villur við þýðingu og hentar vel stórum kóðagrunnum',
            csharp: 'Hlutbundið forritunarmál frá Microsoft með kyrrstæðum tögum, notað í bakendaþróun á .NET',
            tailwind: 'CSS-umgjörð byggð á hjálparklösum til að smíða sérsniðið útlit beint í HTML-kóðanum',
            sass: 'CSS-forvinnsla sem bætir við breytum, hreiðrun og mixins fyrir viðhaldanleg stílblöð',
            less: 'CSS-forvinnsla með breytum, mixins og föllum sem þýðist yfir í hreint CSS',
            dynamicweb: 'Heildstæð .NET-lausn fyrir vefumsjón, netverslun og vöruupplýsingar (PIM), notuð til að smíða netverslanir',
            lisa: 'CRM-kerfi smíðað af Advania, nú endurmerkt sem VEVA CMS',
            mssql: 'Microsoft SQL Server, venslagagnagrunnskerfi'
        },
        languages: {
            title: 'Tungumál',
            icelandic: 'Íslenska',
            native: '(móðurmál)',
            english: 'Enska',
            professional: '(fagleg færni)'
        },
        sections: {
            workExperience: 'Starfsreynsla',
            timeline: 'Tímalína',
            notableProjects: 'Helstu verkefni',
            education: 'Menntun',
            overview: 'Yfirlit',
            recommendations: 'Meðmæli',
            references: '',
            availableOnRequest: 'Að beiðni'
        },
        dates: {
            to: 'Til',
            currentPrefix: '',
            current: 'Núverandi',
            dec: 'Des',
            janToMay: 'Jan til maí'
        },
        jobs: {
            softwareDeveloper: 'Hugbúnaðarsérfræðingur',
            seniorSoftwareDeveloper: 'Senior hugbúnaðarsérfræðingur',
            juniorSoftwareDeveloper: 'Junior hugbúnaðarsérfræðingur',
            teachingAssistant: 'Aðstoðarkennari',
            pavementWorker: 'Malbikunarstarfsmaður',
            assistantGuide: 'Aðstoðarleiðsögumaður',
            reykjavikUniversity: 'Háskólinn í Reykjavík',
            aftra1: 'Hluti af þróunarteyminu sem smíðar lausn Aftra til vöktunar á árásarfleti, sem hjálpar fyrirtækjum að greina og vakta ytri veikleika sína.',
            aftra2: 'Vann að grunnarkitektúr og íhlutum framenda lausnarinnar.',
            aftra3: 'Leiddi samþættingu öryggisvitundarþjálfunar AwareGO inn í lausn Aftra; yfir 4.000 notendur luku þjálfun á fyrsta mánuðinum.',
            syndis1: 'Vann að fyrstu þróun á lausn Aftra til vöktunar á árásarfleti, sem hófst upphaflega sem verkefni innan Syndis.',
            syndis2: 'Öðlaðist reynslu af netöryggi samhliða þróun á því sem síðar varð að sjálfstæðu sprotafyrirtæki.',
            advaniaSenior1: 'Þróaði og viðhélt netverslunarlausnum fyrir stór íslensk fyrirtæki.',
            advaniaSenior2: 'Vann náið með viðskiptavinum við að greina viðskiptaþarfir og þróa sérsniðnar tæknilausnir.',
            advaniaSenior3: 'Vann með verkefnastjórum að samhæfingu þróunarvinnu, þar á meðal skipulagningu verkefna og forgangsröðun.',
            advaniaSenior4: 'Lék lykilhlutverk í flóknum samþættingum og sérsniðinni virkni, þar á meðal í að sameina aðskildar netverslanir S4S í eina sameiginlega innkaupakörfu svo viðskiptavinir gátu skoðað og verslað þvert á vörumerki í einni greiðslu.',
            advaniaJunior: 'Þróaði nýja virkni og sá um viðhald á fjölbreyttum vefjum með HTML, CSS, JavaScript, XSLT og C#.',
            ruSeminar: 'Þriggja vikna námskeið fyrir fyrsta árs nema með áherslu á smíði heildstæðs MVC-forrits.',
            ruWebDev: 'Yfirferð verkefna í Vefforritun II, framhaldsnámskeiði í vefþróun með áherslu á framenda.',
            colas: 'Sumarstarf við malbikun, uppsetningu vegatálma og lagningu vega.',
            ultimaThule: 'Hlutastarf sem aðstoðarleiðsögumaður. Allt frá löngum tjaldferðum til daglegra hellaferða.'
        },
        projects: {
            aftra1: 'Framendaarkitektúr og þróun lausnarinnar',
            aftra2: 'Leiddi samþættingu AwareGO: yfir 4.000 notendur þjálfaðir á fyrsta mánuði',
            s4s1: 'Lykilhlutverk í sameiginlegri körfu sem tengir þrjár vefverslanir',
            s4s2: 'Viðskiptavinir versla þvert á vörumerki í einni greiðslu',
            olgerdin1: 'B2B-vefverslanir fyrir Ölgerðina og Danól í DynamicWeb',
            olgerdin2: 'Fyrirtækjaviðskiptavinir panta á netinu',
            advania1: 'Upprunaleg DynamicWeb-útgáfa vefverslunarinnar, færð úr LiSA',
            advania2: 'Fyrsta íslenska vefverslunin byggð á DynamicWeb',
            byko1: 'Tók þátt í þróun vefverslunar BYKO með teymi Advania',
            byko2: 'Studdi við sókn fyrirtækisins í netsölu',
            arion1: 'Fyrsta rafræna greiðslumatið á Íslandi',
            arion2: 'Viðskiptavinir ljúka ferlinu á netinu á nokkrum mínútum'
        },
        education: {
            reykjavikUniversity: 'Háskólinn í Reykjavík',
            ruText: 'BSc í tölvunarfræði með einkunnina 8,1/10',
            universityOfIceland: 'Háskóli Íslands',
            uiText: 'Lauk námskeiðum í lyfjafræði og líffræði áður en ég hóf nám í tölvunarfræði.',
            flensborg: 'Flensborgarskólinn',
            flensborgText: 'Framhaldsskóli með áherslu á líffræði'
        }
    }
};
