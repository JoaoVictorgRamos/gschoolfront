<template>
  <div class="container-home" data-anima="top">
    <header>
      <svg
        class="emoji"
        width="48"
        height="48"
        viewBox="0 0 28 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path d="M0 28.96H28V0.96H0V28.96Z" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlink:href="#image0_2302_423" transform="scale(0.015625)" />
          </pattern>
          <image
            id="image0_2302_423"
            width="64"
            height="64"
            xlink:href="data:image/png;base64,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"
          />
        </defs>
      </svg>

      <div class="container-grid">
        <div class="svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8 1V15M1 8H15"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M8.09 8C8.3251 7.33167 8.78915 6.76811 9.39995 6.40913C10.0108 6.05016 10.7289 5.91894 11.4272 6.03871C12.1255 6.15849 12.7588 6.52152 13.2151 7.06353C13.6713 7.60553 13.9211 8.29152 13.92 9C13.92 11 10.92 12 10.92 12M11 16H11.01M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div class="svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 20 22"
            fill="none"
          >
            <path
              d="M11.73 20C11.5542 20.3031 11.3018 20.5547 10.9982 20.7295C10.6946 20.9044 10.3504 20.9965 10 20.9965C9.64962 20.9965 9.30539 20.9044 9.00177 20.7295C8.69816 20.5547 8.44581 20.3031 8.27 20M16 7C16 5.4087 15.3679 3.88258 14.2426 2.75736C13.1174 1.63214 11.5913 1 10 1C8.4087 1 6.88258 1.63214 5.75736 2.75736C4.63214 3.88258 4 5.4087 4 7C4 14 1 16 1 16H19C19 16 16 14 16 7Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div class="user">{{ capitalizeFirstLetter(me.name) }}</div>
      </div>
    </header>
    <div class="container-main">
      <section>
        <div>
          <svg
            width="23"
            height="18"
            viewBox="0 0 23 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.2632 9H15.1842L13.1579 12H9.10526L7.07895 9H1M21.2632 9V15C21.2632 15.5304 21.0497 16.0391 20.6697 16.4142C20.2897 16.7893 19.7743 17 19.2368 17H3.02632C2.4889 17 1.9735 16.7893 1.59349 16.4142C1.21349 16.0391 1 15.5304 1 15V9M21.2632 9L17.7678 2.11C17.6 1.77679 17.3414 1.49637 17.021 1.30028C16.7006 1.10419 16.3312 1.0002 15.9542 1H6.30895C5.93197 1.0002 5.56252 1.10419 5.24214 1.30028C4.92176 1.49637 4.66315 1.77679 4.49539 2.11L1 9"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h1>Entrada</h1>
        </div>
        <div>
          <svg
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 1V5M6 1V5M1 9H19M3 3H17C18.1046 3 19 3.89543 19 5V19C19 20.1046 18.1046 21 17 21H3C1.89543 21 1 20.1046 1 19V5C1 3.89543 1.89543 3 3 3Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h1>Tarefas de hoje</h1>
        </div>
        <div>
          <svg
            width="23"
            height="21"
            viewBox="0 0 23 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.448 7.10274V11.1027M11.448 15.1027H11.458M9.73802 1.96274L1.26802 16.1027C1.09339 16.4052 1.00099 16.748 1.00001 17.0973C0.99903 17.4465 1.08951 17.7899 1.26245 18.0933C1.43538 18.3967 1.68474 18.6495 1.98573 18.8266C2.28671 19.0037 2.62882 19.0989 2.97802 19.1027H19.918C20.2672 19.0989 20.6093 19.0037 20.9103 18.8266C21.2113 18.6495 21.4607 18.3967 21.6336 18.0933C21.8065 17.7899 21.897 17.4465 21.896 17.0973C21.8951 16.748 21.8027 16.4052 21.628 16.1027L13.158 1.96274C12.9797 1.66885 12.7287 1.42586 12.4292 1.25723C12.1297 1.08859 11.7918 1 11.448 1C11.1043 1 10.7663 1.08859 10.4668 1.25723C10.1673 1.42586 9.91629 1.66885 9.73802 1.96274Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h1>Vencidos</h1>
        </div>
      </section>
      <main class="main" data-anima="top">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cookie: "",
      me: {},
    };
  },
  methods: {
    capitalizeFirstLetter(string) {
      if (string) {
        return string[0].toUpperCase();
      } else {
        return "?";
      }
    },
    getMe() {
      var link = "http://127.0.0.1:8000/api/me";
      axios
        .get(link, {
          headers: {
            content: "application/json",
            Accept: "application/json",
            Authorization: this.cookie,
          },
        })
        .then((response) => {
          this.me = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    },
    getCookie(nome) {
      const cookies = document.cookie.split("; ");

      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        const cookieNome = cookie[0];
        const cookieValor = cookie[1];

        if (cookieNome === nome) {
          return cookieValor;
        }
      }

      return null; // Retorna null se o cookie não for encontrado
    },
  },
  mounted() {
    const valorDoCookie = this.getCookie("access_token");
    if (valorDoCookie === null) {
      this.$router.push({ name: "login" });
    } else {
      this.cookie = valorDoCookie;
      this.getMe();
    }
  },
};
</script>

<style lang="scss" scoped>
.container-main {
  display: grid;
  grid-template-columns: 300px 1fr;
}
.main {
  overflow: auto;
  height: calc(100vh - 100px);
  padding: 0px 150px;
  width: 100%;
}
.main::-webkit-scrollbar-thumb {
  background-color: #e5e5e5;
}
.main::-webkit-scrollbar-track {
  background-color: transparent;
}
.main::-webkit-scrollbar {
  width: 5px;
  background: transparent;
}
.main::-webkit-scrollbar-track {
  background: transparent;
}
section {
  background: #fafafa;
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px 0 10px 50px;
  div {
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    h1 {
      font-size: 16px;
    }
    svg {
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      animation: dash 5s ease-in-out forwards;
    }
  }
}
.user {
  background: #009488;
  border-radius: 50%;
  height: 48px;
  width: 48px;
  font-size: 25px;
  font-weight: 600;
  display: grid;
  align-content: center;
  justify-content: center;
  cursor: pointer;
}
header {
  background: #000;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px 0 50px;
  .emoji {
    cursor: pointer;
    animation: moveUpDown 2s ease-in-out infinite;
  }
  .container-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    color: #fff;
    align-items: center;
    justify-items: center;
    gap: 50px;
  }
  .svg {
    cursor: pointer;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: dash 5s ease-in-out forwards;
  }
}
.container-home {
  height: calc(100vh - 100px);
  width: 100%;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes moveUpDown {
  0%,
  100% {
    transform: translateY(5px);
  }
  50% {
    transform: translateY(-5px);
  }
}
</style>
