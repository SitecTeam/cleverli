import { motion } from "motion/react";
import GroundSvg from "../svgs/isometric/ground/ground.svg?react";
import LampSvg from "../svgs/isometric/lamp/lamp.svg?react";
import MagGlassSvg from "../svgs/isometric/magnifying-glass/mag-glass.svg?react";
import LaptopSvg from "../svgs/isometric/laptop/laptop.svg?react";
import PlayButtonSvg from "../svgs/isometric/laptop/play-button.svg?react";
import GirlSvg from "../svgs/isometric/laptop/girl.svg?react";
import LayingWithLaptopSvg from "../svgs/isometric/laying-with-laptop/laying-with-laptop.svg?react";
import WireSvg from "../svgs/isometric/laying-with-laptop/wire.svg?react";
import GuyWireSvg from "../svgs/isometric/guy-with-phone/wire.svg?react";
import CellPhoneWireSvg from "../svgs/isometric/cell-phone/wire.svg?react";
import CellPhonePlatformSvg from "../svgs/isometric/cell-phone/platform.svg?react";
import GuyPlatformSvg from "../svgs/isometric/guy-with-phone/platform.svg?react";
import PhoneSvg from "../svgs/isometric/guy-with-phone/phone.svg?react";
import GuySvg from "../svgs/isometric/guy-with-phone/guy.svg?react";
import CellPhoneSvg from "../svgs/isometric/cell-phone/cell-phone.svg?react";
import CollageCapSvg from "../svgs/isometric/collage-cap/collage-cap.svg?react";
import SittingWithLaptopSvg from "../svgs/isometric/sitting-with-laptop/sitting-with-laptop.svg?react";
import SittingWireSvg from "../svgs/isometric/sitting-with-laptop/wire.svg?react";
import PixarSvg from "../svgs/isometric/pixar/pixar.svg?react";
import LadderSvg from "../svgs/isometric/ladder/ladder.svg?react";
import BoxSvg from "../svgs/isometric/box/box.svg?react";
import BulbSvg from "../svgs/isometric/box/bulb.svg?react";

/**
 * Scene with ground, lamp, magnifying glass, laptop, play button, laying-with-laptop, wire, platform, phone, guy, collage-cap, sitting-with-laptop, and pixar
 * Ground viewBox: 0 0 920 524
 * Lamp viewBox: 0 0 136 205
 * Mag Glass viewBox: 0 0 121 64
 * Laptop viewBox: 0 0 357 341
 * Play Button viewBox: 0 0 97 110
 * Girl viewBox: 0 0 53 125
 * Laying with Laptop viewBox: 0 0 145 103
 * Wire viewBox: 0 0 50 62
 * Guy Wire viewBox: 0 0 91 91
 * Cell Phone Wire viewBox: 0 0 97 57
 * Cell Phone Platform viewBox: 0 0 164 104
 * Guy Platform viewBox: 0 0 195 122
 * Phone viewBox: 0 0 67 186
 * Cell Phone viewBox: 0 0 71 134
 * Guy viewBox: 0 0 53 133
 * Collage Cap viewBox: 0 0 71 102
 * Sitting with Laptop viewBox: 0 0 154 117
 * Sitting Wire viewBox: 0 0 64 70
 * Pixar viewBox: 0 0 136 243
 * Ladder viewBox: 0 0 94 315
 * Box viewBox: 0 0 145 173
 * Bulb viewBox: 0 0 49 171
 */

