import { useState } from "react";
import { NavLink } from "react-router-dom";
import heroSection from "../assets/heroSection.jpg";

type Instruction = {
  id: number;
  title: string;
  image: string;
  instructionKey: string;
};

type InstructionDetails = {
  title: string;
  intro?: string;
  steps?: string[];
  notes?: string[];
  extra?: string[];
};

const instructions: Instruction[] = [
  {
    id: 1,
    title: "TVIP S-Box",
    image: "/images/iptvSmart.png",
    instructionKey: "tvip",
  },
  {
    id: 2,
    title: "IPTV smart",
    image: "/images/iptvSmart.png",
    instructionKey: "iptvSmarters",
  },
  {
    id: 3,
    title: "Apple TV",
    image: "/images/AppleTV.png",
    instructionKey: "appleTV",
  },
  {
    id: 4,
    title: "TVIP S-Box",
    image: "/images/LG.png",
    instructionKey: "tvip",
  },
  {
    id: 5,
    title: "Smart TV",
    image: "/images/LG.png",
    instructionKey: "smartTV",
  },
  {
    id: 6,
    title: "Net IPTV",
    image: "/images/LG.png",
    instructionKey: "netIPTV",
  },
  {
    id: 7,
    title: "Nvidia Shield",
    image: "/images/nVidia.png",
    instructionKey: "nvidia",
  },
  {
    id: 8,
    title: "Formuler",
    image: "/images/tvBox-1.png",
    instructionKey: "formuler",
  },
  {
    id: 9,
    title: "Home",
    image: "/images/tvsip.png",
    instructionKey: "home",
  },
];

// ================= INSTRUCTION CONTENT =================

