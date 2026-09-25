export interface InstructionStep {
  title: string;
  description: string[];
  image?: string;
  bullets?: string[];
}

export interface DeviceInstruction {
  title: string;

  breadcrumb:
    | string
    | { name: string; path: string }[];

  heroImage: string;
  deviceImage: string;

  steps: InstructionStep[];

  recommendedApps: {
    name: string;
    image: string;
    href?: string;
  }[];

  summary: string;
  helpTitle: string;
  helpDescription: string;

  relatedInstructions: {
    title: string;
    path: string;
  }[];
}

export const deviceInstructions: Record<string, DeviceInstruction> = {
  "apple-tv": {
    title: "Hur man kör IPTV på Apple TV",
    breadcrumb: "Hur man kör IPTV på Apple TV",

    heroImage: ".jpg",
    deviceImage: "/images/AppleBoxRemote.webp",

    steps: [
      {
        title: "Step 1: IPTV with Apple TV Box",

        description: [
          "For best results, use a compatible Apple TV device. Make sure your Apple TV is connected to the internet and ready for setup.",
          "Follow the instructions below to configure IPTV on your Apple TV."
        ],
        image: "/images/Apple-TV-2-.webp",
      },

      {
        title: "Step 2: Basic Apple TV Setup",

        description: [
          "Connect your Apple TV to your television using an HDMI cable. Turn on the device and follow the on-screen setup instructions.",
          "Connect to your Wi-Fi network and make sure your Apple TV is updated before installing an IPTV application."
        ],

        image: "/images/Apple-TV-3-.webp",
      },

      {
        title: "Step 3: Download the IPTV app",

        description: [
          "Open the App Store on your Apple TV and search for a compatible IPTV application.",
          "Choose an application, install it, and open it after the installation is complete."
        ],

        bullets: [
          "IPTVX",
          "iPlayTV",
          "GSE Smart IPTV",
          "IPTV Smarters",
          "IPTVX",
          "iPlayTV",
          "GSE Smart IPTV",
          "IPTV Smarters"
        ],

        image: "/images/Apple-TV-4-.webp",
      },

      {
        title: "Step 4: Test IPTV on Apple TV",

        description: [
          "Open your installed IPTV application and enter the subscription details provided by your IPTV service.",
          "Once the setup is complete, check that your channels load correctly."
        ],

       image: "/images/Apple-TV-5.webp",
      },

      {
        title: "Step 5: Summary",

        description: [
          "Your Apple TV is now ready to use with your IPTV application. Keep your application updated for the best experience."
        ],

        image: "/images/apple-tv/step-5.jpg",
      },
    ],

   recommendedApps: [
  // First row
  {
    name: "IPTVX",
    image: "/images/iptvx-logo-1.jpg",
  },
  {
    name: "iPlayTV",
    image: "/images/iptv-logo-2.jpg",
  },
  {
    name: "Perfect IPTV",
    image: "/images/iptv-logo-3.png",
  },
  {
    name: "IPTV Expert",
    image: "/images/iptv-logo-4.webp",
  },

  // Second row — your other images
  {
    name: "App 5",
    image: "/images/iptv-logo-5.png",
  },
  {
    name: "App 6",
    image: "/images/iptv-logo-6.jpg",
  },
  {
    name: "App 7",
    image: "/images/iptv-logo-7.png",
  },
  {
    name: "App 8",
    image: "/images/iptv-logo-6.webp",
  },
],


    summary:
      "We recommend using a compatible IPTV application and keeping your Apple TV software updated.",

    helpTitle: "Need Help?",

    helpDescription:
      "If you experience any issues during installation, check your device settings and make sure your internet connection is working.",

    relatedInstructions: [
      {
        title: "Smart TV",
        path: "/install-iptv/smart-tv",
      },
      {
        title: "Android Box",
        path: "/install-iptv/android-box",
      },
      {
        title: "Mobile / Tablet",
        path: "/install-iptv/mobile-tablet",
      },
      {
        title: "Computer",
        path: "/install-iptv/computer",
      },
    ],
  },

  "smart-tv": {
  title: "Hur man kör IPTV på Smart TV",
  breadcrumb: "Hur man kör IPTV på Smart TV",

  // Hero background image
  heroImage: "/images/instruction-hero.jpg",

  // Main Smart TV image
  deviceImage: "/images/smart-tv/smart-tv-main.png",

  // ================= INSTALLATION STEPS =================

  steps: [
    {
      title: "Step 1: IPTV with Apple TV Box",

      description: [
        "The first step is to make sure your Smart TV is ready for IPTV setup. Connect your television to the internet and make sure it is working correctly.",
        "Whether you have a Samsung, LG, or another Smart TV, the setup process may vary depending on your device and operating system.",
      ],

      image: "/images/smart-tv/step-1.png",
    },

    {
      title: "Step 2: Configuring basic settings",

      description: [
        "Complete the basic setup and connect your Smart TV to your home network. Make sure your TV has an active internet connection.",
        "Open your TV's application store and check that your device is updated. This will help you install and run compatible IPTV applications.",
        "Once the basic setup is complete, you can continue with installing an IPTV application.",
      ],

      image: "/images/smart-tv/step-2.png",
    },

    {
      title: "Step 3: Download the IPTV app",

      description: [
        "There are several IPTV applications available for Smart TVs. The available apps depend on your TV model and operating system.",
        "Open your TV's app store, search for a compatible IPTV application, and install it.",
      ],

      bullets: [
        "IPTV Smarters",
        "Smart IPTV",
        "SET IPTV",
        "NET IPTV",
        "IPTV Streamer",
        "Duplex Play",
        "TiviMate",
        "IPTV Extreme",
      ],

      image: "/images/smart-tv/step-3.png",
    },

    {
      title: "Step 4: Test / buy our service",

      description: [
        "Now it's time to test your IPTV service. Open the IPTV application you installed and follow its setup instructions.",
        "Enter the subscription details provided by your IPTV service. Make sure the information is entered correctly.",
        "Once the setup is complete, check whether your channels load correctly.",
      ],

      image: "/images/smart-tv/step-4.png",
    },

    {
      title: "Step 5: Enjoy IPTV!",

      description: [
        "Great! Your Smart TV is now ready to use with your IPTV application.",
        "You can now browse available channels and enjoy your IPTV service. Keep your application updated for a smooth experience.",
      ],
    },
  ],

  // ================= RECOMMENDED APPS =================

  recommendedApps: [
    {
      name: "IPTV Pro",
      image: "/images/apps/iptv-pro.png",
    },
    {
      name: "TV IPTV",
      image: "/images/apps/tv-iptv.png",
    },
    {
      name: "SET IPTV",
      image: "/images/apps/set-iptv.png",
    },
    {
      name: "NET IPTV",
      image: "/images/apps/net-iptv.png",
    },
    {
      name: "TiviMate",
      image: "/images/apps/tivimate.png",
    },
    {
      name: "IPTV Extreme",
      image: "/images/apps/iptv-extreme.png",
    },
    {
      name: "Duplex Play",
      image: "/images/apps/duplex-play.png",
    },
    {
      name: "Hot IPTV",
      image: "/images/apps/hot-iptv.png",
    },
    {
      name: "XUI IPTV Player",
      image: "/images/apps/xui-iptv-player.png",
    },
    {
      name: "Smart STB",
      image: "/images/apps/smart-stb.png",
    },
    {
      name: "Samsung IPTV",
      image: "/images/apps/samsung-iptv.png",
    },
    {
      name: "BO Player",
      image: "/images/apps/bo-player.png",
    },
    {
      name: "IPTV Smarters Pro",
      image: "/images/apps/iptv-smarters-pro.png",
    },
    {
      name: "IPTV Streamer",
      image: "/images/apps/iptv-streamer.png",
    },
    {
      name: "Xtream IPTV",
      image: "/images/apps/xtream-iptv.png",
    },
  ],

  // ================= SUMMARY =================

  summary:
    "Your Smart TV is ready to use with your selected IPTV application. Make sure your internet connection is stable and your IPTV app is correctly configured.",

  // ================= HELP SECTION =================

  helpTitle: "Need Help?",

  helpDescription:
    "If you experience any issues during installation, check your internet connection and IPTV application settings. Make sure your Smart TV supports the application you want to use.",

  // ================= MORE INSTRUCTIONS =================

  relatedInstructions: [
    {
      title: "Apple TV",
      path: "/install-iptv/apple-tv",
    },
    {
      title: "Android Box",
      path: "/install-iptv/android-box",
    },
    {
      title: "Mobile / Tablet",
      path: "/install-iptv/mobile-tablet",
    },
    {
      title: "Computer",
      path: "/install-iptv/computer",
    },
  ],
},

"mobile-tablet": {
  title: "Hur man kör IPTV på Mobil / Tablet",
  breadcrumb: "Hur man kör IPTV på Mobil / Tablet",

  // ================= HERO & DEVICE IMAGE =================

  heroImage: "/images/instruction-hero.jpg",

  deviceImage:
    "https://finlandiptv.com/wp-content/uploads/2025/06/android-1024x576-1.webp",

  // ================= INSTALLATION STEPS =================

  steps: [
    {
      title: "The following steps should be followed:",

      description: [
        "Follow the steps below to set up IPTV on your mobile phone or tablet.",
      ],

      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/14apple-tv-Steg-2.png",
    },

    {
      title: "1. IPTV on a mobile device",

      description: [
        "IPTV on your mobile device is one of the best ways to watch IPTV. With IPTV on your mobile device, all your channels are in your pocket as long as you have an internet connection. Apps can replace expensive streaming services because everything is available to you on your mobile device when you are on the go.",

        "Of course, our channels work worldwide. If you want to save money, you can cancel your streaming services because you no longer need them when you have IPTV on your mobile device.",
      ],

      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/android-1024x576-1.webp",
    },

    {
      title: "2. IPTV on tablet",

      description: [
        "IPTV på nettbrett eller mobile – Kom i Gang",

        "Start med å completen det basic setupet på ditt nye nettbrett eller mobile phone, og gotta possibilitä og konsidering. Log in, or Opprett en Google account (Android) or iCloud account (iOS). Ta vare på emballagen, da den kan være necessit ved garanti eller retur.",

        "Connect the device to the internet. Du kan bruke mobildata, men vær aksen på at databruken kan være limited. For best stability, a wired connection via Ethernet is recommended. Wi-Fi works fine if the router is close and the signal is strong. Both 4G and 5G work well on the fart.",

        "Avoid storing items such as refrigerators, wardrobes, or tyke vegger blocker signals, so that the connection is poor.",
      ],

      bullets: [
        "iPhone (X-15 Pro)",
        "Samsung Galaxy (nyere modeller)",
        "Samsung Z Fold and Z Flip",
      ],

      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/Kop-en-smartphone-eller-surfplatta-svenskiptv-1024x683-1.webp",
    },

    {
      title: "3. IPTV on iPhone",

      description: [
        "IPTV on iPhone – We recommend that you buy a new iPhone model from a reputable retailer such as Elgiganten, Power or Webhallen. Of course, you can use the iPhone you already own.",

        "We do not recommend buying a used mobile phone or tablet because you never know how the device has been treated in the past. A used device may have worn out parts such as the hard drive, processor or RAM, which can negatively affect its performance.",

        "If you plan to use your device for IPTV while traveling or away from home, a new iPhone is an excellent option.",

        "Remember that if you want to change your mobile set-top box or TV, it is recommended to use Apple TV or Formuler box for best results.",

        "Whether you're buying a new iPhone or using your current one, it can be a good idea to uninstall unnecessary apps. This will free up storage space and reduce the load on RAM, as many apps may be active in the background.",
      ],

      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/IPTV-med-Mobilen-IPTV-med-Surfplattan-Svensk-IPTV-1024x683-1.webp",
    },

    {
      title: "4. IPTV on Android",

      description: [
        "IPTV on an Android phone or tablet – We recommend that you buy a new Android device from a reputable retailer like Elgiganten, Power or Webhallen. You can of course use your existing device, but we don’t recommend buying a used phone or tablet as it’s hard to know how it’s been used in the past.",

        "A used device may have wear and tear on important components like the hard drive, processor or RAM, which can negatively affect its performance.",

        "If you plan to use your device for IPTV on the go or away from home, this is a great choice for you.",

        "However, if you want to replace your mobile device with a set-top box or TV, it is recommended to use an Apple TV or Formuler box for the best user experience.",

        "Whether you're using your current Android device or buying a new one, you may want to uninstall unnecessary apps that you're not using. This will free up space on your device's storage and reduce the load on your RAM, as many apps can run in the background.",
      ],

      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/svensk-iptv-1024x550-1.png",
    },

    {
      title: "5. Download the IPTV mobile app",

      description: [
        "There are many different IPTV apps available for mobile phones and tablets. Below are some of the best ones that work great on both Apple (iOS) and Android devices. It is best to download the apps from the Play Store or the App Store.",
      ],

      bullets: [
        "IPTV Smarters (iOS and Android)",
        "IPTV Streamer (iOS and Android)",
        "Extreme IPTV Pro (Android)",
        "GSE Smart IPTV Pro (iOS and Android)",
        "Perfect IPTV (iOS)",
        "IPTVX (iOS)",
      ],

      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/Se-IPTV-med-mobilen-svensk-iptv-1024x652-1.webp",
    },

    {
      title: "6. Summary",

      description: [
        "Finally, we recommend that you buy a new mobile phone or tablet if you don't already have one. Do the basic settings and connect your device to the internet (Wi-Fi or mobile browsing).",

        "Download the IPTV app and request a free trial or purchase a 1-12 month package from us. Enjoy channels, movies, series, documentaries and all PPV events!",
      ],
    },
  ],

  // ================= RECOMMENDED APPS =================

  recommendedApps: [
    {
      name: "TV IPTV",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/109apple-tv-Steg-2.png",
    },
    {
      name: "NET IPTV",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/12apple-tv-Steg-2.png",
    },
    {
      name: "9Xtream IPTV",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/unnamed-1.webp",
    },
    {
      name: "IPTV World",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/15apple-tv-Steg-2.png",
    },
    {
      name: "IPTV Smarters Pro",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/IPTV-Smarters-PRO.png",
    },
    {
      name: "IPTV Streamer",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/iptv-streamer.webp",
    },
    {
      name: "Xtream IPTV",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/Xtream-IPTV.png",
    },
    {
      name: "GSE Smart IPTV Pro",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/GSE-Player.jpg",
    },
    {
      name: "IPTVX",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/iptvx-logo.jpg",
    },
    {
      name: "Perfect IPTV",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/perfect-iptv-300x300.png",
    },
    {
      name: "IPTV Expert",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/IPTV-Expert-300x300.webp",
    },
    {
      name: "IPTV Pro",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/unnamed-300x300.jpg",
    },
    {
      name: "Mega IPTV",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/16apple-tv-Steg-2.png",
    },
    {
      name: "iMPlayer Mobile",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/17apple-tv-Steg-2.png",
    },
  ],

  // ================= SUMMARY =================

  summary:
    "Finally, we recommend that you buy a new mobile phone or tablet if you don't already have one. Do the basic settings and connect your device to the internet (Wi-Fi or mobile browsing). Download the IPTV app and request a free trial or purchase a 1-12 month package from us. Enjoy channels, movies, series, documentaries and all PPV events!",

  // ================= HELP SECTION =================

  helpTitle: "Nils Hedlund",

  helpDescription:
    "My name is Nils Hedlund, and I write about streaming and digital entertainment. My goal is to make modern streaming technology easier to understand by providing clear guides, helpful tips, and expert insights on Smart TVs, different streaming devices, performance optimization, and new technology solutions that help readers get more out of their viewing experience.",

  // ================= MORE INSTRUCTIONS =================

  relatedInstructions: [
    {
      title: "Apple TV",
      path: "/install-iptv/apple-tv",
    },
    {
      title: "Smart TV",
      path: "/install-iptv/smart-tv",
    },
    {
      title: "Android Box",
      path: "/install-iptv/android-box",
    },
    {
      title: "Computer",
      path: "/install-iptv/computer",
    },
  ],
},

"computer": {
  title: "Hur man kör IPTV på dator",
  breadcrumb: "Hur man kör IPTV på dator",

  // ================= HERO & DEVICE IMAGE =================

  heroImage: "/images/instruction-hero.jpg",

  deviceImage:
    "https://finlandiptv.com/wp-content/uploads/2025/06/20apple-tv-Steg-2.png",

  // ================= INSTALLATION STEPS =================

  steps: [
    {
      title: "Recommended apps: 70",

      description: [
        "Choose an IPTV application that is compatible with your computer.",
      ],
    },

    {
      title: "Download the IPTV app",

      description: [
        "Download and install a compatible IPTV application for your Windows or Mac computer.",
      ],

      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/IPTV-med-Mac-dator-768x473-1.jpeg",
    },

    {
      title: "1. Best IPTV Apps for PC",

      description: [
        "There are many IPTV apps available for computers these days, but most of them are not of very good quality. That is why we have compiled the best apps that we feel work the best.",

        "Below you will find some apps that we recommend and that work great on computers from Acer, Asus, MSI, Lenovo, MAC and many other brands. It is best to download the apps from Playstore or Appstore.",

        "Want to know more about the best IPTV app, read more here.",
      ],

      bullets: [
        "IPTV Smarters",
        "MyIPTV Player",
        "Duplex Play",
        "GSE Smart IPTV Pro",
      ],

      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/IPTV-App-Mac-dator-768x486-1.jpeg",
    },

    {
      title: "2. IPTV on your computer – trial period",

      description: [
        "Now is the time to request a free trial by clicking the button below. We recommend purchasing a 3-month subscription after the trial period so you have time to explore our huge selection.",

        "We offer practically every sport, every movie, series and documentary you can imagine. Our entire selection is also included in the free trial. Read more about our selection here.",
      ],

      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/IPTV-pa-datorn-768x356-1.jpg",
    },

    {
      title: "3. Summary",

      description: [
        "Finally, we recommend getting a new computer for watching IPTV. Start by completing the basic setup and connecting your computer to the internet, preferably with a network cable. Then download the IPTV app and request a free trial or purchase a 1-12 month package from us.",

        "Enjoy channels, movies, series, documentaries and all PPV events! Since many IPTV applications for computers are not optimal, we have listed the best alternatives for both Windows and MAC OS devices. Of course, you can also try other applications, as most of them work the same way in terms of installation.",

        "Using IPTV on your computer is a popular and easy way to access a wide range of channels, movies, and series over the internet. To get started, you will need a stable internet connection and an IPTV player that can handle streams from your IPTV provider.",

        "Some of the most common IPTV players for your computer include VLC Media Player, Kodi, and MyIPTV Player.",
      ],

      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/IPTV-med-datorn-1024x511-1.webp",
    },

    {
      title: "4. IPTV PC is easier than you think",

      description: [
        "Using IPTV on your computer is easy. First, you need to download and install an IPTV player. Once the player is installed, add the IPTV provider’s M3U link or file containing the channel information.",

        "By downloading this link or file, you will gain access to the IPTV service. VLC Media Player is one of the most popular and user-friendly IPTV players for computers. It is free and supports a wide range of file formats.",

        "If you are looking for a more customizable solution, Kodi can be a good option, as it has a lot of add-ons and additional features.",

        "MyIPTV Player, which is available for Windows, also offers a simple and smooth user experience.",

        "With IPTV on your computer, you can easily stream live TV, movies, and series on demand, making it a flexible solution for watching entertainment on your screen.",
      ],

      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/IPTV-med-datorn-1024x511-1.webp",
    },
  ],

  // ================= RECOMMENDED APPS =================

  recommendedApps: [
    {
      name: "IPTV Smarter",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/116apple-tv-Steg-2.png",
    },
    {
      name: "MAC",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/18apple-tv-Steg-2.jpg",
    },
  ],

  // ================= SUMMARY =================

  summary:
    "Finally, we recommend getting a new computer for watching IPTV. Complete the basic setup, connect your computer to the internet, download an IPTV app, and request a free trial or purchase a 1-12 month package.",

  // ================= HELP SECTION =================

  helpTitle: "Nils Hedlund",

  helpDescription:
    "My name is Nils Hedlund, and I write about streaming and digital entertainment. My goal is to make modern streaming technology easier to understand by providing clear guides, helpful tips, and expert insights on Smart TVs, different streaming devices, performance optimization, and new technology solutions that help readers get more out of their viewing experience.",

  // ================= MORE INSTRUCTIONS =================

  relatedInstructions: [
    {
      title: "Apple TV",
      path: "/install-iptv/apple-tv",
    },
    {
      title: "Smart TV",
      path: "/install-iptv/smart-tv",
    },
    {
      title: "Mobile / Tablet",
      path: "/install-iptv/mobile-tablet",
    },
    {
      title: "Android Box",
      path: "/install-iptv/android-box",
    },
  ],
},


"android-box": {
  title: "How to Run IPTV on Android Box",

  breadcrumb: [
    { name: "Home", path: "/" },
    { name: "Instructions", path: "/instructions" },
    {
      name: "Android Box",
      path: "/install-iptv/android-box",
    },
  ],

  heroImage:
    "https://finlandiptv.com/wp-content/uploads/2025/06/19apple-tv-Steg-2.png",

  deviceImage:
    "https://finlandiptv.com/wp-content/uploads/2025/06/636499255234408799-GettyImages-627660950-scaled-1-1024x578-1.jpeg",

  steps: [
    {
      title: "The following steps should be followed",

      description: [
        "Follow the steps below to set up IPTV on your Android box.",
      ],
    },

    {
      title: "1. Buy an Android box",

      description: [
        "Buy an Android box from one of the larger chains, such as Elgiganten, Power, Webhallen or Satvision. We do not recommend buying a used Android box, as you never know how it has been used before. A used device may have been exposed to wear and tear, which can affect important components such as the hard drive, processor or RAM. We recommend using an Apple TV or a Formuler box instead.",

        "Whether you already have an Android box or are buying a new one, it might be a good idea to remove unnecessary apps that you don't use, as they take up space on your box's storage. IPTV with a TVIP box is also a good option for watching IPTV.",
      ],

      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/IPTV-Smart-TV-LG-768x431-1-1.png",
    },

    {
      title: "2. Basic settings",

      description: [
        "Complete the basic setup and accept any terms and conditions on your new Android box, if it is new. Keep the packaging as it may be covered by the warranty.",

        "Also connect your new box to your network. We recommend using an Ethernet cable (network cable) for the best stability, but Wi-Fi also works well if your router is not too far away and offers good coverage in your home.",

        "If large objects such as refrigerators, wardrobes, doors, etc. block the signal, your Android box may experience connection issues. To avoid this, use a network cable between the device and the router.",
      ],

      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/panasonicplex-1l-768x405-1.jpeg",
    },

    {
      title: "3. Download the IPTV app",

      description: [
        "There are many different IPTV apps available for Android boxes these days. Below you can see a few that we recommend. It is best to download the apps from the Play Store.",
      ],

      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/photo-1461151304267-38535e780c79-1-768x432-1-1.webp",
    },

    {
      title: "4. IPTV - FREE TRIAL",

      description: [
        "Now is the time to request a free trial from us by clicking the button below. We always recommend purchasing a 3-month subscription after the free trial so that you really have time to test our huge selection.",

        "We offer practically every sport, every movie, series and documentary you can imagine. Of course, the entire selection is also included when you try our service for free. Read more about our selection here.",
      ],

      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/Smart-TV-IPTV-1024x576-1.jpeg",
    },

    {
      title: "5. Summary",

      description: [
        "There are many different IPTV apps for mobile phones and tablets. Below we list some of the best ones that work great on both Apple (iOS) and Android devices. It is best to download the apps from the Play Store or the App Store.",
      ],
    },
  ],

  recommendedApps: [
    {
      name: "TV IPTV",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/109apple-tv-Steg-2.png",
      href: "https://apps.apple.com/in/app/purple-playlist-player/id1547219704",
    },

    {
      name: "NET IPTV",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/12apple-tv-Steg-2.png",
      href: "https://apps.apple.com/in/app/purple-playlist-player/id1547219704",
    },

    {
      name: "9Xtream IPTV",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/unnamed-1.webp",
      href: "https://apps.apple.com/in/app/purple-playlist-player/id1547219704",
    },

    {
      name: "SET IPTV",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/111apple-tv-Steg-2.png",
      href: "https://apps.apple.com/in/app/purple-playlist-player/id1547219704",
    },

    {
      name: "IPTV Smarters Pro",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/IPTV-Smarters-PRO.png",
      href: "https://apps.apple.com/in/app/purple-playlist-player/id1547219704",
    },

    {
      name: "IPTV Streamer",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/iptv-streamer.webp",
      href: "https://apps.apple.com/in/app/purple-playlist-player/id1547219704",
    },

    {
      name: "Tivimate",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/images.png",
      href: "https://apps.apple.com/in/app/purple-playlist-player/id1547219704",
    },

    {
      name: "IPTV Extreme",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/7apple-tv-Steg-2.png",
      href: "https://apps.apple.com/in/app/purple-playlist-player/id1547219704",
    },

    {
      name: "IPTV Pro",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/unnamed-300x300.jpg",
      href: "https://apps.apple.com/in/app/purple-playlist-player/id1547219704",
    },

    {
      name: "IBO Player",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/ibo-player-juo-logo.avif",
      href: "https://apps.apple.com/in/app/purple-playlist-player/id1547219704",
    },

    {
      name: "HOT IPTV",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/9apple-tv-Steg-2.png",
      href: "https://apps.apple.com/in/app/purple-playlist-player/id1547219704",
    },

    {
      name: "Duplex Play",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/8apple-tv-Steg-2.png",
      href: "https://apps.apple.com/in/app/purple-playlist-player/id1547219704",
    },

    {
      name: "Smart STB",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/ebc741e94133ebd2b5d3df73e8a7910a.webp",
      href: "https://apps.apple.com/in/app/purple-playlist-player/id1547219704",
    },
  ],

  summary:
    "Follow the steps above to set up IPTV on your Android box. Choose an IPTV application that works with your device and follow its setup instructions.",

  helpTitle: "Need help setting up IPTV?",

  helpDescription:
    "If you need assistance setting up IPTV on your Android box, contact our support team for help.",

  relatedInstructions: [
    {
      title: "Apple TV",
      path: "/install-iptv/apple-tv",
    },
    {
      title: "Smart TV",
      path: "/install-iptv/smart-tv",
    },
    {
      title: "Mobile / Tablet",
      path: "/install-iptv/mobile-tablet",
    },
    {
      title: "Computer",
      path: "/install-iptv/computer",
    },
  ],
},

"formuler-box": {
  title: "How to run IPTV on Formuler IPTV",

  breadcrumb: [
    { name: "Home", path: "/" },
    { name: "Instructions", path: "/instructions" },
    {
      name: "Formuler Box",
      path: "/install-iptv/formuler-box",
    },
  ],

  // ================= HERO =================

  heroImage:
    "https://finlandiptv.com/wp-content/uploads/2025/06/120apple-tv-Steg-2.png",

  // ================= MAIN DEVICE IMAGE =================

  deviceImage:
    "https://finlandiptv.com/wp-content/uploads/2025/06/formuler-z8-uhd-4k-android-iptv.jpeg",

  // ================= STEPS =================

  steps: [
    {
      title: "Create IPTV instructions",
      description: [
        "Formuler IPTV instructions",
        "To watch IPTV with your Formuler IPTV box, you first need to download a compatible IPTV app.",
        "Start by searching for the recommended apps in the order listed. If the first app does not work, try the next one until you find one that works for you.",
        "With your login details, you can use any compatible app, so you are not limited to one specific solution.",
        "Important: Use only one app at a time to avoid problems.",
      ],
      image : "",
    },

    {
      title: "Osta Formuler IPTV Box",
      description: [
        "We recommend buying a new Formuler box from a well-known retailer.",
        "Formuler boxes are designed for IPTV and offer a range of useful features.",
        "Apple TV or Nvidia Shield can also be alternatives for IPTV.",
        "Whether your box is new or used, delete apps that you do not use. This frees up storage space and may improve performance.",
      ],
      image:"",

      // ADD IMAGE HERE
      // image: "",
    },

    {
      title: "Step 2: Basic settings",

      description: [
        "When starting a new Formuler box, complete the basic settings and accept any terms and conditions.",
        "Keep the packaging, as it may be needed for warranty purposes.",
        "For the best connection stability, we recommend connecting directly to your router using an Ethernet cable.",
        "Wi-Fi also works well when the signal is strong and the router is nearby.",
      ],

      bullets: [
        "Use an Ethernet cable for a more stable connection.",
        "Keep your router close to the device if using Wi-Fi.",
      ],

      // ADD IMAGE HERE
      image: "",
    },

    {
      title: "Step 3: Download the IPTV app",

      description: [
        "There are many different IPTV apps available for Formuler boxes.",
        "Below are some of the apps that can be used with IPTV.",
        "Download the apps from a trusted app store and follow the instructions provided by the application.",
      ],

      bullets: [
        "IPTVX",
        "iPlayTV",
        "GSE Smart IPTV PRO",
        "Perfect IPTV",
        "IPTV Smarters",
        "Xtream IPTV",
      ],

      // ADD IMAGE HERE
      image: "",
    },

    {
      title: "Step 4: IPTV - FREE TRIAL",

      description: [
        "Now is the time to request a free trial from us.",
        "A trial allows you to test the IPTV service before choosing a subscription package.",
      ],

      // ADD IMAGE HERE
      image: "",
    },

    {
      title: "Step 5: Summary",

      description: [
        "For a stable IPTV experience, connect your Formuler box to the internet, preferably using an Ethernet cable.",
        "Complete the basic setup, download a compatible IPTV app, and test the service.",
        "Formuler devices with MyTVOnline offer features such as an electronic program guide (EPG), Time Shift, recording, subtitles, and multiple audio tracks.",
        "Supported models can also offer 4K and HDR playback.",
      ],

      bullets: [
        "Electronic Program Guide (EPG)",
        "Time Shift and recording",
        "Subtitles and multiple audio tracks",
        "4K and HDR support on supported models",
      ],

      // ADD IMAGE HERE
      image: "",
    },
  ],

  // ================= RECOMMENDED APPS =================

  recommendedApps: [
    {
      name: "MyTVOnline",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/23apple-tv-Steg-2.jpg",
      href: "https://finlandiptv.com/hur-man-kor-apple-tv-i-my-tv-online-appen/",
    },

    {
      name: "Televizo IPTV",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/109apple-tv-Steg-2.png",
      href: "https://finlandiptv.com/how-to-run-apple-tv-on-televizo-iptv-application/",
    },

    {
      name: "IPTV Smarters Pro",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/IPTV-Smarters-PRO.png",
      href: "https://finlandiptv.com/how-to-run-apple-tv-on-iptv-smarters-application/",
    },

    {
      name: "IPTV Streamer",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/iptv-streamer.webp",
      href: "https://finlandiptv.com/how-to-run-apple-tv-on-iptv-streamer-application/",
    },

    {
      name: "IBO Player",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/ibo-player-juo-logo.avif",
      href: "https://finlandiptv.com/how-to-run-apple-tv-on-ibo-player-application/",
    },

    {
      name: "SET IPTV",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/111apple-tv-Steg-2.png",
      href: "https://finlandiptv.com/how-to-run-apple-tv-on-set-iptv-application",
    },

    {
      name: "NET IPTV",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/12apple-tv-Steg-2.png",
      href: "https://finlandiptv.com/how-to-run-apple-tv-on-net-iptv-application/",
    },

    {
      name: "9Xtream IPTV",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/unnamed-1.webp",
      href: "https://finlandiptv.com/how-to-run-apple-tv-on-9xtream-iptv-application/",
    },

    {
      name: "TiviMate",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/images.png",
      href: "https://finlandiptv.com/how-to-run-apple-tv-on-tivimate-application/",
    },

    {
      name: "IPTV Extreme",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/7apple-tv-Steg-2.png",
      href: "https://finlandiptv.com/how-to-run-apple-tv-on-iptv-extreme-application/",
    },

    {
      name: "Duplex Play",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/8apple-tv-Steg-2.png",
      href: "https://finlandiptv.com/how-to-run-apple-tv-on-duplex-iptv-application/",
    },

    {
      name: "HOT IPTV",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/9apple-tv-Steg-2.png",
      href: "https://finlandiptv.com/how-to-run-apple-tv-on-hot-iptv-application/",
    },

    {
      name: "IPTV Pro",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/unnamed-300x300.jpg",
      href: "https://finlandiptv.com/how-to-run-apple-tv-on-iptv-pro-application/",
    },

    {
      name: "Smart STB",
      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/ebc741e94133ebd2b5d3df73e8a7910a.webp",
      href: "https://finlandiptv.com/how-to-run-apple-tv-on-smart-stb-application/",
    },
  ],

  // ================= SUMMARY =================

  summary:
    "Set up your Formuler box, connect it to the internet, install a compatible IPTV app, and test the service.",

  // ================= HELP / AUTHOR =================

  helpTitle: "Nils Hedlund",

  helpDescription:
    "My name is Nils Hedlund, and I write about streaming and digital entertainment. My goal is to make modern streaming technology easier to understand by providing clear guides, helpful tips, and expert insights on Smart TVs, different streaming devices, performance optimization, and new technology solutions.",

  // ================= MORE INSTRUCTIONS =================

  relatedInstructions: [
    {
      title: "Apple TV",
      path: "/install-iptv/apple-tv",
    },
    {
      title: "Smart TV",
      path: "/install-iptv/smart-tv",
    },
    {
      title: "Android Box",
      path: "/install-iptv/android-box",
    },
    {
      title: "Mobile / Tablet",
      path: "/install-iptv/mobile-tablet",
    },
  ],
},

"tvip-box": {
  title: "TVIP-boksin ohjeet",

  breadcrumb: "TVIP-boksin ohjeet",

  // ================= HERO & DEVICE IMAGE =================

  heroImage:
    "https://finlandiptv.com/wp-content/uploads/2025/06/24apple-tv-Steg-2.png",

  deviceImage:
    "https://finlandiptv.com/wp-content/uploads/2025/06/download.jpg",

  // ================= STEPS =================

  steps: [
    {
      title: "TVIP-boksin ohjeet",

      description: [
        "TVIP-boksen – avansert og brukervennlig IPTV.",
        "TVIP-boksen er en av de mest avanserte IPTV-boksene på markedet, samtidig som den er enkel å bruke.",
        "Du kan installere kanalene dine via portalinnstillingene. Vanligvis anbefaler vi å laste opp IPTV-spillelisten din med Xtream Codes API – altså med brukernavn, passord og portal-URL du får fra oss ved kjøp eller gratis prøveperiode.",
        "Dette sørger også for automatisk installasjon av EPG (programguiden).",
        "Med TVIP-boksen trenger du ikke å bekymre deg for kompliserte oppsett. Følg våre enkle instruksjoner for å komme raskt i gang!",
      ],
    },

    {
      title: "Vaihe 1",

      description: [
        "Avaa ruutu ja täytä meiltä sähköpostitse saamasi tiedot.",
        "Joissakin tapauksissa sinun on ehkä hyväksyttävä käyttöehdot ennen kuin tämä ruutu tulee näkyviin – paina siinä tapauksessa vain “OK”.",
        "Kun näet ruudun, täytä meiltä saamasi portaalin URL-osoite.",
        "Portaalin URL-osoitteen tulisi päättyä merkkiin “/c”, joten se näyttää suunnilleen tältä: http://abcd.se:3095/c.",
      ],

      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/SvenskIPTV-TVip-box-steg-1.webp",
    },

    {
      title: "Vaihe 2",

      description: [
        "Valitse “Verkkoportaali” ja sitten “Määritä verkkoportaali”.",
      ],

      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/TVIP-Instruktioner-Svensk-IPTV-Steg-2.webp",
    },

    {
      title: "Vaihe 3",

      description: [
        "Kun olet valinnut “Määritä verkkoportaali”, sinut ohjataan tälle sivulle.",
        "Täällä voit asettaa asetukset alla olevan kuvan mukaisiksi.",
      ],

      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/TVIP-Instruktioner-Svensk-IPTV-Steg-3-1024x798-1.webp",
    },

    {
      title: "TVIP-boksin tehdasasetukset",

      description: [
        "Alla näet, miten tehdasasetusten palautus tehdään TVIP-boksissa mallista riippumatta.",
      ],

      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/TVIP-Instruktioner-Svensk-IPTV-Steg-4-Fabriksaterstallning.png",
    },

    {
      title: "TVIP 705",

      description: [
        "TVIP 705 – En pålitelig og brukervennlig IPTV-boks.",
        "TVIP 705 er en populær IPTV-boks kjent for stabil ytelse og enkel bruk. Den gir en jevn strømmeopplevelse for TV-kanaler og innhold på forespørsel over internett.",
        "Boksen støtter både HD- og 4K-strømming, noe som gjør den ideell for deg som ønsker krystallklar TV-kvalitet.",
        "En stor fordel med TVIP 705 er den enkle installasjonen og det intuitive brukergrensesnittet.",
        "Fjernkontrollen gjør det lett å navigere, enten du bruker Ethernet-kabel eller Wi-Fi.",
        "Den kraftige prosessoren sørger for at flere apper kan kjøre sømløst samtidig.",
        "TVIP 705 støtter populære videokodeker som MPEG-2, MPEG-4, H.264 og H.265, noe som gjør den kompatibel med mange forskjellige mediefiler.",
        "I tillegg til TVIP-bokser anbefaler vi også løsninger som Nvidia Shield, Apple TV og Formuler Box for enda mer allsidige og pålitelige IPTV-opplevelser.",
      ],

      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/download.jpg",
    },

    {
      title: "TVIP 605",

      description: [
        "TVIP 605 – kompakt og rimelig IPTV-boks.",
        "TVIP 605 er en liten og prisgunstig IPTV-boks som gir en pålitelig strømmeopplevelse for TV-kanaler og innhold på forespørsel over internett.",
        "Den støtter HD-oppløsning og har et brukervennlig grensesnitt som gjør installasjonen enkel.",
        "Med støtte for både kablet Ethernet og Wi-Fi, gir TVIP 605 deg fleksibilitet til å velge den nettverkstilkoblingen som passer best for deg.",
        "Den effektive prosessoren sikrer rask navigering og stabil ytelse.",
        "TVIP 605 håndterer populære videoformater som MPEG-4 og H.264, noe som gjør den til et utmerket valg for deg som ønsker en enkel og problemfri IPTV-løsning til en rimelig pris.",
      ],

      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/TVIP-605-4K-IPTV-Box-768x662-1.webp",
    },

    {
      title: "TVIP 415",

      description: [
        "TVIP 415 – pålitelig og kompakt IPTV-boks.",
        "TVIP 415 gir en jevn og smidig strømmeopplevelse for både direktesendt TV og innhold på forespørsel.",
        "Med støtte for HD-oppløsning og stabil ytelse er den perfekt for daglig bruk.",
        "Installasjonen er enkel, og det brukervennlige grensesnittet gjør den lett å bruke, også for nybegynnere.",
        "TVIP 415 støtter både kablet Ethernet og trådløse (Wi-Fi) tilkoblinger, noe som gir fleksibilitet basert på nettverksmiljøet.",
        "Boksen håndterer populære videoformater som H.264 og MPEG-4, og er derfor et utmerket valg for IPTV-brukere som ønsker pålitelighet og brukervennlighet.",
      ],
    },
  ],

  // ================= RECOMMENDED APPS =================
  // Source page does not contain a recommended-apps section.

  recommendedApps: [],

  // ================= SUMMARY =================

  summary:
    "TVIP-boksen er en avansert og brukervennlig IPTV-løsning. Konfigurer portalinnstillingene med informasjonen du mottar fra oss, og følg trinnene for å sette opp IPTV-tjenesten.",

  // ================= HELP SECTION =================

  helpTitle: "Nils Hedlund",

  helpDescription:
    "Nimeni on Nils Hedlund, ja kirjoitan suoratoistosta ja digitaalisesta viihteestä. Tavoitteeni on tehdä nykyaikaisesta suoratoistotekniikasta helpommin ymmärrettävää tarjoamalla selkeitä oppaita, hyödyllisiä vinkkejä ja asiantuntevia näkemyksiä Smart TV -laitteista, erilaisista suoratoistolaitteista, suorituskyvyn optimoinnista sekä uusista teknologiaratkaisuista, jotka auttavat lukijoita saamaan enemmän irti katselukokemuksestaan.",

  // ================= MORE INSTRUCTIONS =================

  relatedInstructions: [
    {
      title: "Apple TV",
      path: "/install-iptv/apple-tv",
    },
    {
      title: "Smart TV",
      path: "/install-iptv/smart-tv",
    },
    {
      title: "Android Box",
      path: "/install-iptv/android-box",
    },
    {
      title: "Mobile / Tablet",
      path: "/install-iptv/mobile-tablet",
    },
  ],
},

"onyx-box": {
  title: "Ohjeet Onyx IPTV -bokseille",

  breadcrumb: "Ohjeet Onyx IPTV -bokseille",

  // ================= HERO & DEVICE IMAGE =================

  heroImage:
    "https://finlandiptv.com/wp-content/uploads/2025/06/onxm-img-1.png",

  deviceImage:
    "https://finlandiptv.com/wp-content/uploads/2025/06/xmn-logo.png",

  // ================= STEPS =================

  steps: [
    {
      title: "Ohjeet Onyx IPTV -bokseille",

      description: [
        "Onyx IPTV -boksi on yksi markkinoiden tehokkaimmista ja moderneimmista IPTV-laitteista. Se on suunniteltu tarjoamaan salamannopean, vakaan ja korkealaatuisen suoratoistokokemuksen – ja samalla se on helppo asentaa.",
        "Sekä HD- että 4K-resoluution tuen, nopean prosessorin ja intuitiivisen käyttöliittymän ansiosta Onyx on ilmeinen valinta niille, jotka haluavat huippuluokan viihdettä suoraan televisiostaan.",
        "Onyxin avulla voit helposti muodostaa yhteyden IPTV-palveluusi Xtream Codes API:n avulla – eli käyttäjätunnuksella, salasanalla ja portaalin URL-osoitteella, jotka saat meiltä oston yhteydessä tai ilmaisen kokeilujakson aikana.",
        "Tämän ansiosta EPG (ohjelmaopas) latautuu automaattisesti taustalla.",
        "Noudata alla olevia yksinkertaisia ohjeitamme aloittaaksesi Onyx-boksisi käytön nopeasti.",
      ],
    },

    {
      title: "Vaihe 1",

      description: [
        "Käynnistä laatikko ja siirry asetusvalikkoon.",
        "Täydennä tähän portaalin URL-osoite, käyttäjätunnus ja salasana, jotka sait meiltä sähköpostitse.",
      ],

      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/login.webp",
    },

    {
      title: "Vaihe 2",

      description: [
        "Valitse kirjautumistavaksi “Xtream Codes” (ei M3U:ta tai MAC:ia).",
        "Tämä varmistaa, että molemmat kanavat ja ohjelmaopas asennetaan oikein.",
      ],

      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/00b6d20d79e9fa3fabb5f8cc30d36837.webp",
    },

    {
      title: "Vaihe 3",

      description: [
        "Tallenna asetukset ja käynnistä digisovitin uudelleen.",
        "Uudelleenkäynnistyksen jälkeen kanavien ja EPG:n pitäisi latautua automaattisesti.",
        "Olet nyt valmis aloittamaan suoratoiston!",
      ],

      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/c7b4c6c5a37542daa1c653da499fd149.webp",
    },

    {
      title: "Onyx-laatikon tehdasasetusten palautus",

      description: [
        "Jos sinun joskus täytyy palauttaa Onyx-boksisi tehdasasetuksiin, se onnistuu helposti asetusvalikossa kohdassa “Järjestelmä” > “Nollaa” > “Tehdasasetukset”.",
      ],

      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/1b7b933e4442cb76f6925a661a3308ee.webp",
    },

    {
      title: "Onyx 4K Pro",

      description: [
        "Onyx 4K Pro – för dig som kräver det bästa.",
        "Vår mest kraftfulla IPTV-box levererar blixtsnabb streaming i 4K med stöd för H.265, H.264, MPEG-4 och MPEG-2.",
        "Utrustad med både Wi-Fi och Ethernet ger den optimal flexibilitet, oavsett nätverksmiljö.",
        "Det stilrena gränssnittet och fjärrkontrollen med snabbknappar gör det enkelt för både nybörjare och vana användare att komma igång direkt.",
        "Onyx 4K Pro är framtidens IPTV – redan idag.",
      ],

      bullets: [
        "4K Ultra HD",
        "Multiskärmsstöd",
        "Automatisk EPG-import via Xtream API",
        "Stöd för avancerade videoformat",
      ],

      image:
        "https://finlandiptv.com/wp-content/uploads/2025/06/Ha41d735c09144b3995f7cfb6915c1c3fz.webp",
    },

    {
      title: "Suositellut vaihtoehdot",

      description: [
        "Onyxin lisäksi suosittelemme myös IPTV-ratkaisuja, kuten TVIP 705, Formuler Z, Apple TV ja Nvidia Shield – kaikki tunnettuja vakaudestaan ja suorituskyvystään.",
      ],
    },
  ],

  // ================= RECOMMENDED APPS =================
  // Source has no app images/cards here.

  recommendedApps: [],

  // ================= SUMMARY =================

  summary:
    "Onyx IPTV -boksi tarjoaa nopean ja vakaan IPTV-kokemuksen. Määritä portal-asetukset Xtream Codes API:n avulla, tallenna asetukset ja käynnistä laite uudelleen. Kanavien ja EPG:n pitäisi latautua automaattisesti.",

  // ================= HELP / AUTHOR =================

  helpTitle: "Nils Hedlund",

  helpDescription:
    "Nimeni on Nils Hedlund, ja kirjoitan suoratoistosta ja digitaalisesta viihteestä. Tavoitteeni on tehdä nykyaikaisesta suoratoistotekniikasta helpommin ymmärrettävää tarjoamalla selkeitä oppaita, hyödyllisiä vinkkejä ja asiantuntevia näkemyksiä Smart TV -laitteista, erilaisista suoratoistolaitteista, suorituskyvyn optimoinnista sekä uusista teknologiaratkaisuista, jotka auttavat lukijoita saamaan enemmän irti katselukokemuksestaan.",

  // ================= MORE INSTRUCTIONS =================

  relatedInstructions: [
    {
      title: "Apple TV",
      path: "/install-iptv/apple-tv",
    },
    {
      title: "Smart TV",
      path: "/install-iptv/smart-tv",
    },
    {
      title: "Android Box",
      path: "/install-iptv/android-box",
    },
    {
      title: "Mobile / Tablet",
      path: "/install-iptv/mobile-tablet",
    },
  ],
},

};