const RealAnimatedScene = () => {
  return (
    <motion.div
      className="flex w-full justify-center"
      style={{
        position: "relative",
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: [0, -5, 0], // Subtle idle float
      }}
      transition={{
        opacity: { duration: 0.5 },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2, // Start after intro animations
        },
      }}
    >
      {/* Main SVG container with scene dimensions */}
      <svg
        viewBox="0 0 920 600"
        className="h-full w-full"
        style={{ display: "block" }}
      >
        {/* Define glow filter for wire */}
        <defs>
          <filter id="wireGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="dataGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="wireGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4A90E2" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#6BB6FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#4A90E2" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Ground - positioned at bottom (y: 600-524 = 76) */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <g transform="translate(0, 76)">
            <GroundSvg />
          </g>
        </motion.g>

        {/* Lamp - 76.07px from left, adjusted lower */}
        {/* Ground bottom at y=600, lamp height=205 */}
        {/* Position adjusted down by 20px */}
        <motion.g
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: [1, 0.8, 1],
            y: 0,
          }}
          transition={{
            opacity: {
              duration: 2,
              delay: 0.3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            },
            y: { duration: 0.8, delay: 0.3, ease: "easeOut" },
          }}
        >
          <g transform="translate(76.07, 350.78)">
            <defs>
              <clipPath id="lampClip">
                <rect x="0" y="0" width="136" height="205" />
              </clipPath>
              <linearGradient
                id="scanLineGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="40%" stopColor="white" stopOpacity="0" />
                <stop offset="50%" stopColor="white" stopOpacity="0.3" />
                <stop offset="60%" stopColor="white" stopOpacity="0" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
            <LampSvg />
            <motion.rect
              x="0"
              y="-205"
              width="136"
              height="205"
              fill="url(#scanLineGradient)"
              clipPath="url(#lampClip)"
              animate={{ y: ["-205", "205"] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
          </g>

          {/* Magnifying Glass - positioned at x: 160.18, adjusted lower */}
          <motion.g
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.5 },
              x: { duration: 0.8, delay: 0.5, ease: "easeOut" },
            }}
          >
            <g transform="translate(160.18, 300.69)">
              <MagGlassSvg />
            </g>
          </motion.g>
        </motion.g>

        {/* Wire - positioned at x: 461, y: 285 */}
        <motion.g
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            opacity: { duration: 0.5, delay: 1.3 },
            pathLength: { duration: 1, delay: 1.3, ease: "easeInOut" },
          }}
        >
          <g transform="translate(461, 385)">
            <defs>
              <radialGradient id="signalGlow">
                <stop offset="0%" stopColor="#4FC3F7" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#29B6F6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#03A9F4" stopOpacity="0" />
              </radialGradient>
              <path
                id="wirePath"
                d="M48 3 C 30 10, 14 18, 14 27 C 14 36, 25 38, 29 41 C 33 44, 10 52, 0 60"
                fill="none"
              />
            </defs>
            <WireSvg />
            <circle r="4" fill="url(#signalGlow)" filter="url(#wireGlow)">
              <animateMotion
                dur="5s"
                repeatCount="indefinite"
                keyPoints="1;0;0"
                keyTimes="0;0.2;1"
                calcMode="linear"
              >
                <mpath href="#wirePath" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="1;1;0;0"
                keyTimes="0;0.2;0.21;1"
                dur="5s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </motion.g>

        {/* Ladder - positioned at x: 578, behind laptop */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            opacity: { duration: 0.6, delay: 0.65 },
            y: { duration: 0.8, delay: 0.65, ease: "easeOut" },
          }}
        >
          <g transform="translate(578, 10)">
            <LadderSvg />
          </g>
        </motion.g>

        {/* Box - positioned at x: 680, y: 66 */}
        <motion.g
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            opacity: { duration: 0.6, delay: 2.05 },
            y: { duration: 0.8, delay: 2.05, ease: "easeOut" },
          }}
        >
          <g transform="translate(680, 166)">
            <BoxSvg />
          </g>
        </motion.g>

        {/* Bulb - positioned on top of box */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            opacity: { duration: 0.5, delay: 2.1 },
            scale: { duration: 0.7, delay: 2.1, ease: "backOut" },
          }}
        >
          <g transform="translate(728, 37)">
            <BulbSvg />
          </g>
        </motion.g>

        {/* Cell Phone Wire - connecting platform to laptop */}
        <motion.g
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            opacity: { duration: 0.5, delay: 1.42 },
            pathLength: { duration: 1, delay: 1.42, ease: "easeInOut" },
          }}
        >
          <g transform="translate(356, 230)">
            <defs>
              <radialGradient id="signalGlow3">
                <stop offset="0%" stopColor="#4FC3F7" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#29B6F6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#03A9F4" stopOpacity="0" />
              </radialGradient>
              <path
                id="cellPhoneWirePath"
                d="M 0.5 0.9 L 38.8 22.2 L 42.4 22.2 L 58.0 14.2 L 61.5 14.2 L 93.3 31.0 L 95.3 34.3 L 93.3 37.7 L 58.5 56.0"
                fill="none"
              />
            </defs>
            <CellPhoneWireSvg />
            <circle r="4" fill="url(#signalGlow3)" filter="url(#wireGlow)">
              <animateMotion
                dur="5s"
                repeatCount="indefinite"
                keyPoints="0;1;1"
                keyTimes="0;0.2;1"
                calcMode="linear"
              >
                <mpath href="#cellPhoneWirePath" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="1;1;0;0"
                keyTimes="0;0.2;0.21;1"
                dur="5s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </motion.g>

        {/* Sitting Wire - connecting laptop to sitting-with-laptop */}
        <motion.g
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            opacity: { duration: 0.5, delay: 2.15 },
            pathLength: { duration: 1, delay: 2.15, ease: "easeInOut" },
          }}
        >
          <g transform="translate(602, 363)">
            <defs>
              <radialGradient id="signalGlow4">
                <stop offset="0%" stopColor="#4FC3F7" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#29B6F6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#03A9F4" stopOpacity="0" />
              </radialGradient>
              <path
                id="sittingWirePath"
                d="M 2.9 0.9 L 2.8 7.1 L 48.9 33.1 L 50.8 35.9 L 48.9 39.3 L 35.5 46.4 L 33.6 49.4 L 35.3 52.5 L 63.3 68.4"
                fill="none"
              />
            </defs>
            <SittingWireSvg />
            <circle r="4" fill="url(#signalGlow4)" filter="url(#wireGlow)">
              <animateMotion
                dur="5s"
                repeatCount="indefinite"
                keyPoints="1;0;0"
                keyTimes="0;0.2;1"
                calcMode="linear"
              >
                <mpath href="#sittingWirePath" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="1;1;0;0"
                keyTimes="0;0.2;0.21;1"
                dur="5s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </motion.g>

        {/* Laptop - positioned at x: 355.51, y: 14.20 */}
        <motion.g
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            opacity: { duration: 0.6, delay: 0.7 },
            scale: { duration: 0.8, delay: 0.7, ease: "easeOut" },
          }}
        >
          <g transform="translate(355.51, 84.20)">
            <LaptopSvg />
          </g>
        </motion.g>

        {/* Play Button - positioned at x: 525.78, y: 76.96 */}
        <motion.g
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: [1, 1.1, 1],
          }}
          transition={{
            opacity: { duration: 0.5, delay: 0.9 },
            scale: {
              duration: 1.5,
              delay: 1.2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            },
          }}
        >
          <g transform="translate(525.78, 176.96)">
            <PlayButtonSvg />
          </g>
        </motion.g>

        {/* Girl - positioned on laptop touchpad at x: 450 */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            opacity: { duration: 0.6, delay: 1.0 },
            scale: { duration: 0.8, delay: 1.0, ease: "easeOut" },
          }}
        >
          <g transform="translate(450, 230)">
            <GirlSvg />
          </g>
        </motion.g>

        {/* Laying with Laptop - positioned at x: 285, y: 282 */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            opacity: { duration: 0.6, delay: 1.1 },
            y: { duration: 0.8, delay: 1.1, ease: "easeOut" },
          }}
        >
          <g transform="translate(385, 420)">
            <LayingWithLaptopSvg />
          </g>
        </motion.g>

        {/* Cell Phone Platform - positioned at x: 263, y: 93 */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            opacity: { duration: 0.6, delay: 1.4 },
            y: { duration: 0.8, delay: 1.4, ease: "easeOut" },
          }}
        >
          <g transform="translate(263, 173)">
            <CellPhonePlatformSvg />
          </g>
        </motion.g>

        {/* Guy Wire - positioned at x: 347, y: 261 */}
        <motion.g
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            opacity: { duration: 0.5, delay: 1.5 },
            pathLength: { duration: 1, delay: 1.5, ease: "easeInOut" },
          }}
        >
          <g transform="translate(347, 371)">
            <defs>
              <radialGradient id="signalGlow2">
                <stop offset="0%" stopColor="#4FC3F7" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#29B6F6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#03A9F4" stopOpacity="0" />
              </radialGradient>
              <path
                id="guyWirePath"
                d="M 90.5 0.9 L 51.6 20.4 L 49.8 23.2 L 51.5 26.0 L 63.3 32.7 L 64.9 35.5 L 63.2 38.3 L 2.9 71.4 L 2.9 77.8 L 13.1 83.4 L 14.8 86.3 L 13.1 89.2"
                fill="none"
              />
            </defs>
            <GuyWireSvg />
            <circle r="4" fill="url(#signalGlow2)" filter="url(#wireGlow)">
              <animateMotion
                dur="5s"
                repeatCount="indefinite"
                keyPoints="1;0;0"
                keyTimes="0;0.2;1"
                calcMode="linear"
              >
                <mpath href="#guyWirePath" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="1;1;0;0"
                keyTimes="0;0.2;0.21;1"
                dur="5s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </motion.g>

        {/* Guy Platform - positioned at x: 225, y: 376 */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            opacity: { duration: 0.6, delay: 1.45 },
            y: { duration: 0.8, delay: 1.45, ease: "easeOut" },
          }}
        >
          <g transform="translate(225, 376)">
            <GuyPlatformSvg />
          </g>
        </motion.g>

        {/* Phone - positioned at x: 279, y: 264 */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            opacity: { duration: 0.5, delay: 1.6 },
            scale: { duration: 0.7, delay: 1.6, ease: "backOut" },
          }}
        >
          <g transform="translate(279, 264)">
            <PhoneSvg />
          </g>
        </motion.g>

        {/* Cell Phone - positioned at x: 289, y: 5 */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            opacity: { duration: 0.5, delay: 1.65 },
            scale: { duration: 0.7, delay: 1.65, ease: "backOut" },
          }}
        >
          <g transform="translate(309, 85)">
            <CellPhoneSvg />
          </g>
        </motion.g>

        {/* Guy - positioned at x: 261, y: 221 */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            opacity: { duration: 0.6, delay: 1.8 },
            y: { duration: 0.8, delay: 1.8, ease: "easeOut" },
          }}
        >
          <g transform="translate(261, 321)">
            <GuySvg />
          </g>
        </motion.g>

        {/* Collage Cap - positioned at x: 100, y: 177 */}
        <motion.g
          initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
          animate={{
            opacity: 1,
            rotate: 0,
            scale: 1,
          }}
          transition={{
            opacity: { duration: 0.5, delay: 2.0 },
            rotate: { duration: 0.7, delay: 2.0, ease: "backOut" },
            scale: { duration: 0.7, delay: 2.0, ease: "backOut" },
          }}
        >
          <g transform="translate(100, 177)">
            <CollageCapSvg />
          </g>
        </motion.g>

        {/* Sitting with Laptop - positioned at x: 616, y: 283 */}
        <motion.g
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            opacity: { duration: 0.6, delay: 2.2 },
            x: { duration: 0.8, delay: 2.2, ease: "easeOut" },
          }}
        >
          <g transform="translate(616, 383)">
            <SittingWithLaptopSvg />
          </g>
        </motion.g>

        {/* Pixar - positioned at x: 641, y: 188 */}
        <motion.g
          initial={{ opacity: 0, y: -30 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            opacity: { duration: 0.6, delay: 2.4 },
            y: { duration: 0.9, delay: 2.4, ease: "easeOut" },
          }}
        >
          <g transform="translate(641, 288)">
            <PixarSvg />
          </g>
        </motion.g>
      </svg>
    </motion.div>
  );
};

export default RealAnimatedScene;
