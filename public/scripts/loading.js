/**
 * loading 占位
 * 解决首次加载时白屏的问题
 */
(function () {
  const _root = document.querySelector('#root');
  if (_root && _root.innerHTML === '') {
    _root.innerHTML = `
    <style>
        html,
        body,
        #root {
            height: 100%;
            margin: 0;
            padding: 0;
        }

        .page-loading-warp {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 50px;
        }

        .loader {
            position: absolute;
            margin: auto;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            width: 6.250em;
            height: 6.250em;
            animation: rotate5123 2.4s linear infinite;
        }

        .white {
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: white;
            animation: flash 2.4s linear infinite;
            opacity: 0;
        }

        .dot {
            position: absolute;
            margin: auto;
            width: 2.4em;
            height: 2.4em;
            border-radius: 100%;
            transition: all 1s ease;
        }

        .dot:nth-child(2) {
            top: 0;
            bottom: 0;
            left: 0;
            background: #FF4444;
            animation: dotsY 2.4s linear infinite;
        }

        .dot:nth-child(3) {
            left: 0;
            right: 0;
            top: 0;
            background: #FFBB33;
            animation: dotsX 2.4s linear infinite;
        }

        .dot:nth-child(4) {
            top: 0;
            bottom: 0;
            right: 0;
            background: #99CC00;
            animation: dotsY 2.4s linear infinite;
        }

        .dot:nth-child(5) {
            left: 0;
            right: 0;
            bottom: 0;
            background: #33B5E5;
            animation: dotsX 2.4s linear infinite;
        }

        @keyframes rotate5123 {
            0% {
                transform: rotate(0);
            }

            10% {
                width: 6.250em;
                height: 6.250em;
            }

            66% {
                width: 2.4em;
                height: 2.4em;
            }

            100% {
                transform: rotate(360deg);
                width: 6.250em;
                height: 6.250em;
            }
        }

        @keyframes dotsY {
            66% {
                opacity: .1;
                width: 2.4em;
            }

            77% {
                opacity: 1;
                width: 0;
            }
        }

        @keyframes dotsX {
            66% {
                opacity: .1;
                height: 2.4em;
            }

            77% {
                opacity: 1;
                height: 0;
            }
        }

        @keyframes flash {
            33% {
                opacity: 0;
                border-radius: 0%;
            }

            55% {
                opacity: .6;
                border-radius: 100%;
            }

            66% {
                opacity: 0;
            }
        }
    </style>
    <div style="
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              height: 100%;
              min-height: 420px;
            ">
        <div class="page-loading-warp">
            <figure class="loader">
                <div class="dot white"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </figure>
        </div>
    </div>
    `;
  }
})();