const instructionDetails: Record<string, InstructionDetails> = {
  tvip: {
    title: "Instructions for TViP S-Box",

    intro: "How to install/configure TViP S-Box",

    steps: [
      "Connect all cables and turn on the device.",
      "Select your language and time zone, and perform the update to get the latest software for your device.",
      "The device will restart after the update.",
      "Go to Settings, then Network.",
      "Write down the MAC address. Make sure it matches the address on the side of the box.",
      "Go to the TV menu on the left and change all settings as listed below.",
    ],

    extra: [
      "Stream Source: Multicast",
      "UDPXY Server: Leave as provided",
      "MPEG-TS Buffering, msec: 5000",
      "DVR Storage: No storage",
      "Timeshift storage: Internal storage",
      "Auto-timeshifting: Off",
      "Content Source: Web Portal",
    ],

    notes: [
      "Under Content Source: Web Portal, click Setup Web Portal and configure the following settings:",

      "Portal URL: Provided upon order.",
      "Portal Manager: Off",
      "Use Web Portal: Entire system",
      "API Mode: GSTB",

      "Press Apply after entering the settings.",

      "Some newer TVs may experience refresh-rate synchronization issues (FPS lag). This may be resolved by going to Settings → Display and setting HDMI Auto Framerate to ON.",

      "If you have purchased a subscription, please email us your MAC address.",

      "Use the order form at the point of purchase to place your order.",
    ],
  },

  iptvSmarters: {
    title: "Instructions for IPTV Smarters",

    intro: "How to install/configure IPTV Smarters",

    steps: [
      "Enter the name you want.",
      "Enter your username.",
      "Enter your password.",
      "Enter the portal URL provided upon purchase or by contacting support.",
      'Press "ADD USER".',
    ],

    notes: [
      "You can find your username and password in the M3U link provided to you.",

      "Your username appears after username= and your password appears after &password=.",

      "Make sure you enter the correct portal URL, username, and password.",
    ],
  },

  appleTV: {
    title: "Instructions for Apple TV",

    intro: "IPTV Smarters installation and configuration",

    steps: [
      "Enter the name you want.",
      "Enter your username.",
      "Enter your password.",
      "Enter the portal URL provided upon purchase or by contacting support.",
      'Press "ADD USER".',
    ],

    notes: [
      "You can find your username and password in the M3U link provided to you.",

      "Your username appears after username= and your password appears after &password=.",

      "Make sure you enter the correct portal URL, username, and password.",
    ],
  },

  smartTV: {
  title: "Instructions for Smart IPTV",

  intro: "How to install/configure Smart IPTV",

  steps: [
    "Go to your TV's app store.",
    "Search for the Smart IPTV app.",
    "Download and launch the app. Find the MAC address displayed on the screen and write it down.",
    "Visit the Smart IPTV website and open the playlist management page.",
    "If you have not purchased a subscription, complete the subscription purchase process first.",
    "Open the playlist management page at siptv.eu/mylist.",
    'Find the section called "Add external playlist links (URLs), with auto-update".',
    "Enter your MAC address and the M3U link received from us via email.",
    'Do not select "Save Online" unless you cannot get it to work.',
    'Press "ADD LINK".',
    "Restart your TV. Press the blue button on your remote to sort channels by country.",
  ],

  extra: [
    "MAC: Enter your TV's MAC address.",
    "Link: Enter the playlist link received from us.",
  ],

  notes: [
    "Smart IPTV only works on Samsung/LG Smart TVs and Android TVs (Sony/Philips).",

    "We regularly update our guides. If something doesn't work, contact us via chat or the contact form.",

    "Smart IPTV is a paid application with a 7-day trial. After the trial, activation is required.",

    "When you purchase the app, your playlist may be reset, so you may need to repeat the setup steps.",

    "The Smart IPTV app is a third-party application. Finland IPTV is not responsible for its operation or payment process.",

    "For Smart IPTV app support, contact info@siptv.eu.",

    "A TV connected through Wi-Fi may not provide the best streaming experience. A wired connection is recommended if you experience buffering.",
  ],
},

  netIPTV: {
    title: "Instructions for Net IPTV",

    intro: "How to install/configure Net IPTV",

    steps: [
      "Download and install Net IPTV on your Smart TV. The application includes a 7-day trial period.",
      "After the trial period, the application must be activated through the Net IPTV website.",
      "Visit www.netiptv.eu/upload.",
      "Enter your TV's MAC address. It should appear on the application's home screen.",
      "Enter the M3U link you received from us via email.",
      'Press "Add list".',
      "Wait a moment, then restart your Smart TV.",
      "Restart the Net IPTV application.",
      "The channels should now appear in the application's channel list.",
    ],

    notes: [
      "Net IPTV activation is handled through the Net IPTV website.",
      "Make sure you use the correct MAC address and M3U link.",
    ],
  },

  nvidia: {
    title: "Instructions for Nvidia Shield",

    intro: "How to install/configure Nvidia Shield",

    steps: [
      "Download Tivimate from the Google Play Store or as an APK file.",
      'Press "Add channel list".',
      "Choose an Xtream server.",
      "Enter the required details provided in your latest order email.",
    ],

    extra: [
      "To change remote control button functions, go to Settings → Remote → Player.",
      "If the internal player does not display all subtitles correctly, download VLC and enable the external player under Settings → Playback.",
      "If channels are intermittent, try activating automatic image streaming under Settings → Playback → Auto-stream.",
      "You can also activate AFR for VOD under Playback settings.",
      "Experiment with buffer size and video decoder settings (hardware or software) if needed.",
    ],
  },

  formuler: {
    title: "Instructions for Formuler Boxes",

    intro: "How to install/configure Formuler",

    steps: [
      "Restart your device and install all available updates.",
      "Go to Market and download Audio Optimizer (NOT GTV).",
      "Open the MY TVOnline app.",
      "Add the portal URL.",
      'Check the "Require Login" box.',
      "In the Portal Nickname field, enter PIRATESBAY-IPTV.",
      "Enter the portal URL provided upon request or purchase. It should start with http:// and end with 2095.",
      "Enter your username and password. You can find these in your email or M3U link.",
      'Click "Connect". If the details are correct, the portal should launch.',
    ],

    extra: [
      "The red button can be used to add subtitles to channels and VOD.",
      "To access the movie library, go to MY TVOnline → Menu → VOD.",
      "To create a favorite list from different countries, press the blue button while watching a channel.",
      "You can add channels from different countries to the same favorites list.",
    ],
  },

  home: {
    title: "Instructions",

    intro: "Device installation guides",

    notes: [
      "Please select the device you want to configure from the Instructions page to view its installation guide.",
    ],
  },
};

