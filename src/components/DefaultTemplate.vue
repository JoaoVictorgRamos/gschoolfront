<template>
  <div
    class="container-default"
    @mouseenter="svg = true"
    @mouseleave="svg = false"
  >
    <div class="emoji-container">
      <span>🤘</span>
    </div>
    <div>
      <h1>A fortuna fica ao lado daquele que ousa.</h1>
      <h2>Todo progresso ocorre fora da zona de conforto.</h2>
    </div>
    <svg
      v-if="!svg"
      xmlns="http://www.w3.org/2000/svg"
      width="265"
      height="140"
      viewBox="0 0 265 140"
      fill="none"
    >
      <rect
        y="10"
        width="100"
        height="100"
        fill="url(#paint0_linear_2302_246)"
        fill-opacity="0.3"
      />
      <g filter="url(#filter0_d_2302_246)">
        <rect x="135" y="10" width="100" height="100" fill="black" />
      </g>
      <rect
        width="35.5156"
        height="35.5156"
        transform="matrix(0.866025 0.5 -0.866025 0.5 185 49.3452)"
        fill="white"
        fill-opacity="0.3"
      />
      <rect
        width="35.5156"
        height="35.5156"
        transform="matrix(0.866025 0.5 -0.866025 0.5 185 35.139)"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_2302_246"
          x="125"
          y="0"
          width="140"
          height="140"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="10" dy="10" />
          <feGaussianBlur stdDeviation="10" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.146146 0 0 0 0 0.150698 0 0 0 0 0.191667 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2302_246"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2302_246"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2302_246"
          x1="110.285"
          y1="60"
          x2="17.6195"
          y2="60"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0" />
          <stop offset="0.360164" stop-opacity="0.651432" />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      width="265"
      height="140"
      viewBox="0 0 265 140"
      fill="none"
    >
      <rect
        y="10"
        width="100"
        height="100"
        fill="url(#paint0_linear_2302_266)"
        fill-opacity="0.3"
      />
      <g filter="url(#filter0_d_2302_266)">
        <rect x="135" y="10" width="100" height="100" fill="white" />
      </g>
      <rect
        width="35.5156"
        height="35.5156"
        transform="matrix(0.866025 0.5 -0.866025 0.5 185 49.3452)"
        fill="black"
        fill-opacity="0.3"
      />
      <rect
        width="35.5156"
        height="35.5156"
        transform="matrix(0.866025 0.5 -0.866025 0.5 185 35.139)"
        fill="black"
      />
      <defs>
        <filter
          id="filter0_d_2302_266"
          x="125"
          y="0"
          width="140"
          height="140"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="10" dy="10" />
          <feGaussianBlur stdDeviation="10" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.146146 0 0 0 0 0.150698 0 0 0 0 0.191667 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2302_266"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2302_266"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2302_266"
          x1="110.285"
          y1="60"
          x2="17.6195"
          y2="60"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0" />
          <stop offset="0.360164" stop-color="white" stop-opacity="0.651432" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      svg: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.container-default {
  background: #f7f7f7;
  transition: all 0.3s;
  height: 100%;
  width: 100%;
  display: grid;
  position: relative;
  align-items: center;
  padding: 50px;
  .emoji-container {
    transition: transform 0.3s;
  }
  span {
    font-size: 48px;
  }
  div {
    display: grid;
    gap: 20px;
  }
  h1 {
    color: #000000;
    font-size: 24px;
    font-weight: 700;
  }
  h2 {
    color: #000;
    font-size: 16px;
    font-weight: 400;
  }
  &:hover {
    background: #000;
    h1,
    h2 {
      color: #fff;
    }
    .emoji-container {
      transform: translateY(100px);
    }
  }
}
</style>
