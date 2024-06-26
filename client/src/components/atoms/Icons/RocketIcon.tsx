import { FC, memo } from 'react'

interface RocketIconProps {
  size: string
}

export const RocketIcon: FC<RocketIconProps> = memo(({ size }) => {
  return (
    <svg height={size} width={size} fill="none" viewBox="0 0 32 32">
      <filter
        id="a"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="22.6592"
        width="22.3964"
        x="6.09463"
        y="3.03992"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx="-.25" dy="-.5" />
        <feGaussianBlur stdDeviation=".75" />
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.745098 0 0 0 0 0.772549 0 0 0 0 0.952941 0 0 0 1 0" />
        <feBlend in2="shape" mode="normal" result="effect1_innerShadow_18_13076" />
      </filter>
      <filter
        id="b"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="8.71875"
        width="8.71875"
        x="16.7813"
        y="6.953"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy=".25" />
        <feGaussianBlur stdDeviation=".5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.866667 0 0 0 0 0.764706 0 0 0 0 0.847059 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18_13076" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_18_13076" mode="normal" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx="-.1" dy=".1" />
        <feGaussianBlur stdDeviation=".05" />
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.721569 0 0 0 0 0.690196 0 0 0 0 0.701961 0 0 0 1 0" />
        <feBlend in2="shape" mode="normal" result="effect2_innerShadow_18_13076" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx=".1" dy="-.1" />
        <feGaussianBlur stdDeviation=".05" />
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.615686 0 0 0 0 0.560784 0 0 0 0 0.65098 0 0 0 1 0" />
        <feBlend in2="effect2_innerShadow_18_13076" mode="normal" result="effect3_innerShadow_18_13076" />
      </filter>
      <filter
        id="c"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="7.21672"
        width="7.57367"
        x="2.08765"
        y="22.4132"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="-.2" />
        <feGaussianBlur stdDeviation=".2" />
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.847059 0 0 0 0 0.505882 0 0 0 0 0.360784 0 0 0 1 0" />
        <feBlend in2="shape" mode="normal" result="effect1_innerShadow_18_13076" />
      </filter>
      <filter
        id="d"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="8.4375"
        width="7.625"
        x="8.20465"
        y="16.6405"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur_18_13076" stdDeviation=".5" />
      </filter>
      <linearGradient id="e" gradientUnits="userSpaceOnUse" x1="8.1109" x2="3.1109" y1="17.3079" y2="16.4843">
        <stop offset="0" stopColor="#ee2452" />
        <stop offset="1" stopColor="#f63e7a" />
      </linearGradient>
      <radialGradient
        id="f"
        cx="0"
        cy="0"
        gradientTransform="matrix(7.52114283 -2.7311707 .46435513 1.27874881 2.39755 17.0631)"
        gradientUnits="userSpaceOnUse"
        r="1"
      >
        <stop offset=".163866" stopColor="#ff8db0" />
        <stop offset="1" stopColor="#ff8db0" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="g" gradientUnits="userSpaceOnUse" x1="4.90476" x2="5.72003" y1="19.7332" y2="18.9383">
        <stop offset=".491189" stopColor="#dd467c" />
        <stop offset="1" stopColor="#dd467c" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="h" gradientUnits="userSpaceOnUse" x1="17.8921" x2="11.6742" y1="21.6718" y2="26.551">
        <stop offset="0" stopColor="#f83267" />
        <stop offset="1" stopColor="#ff3190" />
      </linearGradient>
      <radialGradient
        id="i"
        cx="0"
        cy="0"
        gradientTransform="matrix(.46874945 7.62467471 -6.57364903 .40413454 14.5796 22.203)"
        gradientUnits="userSpaceOnUse"
        r="1"
      >
        <stop offset=".756562" stopColor="#e76cbe" stopOpacity="0" />
        <stop offset=".951296" stopColor="#e76cbe" />
      </radialGradient>
      <radialGradient
        id="j"
        cx="0"
        cy="0"
        gradientTransform="matrix(2.84374932 -4.43749541 1.94916858 1.24911607 13.4546 26.2343)"
        gradientUnits="userSpaceOnUse"
        r="1"
      >
        <stop offset="0" stopColor="#ff5898" />
        <stop offset="1" stopColor="#ff5898" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="k" gradientUnits="userSpaceOnUse" x1="13.4859" x2="22.2984" y1="8.6717" y2="17.5467">
        <stop offset="0" stopColor="#ccbbc0" />
        <stop offset="1" stopColor="#ead2ec" />
      </linearGradient>
      <radialGradient
        id="l"
        cx="0"
        cy="0"
        gradientTransform="matrix(-13.22127758 -10.16448783 19.10663335 -24.85261505 23.9694 21.5771)"
        gradientUnits="userSpaceOnUse"
        r="1"
      >
        <stop offset=".811143" stopColor="#e7e5e5" stopOpacity="0" />
        <stop offset="1" stopColor="#e7e5e5" />
      </radialGradient>
      <radialGradient
        id="m"
        cx="0"
        cy="0"
        gradientTransform="matrix(5.34967927 -8.21557193 3.8612428 2.51429977 9.18137 21.3096)"
        gradientUnits="userSpaceOnUse"
        r="1"
      >
        <stop offset=".281006" stopColor="#b5a3a5" />
        <stop offset="1" stopColor="#b5a3a5" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="n"
        cx="0"
        cy="0"
        gradientTransform="matrix(2.45024506 -8.33864994 1.41296298 .41518778 6.34463 20.091)"
        gradientUnits="userSpaceOnUse"
        r="1"
      >
        <stop offset=".207885" stopColor="#b28f96" />
        <stop offset="1" stopColor="#b28f96" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="o"
        cx="0"
        cy="0"
        gradientTransform="matrix(-9.68000436 8.93745717 -2.77498039 -3.00553298 27.1109 7.10921)"
        gradientUnits="userSpaceOnUse"
        r="1"
      >
        <stop offset="0" stopColor="#faecf1" />
        <stop offset="1" stopColor="#faecf1" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="p" gradientUnits="userSpaceOnUse" x1="17.7813" x2="24.5" y1="10.4913" y2="11.0624">
        <stop offset="0" stopColor="#a796a0" />
        <stop offset="1" stopColor="#a5959f" />
      </linearGradient>
      <radialGradient
        id="q"
        cx="0"
        cy="0"
        gradientTransform="matrix(0 3.35938 -3.35938 0 21.1406 11.0624)"
        gradientUnits="userSpaceOnUse"
        r="1"
      >
        <stop offset=".586538" stopColor="#93859b" />
        <stop offset="1" stopColor="#93859b" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="r"
        cx="0"
        cy="0"
        gradientTransform="matrix(0 -4.84559 4.45626 0 21.1406 13.3881)"
        gradientUnits="userSpaceOnUse"
        r="1"
      >
        <stop offset="0" stopColor="#72cdff" />
        <stop offset=".738019" stopColor="#66acff" />
        <stop offset="1" stopColor="#3b57f4" />
      </radialGradient>
      <radialGradient
        id="s"
        cx="0"
        cy="0"
        gradientTransform="matrix(-4.10578017 4.10578017 -3.22724242 -3.22724242 8.19114 24.2458)"
        gradientUnits="userSpaceOnUse"
        r="1"
      >
        <stop offset="0" stopColor="#d46213" />
        <stop offset="1" stopColor="#ff9542" />
      </radialGradient>
      <radialGradient
        id="t"
        cx="0"
        cy="0"
        gradientTransform="matrix(-4.72446812 -5.3993779 5.69004527 -4.97880273 8.30362 28.9703)"
        gradientUnits="userSpaceOnUse"
        r="1"
      >
        <stop offset=".870944" stopColor="#ffc484" stopOpacity="0" />
        <stop offset="1" stopColor="#ffc484" />
      </radialGradient>
      <linearGradient id="u" gradientUnits="userSpaceOnUse" x1="5.7984" x2="11.2984" y1="21.953" y2="27.3593">
        <stop offset="0" stopColor="#452860" />
        <stop offset="1" stopColor="#51509f" />
      </linearGradient>
      <radialGradient
        id="v"
        cx="0"
        cy="0"
        gradientTransform="matrix(.34375123 1.59375006 -1.40811884 .30371298 6.82965 21.453)"
        gradientUnits="userSpaceOnUse"
        r="1"
      >
        <stop offset="0" stopColor="#8e839a" />
        <stop offset="1" stopColor="#8e839a" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="w"
        cx="0"
        cy="0"
        gradientTransform="matrix(4.16201845 4.61197069 -2.41750769 2.18165125 7.20687 22.4179)"
        gradientUnits="userSpaceOnUse"
        r="1"
      >
        <stop offset=".860492" stopColor="#6175b9" stopOpacity="0" />
        <stop offset="1" stopColor="#6175b9" />
      </radialGradient>
      <linearGradient id="x" gradientUnits="userSpaceOnUse" x1="29.1767" x2="25.5006" y1="2.87587" y2="6.55196">
        <stop offset="0" stopColor="#ff3745" />
        <stop offset="1" stopColor="#ed224b" />
      </linearGradient>
      <radialGradient
        id="y"
        cx="0"
        cy="0"
        gradientTransform="matrix(-5.83134699 5.83134699 -1.39985929 -1.39985929 28.7385 4.34743)"
        gradientUnits="userSpaceOnUse"
        r="1"
      >
        <stop offset=".189394" stopColor="#ff5971" />
        <stop offset="1" stopColor="#ff5971" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="z" gradientUnits="userSpaceOnUse" x1="25.8218" x2="26.189" y1="6.79677" y2="6.41396">
        <stop offset="0" stopColor="#d2575e" />
        <stop offset="1" stopColor="#f93251" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="A" gradientUnits="userSpaceOnUse" x1="15.1603" x2="8.67423" y1="17.0649" y2="23.551">
        <stop offset="0" stopColor="#ff2644" />
        <stop offset="1" stopColor="#ff2982" />
      </linearGradient>
      <radialGradient
        id="B"
        cx="0"
        cy="0"
        gradientTransform="matrix(6.96874808 -2.65624348 .69538058 1.82435538 6.2359 19.4218)"
        gradientUnits="userSpaceOnUse"
        r="1"
      >
        <stop offset="0" stopColor="#ff95af" />
        <stop offset="1" stopColor="#ff95af" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="C"
        cx="0"
        cy="0"
        gradientTransform="matrix(3.2766858 3.24304893 -.95797131 .96790738 5.39755 20.3079)"
        gradientUnits="userSpaceOnUse"
        r="1"
      >
        <stop offset=".381871" stopColor="#e14678" />
        <stop offset="1" stopColor="#e14678" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="D"
        cx="0"
        cy="0"
        gradientTransform="matrix(.68749522 7.37500529 -7.85913632 .73262573 11.5796 19.1405)"
        gradientUnits="userSpaceOnUse"
        r="1"
      >
        <stop offset=".831791" stopColor="#e67bc7" stopOpacity="0" />
        <stop offset="1" stopColor="#e67bc7" />
      </radialGradient>
      <linearGradient id="E" gradientUnits="userSpaceOnUse" x1="13.9859" x2="9.8609" y1="18.1093" y2="22.4218">
        <stop offset="0" stopColor="#ff5970" />
        <stop offset="1" stopColor="#ff5794" />
      </linearGradient>
      <clipPath id="F">
        <path d="m0 0h32v32h-32z" />
      </clipPath>
      <g clipPath="url(#F)">
        <path
          d="m10.5815 13.7179c1.2005-.4419 2.3677.7253 1.9258 1.9258l-2.61877 7.1144c-.25214.685-1.12942.8778-1.64555.3616l-5.13749-5.1375c-.51613-.5161-.32332-1.3934.36166-1.6455z"
          fill="url(#e)"
        />
        <path
          d="m10.5815 13.7179c1.2005-.4419 2.3677.7253 1.9258 1.9258l-2.61877 7.1144c-.25214.685-1.12942.8778-1.64555.3616l-5.13749-5.1375c-.51613-.5161-.32332-1.3934.36166-1.6455z"
          fill="url(#f)"
        />
        <path
          d="m10.5815 13.7179c1.2005-.4419 2.3677.7253 1.9258 1.9258l-2.61877 7.1144c-.25214.685-1.12942.8778-1.64555.3616l-5.13749-5.1375c-.51613-.5161-.32332-1.3934.36166-1.6455z"
          fill="url(#g)"
        />
        <path
          d="m16.5815 19.7179c1.2005-.4419 2.3677.7253 1.9258 1.9258l-2.6188 7.1144c-.2521.685-1.1294.8778-1.6455.3616l-5.13751-5.1375c-.51613-.5161-.32332-1.3934.36166-1.6455z"
          fill="url(#h)"
        />
        <path
          d="m16.5815 19.7179c1.2005-.4419 2.3677.7253 1.9258 1.9258l-2.6188 7.1144c-.2521.685-1.1294.8778-1.6455.3616l-5.13751-5.1375c-.51613-.5161-.32332-1.3934.36166-1.6455z"
          fill="url(#i)"
        />
        <path
          d="m16.5815 19.7179c1.2005-.4419 2.3677.7253 1.9258 1.9258l-2.6188 7.1144c-.2521.685-1.1294.8778-1.6455.3616l-5.13751-5.1375c-.51613-.5161-.32332-1.3934.36166-1.6455z"
          fill="url(#j)"
        />
        <g filter="url(#a)">
          <path
            d="m22.3991 3.55093c.0559-.02276.1198-.00948.1624.0334l5.8859 5.93029c.0423.04261.0552.10613.0326.16173-1.4094 3.45945-3.3526 7.13945-5.9545 9.74145-2.5338 2.5337-6.8195 4.6933-10.6892 6.2813l-5.49167-5.4916c1.58802-3.8697 3.74757-8.1554 6.28137-10.68923 2.6099-2.60988 6.3044-4.55693 9.7731-5.96734z"
            fill="url(#k)"
          />
          <path
            d="m22.3991 3.55093c.0559-.02276.1198-.00948.1624.0334l5.8859 5.93029c.0423.04261.0552.10613.0326.16173-1.4094 3.45945-3.3526 7.13945-5.9545 9.74145-2.5338 2.5337-6.8195 4.6933-10.6892 6.2813l-5.49167-5.4916c1.58802-3.8697 3.74757-8.1554 6.28137-10.68923 2.6099-2.60988 6.3044-4.55693 9.7731-5.96734z"
            fill="url(#l)"
          />
          <path
            d="m22.3991 3.55093c.0559-.02276.1198-.00948.1624.0334l5.8859 5.93029c.0423.04261.0552.10613.0326.16173-1.4094 3.45945-3.3526 7.13945-5.9545 9.74145-2.5338 2.5337-6.8195 4.6933-10.6892 6.2813l-5.49167-5.4916c1.58802-3.8697 3.74757-8.1554 6.28137-10.68923 2.6099-2.60988 6.3044-4.55693 9.7731-5.96734z"
            fill="url(#m)"
          />
          <path
            d="m22.3991 3.55093c.0559-.02276.1198-.00948.1624.0334l5.8859 5.93029c.0423.04261.0552.10613.0326.16173-1.4094 3.45945-3.3526 7.13945-5.9545 9.74145-2.5338 2.5337-6.8195 4.6933-10.6892 6.2813l-5.49167-5.4916c1.58802-3.8697 3.74757-8.1554 6.28137-10.68923 2.6099-2.60988 6.3044-4.55693 9.7731-5.96734z"
            fill="url(#n)"
          />
          <path
            d="m22.3991 3.55093c.0559-.02276.1198-.00948.1624.0334l5.8859 5.93029c.0423.04261.0552.10613.0326.16173-1.4094 3.45945-3.3526 7.13945-5.9545 9.74145-2.5338 2.5337-6.8195 4.6933-10.6892 6.2813l-5.49167-5.4916c1.58802-3.8697 3.74757-8.1554 6.28137-10.68923 2.6099-2.60988 6.3044-4.55693 9.7731-5.96734z"
            fill="url(#o)"
          />
        </g>
        <g filter="url(#b)">
          <path
            d="m24.5 11.0624c0 1.8553-1.504 3.3594-3.3594 3.3594-1.8553 0-3.3593-1.5041-3.3593-3.3594 0-1.85535 1.504-3.3594 3.3593-3.3594 1.8554 0 3.3594 1.50405 3.3594 3.3594z"
            fill="url(#p)"
          />
          <path
            d="m24.5 11.0624c0 1.8553-1.504 3.3594-3.3594 3.3594-1.8553 0-3.3593-1.5041-3.3593-3.3594 0-1.85535 1.504-3.3594 3.3593-3.3594 1.8554 0 3.3594 1.50405 3.3594 3.3594z"
            fill="url(#q)"
          />
        </g>
        <path
          d="m23.4664 11.0624c0 1.2845-1.0413 2.3257-2.3258 2.3257-1.2844 0-2.3257-1.0412-2.3257-2.3257 0-1.28444 1.0413-2.32571 2.3257-2.32571 1.2845 0 2.3258 1.04127 2.3258 2.32571z"
          fill="url(#r)"
        />
        <g filter="url(#c)">
          <path
            d="m2.42345 29.5326c-.70711-.7071-.42343-5.6109 2.07655-6.6109 0 0 2.5-1 4.11101.6006 1.61099 1.6006.88899 3.3994.88899 3.3994-.70709 2.1213-3.71744 2.9645-4.07098 2.611-.19526-.1953.15636-.5508.00001-.7071-.15635-.1564-.39776.0221-1.06066.3535-.4714.2357-1.66208.6364-1.94492.3535z"
            fill="url(#s)"
          />
          <path
            d="m2.42345 29.5326c-.70711-.7071-.42343-5.6109 2.07655-6.6109 0 0 2.5-1 4.11101.6006 1.61099 1.6006.88899 3.3994.88899 3.3994-.70709 2.1213-3.71744 2.9645-4.07098 2.611-.19526-.1953.15636-.5508.00001-.7071-.15635-.1564-.39776.0221-1.06066.3535-.4714.2357-1.66208.6364-1.94492.3535z"
            fill="url(#t)"
          />
        </g>
        <path
          d="m6.06065 20.9824c.58579-.5858 1.53554-.5858 2.12133 0l3.53552 3.5355c.5858.5858.5858 1.5356 0 2.1214s-1.5355.5858-2.12131 0l-3.53554-3.5356c-.58578-.5858-.58578-1.5355 0-2.1213z"
          fill="url(#u)"
        />
        <path
          d="m6.06065 20.9824c.58579-.5858 1.53554-.5858 2.12133 0l3.53552 3.5355c.5858.5858.5858 1.5356 0 2.1214s-1.5355.5858-2.12131 0l-3.53554-3.5356c-.58578-.5858-.58578-1.5355 0-2.1213z"
          fill="url(#v)"
        />
        <path
          d="m6.06065 20.9824c.58579-.5858 1.53554-.5858 2.12133 0l3.53552 3.5355c.5858.5858.5858 1.5356 0 2.1214s-1.5355.5858-2.12131 0l-3.53554-3.5356c-.58578-.5858-.58578-1.5355 0-2.1213z"
          fill="url(#w)"
        />
        <path
          d="m29.1723 2.87149c-.9471-.94709-2.608-.83988-3.8184-.42425-.869.29841-1.7823.63312-2.7142 1.00661-.0664.02659-.084.11226-.0336.16299l5.809 5.84887c.0505.05091.1367.03354.1634-.03305.3781-.94181.7166-1.86489 1.0181-2.74278.41-1.19419.7398-2.65427-.4243-3.81839z"
          fill="url(#x)"
        />
        <path
          d="m29.1723 2.87149c-.9471-.94709-2.608-.83988-3.8184-.42425-.869.29841-1.7823.63312-2.7142 1.00661-.0664.02659-.084.11226-.0336.16299l5.809 5.84887c.0505.05091.1367.03354.1634-.03305.3781-.94181.7166-1.86489 1.0181-2.74278.41-1.19419.7398-2.65427-.4243-3.81839z"
          fill="url(#y)"
        />
        <path
          d="m29.1723 2.87149c-.9471-.94709-2.608-.83988-3.8184-.42425-.869.29841-1.7823.63312-2.7142 1.00661-.0664.02659-.084.11226-.0336.16299l5.809 5.84887c.0505.05091.1367.03354.1634-.03305.3781-.94181.7166-1.86489 1.0181-2.74278.41-1.19419.7398-2.65427-.4243-3.81839z"
          fill="url(#z)"
        />
        <path
          d="m13.5815 16.7179c1.2005-.4419 2.3677.7253 1.9258 1.9258l-2.6188 7.1144c-.2521.685-1.1294.8778-1.6455.3616l-5.13751-5.1375c-.51613-.5161-.32332-1.3934.36166-1.6455z"
          fill="url(#A)"
        />
        <path
          d="m13.5815 16.7179c1.2005-.4419 2.3677.7253 1.9258 1.9258l-2.6188 7.1144c-.2521.685-1.1294.8778-1.6455.3616l-5.13751-5.1375c-.51613-.5161-.32332-1.3934.36166-1.6455z"
          fill="url(#B)"
        />
        <path
          d="m13.5815 16.7179c1.2005-.4419 2.3677.7253 1.9258 1.9258l-2.6188 7.1144c-.2521.685-1.1294.8778-1.6455.3616l-5.13751-5.1375c-.51613-.5161-.32332-1.3934.36166-1.6455z"
          fill="url(#C)"
        />
        <path
          d="m13.5815 16.7179c1.2005-.4419 2.3677.7253 1.9258 1.9258l-2.6188 7.1144c-.2521.685-1.1294.8778-1.6455.3616l-5.13751-5.1375c-.51613-.5161-.32332-1.3934.36166-1.6455z"
          fill="url(#D)"
        />
        <g filter="url(#d)">
          <path d="m9.20465 22.0468 5.62505-4.4063-3.625 6.4375z" fill="url(#E)" />
        </g>
      </g>
    </svg>
  )
})