export default function Instructions() {
  const [selectedInstruction, setSelectedInstruction] =
    useState<InstructionDetails | null>(null);

  const closePopup = () => {
    setSelectedInstruction(null);
  };

  return (
    <main className="w-full bg-white">
      {/* ========================= HERO BANNER ========================== */}

      <section
        className="relative flex h-50 items-center justify-center bg-cover bg-top sm:h-100"
        style={{
          backgroundImage: `linear-gradient(rgba(5,25,45,0.72), rgba(5,25,45,0.72)), url(${heroSection})`,
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Instructions
          </h1>

          <div className="mt-3 flex items-center justify-center gap-2 text-sm">
            <NavLink to="/" className="hover:underline">
              Home
            </NavLink>

            <span>/</span>

            <span>Instructions</span>
          </div>
        </div>
      </section>

      {/* ========================= DEVICE INSTRUCTIONS ========================== */}

      <section className="relative overflow-hidden bg-white px-4 pb-100 pt-12 sm:px-6">
        {/* Device Grid */}

        <div className="relative z-10 mx-auto mb-30 grid grid-cols-2 gap-5 px-4 sm:grid-cols-3 md:px-20 lg:px-30">
          {instructions.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() =>
                setSelectedInstruction(
                  instructionDetails[item.instructionKey]
                )
              }
              className="group transform cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl flex h-70 flex-col items-center justify-center rounded-md bg-[#f5f5f5] p-3 text-left"
            >
              {/* Device Image */}

              <div className="flex h-55 w-full items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Device Title */}

              <h2 className="mt-2 text-center text-xl font-medium text-gray-900 transition-colors group-hover:text-blue-700">
                {item.title}
              </h2>
            </button>
          ))}
        </div>

        {/* ========================= BOTTOM WAVE SVG ========================== */}

        <div className="pointer-events-none absolute bottom-0 left-0 flex w-full flex-col gap-45">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 283.5 27.8"
            preserveAspectRatio="none"
            className="block h-36 w-full transform-[scaleY(-1)]"
          >
            <path
              fill="#f5f7f8"
              d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z"
            />

            <path
              fill="#f5f7f8"
              d="M269.6,18c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3C267.7,18.8,269.7,18,269.6,18z"
            />

            <path
              fill="#f5f7f8"
              d="M227.4,9.8c-0.2-0.1-4.5-1-9.5-1.2c-5-0.2-12.7,0.6-12.3,0.5c0.3-0.1,5.9-1.8,13.3-1.2S227.6,9.9,227.4,9.8z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 283.5 27.8"
            preserveAspectRatio="none"
            className="block h-26 w-full transform-[scaleY(-1)]"
          >
            <path
              fill="#f5f7f8"
              d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z"
            />

            <path
              fill="#f5f7f8"
              d="M269.6,18c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3C267.7,18.8,269.7,18,269.6,18z"
            />

            <path
              fill="#f5f7f8"
              d="M227.4,9.8c-0.2-0.1-4.5-1-9.5-1.2c-5-0.2-12.7,0.6-12.3,0.5c0.3-0.1,5.9-1.8,13.3-1.2S227.6,9.9,227.4,9.8z"
            />
          </svg>
        </div>
      </section>

      {/* ========================= INSTRUCTION POPUP ========================== */}

      {selectedInstruction && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-6"
          onClick={closePopup}
        >
          {/* Popup Box */}

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="instruction-popup-title"
            className="relative max-h-[85vh] w-full max-w-5xl overflow-y-auto border-2 border-blue-900 bg-white p-5 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}

            <button
              type="button"
              onClick={closePopup}
              aria-label="Close instructions"
              className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-900 text-sm font-bold text-white shadow-md transition hover:bg-red-600"
            >
              X
            </button>

            {/* Popup Content */}

            <div className="pr-5">
              <h2
                id="instruction-popup-title"
                className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl"
              >
                {selectedInstruction.title}
              </h2>

              {selectedInstruction.intro && (
                <h3 className="mb-3 text-sm font-semibold text-gray-800">
                  {selectedInstruction.intro}
                </h3>
              )}

              {/* Steps */}

              {selectedInstruction.steps && (
                <ol className="mb-4 list-decimal space-y-1 pl-5 text-sm leading-6 text-gray-800">
                  {selectedInstruction.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              )}

              {/* Extra Information */}

              {selectedInstruction.extra && (
                <div className="mb-4 space-y-2 text-sm leading-6 text-gray-800">
                  {selectedInstruction.extra.map((text, index) => (
                    <p key={index}>{text}</p>
                  ))}
                </div>
              )}

              {/* Notes */}

              {selectedInstruction.notes && (
                <div className="space-y-2 text-sm leading-6 text-gray-800">
                  {selectedInstruction.notes.map((note, index) => (
                    <p key={index}>{note}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}