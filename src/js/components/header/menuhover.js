import { gsap } from '/node_modules/gsap/all.js';

export default class MenuAnimationObject {
    constructor() {
        this.render();
        let shapes = [
            `<svg width="875" height="488" viewBox="0 0 875 488" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_25_1405)">
<path d="M228.08 163.985L204.122 293.36L258.028 259.818L314.33 341.276L405.372 252.631L491.622 341.276L568.289 269.401L620.997 341.276L707.247 293.36L769.539 341.276L726.414 245.443L635.372 269.401L599.435 152.006L491.622 245.443L405.372 111.276L266.414 245.443L228.08 163.985Z" fill="url(#paint0_linear_25_1405)" fill-opacity="0.2"/>
</g>
<g filter="url(#filter1_d_25_1405)">
<path d="M219.95 207.887L212.032 250.647C208.999 267.026 226.861 279.211 241.004 270.411L246.397 267.055C252.91 263.003 261.456 264.777 265.817 271.087L290.157 306.302C302.802 324.596 328.858 327.131 344.791 311.617L377.897 279.382C393.07 264.609 417.346 264.937 432.114 280.115L470.302 319.364C482.14 331.531 501.542 331.977 513.927 320.366L544.624 291.587C557.207 279.791 577.272 281.651 587.471 295.56L604.759 319.133C614.039 331.787 631.283 335.562 645.001 327.941L698.989 297.947C704.002 295.163 710.19 295.623 714.735 299.12L724.184 306.388C736.031 315.501 752.191 302.725 746.057 289.095L739.734 275.045C732.047 257.961 713.138 248.937 695.022 253.704L648.732 265.886C641.269 267.85 633.587 263.571 631.328 256.192L614.523 201.293C607.423 178.1 578.812 169.878 560.483 185.764L504.158 234.578C497.544 240.311 487.385 238.852 482.652 231.489L443.266 170.223C423.656 139.718 381.048 134.762 354.959 159.951L288.078 224.525C277.45 234.788 259.882 231.563 253.591 218.195L247.092 204.384C241.146 191.748 222.493 194.156 219.95 207.887Z" fill="url(#paint1_linear_25_1405)"/>
</g>
<g filter="url(#filter2_bf_25_1405)">
<ellipse cx="248.306" cy="243.894" rx="168.531" ry="158.275" transform="rotate(-31.3925 248.306 243.894)" fill="#1D1A25" fill-opacity="0.25"/>
</g>
<defs>
<filter id="filter0_f_25_1405" x="99.1221" y="6.27637" width="775.417" height="440" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="52.5" result="effect1_foregroundBlur_25_1405"/>
</filter>
<filter id="filter1_d_25_1405" x="139.691" y="75.8125" width="679.711" height="332.051" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="36"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.752941 0 0 0 0 0.184314 0 0 0 0 0.415686 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_25_1405"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_25_1405" result="shape"/>
</filter>
<filter id="filter2_bf_25_1405" x="0.467163" y="0.75293" width="495.678" height="486.282" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="14"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_25_1405"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_25_1405" result="shape"/>
<feGaussianBlur stdDeviation="41" result="effect2_foregroundBlur_25_1405"/>
</filter>
<linearGradient id="paint0_linear_25_1405" x1="174.122" y1="226.276" x2="471.31" y2="539.073" gradientUnits="userSpaceOnUse">
<stop offset="0.00563166" stop-color="#7920B8"/>
<stop offset="0.5" stop-color="#E13745"/>
<stop offset="1" stop-color="#799BB8"/>
</linearGradient>
<linearGradient id="paint1_linear_25_1405" x1="192.143" y1="257.422" x2="700.06" y2="353.255" gradientUnits="userSpaceOnUse">
<stop stop-color="#1A2C77"/>
<stop offset="0.264136" stop-color="#7620BB"/>
<stop offset="0.712358" stop-color="#E33743"/>
<stop offset="1" stop-color="#64AFCF"/>
</linearGradient>
</defs>
</svg>
`,
            `<svg width="748" height="707" viewBox="0 0 748 707" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_25_1393)">
<path d="M395 550L169 478.5L233.5 281L395 105L569 281L642.5 478.5L395 550Z" fill="url(#paint0_linear_25_1393)" fill-opacity="0.2"/>
</g>
<g filter="url(#filter1_d_25_1393)">
<path d="M227.719 497.077L182.087 482.64C174.879 480.36 170.914 472.638 173.261 465.452L184.723 430.355C216.868 331.927 270.572 240.599 340.578 164.308C369.961 132.287 420.587 130.881 451.141 161.787L469.814 180.674C535.191 246.803 585.772 326.068 618.206 413.22C631.318 448.453 611.699 487.398 575.582 497.832L563.56 501.305C453.647 533.057 336.798 531.586 227.719 497.077Z" fill="url(#paint1_linear_25_1393)"/>
</g>
<g filter="url(#filter2_bf_25_1393)">
<ellipse cx="251.322" cy="464" rx="157.637" ry="171.85" transform="rotate(-63.3306 251.322 464)" fill="#1D1A25" fill-opacity="0.25"/>
</g>
<defs>
<filter id="filter0_f_25_1393" x="64" y="0" width="683.5" height="655" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="52.5" result="effect1_foregroundBlur_25_1393"/>
</filter>
<filter id="filter1_d_25_1393" x="79.5856" y="50.4268" width="635.701" height="570.658" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="46.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.945098 0 0 0 0 0.666667 0 0 0 0 0.313726 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_25_1393"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_25_1393" result="shape"/>
</filter>
<filter id="filter2_bf_25_1393" x="0.197632" y="221.368" width="502.248" height="485.264" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="14"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_25_1393"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_25_1393" result="shape"/>
<feGaussianBlur stdDeviation="41" result="effect2_foregroundBlur_25_1393"/>
</filter>
<linearGradient id="paint0_linear_25_1393" x1="143.877" y1="327.5" x2="578.299" y2="525.407" gradientUnits="userSpaceOnUse">
<stop offset="0.00563166" stop-color="#7920B8"/>
<stop offset="0.5" stop-color="#E13745"/>
<stop offset="1" stop-color="#799BB8"/>
</linearGradient>
<linearGradient id="paint1_linear_25_1393" x1="405.75" y1="105" x2="169" y2="477" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFF501"/>
<stop offset="0.544792" stop-color="#EA8577"/>
<stop offset="1" stop-color="#0E00AC"/>
</linearGradient>
</defs>
</svg>
`,
            `<svg width="716" height="653" viewBox="0 0 716 653" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_bf_25_1409)">
<path d="M381.586 70L452.257 105.295L384.797 249.68L538.989 214.413L555.049 291.395L400.862 326.686L526.14 426.138L477.955 487.102L352.677 387.65V544.873H272.372V387.65L147.094 487.116L98.9089 426.138L224.187 326.671L70 291.395L86.06 214.413L240.252 249.68L172.796 105.3L243.468 70.0048L310.919 214.413L381.586 70Z" fill="url(#paint0_linear_25_1409)" fill-opacity="0.25"/>
</g>
<g filter="url(#filter1_d_25_1409)">
<path d="M370.313 93.0366C376.524 80.3442 391.889 75.1455 404.53 81.4591L430.085 94.2218C442.423 100.384 447.604 115.255 441.766 127.75L406.84 202.502C397.874 221.69 414.913 242.792 435.56 238.07L513.71 220.195C527.592 217.02 541.377 225.859 544.285 239.799L549.953 266.968C552.783 280.535 544.234 293.87 530.725 296.962L452.462 314.875C431.668 319.635 425.613 346.335 442.321 359.598L506.258 410.354C517.245 419.077 519.098 435.048 510.399 446.054L493.764 467.101C485.038 478.14 469.009 480 457.988 471.251L393.934 420.401C377.262 407.166 352.677 419.039 352.677 440.326V519.434C352.677 533.483 341.287 544.873 327.237 544.873H297.812C283.762 544.873 272.372 533.483 272.372 519.434V440.331C272.372 419.043 247.786 407.17 231.114 420.407L167.063 471.261C156.042 480.012 140.01 478.152 131.285 467.11L114.645 446.052C105.948 435.046 107.801 419.078 118.786 410.356L182.729 359.587C199.436 346.323 193.379 319.623 172.584 314.865L94.3261 296.96C80.8161 293.87 72.266 280.533 75.0964 266.966L80.764 239.799C83.6723 225.859 97.4571 217.02 111.339 220.195L189.49 238.07C210.137 242.792 227.175 221.691 218.21 202.502L183.287 127.754C177.45 115.26 182.631 100.389 194.969 94.2268L220.104 81.6734C232.907 75.2791 248.464 80.7001 254.52 93.6666L288.404 166.21C297.451 185.58 324.907 185.828 334.304 166.625L370.313 93.0366Z" fill="url(#paint1_radial_25_1409)"/>
</g>
<g filter="url(#filter2_bf_25_1409)">
<ellipse cx="459.976" cy="417.212" rx="197.341" ry="152.467" transform="rotate(-31.3925 459.976 417.212)" fill="#1D1A25" fill-opacity="0.25"/>
</g>
<defs>
<filter id="filter0_bf_25_1409" x="0.465004" y="0.465004" width="624.119" height="613.943" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="11.8718"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_25_1409"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_25_1409" result="shape"/>
<feGaussianBlur stdDeviation="34.7675" result="effect2_foregroundBlur_25_1409"/>
</filter>
<filter id="filter1_d_25_1409" x="10.1083" y="17.7178" width="604.833" height="594.994" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3.39195"/>
<feGaussianBlur stdDeviation="32.2235"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.776471 0 0 0 0 0.0862745 0 0 0 0 0.823529 0 0 0 0.2 0"/>
<feBlend mode="color-dodge" in2="BackgroundImageFix" result="effect1_dropShadow_25_1409"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_25_1409" result="shape"/>
</filter>
<filter id="filter2_bf_25_1409" x="204.16" y="181.823" width="511.632" height="470.778" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="11.8718"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_25_1409"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_25_1409" result="shape"/>
<feGaussianBlur stdDeviation="34.7675" result="effect2_foregroundBlur_25_1409"/>
</filter>
<linearGradient id="paint0_linear_25_1409" x1="312.524" y1="70" x2="312.524" y2="544.873" gradientUnits="userSpaceOnUse">
<stop stop-color="#DFAD47"/>
<stop offset="0.570833" stop-color="#FE3FB2"/>
<stop offset="1" stop-color="#9005C2"/>
</linearGradient>
<radialGradient id="paint1_radial_25_1409" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30.9926 29.2966) rotate(49.9697) scale(498.357 962.429)">
<stop offset="0.336458" stop-color="#E0BD3B"/>
<stop offset="0.758333" stop-color="#FF40B1"/>
<stop offset="1" stop-color="#AB00E7"/>
</radialGradient>
</defs>
</svg>
`,
            `<svg width="684" height="695" viewBox="0 0 684 695" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_25_1418)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M386.696 539.079C467.609 504.681 524.348 424.467 524.348 331C524.348 206.184 423.164 105 298.348 105C216.391 105 144.624 148.625 105 213.921C132.139 202.383 161.998 196 193.348 196C318.164 196 419.348 297.184 419.348 422C419.348 464.86 407.417 504.933 386.696 539.079Z" fill="url(#paint0_linear_25_1418)" fill-opacity="0.2"/>
</g>
<g filter="url(#filter1_d_25_1418)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M391.361 531.022C389.953 533.573 392.556 536.509 395.188 535.259C471.551 498.991 524.348 421.161 524.348 331C524.348 206.184 423.164 105 298.348 105C219.725 105 150.479 145.148 109.994 206.061C108.381 208.488 110.915 211.484 113.641 210.457C138.429 201.113 165.291 196 193.348 196C318.164 196 419.348 297.184 419.348 422C419.348 461.533 409.197 498.695 391.361 531.022Z" fill="url(#paint1_linear_25_1418)" shape-rendering="crispEdges"/>
</g>
<g filter="url(#filter2_bf_25_1418)">
<ellipse cx="473.348" cy="439.472" rx="185.336" ry="109.03" transform="rotate(-63.3306 473.348 439.472)" fill="#1D1A25" fill-opacity="0.25"/>
</g>
<defs>
<filter id="filter0_f_25_1418" x="0" y="0" width="629.348" height="644.079" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="52.5" result="effect1_foregroundBlur_25_1418"/>
</filter>
<filter id="filter1_d_25_1418" x="34.489" y="34" width="564.859" height="580.557" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="37.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.262745 0 0 0 0 0.478431 0 0 0 0 0.85098 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_25_1418"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_25_1418" result="shape"/>
</filter>
<filter id="filter2_bf_25_1418" x="263.233" y="184.729" width="420.229" height="509.485" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="14"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_25_1418"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_25_1418" result="shape"/>
<feGaussianBlur stdDeviation="41" result="effect2_foregroundBlur_25_1418"/>
</filter>
<linearGradient id="paint0_linear_25_1418" x1="82.7501" y1="322.04" x2="479.468" y2="486.128" gradientUnits="userSpaceOnUse">
<stop offset="0.00563166" stop-color="#7920B8"/>
<stop offset="0.5" stop-color="#E13745"/>
<stop offset="1" stop-color="#799BB8"/>
</linearGradient>
<linearGradient id="paint1_linear_25_1418" x1="316.918" y1="105" x2="316.918" y2="535.557" gradientUnits="userSpaceOnUse">
<stop stop-color="#42B0FF"/>
<stop offset="0.419792" stop-color="#595FFF" stop-opacity="0.580208"/>
<stop offset="1" stop-color="#EB00FF" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`,
        ];

        // menu-shapes-wrapper
    }

    render() {
        const svgContainer = document.querySelector('.menu-shapes-wrapper');
        const timeline = gsap.timeline();

        // Define the initial state of the SVG
        gsap.set(svgContainer, { scale: 0.5, opacity: 0 });

        // Define the physics-based animation using GSAP methods and Physics2DPlugin
        timeline
            .to(svgContainer, {
                duration: 1,
                opacity: 1,
                scale: 1,
                ease: 'power2.out',
            })
            .fromTo(
                svgContainer,
                { drawSVG: '0%' },
                {
                    duration: 3,
                    drawSVG: '100%',
                    ease: 'power2.inOut',
                    physics2D: { velocity: 200, angle: 90, friction: 0.1 },
                }
            );
    }
}
