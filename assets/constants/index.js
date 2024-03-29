(function (){
    const preLoader = document.querySelector('#preloader')

preLoader.innerHTML = `
<div class="box-of-star1">
    <div class="star star-position1"></div>
    <div class="star star-position2"></div>
    <div class="star star-position3"></div>
    <div class="star star-position4"></div>
    <div class="star star-position5"></div>
    <div class="star star-position6"></div>
    <div class="star star-position7"></div>
</div>
<div class="box-of-star2">
    <div class="star star-position1"></div>
    <div class="star star-position2"></div>
    <div class="star star-position3"></div>
    <div class="star star-position4"></div>
    <div class="star star-position5"></div>
    <div class="star star-position6"></div>
    <div class="star star-position7"></div>
</div>
<div class="box-of-star3">
    <div class="star star-position1"></div>
    <div class="star star-position2"></div>
    <div class="star star-position3"></div>
    <div class="star star-position4"></div>
    <div class="star star-position5"></div>
    <div class="star star-position6"></div>
    <div class="star star-position7"></div>
</div>
<div class="box-of-star4">
    <div class="star star-position1"></div>
    <div class="star star-position2"></div>
    <div class="star star-position3"></div>
    <div class="star star-position4"></div>
    <div class="star star-position5"></div>
    <div class="star star-position6"></div>
    <div class="star star-position7"></div>
</div>
<div data-js="astro" class="astronaut">
    <div class="head"></div>
    <div class="arm arm-left"></div>
    <div class="arm arm-right"></div>
    <div class="body">
        <div class="panel"></div>
    </div>
    <div class="leg leg-left"></div>
    <div class="leg leg-right"></div>
    <div class="schoolbag"></div>
</div>`

const homeText = document.querySelector('#home-text')

homeText.innerHTML = `    Are you in search of a proficient and passionate MERN stack developer for your upcoming website
or web application? Your quest ends here! Let's join forces and craft something exceptional
together!`

const aboutContent = document.querySelector('#about-content')

aboutContent.innerHTML = `🚀 Arbab Zafar: A Proficient MERN Stack Developer Crafting Exceptional Digital Experiences

Meet Arbab Zafar, a skilled MERN stack developer with expertise in various tools and
technologies,
dedicated to delivering captivating digital solutions. Proficient in MongoDB, Express.js,
React.js, and
Node.js, Arbab excels in creating seamless and feature-rich web applications. <span
    id="dots">...</span><span id="more">

    🖥️ Mastering the MERN Stack

    Arbab's journey into web development goes beyond frontend expertise. Currently honing skills
    in
    server-side scripting with Node.js, creating robust APIs with Express.js, and managing
    databases
    efficiently using MongoDB, Arbab is on the path to becoming a full-stack development
    maestro.

    <span class="about-heading">💻 Frontend Excellence</span>

    Arbab's frontend skills are top-notch, ranging from HTML, CSS, and JavaScript to crafting
    responsive and visually appealing user interfaces. With React.js, he elevates web
    applications,
    delivering dynamic and interactive experiences that captivate users.

    <span class="about-heading">📋 Formik and Yup Enthusiast</span>

    Arbab is well-versed in utilizing Formik and Yup for seamless form management and validation
    in
    React applications. Attention to detail ensures precise handling of user data, resulting in
    a
    flawless and user-friendly experience.

    <span class="about-heading">🔄 Redux Virtuoso</span>

    Embracing efficient state management, Arbab leverages Redux to maintain application data
    gracefully. His implementations ensure smooth data flow, enhancing overall user
    satisfaction.

    <span class="about-heading">✨ Dynamic Animation Expert</span>

    Websites crafted by Arbab are not static; they come alive with captivating animations.
    Whether
    incorporating subtle micro-interactions or engaging page transitions, Arbab's animations
    breathe
    life into digital experiences, creating memorable interactions.

    <span class="about-heading">🎨 CSS Framework Maestro</span>

    With proficiency in Tailwind CSS and Bootstrap, Arbab streamlines development processes,
    ensuring visually consistent designs. These frameworks expedite frontend development while
    maintaining
    a polished and professional appearance.

    <span class="about-heading">✍️ Content Craftsman and Optimization Enthusiast</span>

    Arbab isn't just a developer; he's a wordsmith who understands the importance of crafting
    beautiful and optimized content. His keen eye for detail ensures that written content is not
    only
    informative but also engaging, seamlessly integrating it into the overall user experience.

    🔥 In summary, Arbab Zafar is a creative force seamlessly blending design and development to
    craft
    visually stunning, user-friendly, and technically robust digital experiences. As he
    continues to
    explore the realms of full-stack development, Arbab stands as a rising star pushing the
    boundaries
    of what's achievable in the dynamic world of web development.
`

const space = document.querySelector('.space')

space.innerHTML = `
<div class="blob"></div>
<svg class=gridItem__media version=1.1 id=Layer_1 xmlns=http://www.w3.org/2000/svg x=0px y=0px
    viewBox="0 0 1600 1200"
    style="clip-rule:nonzero;color:#3d3d3d;color-interpolation-filters:linearrgb;cursor:auto;direction:ltr;display:block;fill:none;fill-opacity:1;fill-rule:nonzero;font:400 16px/18.4px Lato,sans-serif;image-rendering:auto;letter-spacing:normal;marker:none;overflow:hidden;paint-order:normal;pointer-events:auto;shape-rendering:auto;stroke:none;stroke-dasharray:none;stroke-dashoffset:0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-width:1px;text-anchor:start;text-decoration:none solid rgb(61,61,61);text-rendering:auto;visibility:visible;word-spacing:0px;writing-mode:horizontal-tb"
    fill=none xmlns:xlink=http://www.w3.org/1999/xlink>
    <path
        d="M207.351 1016L86.351 738.789C81.9158 728.628 80.7791 717.331 83.101 706.49L157.281 359.779C158.969 351.878 162.442 344.467 167.434 338.113C172.425 331.759 178.804 326.63 186.081 323.119L462.671 189.559C470.698 185.689 479.571 183.901 488.471 184.359L1204.06 221.359C1211.49 221.749 1218.76 223.699 1225.39 227.083C1232.02 230.467 1237.86 235.208 1242.53 240.999L1505.66 565.999C1510.68 572.196 1514.24 579.445 1516.07 587.207C1517.89 594.969 1517.95 603.044 1516.22 610.829L1426.64 1015.13L207.351 1016Z"
        fill=#3F4249
        style="fill:#F028FD;paint-order:normal;text-decoration:none solid #F028FD;opacity:.3">
    </path>
    <path
        d="M185.001 966.46L184.711 962.46C222.711 959.63 252.481 945.91 273.281 921.67C309.801 879.12 309.201 816.41 307.281 791.43C306.384 780.823 307.031 770.142 309.201 759.72C314.611 734.56 327.681 715.47 348.031 702.95C374.861 686.47 409.771 684.53 434.341 685.81C450.264 686.622 466.079 688.884 481.591 692.57C524.091 701.57 552.111 699.8 562.541 687.39C570.461 677.96 566.681 664.23 563.731 656.88C559.745 647.254 558.456 636.724 560.001 626.42C565.781 590.27 603.271 575.97 625.101 570.66C640.029 567.144 654.138 560.778 666.651 551.91C691.501 534 696.871 514.34 698.001 506.7C699.581 496.26 689.611 485.42 679.061 480.97C669.251 476.83 660.341 478.39 655.231 485.15C644.501 499.31 632.991 506.82 621.031 507.46C605.961 508.27 595.941 497.82 595.521 497.37L598.431 494.63C598.521 494.72 607.671 504.21 620.871 503.46C631.581 502.87 642.071 495.9 652.041 482.73C658.331 474.43 669.041 472.39 680.611 477.28C692.411 482.28 703.901 494.47 701.961 507.28C700.731 515.42 695.041 536.38 668.961 555.14C656.028 564.32 641.439 570.908 626.001 574.54C605.141 579.62 569.331 593.19 563.911 627.06C562.479 636.648 563.682 646.444 567.391 655.4C570.681 663.57 574.821 678.94 565.551 689.97C553.951 703.78 525.371 705.97 480.621 696.47C479.721 696.24 399.821 675.79 350.071 706.38C330.681 718.29 318.231 736.53 313.071 760.57C310.984 770.614 310.361 780.908 311.221 791.13C313.221 816.61 313.801 880.59 276.301 924.29C254.771 949.36 224.051 963.55 185.001 966.46Z"
        fill=#B2B6BB
        style="fill:rgb(178,182,187);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path opacity="0.2"
        d="M683.831 478.82L682.631 478.28C671.031 473.39 660.351 475.43 654.061 483.73C644.061 496.9 633.601 503.87 622.891 504.46C617.542 504.699 612.232 503.438 607.561 500.82C604.84 499.553 602.298 497.932 600.001 496L597.531 498.33C599.958 500.722 602.724 502.744 605.741 504.33C610.517 506.572 615.772 507.602 621.041 507.33C633.041 506.69 644.511 499.18 655.241 485.02C660.351 478.26 669.241 476.7 679.071 480.84C680.071 481.26 681.071 481.73 682.071 482.26C692.251 486.95 701.581 497.45 700.071 507.57C698.921 515.21 693.551 534.91 668.661 552.78C656.148 561.648 642.039 568.014 627.111 571.53C605.281 576.84 567.791 591.14 562.011 627.29C560.461 637.596 561.747 648.13 565.731 657.76C568.731 665.11 572.461 678.84 564.541 688.27C554.111 700.68 526.091 702.47 483.591 693.45C468.079 689.764 452.264 687.502 436.341 686.69C411.771 685.41 376.861 687.35 350.031 703.83C329.681 716.35 316.611 735.44 311.201 760.6C309.031 771.022 308.384 781.703 309.281 792.31C311.231 817.31 311.831 880 275.281 922.55C254.481 946.79 224.681 960.55 186.711 963.34L186.921 966.17C225.071 962.94 255.151 948.82 276.311 924.17C313.811 880.47 313.231 816.49 311.231 791.01C310.371 780.788 310.994 770.494 313.081 760.45C318.251 736.45 330.701 718.17 350.081 706.26C399.831 675.67 479.731 696.12 480.631 696.35C525.381 705.85 553.961 703.66 565.561 689.85C574.831 678.85 570.691 663.45 567.401 655.28C563.692 646.324 562.489 636.528 563.921 626.94C569.341 593.07 605.151 579.5 626.011 574.42C641.441 570.792 656.023 564.211 668.951 555.04C695.071 536.28 700.761 515.32 701.951 507.18C703.741 495.63 694.411 484.49 683.831 478.82Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M746.852 225.644C747.47 223.026 745.849 220.403 743.231 219.786C740.613 219.168 737.99 220.789 737.373 223.407C736.755 226.024 738.376 228.647 740.994 229.265C743.611 229.883 746.234 228.262 746.852 225.644Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M654.723 418.096C655.59 414.425 653.316 410.746 649.645 409.88C645.973 409.013 642.295 411.287 641.428 414.958C640.562 418.629 642.835 422.308 646.507 423.174C650.178 424.041 653.857 421.767 654.723 418.096Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M1069.37 584.448C1070.23 580.776 1067.96 577.098 1064.29 576.231C1060.62 575.365 1056.94 577.638 1056.07 581.31C1055.21 584.981 1057.48 588.659 1061.15 589.526C1064.82 590.392 1068.5 588.119 1069.37 584.448Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M285.668 422.494C286.535 418.823 284.261 415.145 280.59 414.278C276.919 413.412 273.24 415.685 272.374 419.357C271.507 423.028 273.781 426.706 277.452 427.573C281.123 428.439 284.802 426.166 285.668 422.494Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M1134.44 465.299C1135.31 461.628 1133.03 457.949 1129.36 457.083C1125.69 456.216 1122.01 458.49 1121.15 462.161C1120.28 465.833 1122.55 469.511 1126.23 470.378C1129.9 471.244 1133.58 468.97 1134.44 465.299Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M431.742 461.178C432.207 459.211 430.988 457.239 429.021 456.775C427.054 456.311 425.082 457.529 424.618 459.496C424.154 461.464 425.372 463.435 427.339 463.899C429.307 464.364 431.278 463.145 431.742 461.178Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M540.985 331.543C541.449 329.576 540.23 327.605 538.263 327.14C536.296 326.676 534.325 327.894 533.86 329.862C533.396 331.829 534.614 333.8 536.582 334.265C538.549 334.729 540.52 333.51 540.985 331.543Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M355.945 281.987C356.41 280.019 355.191 278.048 353.224 277.584C351.257 277.119 349.286 278.338 348.821 280.305C348.357 282.272 349.575 284.244 351.543 284.708C353.51 285.172 355.481 283.954 355.945 281.987Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M931.723 243.274C932.187 241.306 930.969 239.335 929.001 238.871C927.034 238.407 925.063 239.625 924.599 241.592C924.134 243.56 925.353 245.531 927.32 245.995C929.287 246.459 931.258 245.241 931.723 243.274Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M193.121 534.281C193.586 532.314 192.367 530.343 190.4 529.879C188.433 529.414 186.461 530.633 185.997 532.6C185.533 534.567 186.751 536.539 188.718 537.003C190.686 537.467 192.657 536.249 193.121 534.281Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M390.117 759.274C390.582 757.306 389.363 755.335 387.396 754.871C385.429 754.406 383.457 755.625 382.993 757.592C382.529 759.559 383.747 761.531 385.715 761.995C387.682 762.459 389.653 761.241 390.117 759.274Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M426.117 897.266C426.582 895.299 425.363 893.327 423.396 892.863C421.429 892.399 419.457 893.617 418.993 895.584C418.529 897.552 419.747 899.523 421.715 899.987C423.682 900.452 425.653 899.233 426.117 897.266Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M1274.89 363.981C1275.36 362.013 1274.14 360.042 1272.17 359.578C1270.2 359.113 1268.23 360.332 1267.77 362.299C1267.3 364.266 1268.52 366.238 1270.49 366.702C1272.46 367.166 1274.43 365.948 1274.89 363.981Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M1155.9 352.981C1156.36 351.013 1155.14 349.042 1153.18 348.578C1151.21 348.113 1149.24 349.332 1148.77 351.299C1148.31 353.266 1149.53 355.238 1151.5 355.702C1153.46 356.166 1155.43 354.948 1155.9 352.981Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M1366.66 746.742C1367.13 744.775 1365.91 742.804 1363.94 742.339C1361.98 741.875 1360 743.094 1359.54 745.061C1359.08 747.028 1360.29 748.999 1362.26 749.464C1364.23 749.928 1366.2 748.71 1366.66 746.742Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M1278.66 778.74C1279.13 776.773 1277.91 774.802 1275.94 774.338C1273.98 773.873 1272 775.092 1271.54 777.059C1271.08 779.026 1272.29 780.997 1274.26 781.462C1276.23 781.926 1278.2 780.708 1278.66 778.74Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M1384.07 616.072C1384.53 614.105 1383.31 612.134 1381.35 611.67C1379.38 611.205 1377.41 612.424 1376.94 614.391C1376.48 616.358 1377.7 618.33 1379.66 618.794C1381.63 619.258 1383.6 618.04 1384.07 616.072Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M508.635 233.115C509.536 229.299 507.172 225.475 503.356 224.574C499.539 223.674 495.715 226.037 494.815 229.854C493.914 233.67 496.277 237.494 500.094 238.395C503.91 239.295 507.734 236.932 508.635 233.115Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M972.02 491.26C972.484 489.293 971.266 487.321 969.298 486.857C967.331 486.393 965.36 487.611 964.895 489.579C964.431 491.546 965.65 493.517 967.617 493.981C969.584 494.446 971.555 493.227 972.02 491.26Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M1146.32 796.033C1146.78 794.066 1145.57 792.095 1143.6 791.631C1141.63 791.166 1139.66 792.385 1139.2 794.352C1138.73 796.319 1139.95 798.29 1141.92 798.755C1143.88 799.219 1145.86 798.001 1146.32 796.033Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M1236.32 926.022C1236.78 924.054 1235.56 922.083 1233.6 921.619C1231.63 921.155 1229.66 922.373 1229.19 924.34C1228.73 926.307 1229.95 928.279 1231.91 928.743C1233.88 929.207 1235.85 927.989 1236.32 926.022Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M1096.32 710.029C1096.79 708.062 1095.57 706.091 1093.6 705.627C1091.64 705.162 1089.66 706.381 1089.2 708.348C1088.74 710.315 1089.95 712.287 1091.92 712.751C1093.89 713.215 1095.86 711.997 1096.32 710.029Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M275.356 846.037C275.82 844.07 274.602 842.099 272.634 841.634C270.667 841.17 268.696 842.389 268.231 844.356C267.767 846.323 268.985 848.294 270.953 848.759C272.92 849.223 274.891 848.005 275.356 846.037Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M309.356 828.041C309.82 826.074 308.602 824.103 306.634 823.638C304.667 823.174 302.696 824.392 302.231 826.36C301.767 828.327 302.985 830.298 304.953 830.763C306.92 831.227 308.891 830.009 309.356 828.041Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M597.262 475.871C597.726 473.904 596.508 471.933 594.54 471.468C592.573 471.004 590.602 472.223 590.138 474.19C589.673 476.157 590.892 478.128 592.859 478.593C594.826 479.057 596.798 477.839 597.262 475.871Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M1445.56 583.596C1446.03 581.629 1444.81 579.657 1442.84 579.193C1440.87 578.729 1438.9 579.947 1438.44 581.914C1437.97 583.882 1439.19 585.853 1441.16 586.317C1443.13 586.782 1445.1 585.563 1445.56 583.596Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M1469.57 647.588C1470.03 645.621 1468.81 643.65 1466.85 643.185C1464.88 642.721 1462.91 643.939 1462.44 645.907C1461.98 647.874 1463.2 649.845 1465.16 650.309C1467.13 650.774 1469.1 649.555 1469.57 647.588Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M1158.58 599.596C1159.04 597.629 1157.82 595.657 1155.86 595.193C1153.89 594.729 1151.92 595.947 1151.45 597.914C1150.99 599.882 1152.21 601.853 1154.18 602.317C1156.14 602.782 1158.11 601.563 1158.58 599.596Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M1251.57 827.586C1252.04 825.619 1250.82 823.648 1248.85 823.183C1246.89 822.719 1244.91 823.937 1244.45 825.905C1243.99 827.872 1245.2 829.843 1247.17 830.308C1249.14 830.772 1251.11 829.553 1251.57 827.586Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M435.176 611.283C435.64 609.316 434.422 607.345 432.455 606.881C430.487 606.416 428.516 607.635 428.052 609.602C427.587 611.569 428.806 613.54 430.773 614.005C432.74 614.469 434.712 613.251 435.176 611.283Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M776.704 487.986C777.322 485.368 775.7 482.745 773.083 482.127C770.465 481.51 767.842 483.131 767.224 485.749C766.606 488.366 768.228 490.989 770.845 491.607C773.463 492.225 776.086 490.604 776.704 487.986Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M1209.58 681.043C1210.2 678.425 1208.58 675.802 1205.96 675.184C1203.34 674.566 1200.72 676.187 1200.1 678.805C1199.49 681.423 1201.11 684.046 1203.72 684.664C1206.34 685.281 1208.96 683.66 1209.58 681.043Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M1108.82 297.318C1109.43 294.7 1107.81 292.077 1105.2 291.459C1102.58 290.842 1099.96 292.463 1099.34 295.081C1098.72 297.698 1100.34 300.321 1102.96 300.939C1105.58 301.557 1108.2 299.936 1108.82 297.318Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M706.575 602.003C707.193 599.386 705.571 596.763 702.954 596.145C700.336 595.527 697.713 597.148 697.095 599.766C696.477 602.384 698.099 605.007 700.716 605.625C703.334 606.242 705.957 604.621 706.575 602.003Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M598.575 605.005C599.193 602.388 597.571 599.765 594.954 599.147C592.336 598.529 589.713 600.15 589.095 602.768C588.477 605.386 590.099 608.009 592.716 608.626C595.334 609.244 597.957 607.623 598.575 605.005Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M1294.52 549.962C1295.13 547.345 1293.51 544.722 1290.9 544.104C1288.28 543.486 1285.65 545.107 1285.04 547.725C1284.42 550.343 1286.04 552.966 1288.66 553.584C1291.28 554.201 1293.9 552.58 1294.52 549.962Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M1393.51 879.945C1394.13 877.327 1392.51 874.704 1389.89 874.086C1387.27 873.469 1384.65 875.09 1384.03 877.707C1383.41 880.325 1385.04 882.948 1387.65 883.566C1390.27 884.184 1392.89 882.563 1393.51 879.945Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M1327.53 413.601C1328.15 410.983 1326.52 408.361 1323.91 407.743C1321.29 407.125 1318.67 408.746 1318.05 411.364C1317.43 413.981 1319.05 416.604 1321.67 417.222C1324.29 417.84 1326.91 416.219 1327.53 413.601Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M781.899 680.591C782.517 677.974 780.896 675.351 778.278 674.733C775.66 674.115 773.037 675.736 772.419 678.354C771.802 680.972 773.423 683.595 776.041 684.212C778.658 684.83 781.281 683.209 781.899 680.591Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M636.907 777.585C637.525 774.968 635.903 772.345 633.286 771.727C630.668 771.109 628.045 772.73 627.427 775.348C626.809 777.966 628.431 780.589 631.048 781.207C633.666 781.824 636.289 780.203 636.907 777.585Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M528.915 715.595C529.532 712.978 527.911 710.355 525.294 709.737C522.676 709.119 520.053 710.74 519.435 713.358C518.817 715.976 520.438 718.599 523.056 719.216C525.674 719.834 528.297 718.213 528.915 715.595Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M293.922 933.589C294.54 930.972 292.919 928.349 290.301 927.731C287.684 927.113 285.061 928.734 284.443 931.352C283.825 933.97 285.446 936.593 288.064 937.21C290.682 937.828 293.305 936.207 293.922 933.589Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M109.926 694.597C110.544 691.98 108.923 689.357 106.305 688.739C103.688 688.121 101.065 689.742 100.447 692.36C99.829 694.978 101.45 697.6 104.068 698.218C106.686 698.836 109.309 697.215 109.926 694.597Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M928.895 628.597C929.513 625.98 927.892 623.357 925.274 622.739C922.656 622.121 920.033 623.742 919.416 626.36C918.798 628.978 920.419 631.6 923.037 632.218C925.654 632.836 928.277 631.215 928.895 628.597Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M936.895 755.585C937.513 752.968 935.892 750.345 933.274 749.727C930.656 749.109 928.033 750.73 927.416 753.348C926.798 755.966 928.419 758.589 931.037 759.207C933.654 759.824 936.277 758.203 936.895 755.585Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M240.919 727.601C241.536 724.983 239.915 722.361 237.297 721.743C234.68 721.125 232.057 722.746 231.439 725.364C230.821 727.981 232.442 730.604 235.06 731.222C237.678 731.84 240.301 730.219 240.919 727.601Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M891.895 355.607C892.513 352.989 890.892 350.366 888.274 349.749C885.656 349.131 883.033 350.752 882.416 353.37C881.798 355.987 883.419 358.61 886.037 359.228C888.654 359.846 891.277 358.225 891.895 355.607Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <g opacity=0.7 style="opacity:.7;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.7
            d="M736.309 308.461L665.629 285.421L665.859 284.711L737.179 305.671L736.309 308.461Z"
            fill=#DADDDF
            style="fill:rgb(218,221,223);opacity:.7;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <path
        d="M741.763 308.87C742.419 305.644 740.335 302.498 737.11 301.842C733.884 301.186 730.737 303.27 730.082 306.495C729.426 309.721 731.509 312.867 734.735 313.523C737.961 314.179 741.107 312.095 741.763 308.87Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <g opacity=0.7 style="opacity:.7;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.7
            d="M457.309 542.461L386.629 519.421L386.859 518.711L458.179 539.671L457.309 542.461Z"
            fill=#DADDDF
            style="fill:rgb(218,221,223);opacity:.7;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <path
        d="M462.747 542.87C463.403 539.644 461.32 536.498 458.094 535.842C454.868 535.186 451.722 537.27 451.066 540.495C450.41 543.721 452.494 546.867 455.719 547.523C458.945 548.179 462.092 546.095 462.747 542.87Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <g opacity=0.7 style="opacity:.7;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.7
            d="M862.309 566.461L791.629 543.421L791.859 542.711L863.179 563.671L862.309 566.461Z"
            fill=#DADDDF
            style="fill:rgb(218,221,223);opacity:.7;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <path
        d="M867.763 566.878C868.419 563.652 866.335 560.506 863.109 559.85C859.884 559.194 856.737 561.278 856.082 564.503C855.426 567.729 857.509 570.875 860.735 571.531C863.961 572.187 867.107 570.103 867.763 566.878Z"
        fill=white
        style="fill:rgb(255,255,255);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M501.651 461.76C494.609 467.527 488.096 473.912 482.191 480.84L505.491 474.46L510.431 469.7L501.651 461.76Z"
        fill=#DADDDF
        style="fill:rgb(218,221,223);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M482.191 480.841C482.191 480.841 476.121 518.271 539.751 589.841L557.681 579.521L505.491 474.461L482.191 480.841Z"
        fill=#B2B6BB
        style="fill:rgb(178,182,187);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path opacity=0.1
        d="M482.191 480.841C482.191 480.841 476.121 518.271 539.751 589.841L557.681 579.521L505.491 474.461L482.191 480.841Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.1;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M505.488 474.46C505.488 474.46 520.488 539.29 557.678 579.52L562.118 576.14L513.718 465.75L505.488 474.46Z"
        fill=#868A91
        style="fill:rgb(134,138,145);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M685.102 619.53C685.102 619.53 693.332 634.98 699.492 640.24C699.492 640.24 728.692 655.03 741.492 627.49C741.492 627.49 737.072 616.38 725.492 618.23C725.492 618.23 718.842 618.18 716.312 614.42C715.052 612.56 713.842 610.67 712.492 608.88L710.352 606L685.102 619.53Z"
        fill=#3F4249
        style="fill:rgb(63,66,73);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path opacity=0.4
        d="M694.59 634.719C696.03 636.722 697.672 638.572 699.49 640.239C699.49 640.239 728.69 655.029 741.49 627.489C740.566 625.41 739.248 623.528 737.61 621.949L737.18 622.239C727.6 646.899 698 636.049 694.59 634.719Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M716.381 614.42C715.121 612.56 713.911 610.67 712.561 608.88L710.351 606L688.621 617.67L694.461 621.96L701.941 630.77L715.941 632.23C715.941 632.23 718.181 619.84 727.641 618.44L727.481 618.07C726.845 618.101 726.211 618.165 725.581 618.26C725.581 618.26 718.911 618.18 716.381 614.42Z"
        fill=#DADDDF
        style="fill:rgb(218,221,223);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M712.572 609.319L712.732 608.939L710.352 605.939L685.102 619.529C685.102 619.529 686.622 622.299 687.252 623.429C689.842 623.889 702.442 621.999 712.572 609.319Z"
        fill=#21252B
        style="fill:rgb(33,37,43);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M641.859 656.81C641.859 656.81 650.089 672.26 656.259 677.52C656.259 677.52 685.449 692.32 698.259 664.77C698.259 664.77 693.829 653.67 682.259 655.52C682.259 655.52 675.619 655.52 673.079 651.7C671.829 649.84 670.619 647.95 669.259 646.17L667.049 643.26L641.859 656.81Z"
        fill=#3F4249
        style="fill:rgb(63,66,73);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path opacity=0.4
        d="M651.359 672C652.789 674.012 654.431 675.863 656.259 677.521C656.259 677.521 685.449 692.321 698.259 664.771C697.329 662.692 696.009 660.811 694.369 659.23L693.939 659.521C684.359 684.191 654.729 673.33 651.359 672Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M673.139 651.7C671.889 649.84 670.679 647.95 669.319 646.17L667.109 643.26L645.379 654.92L651.229 659.21L658.699 668L672.699 669.45C672.699 669.45 674.949 657.06 684.399 655.67L684.239 655.3C683.602 655.326 682.968 655.389 682.339 655.49C682.339 655.49 675.679 655.47 673.139 651.7Z"
        fill=#DADDDF
        style="fill:rgb(218,221,223);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M668.129 645.19L668.279 644.8L667.109 643.26L641.859 656.81C641.859 656.81 642.229 657.51 642.859 658.64C645.449 659.1 661.329 661.23 668.129 645.19Z"
        fill=#21252B
        style="fill:rgb(33,37,43);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M649.509 414.439V414.499V414.439ZM658.989 417.109C659.045 417.567 659.228 418 659.519 418.359C660.173 419.034 661.06 419.431 661.999 419.469C662.959 419.507 663.919 419.403 664.849 419.159L665.159 419.089C666.308 418.8 667.497 418.699 668.679 418.789C669.836 418.872 670.914 419.407 671.679 420.279C672.058 420.735 672.269 421.307 672.279 421.899C672.284 422.178 672.225 422.455 672.107 422.708C671.989 422.96 671.816 423.183 671.599 423.359C670.99 423.701 670.297 423.868 669.599 423.839H669.319C666.394 424.044 663.589 425.085 661.239 426.839C660.307 427.552 659.419 428.32 658.579 429.139C658.259 429.449 657.929 429.749 657.579 430.059C656.749 430.819 655.879 431.539 654.979 432.219C653.746 433.256 652.287 433.989 650.719 434.359C650.432 434.448 650.125 434.448 649.839 434.359C648.415 430.877 646.208 427.77 643.389 425.279C641.508 423.632 639.284 422.422 636.879 421.739C637.128 421.267 637.434 420.828 637.789 420.429C639.452 418.549 641.407 416.949 643.579 415.689C644.009 415.429 644.469 415.189 644.919 414.969C645.654 414.619 646.357 414.204 647.019 413.729C647.359 413.459 647.669 413.169 648.019 412.869C648.497 412.368 649.046 411.941 649.649 411.599C650.139 411.368 650.644 411.168 651.159 410.999L653.859 410.109L661.339 407.509C660.159 408.249 655.239 411.139 654.039 411.859C652.925 412.437 651.872 413.127 650.899 413.919C650.379 414.389 649.779 414.229 649.649 414.419C649.946 414.052 650.281 413.716 650.649 413.419C651.642 412.672 652.711 412.031 653.839 411.509C656.283 410.331 658.648 408.995 660.919 407.509C661.539 407.149 662.149 406.759 662.729 406.369C663.683 405.674 664.713 405.091 665.799 404.629C666.24 404.425 666.723 404.325 667.209 404.339C667.409 404.353 667.603 404.412 667.776 404.513C667.95 404.613 668.098 404.752 668.209 404.919C668.331 405.188 668.373 405.487 668.329 405.779C668.111 407.274 667.331 408.629 666.149 409.569C665.423 410.187 664.658 410.759 663.859 411.279C663.179 411.739 662.469 412.229 661.859 412.779C660.655 413.6 659.672 414.706 658.999 415.999C658.917 416.244 658.89 416.503 658.919 416.759L658.989 417.109Z"
        fill=#F4F4F4
        style="fill:rgb(244,244,244);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M634.328 422.481L635.968 421.061C635.968 421.061 647.478 422.201 651.408 436.551L650.248 439.001L634.328 422.481Z"
        fill=#61656D
        style="fill:rgb(97,101,109);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M568.129 445.13C568.129 445.13 578.579 443.73 585.499 444.51C587.159 444.712 588.838 444.712 590.499 444.51C592.436 444.257 594.334 443.763 596.149 443.04C597.161 442.618 598.253 442.424 599.349 442.47C599.733 442.467 600.113 442.552 600.459 442.72C600.459 442.72 602.459 439.15 605.459 440.47C605.459 440.47 606.969 437.47 609.949 438.66C609.949 438.66 609.159 436.74 615.169 433.82C618.355 432.258 621.337 430.31 624.049 428.02L628.179 424.55C628.179 424.55 633.029 420.76 637.259 423.38C640.32 424.768 643.044 426.802 645.243 429.343C647.442 431.884 649.065 434.872 649.999 438.1C649.999 438.1 651.619 442.04 646.939 445.62L628.139 465.68C626.337 467.608 624.051 469.017 621.519 469.76L589.519 479.15L576.439 470L568.299 451.11L568.129 445.13Z"
        class=change-color-in-svg fill=#4D61FC
        style="fill:rgb(0,171,240);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path opacity=0.2
        d="M638.469 446.779C634.739 451.319 627.579 454.919 627.579 454.919C623.859 459.559 615.749 462.119 615.749 462.119L606.289 465.479C593.289 471.759 593.919 467.029 593.919 467.029C595.749 460.909 591.449 463.499 591.449 463.499C585.629 468.609 577.449 470.589 577.449 470.589L589.259 478.789L621.259 469.399C623.787 468.658 626.069 467.252 627.869 465.329L646.669 445.259C651.359 441.689 649.739 437.749 649.739 437.749C649.023 435.241 647.884 432.873 646.369 430.749L644.479 428.429L644.249 428.189C650.419 436.809 638.469 446.779 638.469 446.779Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <g opacity=0.3 style="opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.3
            d="M661.402 407.64L652.262 412.64L649.072 415.34C649.05 415.362 649.024 415.38 648.996 415.392C648.968 415.404 648.937 415.41 648.907 415.41C648.876 415.41 648.845 415.404 648.817 415.392C648.789 415.38 648.763 415.362 648.742 415.34C648.699 415.295 648.676 415.236 648.676 415.175C648.676 415.114 648.699 415.055 648.742 415.01L651.962 412.27L661.142 407.27C661.169 407.254 661.199 407.245 661.23 407.242C661.262 407.238 661.293 407.241 661.323 407.251C661.353 407.26 661.381 407.276 661.405 407.296C661.428 407.317 661.448 407.342 661.462 407.37C661.482 407.415 661.487 407.466 661.477 407.515C661.466 407.564 661.439 407.608 661.402 407.64V407.64Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <path
        d="M537.75 569.92L537.43 570.58C536.741 571.953 536.578 573.531 536.972 575.016C537.367 576.5 538.291 577.79 539.57 578.64C540.437 579.191 541.438 579.496 542.466 579.52C543.493 579.545 544.507 579.289 545.4 578.78C546.233 578.408 546.958 577.83 547.505 577.1C548.053 576.371 548.406 575.514 548.53 574.61C548.587 574.199 548.564 573.781 548.46 573.38L537.75 569.92Z"
        fill=#61656D
        style="fill:rgb(97,101,109);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <g opacity=0.3 style="opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.3
            d="M650.84 411.001L645.76 415.091C645.715 415.133 645.656 415.157 645.595 415.157C645.534 415.157 645.475 415.133 645.43 415.091C645.394 415.045 645.375 414.989 645.375 414.931C645.375 414.873 645.394 414.817 645.43 414.771L650.52 410.681C650.565 410.639 650.624 410.615 650.685 410.615C650.746 410.615 650.805 410.639 650.85 410.681C650.886 410.727 650.905 410.784 650.903 410.843C650.901 410.901 650.879 410.957 650.84 411.001V411.001Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <path
        d="M516.191 475.681L511.691 479.441L521.901 523.441C521.901 523.441 537.411 557.601 563.811 583.151C566.611 585.854 569.68 588.264 572.971 590.341C580.121 594.881 593.971 603.101 606.201 606.981C606.201 606.981 611.441 616.311 612.891 614.361C612.891 614.361 616.031 618.461 618.731 618.531C618.731 618.531 618.391 621.041 622.601 623.351C622.601 623.351 635.761 644.351 637.411 650.841C637.411 650.841 639.131 657.191 644.921 656.951C645.571 656.951 646.221 656.881 646.921 656.871C650.101 656.781 660.081 655.761 665.601 646.381C665.761 646.101 665.931 645.821 666.101 645.551C666.865 644.378 667.334 643.038 667.468 641.645C667.602 640.252 667.397 638.848 666.871 637.551C666.531 636.751 666.171 635.951 665.871 635.131C662.083 625.103 657.781 615.276 652.981 605.691L634.321 580.921L619.331 567.101C619.331 567.101 639.841 567.801 655.781 566.701C655.781 566.701 656.781 569.431 658.471 569.701C658.687 570.43 659.071 571.099 659.592 571.653C660.113 572.207 660.757 572.631 661.471 572.891C661.471 572.891 675.591 598.401 677.661 605.751C678.331 608.111 679.841 610.751 679.751 613.171C679.621 616.911 681.351 622.031 687.201 621.381C687.201 621.381 698.621 620.631 710.781 608.381C711.735 607.448 712.407 606.267 712.721 604.971C713.146 603.147 712.942 601.234 712.141 599.541C711.371 597.918 710.774 596.219 710.361 594.471C709.261 589.531 694.501 565.161 695.021 560.671L668.931 528.671L637.931 527.481C635.965 527.406 634.008 527.165 632.081 526.761C629.391 526.211 625.201 525.621 623.151 526.761C622.256 527.266 621.221 527.466 620.201 527.331C618.333 527.031 616.429 527.031 614.561 527.331C612.894 526.16 610.874 525.599 608.841 525.741C608.841 525.741 599.011 509.421 596.661 501.621L579.461 469.941C579.105 465.927 577.924 462.029 575.994 458.492C574.063 454.954 571.424 451.853 568.241 449.381L516.191 475.681Z"
        class=change-color-in-svg fill=#4D61FC
        style="fill:rgb(0,171,240);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path opacity=0.2
        d="M619.331 567.099C619.331 567.099 639.841 567.799 655.781 566.699C655.781 566.699 656.781 569.429 658.471 569.699C658.687 570.429 659.07 571.097 659.591 571.651C660.112 572.205 660.756 572.629 661.471 572.889C661.471 572.889 675.591 598.399 677.661 605.749C678.331 608.109 679.841 610.749 679.751 613.169C679.621 616.909 681.351 622.029 687.201 621.379C687.201 621.379 695.401 620.839 705.301 613.249C699.421 616.249 695.691 616.729 693.301 616.249C692.186 616.016 691.181 615.419 690.443 614.552C689.704 613.685 689.274 612.597 689.221 611.459C689.147 610.055 688.97 608.658 688.691 607.279C687.491 601.613 684.694 596.408 680.631 592.279C669.631 580.869 668.911 573.459 669.141 570.729C669.219 570.19 669.399 569.671 669.671 569.199C670.411 567.769 664.321 566.989 664.321 566.989C660.751 566.329 666.041 559.529 666.041 559.529C660.941 562.079 660.041 559.649 659.871 558.299C659.843 557.939 659.86 557.576 659.921 557.219C660.161 555.519 659.441 554.989 658.741 554.849C658.214 554.761 657.672 554.871 657.221 555.159C656.944 555.335 656.635 555.453 656.312 555.508C655.989 555.563 655.658 555.553 655.338 555.478C655.019 555.404 654.718 555.266 654.452 555.074C654.187 554.882 653.962 554.639 653.791 554.359C652.871 553.089 650.311 554.139 650.311 554.139C634.001 561.499 625.001 554.699 625.001 554.699C619.501 549.169 614.621 550.049 614.621 550.049C614.621 550.049 615.621 562.569 616.901 564.359L619.331 567.099Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M586.941 512.059C586.941 512.059 589.581 519.309 598.561 516.849C598.561 516.849 602.631 515.719 604.211 517.629L608.851 525.729C608.851 525.729 614.961 521.269 610.941 513.509C610.941 513.509 609.551 509.769 604.221 508.359C602.797 508.012 601.314 507.967 599.871 508.229C598.131 508.519 595.301 508.599 593.951 506.439L586.941 512.059Z"
        fill=#3F4249
        style="fill:rgb(63,66,73);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path opacity=0.2
        d="M643.611 628.131C643.883 626.594 643.675 625.011 643.017 623.596C642.359 622.181 641.282 621.003 639.931 620.221L613.101 596.941C610.967 596.931 608.916 596.113 607.361 594.651C604.679 592.049 602.167 589.276 599.841 586.351C598.396 584.602 597.232 582.638 596.391 580.531C596.057 579.62 595.475 578.82 594.711 578.221C593.836 577.598 592.785 577.269 591.711 577.281C591.092 577.271 590.479 577.166 589.891 576.971C588.485 576.483 587.275 575.553 586.441 574.321C584.141 571.141 579.501 569.871 579.501 569.871L576.421 567.611C574.08 567.014 571.968 565.737 570.351 563.941C569.541 562.948 569.042 561.738 568.916 560.463C568.789 559.188 569.042 557.904 569.641 556.771C572.851 550.641 571.491 550.521 571.491 550.521L560.671 546.231C558.844 547.607 556.908 548.831 554.881 549.891C553.319 550.667 551.548 550.921 549.831 550.615C548.113 550.309 546.539 549.459 545.341 548.191C541.224 543.635 538.01 538.337 535.871 532.581C535.542 531.689 535.112 530.837 534.591 530.041C533.868 528.969 533.216 527.85 532.641 526.691C532.077 525.597 531.744 524.399 531.661 523.171C531.578 521.943 531.749 520.711 532.161 519.551C532.494 518.583 532.539 517.539 532.288 516.546C532.038 515.553 531.504 514.655 530.751 513.961C530.374 513.595 529.946 513.285 529.481 513.041C527.481 511.931 525.171 507.391 525.171 507.391C521.691 509.181 517.871 505.961 517.871 505.961L521.931 523.461C521.931 523.461 537.441 557.621 563.841 583.171C566.637 585.872 569.703 588.278 572.991 590.351C580.151 594.901 593.991 603.121 606.231 607.001C606.231 607.001 611.471 616.331 612.921 614.381C612.921 614.381 616.061 618.481 618.761 618.551C618.761 618.551 618.421 621.061 622.631 623.371C622.631 623.371 635.791 644.371 637.441 650.861C637.441 650.861 639.161 657.211 644.951 656.971C645.601 656.971 646.251 656.901 646.951 656.891C649.681 656.821 657.421 656.041 663.051 649.891L662.991 649.211C655.151 654.211 652.251 651.031 651.421 649.611C651.141 649.121 650.834 648.647 650.501 648.191C645.031 640.851 643.721 634.821 643.501 631.621C643.382 630.458 643.419 629.284 643.611 628.131V628.131Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M567.43 527.24C567.43 527.24 573.3 535.81 558.07 548.51C557.62 548.88 557.15 549.23 556.67 549.57C553.76 551.65 541.91 560.5 538 569.37C537.724 569.999 537.665 570.702 537.83 571.37C538.259 573.035 539.175 574.536 540.46 575.68C541.265 576.418 542.298 576.861 543.388 576.935C544.478 577.01 545.561 576.712 546.46 576.09C546.581 576.006 546.698 575.916 546.81 575.82C547.387 575.314 547.833 574.675 548.11 573.96C549.04 571.64 552.59 564.44 562.65 557.96C562.65 557.96 576.91 548.75 578.46 538.06C578.966 535.212 578.906 532.293 578.284 529.468C577.661 526.644 576.487 523.97 574.83 521.6L567.43 527.24Z"
        fill=#3F4249
        style="fill:rgb(63,66,73);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path opacity=0.1
        d="M586.941 512.059C586.941 512.059 589.581 519.309 598.561 516.849C598.561 516.849 602.631 515.719 604.211 517.629L608.851 525.729C608.851 525.729 614.961 521.269 610.941 513.509C610.941 513.509 609.551 509.769 604.221 508.359C602.797 508.012 601.314 507.967 599.871 508.229C598.131 508.519 595.301 508.599 593.951 506.439L586.941 512.059Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.1;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path opacity=0.1
        d="M567.43 527.24C567.43 527.24 573.3 535.81 558.07 548.51C557.62 548.88 557.15 549.23 556.67 549.57C553.76 551.65 541.91 560.5 538 569.37C537.724 569.999 537.665 570.702 537.83 571.37C538.259 573.035 539.175 574.536 540.46 575.68C541.265 576.418 542.298 576.861 543.388 576.935C544.478 577.01 545.561 576.712 546.46 576.09C546.581 576.006 546.698 575.916 546.81 575.82C547.387 575.314 547.833 574.675 548.11 573.96C549.04 571.64 552.59 564.44 562.65 557.96C562.65 557.96 576.91 548.75 578.46 538.06C578.966 535.212 578.906 532.293 578.284 529.468C577.661 526.644 576.487 523.97 574.83 521.6L567.43 527.24Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.1;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M575.62 520.7C573.211 523.553 570.239 525.878 566.89 527.53L566.8 527.58L565 525.44L573.83 518.57L575.62 520.7Z"
        fill=#61656D
        style="fill:rgb(97,101,109);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path d="M548.449 497.69L585.069 470.84L600.139 497.95L562.679 527.53L548.449 497.69Z"
        fill=#B2B6BB
        style="fill:rgb(178,182,187);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M594.689 505.75C592.279 508.603 589.307 510.928 585.959 512.58H585.869L584.059 510.45L592.889 503.58L594.689 505.75Z"
        fill=#61656D
        style="fill:rgb(97,101,109);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path d="M540.262 496.23L554.882 527.7L562.682 527.53L548.452 497.69L540.262 496.23Z"
        fill=#B2B6BB
        style="fill:rgb(178,182,187);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path opacity=0.3
        d="M540.262 496.23L554.882 527.7L562.682 527.53L548.452 497.69L540.262 496.23Z" fill=black
        style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path d="M585.072 470.84L577.052 470.73L540.262 496.23L548.452 497.69L585.072 470.84Z"
        fill=#B2B6BB
        style="fill:rgb(178,182,187);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path opacity=0.2
        d="M585.072 470.84L577.052 470.73L540.262 496.23L548.452 497.69L585.072 470.84Z" fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M562.741 500.281C564.414 500.281 565.771 498.924 565.771 497.251C565.771 495.577 564.414 494.221 562.741 494.221C561.067 494.221 559.711 495.577 559.711 497.251C559.711 498.924 561.067 500.281 562.741 500.281Z"
        class=change-color-in-svg fill=#4D61FC
        style="fill:rgb(0,171,240);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M560.198 498.881C559.812 498.29 559.647 497.583 559.731 496.882C559.815 496.182 560.143 495.533 560.658 495.051C560.475 495.13 560.297 495.224 560.128 495.331C559.794 495.545 559.505 495.824 559.279 496.15C559.052 496.476 558.892 496.844 558.808 497.232C558.723 497.62 558.716 498.021 558.786 498.412C558.857 498.803 559.003 499.177 559.218 499.511C559.433 499.845 559.711 500.134 560.038 500.36C560.364 500.587 560.732 500.747 561.12 500.832C561.508 500.916 561.909 500.923 562.3 500.853C562.691 500.782 563.064 500.636 563.398 500.421C563.568 500.311 563.729 500.187 563.878 500.051C563.225 500.32 562.498 500.351 561.825 500.137C561.152 499.923 560.576 499.478 560.198 498.881V498.881Z"
        class=change-color-in-svg fill=#4D61FC
        style="fill:rgb(0,171,240);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M572.514 513.535C575.135 512.245 576.104 508.85 574.677 505.951C573.251 503.052 569.97 501.748 567.348 503.037C564.727 504.327 563.758 507.723 565.184 510.622C566.611 513.521 569.892 514.825 572.514 513.535Z"
        class=change-color-in-svg fill=#4D61FC
        style="fill:rgb(0,171,240);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path opacity=0.3
        d="M572.514 513.535C575.135 512.245 576.104 508.85 574.677 505.951C573.251 503.052 569.97 501.748 567.348 503.037C564.727 504.327 563.758 507.723 565.184 510.622C566.611 513.521 569.892 514.825 572.514 513.535Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M565.199 510.57C564.584 509.417 564.381 508.09 564.623 506.806C564.864 505.522 565.537 504.36 566.529 503.51C566.184 503.6 565.849 503.724 565.529 503.88C564.153 504.574 563.106 505.782 562.616 507.244C562.126 508.705 562.233 510.3 562.912 511.683C563.592 513.067 564.79 514.126 566.246 514.63C567.702 515.135 569.299 515.045 570.689 514.38C571.007 514.225 571.309 514.037 571.589 513.82C570.313 514.086 568.984 513.908 567.823 513.318C566.661 512.727 565.735 511.757 565.199 510.57V510.57Z"
        class=change-color-in-svg fill=#4D61FC
        style="fill:rgb(0,171,240);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path opacity=0.2
        d="M560.198 498.881C559.812 498.29 559.647 497.583 559.731 496.882C559.815 496.182 560.143 495.533 560.658 495.051C560.475 495.13 560.297 495.224 560.128 495.331C559.794 495.545 559.505 495.824 559.279 496.15C559.052 496.476 558.892 496.844 558.808 497.232C558.723 497.62 558.716 498.021 558.786 498.412C558.857 498.803 559.003 499.177 559.218 499.511C559.433 499.845 559.711 500.134 560.038 500.36C560.364 500.587 560.732 500.747 561.12 500.832C561.508 500.916 561.909 500.923 562.3 500.853C562.691 500.782 563.064 500.636 563.398 500.421C563.568 500.311 563.729 500.187 563.878 500.051C563.225 500.32 562.498 500.351 561.825 500.137C561.152 499.923 560.576 499.478 560.198 498.881V498.881Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.4
        d="M565.199 510.57C564.584 509.417 564.381 508.09 564.623 506.806C564.864 505.522 565.537 504.36 566.529 503.51C566.184 503.6 565.849 503.724 565.529 503.88C564.153 504.574 563.106 505.782 562.616 507.244C562.126 508.705 562.233 510.3 562.912 511.683C563.592 513.067 564.79 514.126 566.246 514.63C567.702 515.135 569.299 515.045 570.689 514.38C571.007 514.225 571.309 514.037 571.589 513.82C570.313 514.086 568.984 513.908 567.823 513.318C566.661 512.727 565.735 511.757 565.199 510.57V510.57Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path d="M567.27 490.23L583.409 478.24L585.599 482.45L569.409 494.5L567.27 490.23Z"
        class=change-color-in-svg fill=#4D61FC
        style="fill:rgb(0,171,240);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path opacity=0.2
        d="M582.51 478.91L584.28 482.34L569.02 493.71L569.409 494.5L585.599 482.45L583.409 478.24L582.51 478.91Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path d="M574.488 498.65L588.298 487.98L588.998 489.36L575.018 500.13L574.488 498.65Z"
        class=change-color-in-svg fill=#4D61FC
        style="fill:rgb(0,171,240);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path d="M575.949 501.08L589.749 490.41L590.449 491.79L576.479 502.56L575.949 501.08Z"
        class=change-color-in-svg fill=#4D61FC
        style="fill:rgb(0,171,240);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path d="M577.039 503.811L590.849 493.141L591.549 494.521L577.569 505.301L577.039 503.811Z"
        class=change-color-in-svg fill=#4D61FC
        style="fill:rgb(0,171,240);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path d="M578.5 506.25L592.3 495.58L593 496.95L579.02 507.73L578.5 506.25Z"
        class=change-color-in-svg fill=#4D61FC
        style="fill:rgb(0,171,240);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <g opacity=0.2 style="opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.2
            d="M574.488 498.65L588.298 487.98L588.998 489.36L575.018 500.13L574.488 498.65Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
        </path>
        <path opacity=0.2
            d="M575.949 501.08L589.749 490.41L590.449 491.79L576.479 502.56L575.949 501.08Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
        </path>
        <path opacity=0.2
            d="M577.039 503.811L590.849 493.141L591.549 494.521L577.569 505.301L577.039 503.811Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
        </path>
        <path opacity=0.2 d="M578.5 506.25L592.3 495.58L593 496.95L579.02 507.73L578.5 506.25Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
        </path>
    </g>
    <path d="M561.181 454.859C560.861 455.359 560.591 455.759 560.391 456.029Z" fill=#B2B6BB
        style="fill:rgb(178,182,187);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M564.15 441.29L564.05 441.19C563.82 440.79 563.6 440.339 563.36 439.859C562.891 438.841 562.332 437.868 561.69 436.95C561.554 433.901 560.985 430.888 560 428C558.075 422.343 554.974 417.159 550.9 412.79C549.171 410.813 547.259 409.005 545.19 407.39C542.342 405.819 539.372 404.482 536.31 403.39C534.431 402.648 532.47 402.134 530.47 401.859C521.717 400.733 512.872 403.089 505.84 408.42C496.33 415.78 491.05 428.469 492.39 440.769C492.852 444.855 493.98 448.838 495.73 452.56C499.19 459.952 504.783 466.141 511.79 470.329C512.954 471.018 514.082 471.766 515.17 472.57L516.51 476.57C530.51 483 549.4 474.31 556.45 468.94C567.99 460.16 569.39 451.94 568.04 444.45L564.15 441.29Z"
        class=change-color-in-svg fill=#4D61FC
        style="fill:rgb(0,171,240);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M512.261 455.369C512.345 456.883 512.197 458.4 511.821 459.869C512.821 458.639 515.201 455.679 515.271 454.069C515.203 451.125 514.279 448.265 512.611 445.839C511.487 444.233 510.022 442.894 508.321 441.919C505.181 439.919 506.211 439.919 502.591 439.989C500.962 440.151 499.416 440.783 498.141 441.809C498.371 441.809 499.741 442.119 499.991 442.139C501.683 442.349 503.301 442.959 504.711 443.919C508.941 446.999 511.651 450.539 512.261 455.369Z"
        class=change-color-in-svg fill=#4D61FC
        style="fill:rgb(0,171,240);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.3
        d="M512.261 455.369C512.345 456.883 512.197 458.4 511.821 459.869C512.821 458.639 515.201 455.679 515.271 454.069C515.203 451.125 514.279 448.265 512.611 445.839C511.487 444.233 510.022 442.894 508.321 441.919C505.181 439.919 506.211 439.919 502.591 439.989C500.962 440.151 499.416 440.783 498.141 441.809C498.371 441.809 499.741 442.119 499.991 442.139C501.683 442.349 503.301 442.959 504.711 443.919C508.941 446.999 511.651 450.539 512.261 455.369Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M498.668 454.89C500.436 457.503 502.889 459.579 505.758 460.89C506.599 461.249 507.512 461.406 508.424 461.347C509.336 461.288 510.221 461.015 511.008 460.55C512.888 459.24 512.768 456.55 512.638 455.5C511.838 450.582 509.137 446.175 505.118 443.23C503.898 442.281 502.462 441.649 500.938 441.39C500.083 441.268 499.21 441.411 498.438 441.8C498.023 442.027 497.642 442.313 497.308 442.65V442.65C496.782 443.191 496.368 443.831 496.089 444.533C495.811 445.235 495.675 445.985 495.688 446.74C495.838 449.695 496.876 452.535 498.668 454.89V454.89Z"
        class=change-color-in-svg fill=#4D61FC
        style="fill:rgb(0,171,240);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.2
        d="M498.668 454.89C500.436 457.503 502.889 459.579 505.758 460.89C506.599 461.249 507.512 461.406 508.424 461.347C509.336 461.288 510.221 461.015 511.008 460.55C512.888 459.24 512.768 456.55 512.638 455.5C511.838 450.582 509.137 446.175 505.118 443.23C503.898 442.281 502.462 441.649 500.938 441.39C500.083 441.268 499.21 441.411 498.438 441.8C498.023 442.027 497.642 442.313 497.308 442.65V442.65C496.782 443.191 496.368 443.831 496.089 444.533C495.811 445.235 495.675 445.985 495.688 446.74C495.838 449.695 496.876 452.535 498.668 454.89V454.89Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M514.879 455.351C514.759 455.871 514.069 456.351 513.879 456.821C518.022 460.694 523.371 463.024 529.029 463.421C534.605 463.742 540.162 462.521 545.089 459.891C549.558 457.569 553.463 454.296 556.529 450.301C559.119 446.811 562.899 438.651 561.349 433.221C561.315 433.19 561.279 433.163 561.239 433.141C560.522 440.506 557.253 447.389 551.999 452.601C549.391 455.207 546.345 457.333 542.999 458.881C538.314 461.043 533.125 461.877 527.999 461.291C523.115 460.72 518.53 458.644 514.879 455.351V455.351Z"
        fill=#61656D
        style="fill:rgb(97,101,109);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M515.06 454.051C515.06 454.161 515.06 454.291 515.06 454.401C518.645 457.788 523.23 459.924 528.13 460.491C533.089 461.049 538.107 460.24 542.64 458.151C547.183 456.03 551.15 452.848 554.206 448.873C557.262 444.898 559.318 440.247 560.2 435.311C560.43 430.967 559.619 426.63 557.835 422.662C556.05 418.695 553.343 415.211 549.94 412.501C547.003 410.486 543.677 409.108 540.175 408.457C536.674 407.806 533.075 407.896 529.61 408.721C522.642 410.495 516.547 414.72 512.44 420.621C508.68 425.941 506.52 433.081 506.34 440.721C507.114 441.05 507.857 441.448 508.56 441.911C510.173 442.973 511.538 444.372 512.56 446.011C514.15 448.394 515.018 451.186 515.06 454.051V454.051Z"
        fill=#DADDDF
        style="fill:rgb(218,221,223);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M501.999 440.071C502.251 440.031 502.505 440.011 502.759 440.011C503.191 440.002 503.622 440.029 504.049 440.091C503.702 431.576 506.468 423.225 511.829 416.601C514.564 413.294 517.936 410.571 521.745 408.593C525.553 406.616 529.721 405.425 533.999 405.091C537.985 404.827 541.964 405.693 545.479 407.591C541.829 404.907 537.43 403.435 532.899 403.381C526.174 403.455 519.695 405.919 514.619 410.331C509.557 414.746 505.705 420.381 503.429 426.701C501.844 430.968 501.353 435.565 501.999 440.071V440.071Z"
        fill=#61656D
        style="fill:rgb(97,101,109);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M504.9 440.251L505.52 440.431C505.74 432.731 507.94 425.551 511.75 420.161C515.966 414.094 522.23 409.751 529.39 407.931C535.997 406.373 542.95 407.415 548.81 410.841C544.745 407.316 539.449 405.543 534.08 405.911C529.912 406.235 525.851 407.394 522.141 409.32C518.43 411.246 515.144 413.899 512.48 417.121C507.208 423.644 504.511 431.873 504.9 440.251V440.251Z"
        fill=#61656D
        style="fill:rgb(97,101,109);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M545.61 412.751C547.83 414.425 549.479 416.744 550.33 419.391C551.33 422.251 551.01 425.671 547.82 426.901C542.27 429.041 535.29 425.461 532.36 420.701C529.97 416.811 530.36 411.821 535.24 410.221C538.24 409.231 543.24 411.001 545.61 412.751Z"
        fill=white
        style="fill:#ef28fd49;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M564.202 441.34C563.544 445.389 562.29 449.318 560.482 453C556.172 461.21 547.202 467.14 534.562 470.17C534.432 470.17 520.732 472.93 514.012 471.73L514.562 472.12L514.662 472.19L515.142 472.54L515.482 473.54C522.482 474.78 534.482 472.1 534.982 471.98C544.292 469.75 550.682 466.25 555.062 462.53C558.032 460.143 560.46 457.149 562.182 453.75C563.824 450.186 565.026 446.435 565.762 442.58L564.202 441.34Z"
        fill=#61656D
        style="fill:rgb(97,101,109);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M554.389 468.301C533.509 481.431 519.189 476.411 515.949 474.961L516.479 476.531C530.479 482.961 549.369 474.271 556.419 468.901C559.198 466.853 561.691 464.441 563.829 461.731C564.968 460.207 565.95 458.572 566.759 456.851C568.442 452.93 568.875 448.586 567.999 444.411L567.549 444.051L566.639 444.231C569.399 458.531 554.539 468.201 554.389 468.301Z"
        fill=#61656D
        style="fill:rgb(97,101,109);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M565.809 442.641C565.438 447.544 564.037 452.315 561.699 456.641C558.897 461.243 554.861 464.967 550.049 467.391C531.129 477.151 518.759 474.561 515.469 473.571L516.189 475.711C521.059 476.901 533.189 478.201 550.899 469.051C553.094 467.92 555.153 466.545 557.039 464.951C559.519 462.861 561.634 460.374 563.299 457.591C565.591 453.382 567.035 448.765 567.549 444.001L565.809 442.641Z"
        fill=#61656D
        style="fill:rgb(97,101,109);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M664.851 531.33C661.511 534.06 657.671 538.88 659.801 545.73C660.762 548.668 662.602 551.241 665.071 553.1C669.666 556.795 673.274 561.57 675.571 567C675.571 567 683.451 570.61 695.991 559.23C695.991 559.23 699.671 546.85 684.181 532.5C681.998 530.212 679.124 528.705 676.001 528.211C674.027 527.918 672.014 528.044 670.093 528.582C668.172 529.119 666.386 530.056 664.851 531.33V531.33Z"
        fill=#61656D
        style="fill:rgb(97,101,109);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path opacity=0.3
        d="M676.452 564.38C674.144 558.967 670.534 554.209 665.942 550.53C663.471 548.674 661.634 546.1 660.682 543.16C660.014 541.145 659.886 538.99 660.312 536.91C659.005 539.673 658.822 542.835 659.802 545.73C660.763 548.668 662.603 551.24 665.072 553.1C669.667 556.794 673.275 561.57 675.572 567C675.572 567 683.452 570.61 695.992 559.23C696.166 558.545 696.276 557.846 696.322 557.14C684.102 567.87 676.452 564.38 676.452 564.38Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path opacity=0.2
        d="M670.471 546.779C675.231 549.429 685.781 554.689 690.851 552.369C691.54 552.05 692.111 551.522 692.483 550.859C692.855 550.197 693.008 549.434 692.921 548.679C692.521 545.099 690.421 536.529 679.681 531.969C676.47 530.582 672.856 530.446 669.551 531.589C665.551 532.999 661.431 535.919 665.111 541.769C666.449 543.862 668.292 545.585 670.471 546.779V546.779Z"
        fill=white
        style="fill:rgb(255,255,255);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M614.309 594.69C616.419 590.762 619.369 587.347 622.949 584.69C625.971 582.461 629.693 581.391 633.437 581.676C637.181 581.96 640.699 583.58 643.349 586.24C646.143 589.197 648.461 592.571 650.219 596.24C650.489 596.77 650.779 597.3 651.069 597.83C652.309 600.14 655.689 608.42 645.759 616.33C645.759 616.33 635.209 624.53 627.499 620.05C626.534 619.476 625.716 618.685 625.109 617.74C623.639 615.53 621.979 612.09 617.759 609.34C617.267 609.034 616.793 608.7 616.339 608.34C612.329 604.86 611.809 599.34 614.309 594.69Z"
        fill=#61656D
        style="fill:rgb(97,101,109);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path opacity=0.2
        d="M594.648 557.559C596.242 556.983 597.643 555.972 598.692 554.641C599.742 553.311 600.399 551.713 600.588 550.029C600.588 550.029 605.138 547.569 605.158 544.469C605.158 544.469 605.518 539.419 608.328 539.119C608.884 541.245 609.037 543.457 608.778 545.639C608.632 546.295 608.572 546.968 608.598 547.639C608.668 548.719 608.918 549.919 609.788 548.709C609.99 548.432 610.257 548.209 610.566 548.061C610.875 547.913 611.216 547.843 611.558 547.859C611.948 547.859 612.248 548.049 612.148 548.549L615.228 562.999L608.648 559.669L594.648 557.559Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path opacity=0.3
        d="M646.939 614.09C646.939 614.09 636.389 622.28 628.669 617.8C627.71 617.227 626.895 616.439 626.289 615.5C624.819 613.28 623.149 609.85 618.939 607.09C618.443 606.786 617.966 606.452 617.509 606.09C613.789 602.9 613.079 597.92 614.999 593.5C614.739 593.92 614.509 594.32 614.309 594.7C611.809 599.35 612.309 604.87 616.309 608.31C616.763 608.67 617.237 609.004 617.729 609.31C621.949 612.06 623.609 615.5 625.079 617.71C625.697 618.651 626.525 619.435 627.499 620C635.209 624.48 645.759 616.28 645.759 616.28C648.286 614.399 650.295 611.908 651.599 609.04C650.338 610.971 648.763 612.678 646.939 614.09V614.09Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path opacity=0.2
        d="M620.911 593.84C621.54 590.767 623.359 588.067 625.971 586.33C627.539 585.187 629.375 584.467 631.302 584.241C633.229 584.015 635.182 584.29 636.971 585.04C640.431 586.5 644.551 589.6 646.971 596.17C647.521 597.653 647.74 599.239 647.611 600.815C647.482 602.391 647.009 603.92 646.225 605.294C645.441 606.668 644.366 607.853 643.075 608.766C641.783 609.68 640.308 610.299 638.751 610.58C636.437 610.93 634.077 610.807 631.811 610.22C628.151 608.626 625.044 605.986 622.881 602.63C621.087 600.076 620.379 596.916 620.911 593.84Z"
        fill=white
        style="fill:rgb(255,255,255);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M460.108 567.19L459.488 569.33C459.488 569.33 465.558 564.03 480.348 573.75L481.048 570.75L471.188 560L459.738 565.38L460.108 567.19Z"
        fill=#61656D
        style="fill:rgb(97,101,109);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M614.65 562.72C612.597 556.858 611.94 550.597 612.732 544.436C613.523 538.275 615.742 532.384 619.21 527.23L621.72 527.31C618.197 532.811 615.966 539.038 615.196 545.525C614.425 552.011 615.134 558.588 617.27 564.76C616.554 563.899 615.66 563.203 614.65 562.72V562.72Z"
        fill=#B2B6BB
        style="fill:rgb(178,182,187);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M463.069 604.23C462.306 603.443 461.699 602.521 461.279 601.51C461.178 601.181 461.095 600.847 461.029 600.51L460.739 601.51C460.739 601.51 460.739 601.51 460.739 601.57L460.599 601.51C460.143 601.249 459.761 600.878 459.489 600.43C459.308 600.17 459.111 599.923 458.899 599.69C458.271 599.065 457.754 598.338 457.369 597.54C457.398 597.645 457.421 597.752 457.439 597.86C457.159 597.4 456.899 596.93 456.679 596.49C456.124 595.469 455.658 594.401 455.289 593.3C454.94 592.048 454.689 590.77 454.539 589.48C454.312 588.216 454.215 586.933 454.249 585.65C454.346 584.687 454.524 583.733 454.779 582.8C455.219 580.97 455.699 579.1 456.229 577.28C456.497 576.157 456.897 575.069 457.419 574.04C457.673 573.579 457.95 573.132 458.249 572.7C458.877 571.863 459.361 570.926 459.679 569.93C459.706 569.815 459.739 569.701 459.779 569.59C460.961 568.644 462.407 568.089 463.919 568C465.513 567.914 467.111 568.09 468.649 568.52C472.635 569.613 476.453 571.245 479.999 573.37C480.419 577.37 485.399 580.14 488.579 580.93L489.059 581.04C489.561 581.073 490.05 581.217 490.491 581.46C490.932 581.704 491.313 582.042 491.609 582.45C492.109 583.37 491.539 584.7 490.809 585.55C490.114 586.294 489.244 586.851 488.277 587.171C487.311 587.491 486.28 587.563 485.279 587.38C484.542 587.259 483.821 587.058 483.129 586.78C482.374 586.47 481.585 586.252 480.779 586.13C478.639 585.88 477.609 586.76 476.439 588.45C474.519 591.3 473.799 594.73 473.109 598.03C472.239 602.19 471.429 606.13 468.399 609.03C467.469 609.92 465.499 611.23 464.039 610.37C463.743 610.169 463.496 609.905 463.314 609.597C463.133 609.29 463.021 608.945 462.989 608.59C462.764 607.143 462.791 605.667 463.069 604.23Z"
        fill=#F4F4F4
        style="fill:rgb(244,244,244);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M568.111 587.17C568.111 587.17 567.601 573.04 583.791 561.58C583.791 561.58 596.591 552.86 610.461 560.09L614.651 562.72C614.651 562.72 595.811 553.31 582.281 566.79C582.281 566.79 571.151 575.3 571.631 589.49L568.111 587.17Z"
        fill=#B2B6BB
        style="fill:rgb(178,182,187);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M521.901 523.459C519.331 521.459 516.571 522.919 515.381 523.779C515.075 523.999 514.79 524.247 514.531 524.519C512.681 526.306 510.509 527.724 508.131 528.699C506.969 529.189 505.98 530.014 505.291 531.069C503.201 534.409 498.141 535.669 498.141 535.669C499.871 539.309 498.051 542.669 496.331 544.779C494.739 546.716 493.546 548.949 492.821 551.349L491.381 556.209C488.431 567.329 481.691 571.499 481.691 571.499C463.951 559.499 460.111 567.189 460.111 567.189C455.011 562.069 457.971 554.499 459.981 550.719C460.925 548.978 461.535 547.075 461.781 545.109L462.871 536.179L478.531 510.719C478.872 510.139 479.163 509.53 479.401 508.899C480.561 505.899 486.261 499.989 489.141 497.119C490.11 496.156 491.219 495.344 492.431 494.709C493.88 493.939 495.27 493.064 496.591 492.089C497.904 491.138 499.032 489.956 499.921 488.599C502.775 484.377 506.896 481.169 511.691 479.439L521.901 523.459Z"
        class=change-color-in-svg fill=#4D61FC
        style="fill:rgb(0,171,240);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path opacity=0.2
        d="M517.84 506C517.947 507.322 517.774 508.652 517.333 509.902C516.892 511.153 516.193 512.297 515.28 513.26C515.036 513.51 514.764 513.731 514.47 513.92C513.04 514.92 510.47 518.53 510.47 518.53C509.73 519.53 506.93 520.96 505.41 521.68C504.885 521.922 504.343 522.129 503.79 522.3C502.388 522.854 501.072 523.605 499.88 524.53C499.017 525.184 498.349 526.063 497.95 527.07C497.17 528.96 495.1 526.98 495.1 526.98C495.1 529.6 493.36 529.4 493.36 529.4C494.21 531.66 492.36 531.67 492.36 531.67C495.54 536.26 494.72 540.15 494.2 541.67C494.028 542.162 493.881 542.663 493.76 543.17C493.292 545.169 492.465 547.066 491.32 548.77C490.54 549.899 489.553 550.869 488.41 551.63C486.59 552.88 486.29 553.88 486.36 554.49C486.51 555.591 486.53 556.705 486.42 557.81C484.78 570.93 474.98 567.61 474.98 567.61C477.297 568.794 479.531 570.13 481.67 571.61C481.67 571.61 488.41 567.44 491.36 556.32L492.8 551.46C493.521 549.063 494.711 546.834 496.3 544.9C498.02 542.8 499.86 539.43 498.12 535.78C498.12 535.78 503.18 534.52 505.27 531.18C505.964 530.118 506.961 529.289 508.13 528.8C510.501 527.824 512.665 526.409 514.51 524.63C514.77 524.357 515.055 524.109 515.36 523.89C516.55 523.03 519.36 521.53 521.88 523.57L517.84 506Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <g opacity=0.3 style="opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.3
            d="M457.821 597.43C457.78 597.462 457.732 597.483 457.681 597.49C457.619 597.493 457.558 597.472 457.511 597.431C457.465 597.39 457.436 597.332 457.431 597.27C457.254 594.063 457.405 590.847 457.881 587.67C457.881 587.636 457.889 587.602 457.903 587.571C457.918 587.539 457.939 587.512 457.965 587.489C457.991 587.467 458.021 587.45 458.054 587.441C458.088 587.431 458.122 587.429 458.156 587.434C458.19 587.439 458.223 587.452 458.252 587.47C458.28 587.489 458.305 587.514 458.323 587.543C458.342 587.572 458.354 587.604 458.359 587.638C458.363 587.673 458.361 587.707 458.351 587.74C457.887 590.881 457.737 594.06 457.901 597.23C457.906 597.268 457.901 597.306 457.887 597.341C457.873 597.376 457.85 597.406 457.821 597.43V597.43Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <g opacity=0.3 style="opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.3
            d="M463.228 604.419C463.17 604.461 463.099 604.478 463.028 604.469C462.997 604.464 462.967 604.453 462.94 604.436C462.913 604.419 462.89 604.397 462.872 604.371C462.854 604.344 462.842 604.315 462.836 604.284C462.83 604.252 462.831 604.22 462.838 604.189C462.838 604.069 464.988 591.949 467.998 586.359C468.03 586.303 468.082 586.262 468.143 586.243C468.205 586.225 468.271 586.23 468.328 586.259C468.356 586.275 468.38 586.296 468.4 586.321C468.419 586.346 468.434 586.375 468.442 586.405C468.451 586.436 468.453 586.468 468.449 586.5C468.444 586.531 468.434 586.562 468.418 586.589C465.418 592.109 463.328 604.149 463.308 604.279C463.295 604.332 463.267 604.381 463.228 604.419V604.419Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <g opacity=0.3 style="opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.3
            d="M461.19 600.68C461.15 600.718 461.096 600.739 461.04 600.74C460.976 600.74 460.913 600.715 460.867 600.67C460.82 600.625 460.793 600.564 460.79 600.5C460.79 600.15 460.68 591.88 462.6 587.7C462.628 587.643 462.677 587.599 462.737 587.576C462.796 587.554 462.862 587.555 462.92 587.58C462.977 587.608 463.021 587.657 463.041 587.717C463.062 587.777 463.058 587.843 463.03 587.9C461.17 591.98 461.27 600.41 461.27 600.49C461.272 600.525 461.265 600.561 461.252 600.594C461.238 600.627 461.217 600.656 461.19 600.68Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <path
        d="M462.18 535.769L465.34 536.899C467.729 526.863 473.064 517.771 480.66 510.789L477.66 509.109C477.66 509.109 462.54 520.869 462.18 535.769Z"
        class=change-color-in-svg fill=#4D61FC
        style="fill:rgb(0,171,240);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path opacity=0.3
        d="M462.18 535.769L465.34 536.899C467.729 526.863 473.064 517.771 480.66 510.789L477.66 509.109C477.66 509.109 462.54 520.869 462.18 535.769Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M511.691 479.441C511.691 479.441 523.911 482.601 528.501 501.061C528.501 501.061 532.121 515.941 521.901 523.461L522.901 526.181C522.901 526.181 534.901 515.011 531.061 498.361C531.061 498.361 525.501 479.901 513.191 478.561L511.691 479.441Z"
        fill=#B2B6BB
        style="fill:rgb(178,182,187);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M568.25 449.369C571.779 451.885 574.778 455.072 577.076 458.747C579.373 462.423 580.924 466.514 581.64 470.789H579.78C577.72 463.653 573.836 457.176 568.51 451.999L568.25 449.369Z"
        fill=#B2B6BB
        style="fill:rgb(178,182,187);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M552.73 471.12C552.73 471.12 558.43 476.67 560.68 482.21L562.94 480.51C562.94 480.51 558.84 472.97 555.25 469.75L552.73 471.12Z"
        fill=#61656D
        style="fill:rgb(97,101,109);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <path
        d="M579.539 514.269C581.013 517.537 582.994 520.55 585.409 523.199C585.686 523.477 585.98 523.738 586.289 523.979C587.809 525.219 593.019 529.749 593.619 533.749C593.619 533.749 593.709 534.949 595.849 537.749C596.179 538.189 596.499 538.649 596.789 539.109C597.859 540.789 600.009 544.419 600.169 546.439L602.369 544.439C602.369 544.439 600.149 537.839 597.959 535.339C597.959 535.339 597.649 535.009 597.229 534.459C596.599 533.604 596.06 532.686 595.619 531.719C594.163 528.701 592.201 525.955 589.819 523.599C589.209 522.989 588.569 522.419 587.909 521.859C587.089 521.169 584.219 518.449 581.769 512.289L579.539 514.269Z"
        fill=#61656D
        style="fill:rgb(97,101,109);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright linear 8s infinite">
    </path>
    <g opacity=0.4 style="opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.4
            d="M657.08 561.43C656.84 562.35 656.51 563.21 656.21 564.09C656.06 564.52 655.92 564.96 655.8 565.39C655.738 565.605 655.694 565.826 655.67 566.05C655.626 566.273 655.665 566.504 655.78 566.7C655.683 566.622 655.602 566.525 655.544 566.415C655.485 566.305 655.45 566.184 655.44 566.06C655.405 565.818 655.405 565.572 655.44 565.33C655.498 564.852 655.609 564.383 655.77 563.93C656.076 563.034 656.518 562.191 657.08 561.43V561.43Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <g opacity=0.4 style="opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.4
            d="M659 569.12C659.583 567.954 660.283 566.852 661.09 565.83C661.867 564.779 662.805 563.858 663.87 563.1C663.44 563.59 663.06 564.1 662.66 564.61L661.47 566.13C660.65 567.14 659.87 568.16 659 569.12Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <g opacity=0.4 style="opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.4
            d="M662 572.349C662.552 572.273 663.1 572.166 663.64 572.029C664.172 571.899 664.696 571.739 665.21 571.549C666.238 571.152 667.22 570.646 668.14 570.039C667.787 570.485 667.369 570.877 666.9 571.199C666.426 571.53 665.912 571.799 665.37 571.999C664.298 572.413 663.134 572.534 662 572.349V572.349Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <g opacity=0.4 style="opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.4
            d="M612.891 614.38C613.131 613.92 613.351 613.53 613.571 613.13C613.795 612.704 614.052 612.296 614.341 611.91C614.373 612.418 614.251 612.923 613.991 613.36C613.755 613.819 613.366 614.18 612.891 614.38V614.38Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <g opacity=0.4 style="opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.4
            d="M619.379 617.999C619.482 617.697 619.669 617.429 619.919 617.229C619.901 617.125 619.918 617.018 619.967 616.925C620.016 616.832 620.094 616.757 620.19 616.712C620.286 616.668 620.394 616.657 620.497 616.68C620.6 616.703 620.692 616.759 620.76 616.84C620.828 616.921 620.867 617.022 620.871 617.127C620.876 617.232 620.846 617.336 620.785 617.423C620.725 617.509 620.638 617.574 620.537 617.606C620.436 617.637 620.328 617.635 620.229 617.599C619.989 617.81 619.694 617.949 619.379 617.999V617.999Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <g opacity=0.4 style="opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.4
            d="M622.602 623.37C622.904 623.316 623.201 623.239 623.492 623.14C623.77 623.052 624.044 622.948 624.312 622.83C624.862 622.6 625.382 622.32 625.982 622.07C625.803 622.339 625.583 622.578 625.332 622.78C625.078 622.98 624.799 623.145 624.502 623.27C624.207 623.412 623.888 623.494 623.562 623.511C623.235 623.529 622.909 623.481 622.602 623.37Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <g opacity=0.4 style="opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.4
            d="M642.641 651.59C642.968 652.259 643.343 652.903 643.761 653.52C644.157 654.132 644.624 654.696 645.151 655.2C645.671 655.696 646.278 656.092 646.941 656.37C647.634 656.614 648.365 656.733 649.101 656.72C648.354 656.925 647.567 656.925 646.821 656.72C646.072 656.49 645.388 656.089 644.821 655.55C644.262 655.017 643.796 654.395 643.441 653.71C643.072 653.046 642.802 652.332 642.641 651.59V651.59Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <g opacity=0.4 style="opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.4
            d="M658 653.839C658.493 653.08 658.928 652.285 659.3 651.459C659.676 650.676 659.871 649.818 659.87 648.949C659.87 648.559 659.71 648.069 659.66 647.619C659.61 647.161 659.59 646.7 659.6 646.239C659.602 645.321 659.737 644.409 660 643.529C659.93 644.428 659.93 645.331 660 646.229C660 646.679 660.07 647.119 660.14 647.559C660.21 647.999 660.32 648.399 660.38 648.919C660.385 649.867 660.136 650.799 659.66 651.619C659.213 652.433 658.654 653.181 658 653.839V653.839Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <g opacity=0.4 style="opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.4
            d="M687.409 613.609C687.31 614.983 687.347 616.363 687.519 617.729C687.602 618.392 687.809 619.033 688.129 619.619C688.46 620.224 688.975 620.707 689.599 620.999C689.241 620.939 688.898 620.808 688.592 620.612C688.287 620.416 688.023 620.16 687.819 619.859C687.405 619.264 687.141 618.578 687.049 617.859C686.839 616.434 686.962 614.979 687.409 613.609V613.609Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <g opacity=0.4 style="opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.4
            d="M703.34 613.291C703.717 612.715 704 612.084 704.18 611.421C704.362 610.792 704.334 610.121 704.1 609.511C703.531 608.181 703.45 606.694 703.87 605.311C703.826 606.002 703.863 606.697 703.98 607.381C704.103 608.065 704.294 608.734 704.55 609.381C704.815 610.086 704.815 610.865 704.55 611.571C704.294 612.235 703.879 612.826 703.34 613.291V613.291Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <g opacity=0.4 style="opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.4
            d="M619.329 567.099C618.997 566.691 618.639 566.304 618.259 565.939C617.889 565.569 617.509 565.219 617.109 564.879C616.319 564.199 615.499 563.549 614.649 562.939C613.799 562.329 612.929 561.749 612.049 561.179C611.169 560.609 610.259 560.089 609.359 559.539C609.849 559.729 610.359 559.939 610.819 560.149C611.279 560.359 611.769 560.609 612.239 560.859C613.17 561.367 614.068 561.931 614.929 562.549C615.795 563.167 616.608 563.856 617.359 564.609C618.128 565.344 618.791 566.182 619.329 567.099V567.099Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <g opacity=0.4 style="opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.4
            d="M614.651 562.721C614.231 562.251 613.841 561.721 613.421 561.291C613.001 560.861 612.691 560.291 612.331 559.751C611.638 558.691 611.058 557.561 610.601 556.381C610.136 555.198 609.844 553.956 609.731 552.691C609.6 551.429 609.767 550.155 610.221 548.971C610.064 549.571 609.987 550.19 609.991 550.811C609.972 551.426 610.009 552.042 610.101 552.651C610.282 553.87 610.6 555.064 611.051 556.211C611.499 557.364 612.031 558.484 612.641 559.561L613.641 561.151C614.001 561.671 614.321 562.181 614.651 562.721Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <g opacity=0.4 style="opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.4
            d="M606.578 550.939C606.648 551.404 606.742 551.864 606.858 552.319C606.982 552.761 607.139 553.192 607.328 553.609C607.727 554.449 608.249 555.225 608.878 555.909C608.441 555.694 608.047 555.399 607.718 555.039C607.372 554.681 607.091 554.264 606.888 553.809C606.47 552.914 606.36 551.904 606.578 550.939Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <g opacity=0.4 style="opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.4
            d="M492.609 529.391C493.232 529.73 493.818 530.132 494.359 530.591C494.909 531.044 495.427 531.535 495.909 532.061C496.397 532.581 496.841 533.139 497.239 533.731C497.649 534.315 498.02 534.927 498.349 535.561L497.909 535.731C497.619 534.731 497.299 533.731 496.969 532.731C496.639 531.731 496.249 530.731 495.829 529.731C496.382 530.637 496.866 531.583 497.279 532.561C497.696 533.539 498.056 534.541 498.359 535.561L499.019 537.741L497.929 535.741C497.272 534.514 496.495 533.355 495.609 532.281C495.168 531.739 494.694 531.225 494.189 530.741C493.692 530.257 493.164 529.806 492.609 529.391Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <g opacity=0.4 style="opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.4
            d="M465.371 563.391C464.472 562.342 463.814 561.11 463.441 559.781C463.251 559.11 463.15 558.418 463.141 557.721C463.141 557.04 463.256 556.363 463.481 555.721C463.421 556.386 463.421 557.055 463.481 557.721C463.552 558.38 463.679 559.033 463.861 559.671C464.256 560.952 464.761 562.197 465.371 563.391V563.391Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <g opacity=0.4 style="opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.4
            d="M478.199 567.431C478.825 567.566 479.473 567.566 480.099 567.431C480.407 567.365 480.708 567.271 480.999 567.151C481.286 567.02 481.561 566.862 481.819 566.681C482.83 565.93 483.658 564.958 484.239 563.841C484.832 562.71 485.314 561.524 485.679 560.301C486.069 559.081 486.319 557.811 486.679 556.551C486.619 557.201 486.529 557.841 486.459 558.491C486.389 559.141 486.199 559.761 486.069 560.401L485.969 560.881L485.819 561.351L485.509 562.281C485.401 562.588 485.275 562.889 485.129 563.181C485.002 563.485 484.859 563.782 484.699 564.071C484.073 565.268 483.141 566.279 481.999 567.001C481.437 567.348 480.804 567.567 480.147 567.642C479.49 567.716 478.825 567.644 478.199 567.431Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <g opacity=0.4 style="opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.4
            d="M600.5 442.73C601.28 443.37 602.02 444.04 602.84 444.6C603.658 445.161 604.514 445.665 605.4 446.11C606.28 446.58 607.2 446.9 608.14 447.31C609.094 447.677 609.952 448.254 610.65 449C610.265 448.683 609.838 448.42 609.38 448.22C608.93 448.009 608.47 447.822 608 447.66C607.036 447.351 606.094 446.977 605.18 446.54C604.272 446.081 603.414 445.528 602.62 444.89C602.228 444.578 601.855 444.244 601.5 443.89C601.15 443.5 600.82 443.12 600.5 442.73Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <g opacity=0.4 style="opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.4
            d="M605.531 440.48C605.991 440.548 606.425 440.734 606.791 441.02C607.174 441.301 607.511 441.638 607.791 442.02C608.072 442.378 608.311 442.767 608.501 443.18C608.591 443.39 608.671 443.6 608.751 443.81C608.831 444.02 608.881 444.25 608.921 444.47C608.661 444.1 608.411 443.73 608.171 443.37C607.931 443.01 607.691 442.65 607.421 442.31C607.161 441.961 606.881 441.627 606.581 441.31C606.269 440.989 605.916 440.71 605.531 440.48V440.48Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <g opacity=0.4 style="opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.4
            d="M610.479 437.609C610.434 438.065 610.414 438.522 610.419 438.979C610.428 439.425 610.468 439.869 610.539 440.309C610.694 441.201 610.966 442.069 611.349 442.889C611.003 442.562 610.719 442.176 610.509 441.749C610.292 441.322 610.144 440.863 610.069 440.389C609.9 439.443 610.044 438.467 610.479 437.609Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <g opacity=0.4 style="opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.4
            d="M591.129 550.13C595.695 549.304 599.865 547.003 602.999 543.58C604.038 542.436 604.981 541.209 605.819 539.91C605.449 540.59 605.099 541.29 604.679 541.91C602.554 545.243 599.391 547.784 595.679 549.14C594.225 549.71 592.689 550.044 591.129 550.13V550.13Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <g opacity=0.4 style="opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.4
            d="M605.159 545.631C604.669 546.516 604.064 547.334 603.359 548.061C602.653 548.799 601.86 549.45 600.999 550.001C600.146 550.556 599.238 551.022 598.289 551.391C597.347 551.762 596.363 552.017 595.359 552.151C596.308 551.842 597.236 551.475 598.139 551.051C599.037 550.625 599.905 550.14 600.739 549.601C601.569 549.064 602.355 548.463 603.089 547.801C603.832 547.13 604.524 546.405 605.159 545.631V545.631Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <g opacity=0.4 style="opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.4
            d="M608.852 525.73C609.233 526.47 609.435 527.289 609.442 528.12C609.459 528.956 609.334 529.787 609.072 530.581C608.822 531.367 608.461 532.115 608.002 532.8C607.782 533.14 607.492 533.45 607.242 533.8C606.992 534.15 606.662 534.381 606.352 534.651C606.582 534.301 606.832 533.991 607.052 533.651C607.272 533.311 607.502 532.981 607.692 532.651C608.092 531.96 608.427 531.233 608.692 530.48C608.936 529.732 609.087 528.956 609.142 528.17C609.175 527.347 609.077 526.523 608.852 525.73V525.73Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <g opacity=0.4 style="opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        <path opacity=0.4
            d="M614.57 527.32C614.504 528.198 614.208 529.044 613.71 529.77C613.247 530.521 612.595 531.138 611.82 531.56C612.35 530.86 612.82 530.22 613.31 529.56C613.771 528.838 614.192 528.09 614.57 527.32V527.32Z"
            fill=black
            style="fill:rgb(0,0,0);opacity:.4;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
        </path>
    </g>
    <path opacity=0.2
        d="M1210.43 374.14C1210.43 390.188 1205.67 405.876 1196.75 419.219C1187.84 432.562 1175.17 442.962 1160.34 449.104C1145.51 455.245 1129.2 456.852 1113.46 453.721C1097.72 450.59 1083.26 442.862 1071.91 431.515C1060.57 420.167 1052.84 405.709 1049.71 389.97C1046.58 374.23 1048.18 357.915 1054.32 343.089C1060.47 328.263 1070.87 315.59 1084.21 306.675C1097.55 297.759 1113.24 293 1129.29 293C1150.81 293 1171.45 301.549 1186.66 316.765C1201.88 331.982 1210.43 352.62 1210.43 374.14V374.14Z"
        fill=white
        style="fill:rgb(255,255,255);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.2
        d="M1129.29 438.45C1164.81 438.45 1193.6 409.658 1193.6 374.14C1193.6 338.623 1164.81 309.83 1129.29 309.83C1093.77 309.83 1064.98 338.623 1064.98 374.14C1064.98 409.658 1093.77 438.45 1129.29 438.45Z"
        fill=white
        style="fill:rgb(255,255,255);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M1129.29 429.85C1160.06 429.85 1185 404.907 1185 374.14C1185 343.372 1160.06 318.43 1129.29 318.43C1098.52 318.43 1073.58 343.372 1073.58 374.14C1073.58 404.907 1098.52 429.85 1129.29 429.85Z"
        class=change-color-in-svg fill=#4D61FC
        style="fill:rgb(0,171,240);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.7
        d="M1129.29 429.85C1160.06 429.85 1185 404.907 1185 374.14C1185 343.372 1160.06 318.43 1129.29 318.43C1098.52 318.43 1073.58 343.372 1073.58 374.14C1073.58 404.907 1098.52 429.85 1129.29 429.85Z"
        fill=#F4F4F4
        style="fill:rgb(244,244,244);opacity:.7;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>


    <path opacity="0.1"
        d="M1168.5 365C1170.99 365 1173 363.433 1173 361.5C1173 359.567 1170.99 358 1168.5 358C1166.01 358 1164 359.567 1164 361.5C1164 363.433 1166.01 365 1168.5 365Z"
        class="change-color-in-svg" fill="#4D61FC"
        style="fill:rgb(0,171,240);opacity:0.1;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>

    <path opacity=0.1
        d="M1153 367C1154.66 367 1156 365.957 1156 364.67C1156 363.383 1154.66 362.34 1153 362.34C1151.34 362.34 1150 363.383 1150 364.67C1150 365.957 1151.34 367 1153 367Z"
        class=change-color-in-svg fill=#4D61FC
        style="fill:rgb(0,171,240);opacity:.1;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>

    <path opacity=0.1
        d="M1149.29 404.119C1140.44 404.113 1131.74 401.891 1123.97 397.657C1116.2 393.422 1109.61 387.31 1104.81 379.876C1100.01 372.443 1097.14 363.926 1096.48 355.102C1095.81 346.278 1097.37 337.428 1101 329.359C1094 333.765 1088.13 339.749 1083.86 346.83C1079.58 353.912 1077.03 361.895 1076.39 370.142C1075.76 378.389 1077.06 386.669 1080.2 394.322C1083.34 401.975 1088.22 408.787 1094.46 414.213C1100.71 419.639 1108.13 423.529 1116.15 425.572C1124.16 427.615 1132.54 427.753 1140.62 425.976C1148.7 424.199 1156.25 420.556 1162.67 415.339C1169.08 410.121 1174.19 403.474 1177.58 395.929C1169.12 401.291 1159.31 404.132 1149.29 404.119Z"
        class=change-color-in-svg fill=#4D61FC
        style="fill:rgb(0,171,240);opacity:.1;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.1
        d="M1139.29 416.119C1129.67 416.111 1120.22 413.483 1111.98 408.515C1103.74 403.547 1097 396.428 1092.5 387.922C1087.99 379.416 1085.89 369.844 1086.41 360.233C1086.94 350.622 1090.07 341.335 1095.47 333.369C1089.61 338.205 1084.85 344.245 1081.52 351.081C1078.2 357.917 1076.38 365.389 1076.2 372.988C1076.02 380.588 1077.47 388.138 1080.46 395.126C1083.45 402.115 1087.91 408.378 1093.54 413.49C1099.17 418.602 1105.83 422.444 1113.07 424.756C1120.31 427.067 1127.97 427.794 1135.51 426.886C1143.06 425.978 1150.32 423.457 1156.81 419.494C1163.3 415.532 1168.86 410.22 1173.11 403.919C1163.61 411.82 1151.65 416.137 1139.29 416.119V416.119Z"
        class=change-color-in-svg fill=#4D61FC
        style="fill:rgb(0,171,240);opacity:.1;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.1
        d="M1152.38 332.12C1152.38 332.12 1132.38 324.65 1134.67 344.33C1134.67 344.33 1135.22 356.59 1149.82 357.89C1152.17 358.149 1154.53 357.72 1156.64 356.654C1158.74 355.588 1160.49 353.933 1161.67 351.89C1163.29 348.89 1163.8 344.89 1160.51 340.06C1160.51 340 1155.76 333.24 1152.38 332.12Z"
        class=change-color-in-svg fill=#4D61FC
        style="fill:rgb(0,171,240);opacity:.1;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>.367 1016.11 168.367 1015.98C168.367 1015.85 168.396 1015.72 168.451 1015.6C168.507
    1015.48 168.588 1015.38 168.688 1015.29C168.789 1015.21 168.906 1015.15 169.033 1015.11C169.159
    1015.08 169.291 1015.08 169.42 1015.1H1465.3C1465.43 1015.08 1465.56 1015.08 1465.69
    1015.11C1465.81 1015.15 1465.93 1015.21 1466.03 1015.29C1466.13 1015.38 1466.21 1015.48 1466.27
    1015.6C1466.32 1015.72 1466.35 1015.85 1466.35 1015.98C1466.35 1016.11 1466.32 1016.24 1466.27
    1016.35C1466.21 1016.47 1466.13 1016.58 1466.03 1016.66C1465.93 1016.74 1465.81 1016.8 1465.69
    1016.84C1465.56 1016.87 1465.43 1016.87 1465.3 1016.85V1016.85Z"
    fill=#B2B6BB
    style="fill:rgb(178,182,187);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M1172.37 540.28L1160.54 531.88L1166.74 523.15L1178.57 531.54L1172.37 540.28ZM1091 572.42L1088 570.14L1091 553.46C1095.77 557.272 1100.78 560.772 1106 563.94L1091.85 572.29L1091 572.42ZM1098.09 474.42L1109.92 482.82L1103.72 491.55L1091.89 483.16L1098.09 474.42ZM978.731 443L988.661 429L989.571 429.64L979.641 443.64L1025.83 476.42L1035.75 462.42L1036.66 463.06L1026.73 477.06L1072.92 509.84L1089.8 486.05L1101.63 494.45L1094.52 504.45H1094.12L1097.39 515.86C1088.19 514.3 1079.66 516.17 1074.39 523.57C1070.47 529.09 1077.18 541.18 1089.95 552.57L1086.95 569.26L1085.22 570.26L1084.62 571.1L1076.28 583C1074.4 585.64 1081.21 590.48 1083.09 587.83L1091.43 576.07L1092.03 575.23L1092.89 573.04L1107 564.7C1122.06 573.04 1135.94 575.7 1139.87 570.15C1145.12 562.75 1144.07 554.08 1139.57 545.91L1151.41 545.23L1151.3 544.84L1158.41 534.84L1170.24 543.24L1153.4 567L1199.59 599.79L1209.52 585.79L1210.43 586.43L1200.5 600.43L1246.68 633.21L1256.61 619.21L1257.52 619.86L1247.59 633.86L1293.78 666.64L1337.29 605.34L1291.1 572.56L1281.17 586.56L1280.26 585.91L1290.19 571.91L1244 539.13L1234.07 553.13L1233.16 552.48L1243.09 538.48L1196.9 505.69L1180.65 528.6L1168.82 520.2L1174.25 512.55L1172.25 505.55L1170.83 505.92L1179.17 494.79L1193.11 492.55L1193.2 492.43C1195.04 489.84 1195.03 486.43 1193.2 482.28L1194.09 481.95C1194.97 481.627 1195.73 481.049 1196.28 480.291C1196.83 479.532 1197.15 478.627 1197.18 477.69C1197.29 469.92 1185.38 458.69 1175.18 451.4C1164.92 444.11 1150.37 436.57 1143.06 439.23C1142.18 439.571 1141.43 440.167 1140.9 440.941C1140.36 441.714 1140.07 442.63 1140.06 443.57V444.57C1135.83 444.23 1132.43 445.18 1130.48 447.92L1130.4 448.04L1131.46 463.79L1127.16 471.63L1117.51 472.31L1112.09 479.96L1100.25 471.56L1116.51 448.66L1070.32 415.88L1060.4 429.88L1059.49 429.23L1069.42 415.23L1023.23 382.45L1013.3 396.45L1012.39 395.81L1022.32 381.81L976.061 349L932.551 410.3L978.731 443Z"
        fill=#B2B6BB
        style="fill:rgb(178,182,187);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path
        d="M1172.37 540.28L1160.54 531.88L1166.74 523.15L1178.57 531.54L1172.37 540.28ZM1091 572.42L1088 570.14L1091 553.46C1095.77 557.272 1100.78 560.772 1106 563.94L1091.85 572.29L1091 572.42ZM1098.09 474.42L1109.92 482.82L1103.72 491.55L1091.89 483.16L1098.09 474.42ZM978.731 443L988.661 429L989.571 429.64L979.641 443.64L1025.83 476.42L1035.75 462.42L1036.66 463.06L1026.73 477.06L1072.92 509.84L1089.8 486.05L1101.63 494.45L1094.52 504.45H1094.12L1097.39 515.86C1088.19 514.3 1079.66 516.17 1074.39 523.57C1070.47 529.09 1077.18 541.18 1089.95 552.57L1086.95 569.26L1085.22 570.26L1084.62 571.1L1076.28 583C1074.4 585.64 1081.21 590.48 1083.09 587.83L1091.43 576.07L1092.03 575.23L1092.89 573.04L1107 564.7C1122.06 573.04 1135.94 575.7 1139.87 570.15C1145.12 562.75 1144.07 554.08 1139.57 545.91L1151.41 545.23L1151.3 544.84L1158.41 534.84L1170.24 543.24L1153.4 567L1199.59 599.79L1209.52 585.79L1210.43 586.43L1200.5 600.43L1246.68 633.21L1256.61 619.21L1257.52 619.86L1247.59 633.86L1293.78 666.64L1337.29 605.34L1291.1 572.56L1281.17 586.56L1280.26 585.91L1290.19 571.91L1244 539.13L1234.07 553.13L1233.16 552.48L1243.09 538.48L1196.9 505.69L1180.65 528.6L1168.82 520.2L1174.25 512.55L1172.25 505.55L1170.83 505.92L1179.17 494.79L1193.11 492.55L1193.2 492.43C1195.04 489.84 1195.03 486.43 1193.2 482.28L1194.09 481.95C1194.97 481.627 1195.73 481.049 1196.28 480.291C1196.83 479.532 1197.15 478.627 1197.18 477.69C1197.29 469.92 1185.38 458.69 1175.18 451.4C1164.92 444.11 1150.37 436.57 1143.06 439.23C1142.18 439.571 1141.43 440.167 1140.9 440.941C1140.36 441.714 1140.07 442.63 1140.06 443.57V444.57C1135.83 444.23 1132.43 445.18 1130.48 447.92L1130.4 448.04L1131.46 463.79L1127.16 471.63L1117.51 472.31L1112.09 479.96L1100.25 471.56L1116.51 448.66L1070.32 415.88L1060.4 429.88L1059.49 429.23L1069.42 415.23L1023.23 382.45L1013.3 396.45L1012.39 395.81L1022.32 381.81L976.061 349L932.551 410.3L978.731 443Z"
        fill=#B2B6BB
        style="fill:rgb(178,182,187);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path
        d="M1130.16 528.19C1128.73 525.879 1126.83 523.885 1124.6 522.33C1120.21 519.21 1114.17 517.39 1110.1 519.99L1110.52 520.2C1118.46 523.775 1125.62 528.871 1131.6 535.2C1132.05 532.765 1131.53 530.252 1130.16 528.19V528.19Z"
        fill=#DADDDF
        style="fill:rgb(218,221,223);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M1115.54 534.779C1133.54 547.029 1144.89 563.079 1140.28 569.859C1135.67 576.639 1117.16 572.279 1098.85 559.329C1081.05 546.749 1069.94 531.639 1074.55 524.859C1079.16 518.079 1097.51 522.519 1115.54 534.779Z"
        fill=#DADDDF
        style="fill:rgb(218,221,223);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path opacity=0.05
        d="M1091.09 553.341C1093.38 555.281 1095.86 557.201 1098.47 559.061C1099.94 549.291 1105.33 539.201 1114.71 534.231C1096.95 522.401 1079.09 518.231 1074.55 524.861C1073.8 526.03 1073.45 527.408 1073.55 528.791C1073.69 530.301 1074.03 531.787 1074.55 533.211C1076.73 538.811 1082.34 545.741 1090.15 552.511L1093.4 532.701C1093.41 532.616 1093.44 532.533 1093.48 532.459C1093.52 532.385 1093.58 532.321 1093.65 532.271C1093.77 532.198 1093.91 532.172 1094.05 532.201C1094.19 532.22 1094.31 532.292 1094.39 532.401C1094.44 532.469 1094.48 532.548 1094.49 532.631C1094.51 532.714 1094.5 532.799 1094.48 532.881L1091.09 553.341Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.05;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.2
        d="M1095.47 505.49L1116.59 504.27L1144.29 523.93L1150.11 544.28L1139.03 544.91C1137.42 542.218 1135.57 539.681 1133.5 537.33C1135.11 534.76 1135.16 531.68 1133.63 528.4C1131.91 525.03 1129.36 522.15 1126.23 520.03C1120.12 515.69 1111.75 513.57 1107.51 518.88C1104.6 517.7 1101.59 516.793 1098.51 516.17L1095.51 505.49H1095.47Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path opacity=0.2
        d="M1125.2 521.481C1130.09 524.951 1134.13 530.771 1132.42 536.111C1132.53 536.251 1132.66 536.381 1132.78 536.531C1135.78 531.371 1131.26 524.881 1125.63 520.881L1125.2 521.481V521.481Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M1087.83 570.671C1087.72 570.691 1087.6 570.691 1087.48 570.671C1087.34 570.646 1087.2 570.594 1087.07 570.516C1086.95 570.438 1086.84 570.336 1086.76 570.216C1086.67 570.096 1086.61 569.96 1086.58 569.817C1086.55 569.673 1086.55 569.525 1086.57 569.381L1093.22 531.881C1093.24 531.728 1093.29 531.58 1093.36 531.446C1093.44 531.312 1093.54 531.195 1093.66 531.102C1093.78 531.01 1093.93 530.944 1094.07 530.908C1094.22 530.872 1094.38 530.867 1094.53 530.894C1094.68 530.921 1094.83 530.979 1094.96 531.064C1095.08 531.149 1095.19 531.259 1095.28 531.389C1095.36 531.518 1095.42 531.663 1095.44 531.814C1095.47 531.966 1095.46 532.121 1095.42 532.271L1088.77 569.771C1088.73 570.001 1088.62 570.213 1088.45 570.374C1088.28 570.536 1088.06 570.64 1087.83 570.671V570.671Z"
        fill=#868A91
        style="fill:rgb(134,138,145);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path
        d="M1091.72 574.079C1091.5 574.113 1091.27 574.077 1091.07 573.977C1090.87 573.877 1090.7 573.717 1090.59 573.519C1090.45 573.263 1090.41 572.959 1090.48 572.675C1090.56 572.39 1090.75 572.147 1091 571.999L1124.25 553.439C1124.38 553.354 1124.52 553.297 1124.68 553.27C1124.83 553.244 1124.98 553.249 1125.13 553.286C1125.28 553.322 1125.42 553.389 1125.55 553.482C1125.67 553.576 1125.77 553.693 1125.85 553.827C1125.92 553.962 1125.97 554.11 1125.98 554.264C1126 554.417 1125.98 554.572 1125.93 554.718C1125.89 554.865 1125.81 555 1125.71 555.115C1125.61 555.231 1125.48 555.324 1125.34 555.389L1092.11 573.999C1091.99 574.047 1091.85 574.074 1091.72 574.079V574.079Z"
        fill=#868A91
        style="fill:rgb(134,138,145);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path opacity=0.2
        d="M1130.16 528.19C1128.72 525.881 1126.83 523.887 1124.6 522.33L1121.6 526.62C1125.2 529.179 1128.54 532.068 1131.6 535.25C1132.06 532.799 1131.55 530.265 1130.16 528.19V528.19Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.2
        d="M1121.84 539.09C1134.71 549.9 1144.26 562.349 1141.04 568.849C1148.74 553.299 1135.42 536.46 1121.43 526.52C1121.43 526.52 1125.26 532.79 1121.84 539.09V539.09Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.2
        d="M1125.92 520.481L1148.48 536.481L1150.67 544.801L1139.32 545.551C1139.32 545.551 1136.72 541.041 1135.99 540.191C1135.26 539.341 1132.8 536.331 1132.8 536.331L1134.19 535.331C1134.3 533.648 1134.13 531.958 1133.68 530.331C1132.54 527.77 1131 525.408 1129.11 523.331C1127.88 522.091 1125.92 520.461 1125.92 520.461V520.481Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M1075.83 583.48L1085.07 570.48L1092.28 575.6L1083.05 588.6C1081.21 591.19 1073.99 586.07 1075.83 583.48Z"
        class=change-color-in-svg fill=#4D61FC
        style="fill:rgb(0,171,240);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path opacity=0.2
        d="M1085 570.551L1075.77 583.551C1075.12 584.551 1075.77 585.931 1076.97 587.091L1087.46 572.301L1085 570.551Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path opacity=0.2
        d="M1189.51 476.31C1190.79 478.05 1192.33 480.92 1193.3 482.46L1193.22 482.26L1194.11 481.93C1194.99 481.607 1195.75 481.029 1196.3 480.271C1196.85 479.512 1197.17 478.607 1197.2 477.67C1197.31 469.91 1185.43 458.67 1175.2 451.41L1170.3 458.18C1178.45 464 1185.19 470.42 1189.51 476.31Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path d="M1086.24 568.211L1093.95 573.681L1092.28 576.041L1084.56 570.571L1086.24 568.211Z"
        fill=#868A91
        style="fill:rgb(134,138,145);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path opacity=0.2 d="M1171.72 505.771L1171.85 505.631L1171.69 505.671L1171.72 505.771Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.2
        d="M1160.17 472.449L1154.07 481.049L1168.07 491.049L1171.49 505.049L1178.78 495.309C1177.83 488.679 1169.26 478.899 1160.17 472.449Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path
        d="M1280.46 655.93L1292.32 664.35L1294.39 664L1302.81 652.14L1302.41 649.83L1290.84 641.62L1288.29 642.05L1280.08 653.62L1280.46 655.93V655.93ZM1265.35 645.2L1277.21 653.62L1279.51 653.22L1287.73 641.65L1287.29 639.1L1275.72 630.89L1273.18 631.32L1265 642.89L1265.39 645.2H1265.35ZM1258.45 620.52H1258.3L1249.89 632.38L1250.24 634.45L1262.09 642.86L1264.4 642.47L1272.62 630.9L1272.18 628.35L1261.48 620.75C1261.17 621.059 1260.76 621.248 1260.32 621.283C1259.88 621.317 1259.44 621.196 1259.08 620.94L1258.45 620.49V620.52ZM1233.37 622.52L1245.22 630.93L1247.29 630.58L1255.71 618.72V618.58L1254.94 618.03C1254.59 617.775 1254.33 617.403 1254.22 616.979C1254.11 616.555 1254.15 616.106 1254.34 615.71L1243.77 608.2L1241.21 608.63L1233 620.19L1233.39 622.51L1233.37 622.52ZM1218.25 611.79L1230.11 620.21L1232.42 619.81L1240.63 608.23L1240.2 605.69L1228.63 597.47L1226.08 597.91L1217.87 609.48L1218.25 611.79ZM1211.35 587.1H1211.21L1202.79 599L1203.14 601.07L1214.99 609.49L1217.31 609.09L1225.52 597.52L1225.08 594.97L1214.5 587.46C1214.19 587.768 1213.77 587.955 1213.33 587.987C1212.9 588.02 1212.46 587.897 1212.1 587.64L1211.35 587.11V587.1ZM1186.28 589.1L1198.13 597.51L1200.2 597.16L1208.62 585.3V585.15L1207.98 584.7C1207.62 584.443 1207.37 584.07 1207.26 583.645C1207.15 583.22 1207.19 582.769 1207.37 582.37L1196.67 574.78L1194.13 575.21L1185.91 586.79L1186.31 589.1H1186.28ZM1171.16 578.37L1183.02 586.79L1185.33 586.39L1193.54 574.82L1193.11 572.27L1181.54 564L1178.99 564.43L1170.78 576L1171.16 578.31V578.37ZM1156 567.62L1167.9 576L1170.21 575.6L1178.42 564.03L1177.99 561.48L1166.42 553.27L1164.11 553.65L1155.69 565.51L1156.04 567.58L1156 567.62ZM1171.08 543.81L1166.38 550.43L1166.78 552.74L1178.35 560.95L1180.9 560.52L1189.11 548.95L1188.68 546.4L1177.11 538.19L1174.8 538.57L1173.17 540.87L1171.08 543.81ZM1181.9 563.47L1193.47 571.68L1196.02 571.25L1204.23 559.68L1203.8 557.13L1192.23 548.92L1189.68 549.35L1181.47 560.92L1181.9 563.47ZM1210.71 582.05H1210.89L1219.31 570.19V570.03L1218.67 569.58C1218.31 569.328 1218.06 568.958 1217.95 568.536C1217.83 568.114 1217.88 567.665 1218.06 567.27L1207.36 559.67L1204.82 560.11L1196.6 571.68L1197.04 574.22L1207.73 581.82C1208.05 581.521 1208.46 581.34 1208.89 581.307C1209.32 581.274 1209.75 581.392 1210.11 581.64L1210.74 582.08L1210.71 582.05ZM1222.1 572H1221.94L1213.52 583.86V584.04L1214.24 584.55C1214.6 584.802 1214.86 585.17 1214.97 585.592C1215.09 586.013 1215.05 586.462 1214.87 586.86L1225.46 594.37L1228 594L1236.22 582.43L1235.77 579.88L1225.19 572.37C1224.88 572.672 1224.46 572.854 1224.03 572.887C1223.59 572.92 1223.16 572.801 1222.8 572.55L1222.06 572.03L1222.1 572ZM1229 596.9L1240.57 605.11L1243.12 604.68L1251.33 593.11L1250.9 590.56L1239.33 582.35L1236.78 582.78L1228.57 594.35L1229 596.9ZM1257.81 615.48H1257.99L1266.41 603.62V603.46L1265.66 602.92C1265.3 602.668 1265.05 602.298 1264.94 601.876C1264.82 601.454 1264.87 601.005 1265.05 600.61L1254.48 593.11L1251.92 593.53L1243.71 605.1L1244.15 607.66L1254.72 615.16C1255.04 614.861 1255.45 614.68 1255.88 614.647C1256.31 614.614 1256.74 614.732 1257.1 614.98L1257.84 615.51L1257.81 615.48ZM1269.17 605.4H1269L1260.59 617.26V617.44L1261.19 617.87C1261.55 618.122 1261.81 618.49 1261.92 618.912C1262.04 619.333 1262 619.782 1261.82 620.18L1272.53 627.78L1275.07 627.35L1283.29 615.78L1282.86 613.23L1272.15 605.63C1271.83 605.934 1271.42 606.119 1270.98 606.151C1270.55 606.184 1270.11 606.064 1269.75 605.81L1269.14 605.37L1269.17 605.4ZM1276.09 630.32L1287.67 638.53L1290.21 638.1L1298.43 626.53L1298 624L1286.43 615.79L1283.89 616.22L1275.67 627.8L1276.1 630.34L1276.09 630.32ZM1291.21 641.05L1302.78 649.27L1305.09 648.88L1313.51 637.02L1313.11 634.71L1301.54 626.5L1298.99 626.93L1290.78 638.51L1291.21 641.05ZM1302 625.94L1313.57 634.16L1315.88 633.76L1324.3 621.91L1323.9 619.6L1312.33 611.38L1309.78 611.82L1301.56 623.4L1302 625.94V625.94ZM1286.88 615.21L1298.45 623.43L1301 623L1309.22 611.42L1308.78 608.88L1297.21 600.66L1294.67 601.1L1286.45 612.68L1286.88 615.22V615.21ZM1279.97 590.28H1279.79L1271.38 602.13V602.3L1272 602.73C1272.36 602.987 1272.61 603.36 1272.73 603.785C1272.84 604.211 1272.8 604.661 1272.61 605.06L1283.32 612.66L1285.87 612.23L1294.09 600.65L1293.66 598.1L1282.95 590.5C1282.64 590.805 1282.22 590.99 1281.79 591.021C1281.35 591.052 1280.92 590.928 1280.56 590.67L1279.95 590.24L1279.97 590.28ZM1254.9 592.52L1265.47 600.02C1265.79 599.714 1266.2 599.528 1266.64 599.493C1267.08 599.459 1267.51 599.578 1267.87 599.83L1268.62 600.36H1268.78L1277.19 588.51V588.32L1276.45 587.8C1276.1 587.547 1275.84 587.178 1275.73 586.756C1275.61 586.335 1275.65 585.887 1275.83 585.49L1265.26 577.99L1262.7 578.41L1254.43 590L1254.87 592.56L1254.9 592.52ZM1239.78 581.79L1251.36 590L1253.9 589.57L1262.12 577.99L1261.69 575.44L1250.12 567.23L1247.57 567.66L1239.35 579.24L1239.78 581.79ZM1232.88 556.86H1232.69L1224.28 568.71V568.87L1225.01 569.39C1225.37 569.647 1225.63 570.019 1225.74 570.444C1225.85 570.869 1225.81 571.32 1225.63 571.72L1236.21 579.23L1238.77 578.81L1246.99 567.22L1246.54 564.67L1236 557.2C1235.69 557.504 1235.27 557.687 1234.84 557.718C1234.4 557.749 1233.97 557.626 1233.61 557.37L1232.89 556.86H1232.88ZM1221.52 566.93H1221.69L1230.1 555.08V554.89L1229.47 554.44C1229.12 554.188 1228.86 553.821 1228.75 553.401C1228.63 552.982 1228.67 552.536 1228.85 552.14L1218.16 544.55L1215.61 544.98L1207.39 556.56L1207.82 559.11L1218.52 566.7C1218.83 566.394 1219.24 566.206 1219.68 566.169C1220.12 566.133 1220.55 566.25 1220.91 566.5L1221.54 566.95L1221.52 566.93ZM1192.69 548.36L1204.26 556.58L1206.81 556.14L1215.03 544.56L1214.6 542.01L1203 533.8L1200.45 534.23L1192.23 545.82L1192.66 548.36H1192.69ZM1179.44 532.13L1177.18 535.32L1177.57 537.63L1189.14 545.85L1191.69 545.41L1199.91 533.83L1199.48 531.28L1187.91 523.07L1185.59 523.47L1181.52 529.2L1179.44 532.13V532.13ZM1188.3 522.51L1199.88 530.73L1202.42 530.3L1210.64 518.72L1210.25 516.41L1198.36 508L1196.29 508.35L1187.88 520.2L1188.27 522.51H1188.3ZM1203.42 533.24L1214.99 541.46L1217.54 541.03L1225.75 529.45L1225.37 527.14L1213.51 518.73L1211.2 519.13L1203 530.7L1203.43 533.24H1203.42ZM1232.27 551.81H1232.42L1240.83 539.96L1240.48 537.89L1228.63 529.48L1226.31 529.87L1218.1 541.44L1218.53 543.99L1229.23 551.58C1229.54 551.267 1229.96 551.076 1230.39 551.039C1230.83 551.002 1231.27 551.123 1231.63 551.38L1232.27 551.83V551.81ZM1235.03 553.81L1235.78 554.34C1236.14 554.596 1236.4 554.971 1236.51 555.399C1236.62 555.827 1236.58 556.281 1236.39 556.68L1246.97 564.19L1249.53 563.77L1257.74 552.2L1257.35 549.88L1245.5 541.47L1243.42 541.82L1235 553.63V553.77L1235.03 553.81ZM1250.52 566.71L1262.09 574.92L1264.63 574.49L1272.85 562.92L1272.46 560.61L1260.6 552.19L1258.3 552.59L1250.08 564.16L1250.52 566.71V566.71ZM1265.63 577.44L1276.21 584.94C1276.52 584.63 1276.93 584.44 1277.37 584.403C1277.81 584.367 1278.24 584.486 1278.6 584.74L1279.37 585.29H1279.51L1287.92 573.44L1287.57 571.37L1275.72 562.96L1273.4 563.36L1265.19 574.93L1265.63 577.48V577.44ZM1282.13 587.24L1282.76 587.69C1283.12 587.946 1283.38 588.321 1283.49 588.749C1283.6 589.177 1283.56 589.631 1283.37 590.03L1294.07 597.63L1296.62 597.19L1304.83 585.62L1304.44 583.3L1292.59 574.89L1290.52 575.25L1282.11 587.1V587.24H1282.13ZM1297.61 600.14L1309.18 608.35L1311.73 607.92L1319.94 596.35L1319.56 594.03L1307.7 585.62L1305.39 586.02L1297.18 597.59L1297.61 600.14ZM1312.29 608.32L1320.51 596.75L1322.81 596.35L1334.67 604.77L1335.03 606.84L1326.61 618.69L1324.3 619.08L1312.73 610.87L1312.29 608.32V608.32Z"
        class=change-color-in-svg fill=#4D61FC
        style="fill:rgb(0,171,240);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path
        d="M1059.61 499.18L1071.47 507.6L1073.54 507.25L1081.96 495.39L1081.56 493.08L1070 484.87L1067.45 485.3L1059.24 496.87L1059.62 499.18H1059.61ZM1044.49 488.45L1056.35 496.87L1058.66 496.47L1066.88 484.89L1066.44 482.35L1054.87 474.14L1052.32 474.57L1044.11 486.14L1044.49 488.45V488.45ZM1037.6 463.77H1037.45L1029 475.65L1029.35 477.73L1041.2 486.14L1043.51 485.74L1051.73 474.17L1051.29 471.62L1040.59 464.03C1040.27 464.337 1039.86 464.524 1039.42 464.557C1038.98 464.59 1038.55 464.467 1038.19 464.21L1037.56 463.77H1037.6ZM1012.52 465.77L1024.37 474.18L1026.44 473.83L1034.86 461.97V461.83L1034.09 461.29C1033.73 461.033 1033.48 460.659 1033.37 460.233C1033.26 459.807 1033.3 459.357 1033.49 458.96L1022.92 451.46L1020.36 451.88L1012.15 463.46L1012.54 465.77H1012.52ZM997.4 455L1009.26 463.42L1011.57 463.02L1019.78 451.45L1019.35 448.9L1007.78 440.69L1005.23 441.12L997 452.71L997.38 455.02L997.4 455ZM990.5 430.32H990.36L981.94 442.18L982.29 444.25L994.14 452.66L996.46 452.27L1004.67 440.7L1004.23 438.14L993.65 430.63C993.336 430.939 992.923 431.127 992.484 431.162C992.045 431.197 991.608 431.076 991.25 430.82L990.5 430.29V430.32ZM965.43 432.32L977.28 440.73L979.35 440.38L987.76 428.52V428.37L987.12 427.91C986.762 427.656 986.505 427.284 986.394 426.86C986.282 426.436 986.323 425.986 986.51 425.59L975.79 418L973.25 418.43L965 430L965.4 432.32H965.43ZM950.31 421.6L962.17 430L964.48 429.59L972.69 418L972.26 415.46L960.68 407.24L958.14 407.68L949.92 419.25L950.31 421.56V421.6ZM935.19 410.87L947.05 419.29L949.36 418.88L957.57 407.31L957.14 404.77L945.57 396.55L943.26 396.94L934.84 408.8L935.19 410.87V410.87ZM950.27 387.06L945.57 393.68L946 396L957.57 404.21L960.12 403.78L968.33 392.21L967.9 389.66L956.33 381.44L954.02 381.83L952.39 384.13L950.3 387.07L950.27 387.06ZM961.09 406.72L972.66 414.93L975.21 414.5L983.42 402.93L982.99 400.38L971.42 392.17L968.87 392.6L960.65 404.17L961.09 406.72V406.72ZM989.9 425.3H990.08L998.49 413.44V413.27L997.85 412.83C997.492 412.576 997.235 412.204 997.124 411.78C997.012 411.356 997.053 410.906 997.24 410.51L986.54 402.92L984 403.35L975.78 414.92L976.22 417.47L986.89 425C987.207 424.702 987.616 424.522 988.05 424.491C988.483 424.461 988.914 424.58 989.27 424.83L989.9 425.27V425.3ZM1001.25 415.22H1001.09L992.67 427.08V427.26L993.39 427.77C993.747 428.021 994.005 428.39 994.12 428.811C994.235 429.233 994.2 429.681 994.02 430.08L1004.6 437.59L1007.16 437.17L1015.37 425.6L1014.93 423.04L1004.35 415.53C1004.03 415.834 1003.62 416.018 1003.18 416.051C1002.74 416.084 1002.31 415.963 1001.95 415.71L1001.22 415.19L1001.25 415.22ZM1008.18 440.14L1019.75 448.35L1022.3 447.92L1030.51 436.35L1030.08 433.8L1018.51 425.59L1016 426L1007.79 437.57L1008.22 440.12L1008.18 440.14ZM1037 458.73H1037.18L1045.6 446.87V446.71L1044.85 446.18C1044.49 445.926 1044.24 445.554 1044.12 445.13C1044.01 444.706 1044.05 444.256 1044.24 443.86L1033.67 436.36L1031.11 436.79L1022.9 448.36L1023.34 450.91L1033.91 458.42C1034.23 458.12 1034.63 457.939 1035.07 457.906C1035.5 457.874 1035.93 457.991 1036.29 458.24L1037.03 458.77L1037 458.73ZM1048.36 448.65H1048.19L1039.78 460.51V460.69L1040.38 461.12C1040.74 461.373 1040.99 461.741 1041.11 462.162C1041.22 462.583 1041.19 463.031 1041.01 463.43L1051.72 471.03L1054.26 470.6L1062.48 459.02L1062.05 456.48L1051.34 448.88C1051.02 449.182 1050.61 449.365 1050.17 449.398C1049.73 449.431 1049.3 449.311 1048.94 449.06L1048.33 448.62L1048.36 448.65ZM1055.28 473.57L1066.86 481.78L1069.4 481.35L1077.62 469.78L1077.18 467.23L1065.6 459L1063.06 459.43L1054.84 471L1055.27 473.55L1055.28 473.57ZM1070.4 484.3L1081.97 492.51L1084.28 492.13L1092.7 480.27L1092.3 477.96L1080.73 469.75L1078.18 470.18L1070 481.75L1070.43 484.3H1070.4ZM1081.12 469.19L1092.7 477.4L1095 477L1103.41 465.15L1103.02 462.83L1091.45 454.62L1088.9 455.05L1080.68 466.63L1081.11 469.18L1081.12 469.19ZM1066 458.46L1077.57 466.67L1080.12 466.24L1088.34 454.66L1087.9 452.11L1076.33 443.9L1073.79 444.33L1065.57 455.91L1066 458.46ZM1059.09 433.53H1058.91L1050.5 445.38V445.54L1051.12 445.98C1051.48 446.236 1051.73 446.61 1051.84 447.035C1051.96 447.46 1051.91 447.911 1051.73 448.31L1062.44 455.91L1064.99 455.48L1073.21 443.9L1072.78 441.35L1062.07 433.75C1061.75 434.05 1061.34 434.231 1060.91 434.262C1060.47 434.293 1060.04 434.172 1059.68 433.92L1059.07 433.49L1059.09 433.53ZM1034 435.76L1044.57 443.27C1044.88 442.961 1045.3 442.771 1045.73 442.735C1046.17 442.698 1046.61 442.817 1046.97 443.07L1047.72 443.6H1047.88L1056.29 431.75V431.56L1055.55 431.03C1055.2 430.778 1054.94 430.411 1054.83 429.991C1054.71 429.571 1054.75 429.125 1054.93 428.73L1044.36 421.22L1041.8 421.65L1033.58 433.23L1034.02 435.78L1034 435.76ZM1018.9 425L1030.48 433.22L1033.02 432.78L1041.24 421.2L1040.81 418.66L1029.24 410.44L1026.69 410.88L1018.47 422.46L1018.9 425ZM1012 400.1H1011.81L1003.4 412V412.17L1004.13 412.69C1004.49 412.946 1004.74 413.319 1004.86 413.744C1004.97 414.168 1004.93 414.619 1004.75 415.02L1015.33 422.53L1017.88 422.1L1026.1 410.52L1025.66 407.97L1015.08 400.46C1014.76 400.762 1014.35 400.943 1013.91 400.972C1013.48 401.002 1013.04 400.877 1012.69 400.62L1011.97 400.11L1012 400.1ZM1000.64 410.18H1000.81L1009.22 398.33V398.14L1008.6 397.7C1008.24 397.446 1007.99 397.077 1007.88 396.656C1007.76 396.234 1007.8 395.787 1007.98 395.39L997.28 387.8L994.74 388.23L986.52 399.81L986.95 402.36L997.65 409.95C997.963 409.643 998.374 409.456 998.81 409.421C999.247 409.386 999.682 409.506 1000.04 409.76L1000.67 410.21L1000.64 410.18ZM971.81 391.61L983.38 399.82L985.93 399.39L994.15 387.81L993.72 385.26L982.15 377.05L979.6 377.48L971.38 389.06L971.81 391.61ZM958.56 375.38L956.3 378.56L956.69 380.88L968.26 389.09L970.81 388.66L979 377.08L978.57 374.53L967 366.32L964.68 366.71L960.61 372.45L958.53 375.38H958.56ZM967.42 365.76L979 374L981.54 373.57L989.75 362L989.37 359.69L977.51 351.27L975.44 351.62L967 363.44L967.39 365.76H967.42ZM982.54 376.49L994.11 384.7L996.66 384.27L1004.87 372.7L1004.49 370.39L992.63 362L990.32 362.4L982.11 373.97L982.54 376.52V376.49ZM1011.39 395.06H1011.54L1019.95 383.21L1019.6 381.14L1007.75 372.73L1005.43 373.12L997.22 384.7L997.65 387.24L1008.35 394.84C1008.66 394.527 1009.07 394.335 1009.51 394.297C1009.95 394.258 1010.39 394.376 1010.75 394.63L1011.39 395.09V395.06ZM1014.15 397.06L1014.9 397.59C1015.26 397.846 1015.52 398.22 1015.63 398.648C1015.74 399.076 1015.7 399.53 1015.51 399.93L1026.09 407.44L1028.64 407.01L1036.86 395.44L1036.46 393.12L1024.61 384.71L1022.54 385.06L1014.13 396.92V397.06H1014.15ZM1029.63 409.96L1041.21 418.17L1043.75 417.74L1051.97 406.16L1051.58 403.85L1039.72 395.44L1037.41 395.84L1029.2 407.41L1029.63 409.96V409.96ZM1044.75 420.69L1055.32 428.19C1055.63 427.879 1056.04 427.688 1056.48 427.652C1056.92 427.615 1057.36 427.735 1057.72 427.99L1058.49 428.53H1058.63L1067.04 416.68L1066.69 414.61L1054.84 406.2L1052.52 406.59L1044.31 418.16L1044.75 420.72V420.69ZM1061.25 430.49L1061.88 430.93C1062.24 431.186 1062.5 431.561 1062.61 431.99C1062.72 432.418 1062.67 432.872 1062.48 433.27L1073.19 440.87L1075.74 440.44L1083.95 428.87L1083.56 426.55L1071.71 418.14L1069.64 418.49L1061.23 430.34V430.49H1061.25ZM1076.73 443.38L1088.3 451.59L1090.85 451.16L1099.06 439.59L1098.68 437.28L1086.82 428.86L1084.51 429.26L1076.3 440.83L1076.73 443.38V443.38ZM1091.41 451.57L1099.63 439.99L1101.93 439.59L1113.79 448.01L1114.15 450.08L1105.73 461.93L1103.42 462.32L1091.85 454.11L1091.41 451.57V451.57Z"
        class=change-color-in-svg fill=#4D61FC
        style="fill:rgb(0,171,240);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path
        d="M1130.52 461.919L1130.38 464.239C1135.1 457.829 1149.38 463.539 1160.75 471.599C1166.89 475.959 1172.04 480.839 1175.24 485.339C1178.95 490.549 1179.8 494.889 1177.69 497.899L1180.14 496.899C1184 490.589 1174 478.759 1161.9 470.179C1149.8 461.599 1135.04 455.939 1130.52 461.949V461.919ZM1139 455.999C1135.14 455.649 1132.35 456.499 1130.71 458.559L1130.58 460.779C1136.13 455.289 1150.64 461.289 1162.3 469.559C1168.88 474.239 1174.42 479.469 1177.86 484.299C1181.3 489.129 1182.48 493.349 1181.14 496.419L1183.14 495.579C1184.47 493.369 1184.33 490.499 1182.73 487.039C1176.95 474.409 1152.84 457.309 1139.01 456.039L1139 455.999ZM1186.1 494.329C1190.35 487.079 1179.33 473.879 1165.91 464.329C1152.49 454.779 1136.32 448.729 1130.91 455.229L1130.78 457.449C1132.6 455.679 1135.39 454.949 1139.07 455.299C1146.22 455.979 1155.8 460.569 1164.33 466.619C1172.86 472.669 1180.33 480.209 1183.33 486.719C1184.85 490.039 1185.1 492.859 1184.09 495.139L1186.09 494.309L1186.1 494.329ZM1189.1 493.089C1193.57 485.349 1182.03 471.459 1167.95 461.469C1153.87 451.479 1136.95 445.179 1131.14 451.919L1131.01 454.169C1134.2 451.169 1139.81 451.249 1146.23 453.279C1152.65 455.309 1159.9 459.229 1166.34 463.799C1179.19 472.919 1190.67 485.889 1187.11 493.909L1189.11 493.089H1189.1ZM1169.69 458.999C1184.8 469.719 1197.41 484.349 1192.44 491.699L1190.06 492.699C1191.69 489.019 1190.47 484.079 1186.44 478.299C1182.41 472.519 1176.02 466.419 1168.31 460.949C1154.83 451.379 1137.96 444.519 1131.17 450.949L1131.33 448.369C1136.62 441.259 1154.59 448.369 1169.69 459.049V458.999Z"
        fill=#868A91
        style="fill:rgb(134,138,145);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path opacity=0.2
        d="M1120.87 477.209L1123.93 472.889L1127 472.699L1123.99 476.929L1120.87 477.209Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.2
        d="M1124.89 476.85L1127.87 472.66L1130.49 472.5L1127.58 476.61L1124.89 476.85Z" fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.2
        d="M1109.98 490.86L1115.07 483.69L1120.34 483.26L1124.37 477.59L1127.96 477.26L1131.37 472.45L1138.87 472.02L1116.72 503.22L1109.22 503.66L1113.13 498.15L1109.54 498.48L1115.28 490.39L1109.98 490.86Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path opacity=0.2
        d="M1114.68 483.03L1108.55 491.68L1113.87 491.21L1108.64 498.57L1104.6 498.94L1100.91 504.15L1095.83 504.44L1102.47 495.08L1104.56 492.14L1110.76 483.41L1112.84 480.48L1117.98 473.23L1123.06 472.93L1119.44 478.04L1123.48 477.67L1119.97 482.6L1114.68 483.03Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path opacity=0.2
        d="M1105.12 503.901L1101.79 504.091L1104.98 499.591L1108.12 499.311L1104.94 503.781L1105.12 503.901Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.2
        d="M1105.72 503.87L1109.01 499.22L1111.7 498.98L1108.34 503.72L1105.72 503.87Z" fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.3
        d="M1166.72 504.77L1169.74 500.51L1170.48 503.08L1170.45 503.06L1167.37 507.39L1166.72 504.77Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.3
        d="M1167.6 508.261L1170.7 503.881L1171.55 506.821L1168.36 511.311L1167.6 508.261Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.3
        d="M1145.3 523.71L1167.45 492.5L1169.5 499.67L1165.98 504.63L1166.85 508.12L1162.82 513.8L1164.17 518.93L1159.08 526.1L1157.76 520.93L1152.02 529.02L1151.14 525.53L1147.35 530.88L1145.3 523.71Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path opacity=0.3
        d="M1147.59 531.721L1150.84 527.141L1151.49 529.761L1148.31 534.251L1147.59 531.721Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.3
        d="M1148.55 535.091L1151.71 530.641L1152.48 533.691L1149.39 538.041L1148.55 535.091Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.3
        d="M1167.98 519.62L1165.9 522.55L1159.7 531.29L1157.62 534.23L1150.98 543.58L1149.64 538.89L1153.23 533.83L1152.23 529.9L1157.46 522.54L1158.78 527.71L1164.91 519.07L1163.57 513.93L1167.07 509L1168.06 512.94L1171.79 507.68L1173.13 512.37L1167.98 519.62Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path opacity=0.2
        d="M1135.74 495.229L1143.15 484.789L1153.86 492.389L1146.45 502.829L1135.74 495.229Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path opacity=0.2
        d="M1131.77 500.82L1135.14 496.07L1145.85 503.67L1142.48 508.42L1131.77 500.82Z" fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path opacity=0.2
        d="M1117.63 503.739L1139.95 472.289L1153.08 481.609L1148.85 487.579L1142.89 483.349L1130.33 501.059L1136.28 505.279L1130.76 513.049L1117.63 503.739Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path opacity=0.2
        d="M1149.41 487.98L1153.65 482.01L1166.94 491.44L1144.62 522.89L1131.33 513.46L1136.85 505.68L1142.72 509.85L1155.28 492.15L1149.41 487.98Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path opacity=0.2
        d="M1177.86 484.33C1181.36 489.22 1182.48 493.38 1181.14 496.45L1183.14 495.61C1184.47 493.4 1184.33 490.53 1182.73 487.07C1179.84 480.74 1172.34 473.29 1163.84 467.27L1162.23 469.54H1162.31C1168.89 474.22 1174.43 479.45 1177.87 484.28L1177.86 484.33Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path opacity=0.2
        d="M1175.24 485.34C1178.95 490.55 1179.8 494.89 1177.69 497.9L1180.14 496.9C1184 490.59 1174 478.76 1161.9 470.18H1161.82L1160.75 471.68C1166.89 476.04 1172.04 480.92 1175.24 485.42V485.34Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path opacity=0.2
        d="M1168.32 460.999C1176.02 466.459 1182.46 472.619 1186.44 478.339C1190.42 484.059 1191.69 489.059 1190.06 492.739L1192.44 491.739C1197.44 484.389 1184.8 469.739 1169.7 459.039L1168.32 460.989V460.999Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path opacity=0.2
        d="M1189.07 493.12C1193.54 485.38 1182 471.5 1167.92 461.5L1166.28 463.81C1179.13 472.93 1190.61 485.9 1187.05 493.92L1189.05 493.1L1189.07 493.12Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path opacity=0.2
        d="M1186.1 494.359C1190.35 487.109 1179.33 473.909 1165.91 464.359L1164.3 466.619C1172.84 472.679 1180.3 480.209 1183.3 486.719C1184.82 490.039 1185.07 492.859 1184.06 495.139L1186.06 494.309L1186.1 494.359Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path opacity=0.2
        d="M1187.08 493.94C1190.64 485.94 1179.16 472.94 1166.31 463.83L1165.92 464.39C1179.34 473.92 1190.36 487.11 1186.11 494.39L1187.11 493.97L1187.08 493.94Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path opacity=0.2
        d="M1181.14 496.45C1182.48 493.38 1181.36 489.22 1177.86 484.33C1174.36 479.44 1168.86 474.27 1162.3 469.59H1162.23L1161.84 470.14H1161.9C1174 478.72 1184 490.55 1180.14 496.86L1181.14 496.44V496.45Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.2
        d="M1184.11 495.19C1185.11 492.91 1184.87 490.09 1183.35 486.77C1180.35 480.26 1172.87 472.77 1164.35 466.67L1163.9 467.31C1172.4 473.31 1179.9 480.77 1182.78 487.1C1184.38 490.56 1184.52 493.43 1183.19 495.64L1184.19 495.22L1184.11 495.19Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path opacity=0.2
        d="M1186.44 478.289C1182.44 472.569 1176.02 466.419 1168.32 460.949L1167.92 461.499C1182 471.499 1193.54 485.379 1189.07 493.109L1190.07 492.689C1191.7 489.009 1190.48 484.069 1186.45 478.289H1186.44Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.2
        d="M1160.82 531.869L1172.69 540.299L1171.51 541.969L1159.63 533.539L1160.82 531.869Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.2
        d="M1168.97 519.93L1180.81 528.33L1179.47 530.22L1167.63 521.82L1168.97 519.93Z" fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.2
        d="M1091.58 483.061L1103.44 491.481L1102.41 492.931L1090.55 484.511L1091.58 483.061Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.2 d="M1100.26 471.5L1112.1 479.9L1110.91 481.56L1099.08 473.17L1100.26 471.5Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M1221.59 567.611L1223.52 568.981L1232.67 556.081L1230.75 554.721L1221.59 567.611ZM1268.77 601.091L1270.69 602.461L1279.84 589.561L1277.92 588.201L1268.77 601.091ZM1210.85 582.751L1212.77 584.111L1221.93 571.221L1220 569.851L1210.85 582.751ZM1267.18 603.341L1269.1 604.701L1260 617.601L1258.07 616.231L1267.23 603.341H1267.18Z"
        fill=#0F4B5C
        style="fill:rgb(15,75,92);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path
        d="M1000.75 410.86L1002.67 412.23L1011.82 399.33L1009.9 398L1000.75 410.89V410.86ZM1047.92 444.34L1049.85 445.71L1059 432.81L1057.08 431.45L1047.92 444.34ZM990 426L991.92 427.36L1001.07 414.47L999.15 413.1L990 426ZM1046.32 446.59L1048.24 447.95L1039.09 460.85L1037.17 459.48L1046.32 446.59Z"
        fill=#61656D
        style="fill:rgb(97,101,109);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path opacity=0.2
        d="M1084.56 570.571L1086.24 568.211L1088.97 570.151L1087.33 572.531L1084.56 570.571Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M1291.09 572.561L1281.17 586.561L1280.27 585.921L1290.19 571.921L1244 539.131L1234.08 553.131L1233.17 552.491L1243.1 538.491L1196.91 505.711L1180.65 528.611L1180.06 529.451L1179.17 530.701L1178.57 531.541L1172.37 540.281L1171.77 541.121L1170.94 542.291L1170.28 543.221L1153.4 567.001L1199.59 599.791L1209.52 585.791L1210.43 586.431L1200.49 600.431L1246.68 633.211L1256.62 619.211L1257.52 619.851L1247.59 633.851L1293.78 666.631L1337.28 605.331L1291.09 572.561ZM1307.67 585.561L1319.53 593.971L1319.91 596.291L1311.7 607.861L1309.15 608.291L1297.58 600.081L1297.15 597.531L1305.36 585.961L1307.67 585.561ZM1261.25 617.881L1260.65 617.451V617.271L1269.06 605.411H1269.23L1269.84 605.851C1270.2 606.104 1270.63 606.225 1271.07 606.192C1271.51 606.16 1271.92 605.975 1272.24 605.671L1282.95 613.271L1283.38 615.821L1275.16 627.391L1272.62 627.821L1261.91 620.221C1262.09 619.818 1262.12 619.365 1262 618.941C1261.88 618.517 1261.61 618.149 1261.25 617.901V617.881ZM1214.25 584.541L1213.53 584.031V583.851L1221.95 571.991H1222.11L1222.85 572.511C1223.21 572.762 1223.64 572.881 1224.08 572.848C1224.51 572.815 1224.92 572.633 1225.24 572.331L1235.82 579.841L1236.27 582.391L1228 594.001L1225.45 594.431L1214.86 586.921C1215.06 586.521 1215.1 586.065 1215 585.633C1214.89 585.2 1214.63 584.821 1214.27 584.561L1214.25 584.541ZM1229.4 554.401L1230.03 554.851V555.041L1221.62 566.891H1221.45L1220.82 566.441C1220.46 566.191 1220.02 566.074 1219.59 566.11C1219.15 566.147 1218.74 566.335 1218.43 566.641L1207.73 559.051L1207.3 556.501L1215.52 544.921L1218.07 544.491L1228.76 552.081C1228.57 552.486 1228.54 552.944 1228.66 553.373C1228.78 553.802 1229.05 554.174 1229.42 554.421L1229.4 554.401ZM1276.4 587.751L1277.14 588.271V588.461L1268.73 600.311H1268.57L1267.82 599.781C1267.46 599.529 1267.02 599.41 1266.58 599.444C1266.15 599.479 1265.73 599.665 1265.42 599.971L1254.85 592.471L1254.41 589.911L1262.63 578.331L1265.19 577.911L1275.76 585.411C1275.57 585.816 1275.52 586.276 1275.64 586.709C1275.76 587.142 1276.03 587.519 1276.4 587.771V587.751ZM1271.99 602.751L1271.37 602.321V602.151L1279.78 590.301H1279.96L1280.57 590.731C1280.92 590.989 1281.36 591.113 1281.79 591.082C1282.23 591.051 1282.64 590.866 1282.96 590.561L1293.67 598.161L1294.1 600.711L1285.88 612.291L1283.33 612.721L1272.62 605.121C1272.81 604.719 1272.85 604.263 1272.74 603.833C1272.62 603.403 1272.36 603.027 1272 602.771L1271.99 602.751ZM1271.6 604.751C1271.53 604.842 1271.45 604.919 1271.35 604.978C1271.26 605.036 1271.15 605.076 1271.04 605.093C1270.93 605.111 1270.82 605.107 1270.71 605.08C1270.6 605.054 1270.5 605.007 1270.41 604.941L1266.26 602.001C1266.07 601.87 1265.95 601.672 1265.91 601.449C1265.87 601.226 1265.92 600.997 1266.05 600.811C1266.18 600.63 1266.38 600.508 1266.6 600.471C1266.83 600.434 1267.05 600.484 1267.24 600.611L1271.39 603.611C1271.48 603.676 1271.56 603.758 1271.62 603.854C1271.68 603.949 1271.72 604.056 1271.74 604.167C1271.76 604.279 1271.76 604.393 1271.73 604.504C1271.71 604.614 1271.66 604.718 1271.6 604.811V604.751ZM1253.87 589.511L1251.33 589.941L1239.75 581.731L1239.32 579.181L1247.54 567.601L1250.09 567.171L1261.66 575.381L1262.09 577.931L1253.87 589.511ZM1238.77 578.791L1236.21 579.211L1225.63 571.701C1225.81 571.301 1225.85 570.85 1225.74 570.425C1225.62 570 1225.37 569.628 1225.01 569.371L1224.28 568.851V568.691L1232.69 556.841H1232.88L1233.6 557.351C1233.95 557.607 1234.39 557.73 1234.82 557.699C1235.26 557.668 1235.67 557.485 1235.99 557.181L1246.57 564.691L1247.02 567.241L1238.77 578.791ZM1224.62 571.411C1224.48 571.592 1224.28 571.714 1224.06 571.749C1223.84 571.785 1223.61 571.731 1223.43 571.601L1219.28 568.651C1219.19 568.588 1219.11 568.507 1219.05 568.413C1218.99 568.319 1218.95 568.214 1218.93 568.104C1218.91 567.993 1218.91 567.881 1218.94 567.772C1218.96 567.663 1219.01 567.561 1219.08 567.471C1219.21 567.289 1219.41 567.166 1219.63 567.128C1219.85 567.091 1220.08 567.142 1220.26 567.271L1224.41 570.221C1224.51 570.284 1224.6 570.368 1224.67 570.467C1224.73 570.567 1224.78 570.68 1224.8 570.798C1224.82 570.917 1224.81 571.038 1224.78 571.154C1224.75 571.27 1224.69 571.378 1224.62 571.471V571.411ZM1206.78 556.081L1204.23 556.521L1192.66 548.301L1192.23 545.761L1200.45 534.171L1203 533.741L1214.57 541.951L1215 544.501L1206.78 556.081ZM1203.84 557.081L1204.27 559.631L1196.06 571.201L1193.51 571.631L1181.94 563.421L1181.51 560.871L1189.72 549.301L1192.27 548.871L1203.84 557.081ZM1204.84 560.081L1207.38 559.641L1218.08 567.241C1217.89 567.636 1217.85 568.084 1217.96 568.507C1218.08 568.929 1218.33 569.299 1218.69 569.551L1219.33 570.001V570.161L1210.93 582.001H1210.75L1210.12 581.561C1209.76 581.313 1209.33 581.195 1208.9 581.228C1208.46 581.261 1208.05 581.442 1207.74 581.741L1197.05 574.141L1196.61 571.601L1204.84 560.081ZM1236.84 582.781L1239.39 582.351L1250.96 590.561L1251.39 593.111L1243.18 604.681L1240.63 605.111L1229 596.901L1228.57 594.351L1236.84 582.781ZM1251.95 593.501L1254.51 593.081L1265.08 600.581C1264.89 600.976 1264.85 601.424 1264.96 601.847C1265.08 602.269 1265.33 602.639 1265.69 602.891L1266.44 603.431V603.591L1258 615.451H1257.82L1257.08 614.921C1256.72 614.673 1256.29 614.555 1255.86 614.588C1255.42 614.621 1255.01 614.802 1254.7 615.101L1244.13 607.601L1243.69 605.041L1251.95 593.501ZM1283.95 616.201L1286.49 615.771L1298 624.001L1298.44 626.551L1290.22 638.121L1287.68 638.551L1276.1 630.341L1275.67 627.801L1283.95 616.201ZM1286.89 615.201L1286.46 612.661L1294.68 601.081L1297.22 600.641L1308.79 608.861L1309.23 611.401L1301 623.001L1298.45 623.441L1286.89 615.201ZM1290.53 575.201L1292.6 574.841L1304.45 583.251L1304.84 585.571L1296.63 597.141L1294.08 597.581L1283.38 589.981C1283.57 589.581 1283.61 589.128 1283.5 588.7C1283.39 588.272 1283.13 587.897 1282.77 587.641L1282.14 587.191V587.051L1290.53 575.201ZM1282.17 588.481C1282.35 588.614 1282.48 588.814 1282.51 589.038C1282.55 589.262 1282.5 589.492 1282.36 589.676C1282.23 589.86 1282.03 589.984 1281.81 590.021C1281.58 590.058 1281.35 590.004 1281.17 589.871L1277.02 586.871C1276.84 586.739 1276.72 586.542 1276.68 586.321C1276.64 586.101 1276.69 585.875 1276.82 585.691C1276.88 585.6 1276.96 585.522 1277.06 585.462C1277.15 585.403 1277.26 585.363 1277.37 585.344C1277.48 585.325 1277.59 585.329 1277.7 585.354C1277.81 585.379 1277.91 585.426 1278 585.491L1282.17 588.481ZM1275.73 562.871L1287.58 571.281L1287.93 573.351L1279.52 585.201H1279.38L1278.61 584.651C1278.25 584.397 1277.81 584.278 1277.38 584.314C1276.94 584.351 1276.53 584.541 1276.22 584.851L1265.64 577.351L1265.2 574.801L1273.41 563.231L1275.73 562.871ZM1260.61 552.141L1272.47 560.561L1272.86 562.871L1264.64 574.441L1262.1 574.871L1250.53 566.661L1250.09 564.111L1258.31 552.541L1260.61 552.141ZM1235 553.631L1243.41 541.781L1245.49 541.431L1257.34 549.841L1257.73 552.161L1249.52 563.731L1246.96 564.151L1236.38 556.641C1236.57 556.241 1236.61 555.788 1236.5 555.36C1236.39 554.932 1236.13 554.557 1235.77 554.301L1235.02 553.771L1235 553.631ZM1235.17 555.151C1235.35 555.282 1235.48 555.48 1235.52 555.703C1235.56 555.926 1235.51 556.155 1235.38 556.341C1235.31 556.432 1235.23 556.509 1235.13 556.568C1235.04 556.626 1234.93 556.666 1234.82 556.683C1234.71 556.701 1234.6 556.697 1234.49 556.67C1234.38 556.644 1234.28 556.597 1234.19 556.531L1230.03 553.591C1229.94 553.525 1229.86 553.442 1229.8 553.347C1229.74 553.251 1229.7 553.145 1229.68 553.034C1229.67 552.923 1229.67 552.809 1229.69 552.7C1229.72 552.591 1229.77 552.487 1229.83 552.396C1229.9 552.305 1229.98 552.227 1230.08 552.168C1230.17 552.109 1230.28 552.069 1230.39 552.051C1230.5 552.033 1230.61 552.037 1230.72 552.063C1230.83 552.088 1230.94 552.135 1231.03 552.201L1235.17 555.151ZM1228.62 529.461L1240.47 537.871L1240.82 539.941L1232.41 551.791H1232.26L1231.62 551.341C1231.26 551.084 1230.82 550.963 1230.38 551C1229.94 551.037 1229.53 551.228 1229.22 551.541L1218.5 544.001L1218.07 541.451L1226.28 529.881L1228.62 529.461ZM1213.5 518.731L1225.36 527.141L1225.74 529.451L1217.51 541.001L1214.96 541.431L1203.39 533.211L1202.96 530.671L1211.17 519.101L1213.5 518.731ZM1196.31 508.351L1198.38 508.001L1210.24 516.411L1210.63 518.721L1202.41 530.301L1199.87 530.731L1188.29 522.511L1187.9 520.201L1196.31 508.351ZM1179.43 532.131L1181.51 529.201L1185.58 523.471L1187.9 523.071L1199.47 531.281L1199.9 533.831L1191.68 545.411L1189.13 545.851L1177.56 537.631L1177.17 535.321L1179.43 532.131ZM1171.14 543.811L1173.23 540.871L1174.86 538.571L1177.17 538.191L1188.74 546.401L1189.17 548.951L1180.96 560.521L1178.41 560.951L1166.84 552.741L1166.44 550.431L1171.14 543.811ZM1167.9 576.001L1156 567.621L1155.65 565.551L1164.07 553.691L1166.38 553.311L1177.95 561.521L1178.38 564.071L1170.17 575.641L1167.9 576.001ZM1183 586.771L1171.14 578.351L1170.76 576.041L1178.97 564.471L1181.52 564.041L1193.09 572.251L1193.52 574.801L1185.31 586.371L1183 586.771ZM1200.18 597.141L1198.11 597.491L1186.26 589.081L1185.86 586.771L1194.08 575.191L1196.62 574.761L1207.32 582.351C1207.13 582.75 1207.09 583.2 1207.2 583.626C1207.32 584.051 1207.57 584.424 1207.93 584.681L1208.57 585.131V585.281L1200.18 597.141ZM1208.52 583.841C1208.34 583.71 1208.21 583.513 1208.18 583.292C1208.14 583.071 1208.19 582.844 1208.32 582.661C1208.38 582.569 1208.46 582.49 1208.56 582.429C1208.65 582.369 1208.76 582.328 1208.87 582.31C1208.98 582.291 1209.09 582.295 1209.2 582.321C1209.31 582.347 1209.41 582.394 1209.5 582.461L1213.65 585.401C1213.74 585.467 1213.82 585.55 1213.88 585.645C1213.94 585.741 1213.98 585.847 1213.99 585.958C1214.01 586.069 1214.01 586.182 1213.98 586.292C1213.96 586.401 1213.91 586.505 1213.84 586.596C1213.78 586.687 1213.69 586.765 1213.6 586.824C1213.5 586.883 1213.4 586.923 1213.29 586.941C1213.18 586.959 1213.06 586.955 1212.95 586.929C1212.84 586.904 1212.74 586.857 1212.65 586.791L1208.52 583.841ZM1214.97 609.471L1203.12 601.051L1202.77 598.981L1211.19 587.121H1211.33L1212.08 587.651C1212.44 587.908 1212.87 588.031 1213.31 587.998C1213.75 587.965 1214.16 587.779 1214.48 587.471L1225.06 594.981L1225.5 597.531L1217.29 609.101L1214.97 609.471ZM1230.09 620.201L1218.23 611.781L1217.85 609.471L1226.06 597.901L1228.61 597.461L1240.18 605.681L1240.61 608.221L1232.4 619.801L1230.09 620.201ZM1255.69 618.711L1247.27 630.571L1245.2 630.921L1233.35 622.511L1232.96 620.191L1241.17 608.621L1243.73 608.191L1254.3 615.701C1254.11 616.097 1254.07 616.546 1254.18 616.97C1254.29 617.394 1254.54 617.766 1254.9 618.021L1255.67 618.571L1255.69 618.711ZM1255.5 617.191C1255.41 617.125 1255.33 617.042 1255.27 616.947C1255.21 616.851 1255.17 616.745 1255.15 616.634C1255.14 616.523 1255.14 616.409 1255.16 616.3C1255.19 616.191 1255.24 616.087 1255.3 615.996C1255.37 615.905 1255.45 615.827 1255.55 615.768C1255.64 615.709 1255.75 615.669 1255.86 615.651C1255.97 615.633 1256.08 615.637 1256.19 615.663C1256.3 615.688 1256.41 615.735 1256.5 615.801L1260.65 618.801C1260.74 618.867 1260.82 618.949 1260.87 619.045C1260.93 619.14 1260.97 619.246 1260.99 619.357C1261.01 619.467 1261 619.58 1260.98 619.689C1260.95 619.798 1260.9 619.9 1260.84 619.991C1260.77 620.082 1260.69 620.158 1260.59 620.217C1260.5 620.276 1260.39 620.315 1260.28 620.332C1260.17 620.35 1260.06 620.346 1259.95 620.32C1259.84 620.294 1259.74 620.247 1259.65 620.181L1255.5 617.191ZM1262.07 642.891L1250.22 634.481L1249.87 632.411L1258.28 620.551H1258.43L1259.06 621.001C1259.42 621.257 1259.85 621.378 1260.29 621.344C1260.73 621.309 1261.14 621.12 1261.46 620.811L1272.16 628.411L1272.6 630.961L1264.38 642.531L1262.07 642.891ZM1277.19 653.621L1265.33 645.201L1264.94 642.891L1273.16 631.321L1275.7 630.891L1287.27 639.101L1287.71 641.651L1279.49 653.221L1277.19 653.621ZM1294.39 664.001L1292.32 664.351L1280.46 655.931L1280.08 653.621L1288.29 642.051L1290.84 641.621L1302.41 649.831L1302.81 652.141L1294.39 664.001ZM1305.12 648.881L1302.81 649.271L1291.24 641.051L1290.81 638.511L1299.02 626.931L1301.57 626.501L1313.14 634.711L1313.54 637.021L1305.12 648.881ZM1315.85 633.761L1313.54 634.161L1302 625.941L1301.56 623.401L1309.78 611.821L1312.33 611.381L1323.9 619.601L1324.3 621.911L1315.85 633.761ZM1324.27 619.041L1312.7 610.831L1312.26 608.281L1320.48 596.711L1322.78 596.311L1334.64 604.731L1335 606.801L1326.58 618.651L1324.27 619.041Z"
        fill=#61656D
        style="fill:rgb(97,101,109);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path
        d="M1072.92 509.88L1088.31 488.19L1091.89 483.19L1098.09 474.46L1101.62 469.46L1116.43 448.59L1070.25 415.82L1060.32 429.82L1059.41 429.17L1069.33 415.17L1023.14 382.38L1013.22 396.38L1012.32 395.74L1022.24 381.74L976.049 349L932.539 410.29L978.729 443L988.669 429L989.569 429.64L979.639 443.64L1025.83 476.42L1035.76 462.42L1036.67 463.07L1026.74 477.07L1072.92 509.88ZM1056.35 496.88L1044.5 488.47L1044.1 486.15L1052.32 474.58L1054.86 474.15L1066.44 482.36L1066.88 484.92L1058.66 496.49L1056.35 496.88ZM1040.41 461.18L1039.79 460.73V460.55L1048.21 448.69H1048.37L1049 449.14C1049.35 449.397 1049.79 449.519 1050.23 449.486C1050.66 449.453 1051.08 449.267 1051.39 448.96L1062.09 456.55L1062.52 459.1L1054.31 470.67L1051.76 471.1L1041.06 463.51C1041.25 463.105 1041.29 462.646 1041.17 462.215C1041.05 461.783 1040.78 461.409 1040.41 461.16V461.18ZM993.409 427.83L992.669 427.31V427.13L1001.08 415.27H1001.25L1002 415.8C1002.35 416.054 1002.79 416.175 1003.22 416.142C1003.66 416.109 1004.07 415.924 1004.38 415.62L1014.96 423.13L1015.4 425.67L1007.18 437.24L1004.64 437.68L994.059 430.17C994.249 429.766 994.291 429.309 994.178 428.877C994.065 428.446 993.803 428.068 993.439 427.81L993.409 427.83ZM1008.55 397.7L1009.16 398.13V398.32L1000.75 410.17H1000.59L999.969 409.74C999.609 409.488 999.173 409.369 998.735 409.403C998.297 409.438 997.885 409.624 997.569 409.93L986.869 402.33L986.429 399.78L994.649 388.2L997.209 387.77L1007.9 395.36C1007.72 395.765 1007.7 396.219 1007.82 396.643C1007.94 397.067 1008.21 397.434 1008.58 397.68L1008.55 397.7ZM1055.55 431.04L1056.27 431.55V431.75L1047.86 443.6H1047.69L1046.96 443.08C1046.6 442.828 1046.16 442.709 1045.72 442.743C1045.29 442.778 1044.87 442.964 1044.56 443.27L1034 435.76L1033.57 433.21L1041.79 421.63L1044.34 421.2L1054.92 428.71C1054.74 429.107 1054.71 429.552 1054.83 429.97C1054.95 430.388 1055.2 430.752 1055.56 431L1055.55 431.04ZM1066 458.46L1065.57 455.91L1073.79 444.33L1076.34 443.89L1087.91 452.11L1088.35 454.66L1080.13 466.24L1077.57 466.67L1066 458.46ZM1077.62 469.78L1069.4 481.35L1066.85 481.78L1055.28 473.56L1054.84 471.02L1063.06 459.44L1065.61 459.01L1077.18 467.22L1077.62 469.78ZM1065 455.51L1062.45 455.94L1051.76 448.35C1051.95 447.953 1051.99 447.503 1051.88 447.079C1051.76 446.655 1051.51 446.284 1051.15 446.03L1050.52 445.58V445.41L1058.93 433.56H1059.12L1059.74 434.01C1060.09 434.262 1060.53 434.382 1060.96 434.349C1061.4 434.316 1061.81 434.133 1062.12 433.83L1072.82 441.42L1073.25 443.97L1065 455.51ZM1050.75 448.06C1050.62 448.242 1050.42 448.365 1050.2 448.403C1049.98 448.44 1049.75 448.389 1049.57 448.26L1045.42 445.31C1045.33 445.244 1045.25 445.161 1045.19 445.066C1045.13 444.971 1045.1 444.865 1045.08 444.754C1045.06 444.644 1045.06 444.531 1045.09 444.422C1045.12 444.313 1045.16 444.211 1045.23 444.12C1045.29 444.029 1045.38 443.953 1045.47 443.894C1045.57 443.835 1045.67 443.796 1045.78 443.779C1045.9 443.761 1046.01 443.765 1046.12 443.791C1046.23 443.817 1046.33 443.864 1046.42 443.93L1050.57 446.87C1050.66 446.936 1050.74 447.02 1050.79 447.115C1050.85 447.211 1050.89 447.317 1050.91 447.428C1050.92 447.538 1050.92 447.651 1050.89 447.759C1050.86 447.868 1050.82 447.97 1050.75 448.06V448.06ZM1049.58 444.92L1048.67 444.27L1057.23 432.21L1058.15 432.86L1049.58 444.92ZM1033 432.81L1030.45 433.24L1018.9 425L1018.46 422.45L1026.69 410.87L1029.23 410.44L1040.8 418.65L1041.24 421.2L1033 432.81ZM1017.89 422.09L1015.34 422.52L1004.78 415C1004.97 414.603 1005.01 414.153 1004.9 413.729C1004.78 413.305 1004.53 412.934 1004.17 412.68L1003.42 412.14V411.98L1011.83 400.13H1012.01L1012.75 400.65C1013.1 400.903 1013.54 401.025 1013.97 400.994C1014.4 400.963 1014.81 400.781 1015.13 400.48L1025.71 407.99L1026.15 410.53L1017.89 422.09ZM1003.75 414.71C1003.69 414.802 1003.61 414.881 1003.51 414.941C1003.42 415.002 1003.31 415.043 1003.2 415.061C1003.09 415.08 1002.98 415.076 1002.87 415.05C1002.76 415.024 1002.66 414.977 1002.57 414.91L998.439 412C998.255 411.867 998.131 411.667 998.094 411.443C998.058 411.219 998.111 410.989 998.244 410.805C998.377 410.621 998.577 410.497 998.801 410.46C999.025 410.423 999.255 410.477 999.439 410.61L1003.59 413.56C1003.76 413.69 1003.88 413.883 1003.91 414.098C1003.95 414.313 1003.9 414.533 1003.77 414.71H1003.75ZM1002.46 411.48L1001.56 410.84L1010.12 398.78L1011.02 399.42L1002.46 411.48ZM985.899 399.38L983.349 399.82L971.799 391.6L971.369 389.06L979.589 377.47L982.139 377.04L993.709 385.26L994.139 387.8L985.899 399.38ZM982.959 400.38L983.389 402.93L975.179 414.5L972.629 414.93L961.059 406.72L960.629 404.17L968.839 392.6L971.389 392.17L982.959 400.38ZM983.959 403.33L986.519 402.9L997.209 410.49C997.028 410.889 996.99 411.338 997.103 411.761C997.216 412.184 997.473 412.555 997.829 412.81L998.449 413.25V413.41L990.029 425.27H989.849L989.239 424.84C988.882 424.59 988.449 424.47 988.014 424.501C987.579 424.532 987.167 424.712 986.849 425.01L976.159 417.42L975.719 414.87L983.959 403.33ZM999.389 413.92L1000.3 414.56L991.729 426.62L990.829 425.98L999.389 413.92ZM1016 426L1018.55 425.57L1030.12 433.78L1030.56 436.33L1022.34 447.9L1019.8 448.33L1008.22 440.12L1007.79 437.57L1016 426ZM1031.12 436.73L1033.67 436.3L1044.25 443.81C1044.07 444.208 1044.03 444.658 1044.14 445.082C1044.25 445.506 1044.51 445.876 1044.87 446.13L1045.6 446.65V446.82L1037.18 458.68H1036.99L1036.27 458.17C1035.91 457.918 1035.48 457.797 1035.04 457.828C1034.61 457.859 1034.2 458.04 1033.88 458.34L1023.3 450.83L1022.87 448.28L1031.12 436.73ZM1046.55 447.31L1047.46 447.96L1038.85 460L1037.93 459.36L1046.55 447.31ZM1073.55 507.22L1071.47 507.57L1059.62 499.15L1059.23 496.84L1067.45 485.27L1069.99 484.84L1081.56 493.05L1081.96 495.36L1073.55 507.22ZM1091.06 482.54L1089 485.5L1084.3 492.12L1081.99 492.51L1070.42 484.29L1069.98 481.75L1078.2 470.17L1080.74 469.74L1092.31 477.95L1092.71 480.26L1091.06 482.54ZM1099.34 470.87L1097.26 473.8L1095 477L1092.68 477.4L1081.11 469.19L1080.68 466.64L1088.9 455.06L1091.44 454.62L1103.01 462.84L1103.41 465.15L1099.34 470.87ZM1101.94 439.53L1113.8 447.95L1114.15 450.02L1105.74 461.87L1103.42 462.26L1091.85 454.05L1091.42 451.5L1099.63 439.93L1101.94 439.53ZM1086.83 428.8L1098.68 437.22L1099.07 439.53L1090.86 451.1L1088.3 451.53L1076.73 443.32L1076.3 440.77L1084.51 429.2L1086.83 428.8ZM1069.64 418.43L1071.71 418.07L1083.56 426.48L1083.95 428.8L1075.74 440.37L1073.19 440.81L1062.51 433.22C1062.69 432.82 1062.74 432.367 1062.62 431.94C1062.51 431.513 1062.26 431.139 1061.9 430.88L1061.25 430.42V430.28L1069.64 418.43ZM1061.3 431.73C1061.48 431.861 1061.6 432.058 1061.64 432.279C1061.68 432.5 1061.63 432.727 1061.5 432.91C1061.37 433.093 1061.17 433.216 1060.95 433.254C1060.72 433.291 1060.49 433.24 1060.31 433.11L1056.16 430.16C1055.97 430.029 1055.85 429.831 1055.81 429.608C1055.77 429.385 1055.82 429.156 1055.95 428.97C1056.08 428.788 1056.29 428.666 1056.51 428.631C1056.73 428.595 1056.96 428.649 1057.15 428.78L1061.3 431.73ZM1054.84 406.1L1066.7 414.52L1067.05 416.59L1058.64 428.44H1058.5L1057.75 427.9C1057.39 427.646 1056.95 427.528 1056.51 427.564C1056.07 427.601 1055.65 427.79 1055.34 428.1L1044.76 420.59L1044.32 418.04L1052.54 406.47L1054.84 406.1ZM1039.73 395.37L1051.59 403.79L1051.97 406.1L1043.76 417.67L1041.21 418.1L1029.64 409.89L1029.21 407.34L1037.42 395.77L1039.73 395.37ZM1022.54 385L1024.61 384.65L1036.46 393.06L1036.85 395.38L1028.64 407L1026.09 407.43L1015.52 399.93C1015.71 399.53 1015.75 399.077 1015.64 398.65C1015.53 398.222 1015.27 397.847 1014.91 397.59L1014.15 397.05V396.9L1022.54 385ZM1014.31 398.38C1014.49 398.512 1014.62 398.711 1014.65 398.934C1014.69 399.157 1014.64 399.385 1014.51 399.57C1014.38 399.752 1014.18 399.875 1013.96 399.913C1013.74 399.95 1013.51 399.899 1013.33 399.77L1009.18 396.77C1009.09 396.704 1009.01 396.621 1008.95 396.526C1008.89 396.43 1008.85 396.324 1008.83 396.213C1008.82 396.102 1008.82 395.988 1008.85 395.879C1008.87 395.77 1008.92 395.666 1008.98 395.575C1009.05 395.484 1009.13 395.406 1009.23 395.347C1009.32 395.288 1009.43 395.248 1009.54 395.23C1009.65 395.212 1009.77 395.216 1009.88 395.242C1009.98 395.267 1010.09 395.314 1010.18 395.38L1014.31 398.38ZM1007.74 372.68L1019.59 381.09L1019.94 383.16L1011.53 395H1011.39L1010.76 394.55C1010.4 394.294 1009.96 394.175 1009.52 394.211C1009.08 394.248 1008.66 394.438 1008.35 394.75L997.649 387.15L997.209 384.6L1005.42 373.03L1007.74 372.68ZM992.619 362L1004.48 370.41L1004.87 372.72L996.649 384.3L994.109 384.73L982.529 376.51L982.099 373.97L990.309 362.4L992.619 362ZM975.439 351.62L977.509 351.27L989.359 359.68L989.759 362L981.539 373.57L978.999 374L967.429 365.78L967.039 363.48L975.439 351.62ZM964.709 366.74L967.019 366.34L978.589 374.56L979.029 377.11L970.809 388.69L968.259 389.12L956.689 380.9L956.299 378.59L964.709 366.74ZM953.999 381.82L956.299 381.43L967.869 389.64L968.309 392.2L960.099 403.77L957.539 404.19L945.999 396L945.609 393.7L953.999 381.82ZM946.999 419.28L935.149 410.87L934.799 408.8L943.219 396.94L945.519 396.55L957.089 404.76L957.529 407.32L949.319 418.89L946.999 419.28ZM962.159 430L950.299 421.58L949.919 419.27L958.129 407.7L960.679 407.27L972.249 415.48L972.679 418.03L964.469 429.6L962.159 430ZM987.759 428.51L979.339 440.37L977.269 440.72L965.419 432.31L964.999 430L973.209 418.42L975.769 418L986.459 425.59C986.273 425.989 986.233 426.442 986.346 426.867C986.46 427.293 986.719 427.666 987.079 427.92L987.709 428.37L987.759 428.51ZM987.699 427.09C987.514 426.957 987.388 426.757 987.349 426.533C987.31 426.309 987.36 426.078 987.489 425.89C987.623 425.709 987.823 425.587 988.045 425.552C988.268 425.516 988.495 425.569 988.679 425.7L992.839 428.7C992.93 428.766 993.006 428.849 993.065 428.944C993.124 429.039 993.163 429.145 993.181 429.256C993.198 429.366 993.194 429.479 993.168 429.588C993.142 429.697 993.095 429.799 993.029 429.89C992.963 429.981 992.881 430.057 992.785 430.116C992.69 430.175 992.584 430.214 992.473 430.231C992.363 430.249 992.25 430.245 992.141 430.219C992.032 430.193 991.93 430.146 991.839 430.08L987.699 427.09ZM994.139 452.7L982.289 444.28L981.939 442.21L990.349 430.35H990.499L991.259 430.89C991.619 431.142 992.055 431.261 992.493 431.227C992.931 431.192 993.343 431.006 993.659 430.7L1004.23 438.2L1004.67 440.75L996.449 452.32L994.139 452.7ZM1009.25 463.43L997.389 455L997.009 452.69L1005.22 441.12L1007.77 440.68L1019.34 448.9L1019.78 451.44L1011.56 463L1009.25 463.43ZM1026.44 473.8L1024.37 474.16L1012.51 465.74L1012.13 463.43L1020.34 451.86L1022.89 451.42L1033.47 458.94C1033.28 459.338 1033.24 459.789 1033.35 460.213C1033.47 460.638 1033.73 461.009 1034.09 461.26L1034.84 461.8V461.94L1026.44 473.8ZM1034.68 460.43C1034.59 460.364 1034.51 460.281 1034.45 460.186C1034.39 460.09 1034.35 459.984 1034.33 459.873C1034.32 459.762 1034.32 459.648 1034.35 459.539C1034.37 459.43 1034.42 459.326 1034.48 459.235C1034.55 459.144 1034.63 459.066 1034.73 459.007C1034.82 458.948 1034.93 458.908 1035.04 458.89C1035.15 458.872 1035.27 458.876 1035.38 458.902C1035.48 458.927 1035.59 458.974 1035.68 459.04L1039.83 461.99C1039.92 462.056 1040 462.139 1040.06 462.234C1040.12 462.33 1040.16 462.436 1040.17 462.547C1040.19 462.658 1040.19 462.772 1040.16 462.881C1040.14 462.99 1040.09 463.094 1040.02 463.185C1039.96 463.276 1039.88 463.354 1039.78 463.413C1039.68 463.472 1039.58 463.512 1039.47 463.53C1039.36 463.548 1039.24 463.544 1039.13 463.518C1039.02 463.493 1038.92 463.446 1038.83 463.38L1034.68 460.43ZM1037.45 463.78H1037.59L1038.24 464.24C1038.6 464.492 1039.04 464.611 1039.47 464.577C1039.91 464.542 1040.32 464.356 1040.64 464.05L1051.33 471.64L1051.76 474.19L1043.55 485.76L1041.23 486.15L1029.38 477.74L1029.03 475.67L1037.45 463.78Z"
        fill=#61656D
        style="fill:rgb(97,101,109);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path
        d="M1193.22 482.26C1193.09 481.94 1192.95 481.63 1192.8 481.32C1191.91 479.551 1190.86 477.862 1189.68 476.27C1185.35 470.38 1178.46 463.95 1170.3 458.15C1163.93 453.537 1157 449.741 1149.68 446.85C1146.05 445.439 1142.21 444.615 1138.32 444.41C1134.87 444.41 1132.1 445.46 1130.42 447.82L1130.34 447.94L1129.25 467.62L1130.77 465.62L1131.17 464.94C1135.17 459.24 1148.82 464.4 1160.17 472.46C1171.25 480.32 1180.42 491.11 1177.11 496.92L1175.38 499.92L1193.11 492.61L1193.2 492.5C1195 489.82 1195 486.36 1193.22 482.26ZM1177.69 497.9C1179.8 494.9 1178.95 490.55 1175.24 485.34C1172.04 480.84 1166.89 475.96 1160.75 471.6C1149.4 463.54 1135.1 457.83 1130.38 464.24L1130.52 461.92C1135.04 455.92 1149.68 461.48 1161.9 470.15C1174.12 478.82 1184 490.56 1180.14 496.87L1177.69 497.9ZM1181.14 496.45C1182.48 493.38 1181.36 489.22 1177.86 484.33C1174.36 479.44 1168.86 474.27 1162.3 469.59C1150.64 461.32 1136.13 455.32 1130.58 460.81L1130.71 458.59C1132.35 456.53 1135.14 455.68 1139 456.03C1152.83 457.34 1176.94 474.44 1182.72 487.03C1184.32 490.49 1184.46 493.36 1183.13 495.57L1181.14 496.45ZM1184.14 495.19C1185.14 492.91 1184.9 490.09 1183.38 486.77C1180.38 480.26 1172.9 472.77 1164.38 466.67C1155.86 460.57 1146.27 456.03 1139.12 455.35C1135.44 455 1132.65 455.73 1130.83 457.5L1130.96 455.28C1136.37 448.78 1152.52 454.84 1165.96 464.38C1179.4 473.92 1190.4 487.11 1186.15 494.38L1184.14 495.19ZM1187.14 493.94C1190.7 485.94 1179.22 472.94 1166.37 463.83C1159.93 459.26 1152.69 455.33 1146.26 453.31C1139.83 451.29 1134.26 451.16 1131.04 454.2L1131.17 451.95C1137 445.21 1153.92 451.52 1167.98 461.5C1182.04 471.48 1193.6 485.38 1189.13 493.12L1187.14 493.94ZM1192.5 491.7L1190.12 492.7C1191.75 489.02 1190.53 484.08 1186.5 478.3C1182.47 472.52 1176.08 466.42 1168.37 460.95C1154.89 451.38 1138.02 444.52 1131.23 450.95L1131.39 448.37C1136.68 441.26 1154.65 448.37 1169.75 459.05C1184.85 469.73 1197.41 484.35 1192.44 491.7H1192.5Z"
        fill=#61656D
        style="fill:rgb(97,101,109);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path
        d="M1108.5 519.289C1112.4 514.809 1120.01 516.879 1125.63 520.869C1131.25 524.859 1135.73 531.359 1132.79 536.529C1133.02 536.799 1133.27 537.059 1133.5 537.329C1135.11 534.759 1135.16 531.679 1133.63 528.399C1131.91 525.029 1129.37 522.15 1126.23 520.029C1120.12 515.689 1111.75 513.569 1107.51 518.879L1108.5 519.289Z"
        fill=#61656D
        style="fill:rgb(97,101,109);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M1132.42 536.11C1134.13 530.77 1130.08 524.94 1125.2 521.48C1122.75 519.702 1119.93 518.49 1116.95 517.93C1115.59 517.634 1114.18 517.62 1112.82 517.89C1111.45 518.16 1110.16 518.708 1109.01 519.5L1110.1 519.99C1114.17 517.39 1120.21 519.21 1124.6 522.33C1126.83 523.885 1128.73 525.879 1130.16 528.19C1131.53 530.249 1132.05 532.758 1131.6 535.19L1132.42 536.11Z"
        fill=#61656D
        style="fill:rgb(97,101,109);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path
        d="M1172.41 506.11L1172.25 505.53L1171.68 503.53L1168.1 491L1139.81 470.93L1127.12 471.66L1125.02 471.78L1117.43 472.22L1112.97 478.51L1111.41 480.71L1110.52 481.97L1102.26 493.6V493.65L1101.66 494.48L1094.55 504.48H1094.16L1097.42 515.89C1097.42 515.89 1097.82 515.95 1098.54 516.1L1095.54 505.43L1116.66 504.21L1144.36 523.87L1150.18 544.22L1139.18 544.85C1139.38 545.18 1139.58 545.51 1139.77 545.85L1151.53 545.16L1151.43 544.78L1158.54 534.78L1159.14 533.94L1160.03 532.69L1160.63 531.84L1163.77 527.42L1167.43 522.27L1167.66 521.93L1168.91 520.17L1174.34 512.52L1172.52 506.13L1172.41 506.11ZM1171.54 506.83L1168.36 511.31L1167.6 508.26L1170.7 503.88L1171.54 506.83ZM1170.48 503.08L1167.4 507.42L1166.75 504.8L1169.75 500.54L1170.48 503.08ZM1127.87 472.66L1130.5 472.5L1127.58 476.6L1124.89 476.85L1127.87 472.66ZM1127 472.66L1124 476.88L1120.86 477.16L1123.93 472.84L1127 472.66ZM1095.83 504.39L1102.47 495.03L1104.56 492.09L1110.76 483.36L1112.84 480.43L1117.98 473.18L1123.06 472.88L1119.44 477.99L1123.44 477.62L1120 482.6L1114.71 483.03L1108.57 491.68L1113.9 491.21L1108.67 498.57L1104.67 498.94L1100.98 504.15L1095.83 504.39ZM1101.83 504.04L1105.03 499.54L1108.16 499.26L1104.99 503.73L1105.17 503.85L1101.83 504.04ZM1105.77 503.82L1109.06 499.17L1111.75 498.93L1108.39 503.67L1105.77 503.82ZM1109.27 503.61L1113.18 498.1L1109.59 498.43L1115.33 490.34L1110.03 490.81L1115.12 483.64L1120.39 483.21L1124.39 477.54L1127.98 477.21L1131.39 472.4L1138.89 471.97L1116.75 503.17L1109.27 503.61ZM1117.68 503.69L1140 472.29L1153.13 481.61L1148.9 487.61L1142.95 483.38L1130.38 501.09L1136.38 505.31L1130.86 513.08L1117.68 503.69ZM1135.79 495.18L1143.2 484.74L1153.9 492.34L1146.5 502.78L1135.79 495.18ZM1145.9 503.62L1142.53 508.37L1131.82 500.77L1135.19 496.02L1145.9 503.62ZM1131.38 513.41L1136.9 505.63L1142.77 509.8L1155.33 492.1L1149.46 487.93L1153.7 481.93L1166.99 491.37L1144.67 522.81L1131.38 513.41ZM1145.38 523.66L1167.53 492.45L1169.53 499.62L1166.01 504.57L1166.88 508.07L1162.88 513.75L1164.23 518.88L1159.14 526.05L1157.82 520.88L1152 529L1151.13 525.51L1147.33 530.86L1145.38 523.66ZM1147.67 531.66L1150.92 527.08L1151.57 529.7L1148.39 534.19L1147.67 531.66ZM1148.67 535.03L1151.83 530.58L1152.6 533.63L1149.51 537.98L1148.67 535.03ZM1168 519.62L1165.92 522.55L1159.71 531.29L1157.63 534.23L1150.99 543.58L1149.65 538.89L1153.24 533.83L1152.24 529.9L1157.47 522.54L1158.78 527.71L1164.92 519.07L1163.58 513.93L1167.08 509L1168.08 512.94L1171.81 507.68L1173.15 512.37L1168 519.62Z"
        fill=#61656D
        style="fill:rgb(97,101,109);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:leftandright 6s infinite">
    </path>
    <path opacity=0.1
        d="M827 719C613.84 719 428.8 839.39 336.16 1015.88L1317.48 1015.18C1224.71 839.07 1039.88 719 827 719Z"
        fill=white
        style="fill:rgb(255,255,255);opacity:.1;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M403.648 1014.54H1251.01C1166.63 868.261 1008.68 769.761 827.678 769.641C646.418 769.491 488.138 868.051 403.648 1014.54Z"
        class=change-color-in-svg fill=#4D61FC
        style="fill:rgb(0,171,240);paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.2
        d="M403.648 1014.54H1251.01C1166.63 868.261 1008.68 769.761 827.678 769.641C646.418 769.491 488.138 868.051 403.648 1014.54Z"
        fill=white
        style="fill:rgb(255,255,255);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.3
        d="M677.998 1005.16C679.538 997.75 700.288 984.94 715.608 981.16C730.928 977.38 734.608 970.85 732.338 965.94C730.068 961.03 732.668 953.27 732.668 950.82C732.668 948.37 733.198 946.88 735.668 948.06C738.138 949.24 741.848 944.23 748.138 942.53C754.428 940.83 752.618 934.33 757.938 931.88C763.258 929.43 768.488 930.4 776.048 929.98C783.608 929.56 767.538 916.77 784.688 912.31C801.838 907.85 808.538 911.58 809.308 906.68C810.078 901.78 811.528 902.85 816.638 902.53C821.748 902.21 816.638 904.45 811.308 909.02C805.978 913.59 813.118 917.12 821.308 915.31C829.498 913.5 836.998 909 841.238 906.54C845.478 904.08 851.358 906.98 851.038 902.18C850.718 897.38 842.558 897.98 838.478 897.6C834.398 897.22 836.028 896.42 832.198 894.93C828.368 893.44 829.318 891.09 826.338 889.17C823.358 887.25 826.238 886.09 825.818 883.1C825.398 880.11 829.538 881.51 832.818 878.1C836.098 874.69 824.728 873.1 816.888 874.02C809.048 874.94 800.438 877.02 795.628 879.43C790.818 881.84 788.038 882.66 788.438 881.01C788.838 879.36 797.028 874.38 801.438 874.78C805.848 875.18 807.438 875 809.958 872.87C812.478 870.74 810.608 868.29 823.278 868.62C835.948 868.95 849.468 872.47 857.678 866.73C865.888 860.99 867.158 862.47 875.518 860.64C883.878 858.81 882.518 853 881.758 850.98C880.998 848.96 876.648 847.14 875.158 845.65C873.668 844.16 872.068 844.65 869.408 844.8C866.748 844.95 870.468 844.05 866.318 840.11C862.168 836.17 853.118 837.65 850.878 836.05C848.638 834.45 846.878 834.34 844.068 834.98C841.258 835.62 842.688 832.53 844.608 830.04C846.528 827.55 833.748 822.3 826.828 817.18C819.908 812.06 820.758 817.28 820.158 820.67C819.558 824.06 812.448 823.99 809.998 825.37C807.548 826.75 804.458 824.52 802.118 822.28C799.778 820.04 799.668 817.59 800.848 813.96C802.028 810.33 798.158 812.25 795.628 813.96C793.098 815.67 788.278 809.6 784.878 807.47C781.478 805.34 766.768 806.82 763.678 806.68C760.588 806.54 757.928 808.09 757.678 813.94C757.428 819.79 753.848 817.46 751.928 822.79C750.008 828.12 757.248 828.43 757.778 831.63C758.308 834.83 749.408 839.83 740.778 840.56C732.148 841.29 734.068 857.92 733.848 862.28C733.628 866.64 729.368 870.59 724.998 869.95C720.628 869.31 717.998 856.84 718.728 850.03C719.458 843.22 718.838 840.44 713.508 841.08C708.178 841.72 705.638 840.33 701.508 838.41C697.378 836.49 696.068 838.41 692.348 833.29C688.628 828.17 681.348 830.19 676.828 832.39C672.308 834.59 671.718 833.83 673.158 828.87C674.598 823.91 670.628 825.82 673.068 821.77C675.508 817.72 687.568 813.58 694.818 812C702.068 810.42 704.188 809.65 709.408 806.91C714.628 804.17 721.268 806.91 724.148 805.12C727.028 803.33 733.058 799.36 735.568 798.12C738.078 796.88 741.118 798.76 744.568 797.21C748.018 795.66 757.028 795.98 759.388 793.9C761.748 791.82 756.518 789.51 758.598 787.03C760.678 784.55 766.818 788.24 770.288 789.44C773.758 790.64 773.198 787.16 775.088 784.61C776.978 782.06 777.168 787.29 781.758 790.12C786.348 792.95 771.608 789.88 774.678 793.77C777.748 797.66 789.458 788.53 792.178 791.17C794.898 793.81 768.888 798.38 764.658 799.98C760.428 801.58 763.658 803.49 772.838 803.26C782.018 803.03 787.698 805.14 792.008 807.54C796.318 809.94 813.408 811.99 816.288 808.8C819.168 805.61 803.068 805.55 803.288 803.8C803.508 802.05 815.688 805.2 818.588 803.09C821.488 800.98 813.718 801.09 810.048 797.81C806.378 794.53 817.988 795.62 824.698 797.5C831.408 799.38 828.818 796.79 830.058 794.5C831.298 792.21 824.588 792.06 815.878 790.34C807.168 788.62 813.088 788.18 814.128 786.22C815.168 784.26 806.128 783.94 799.908 783.38C793.688 782.82 793.118 780.66 795.198 777.86C797.278 775.06 787.058 777.06 783.258 778.57C779.458 780.08 779.148 780.37 772.718 778.57C766.288 776.77 757.258 785.82 755.718 782.93C754.178 780.04 750.088 781.67 745.818 783.26C741.548 784.85 746.608 786.97 749.648 789.77C752.688 792.57 741.738 794 740.058 795.88C738.378 797.76 734.588 795.68 737.538 794C740.488 792.32 739.538 789.41 734.788 789C730.038 788.59 725.158 794.07 722.788 794.51C720.418 794.95 723.308 792.83 722.668 788.91C722.028 784.99 714.478 794.26 711.278 796.91C708.078 799.56 701.098 797.43 695.588 799.1C690.078 800.77 681.768 801.77 678.848 800.41C675.928 799.05 678.848 797.81 686.678 795.98C694.508 794.15 686.088 792.74 678.138 795.77C670.188 798.8 670.548 799.36 670.698 802.77C670.848 806.18 665.698 805.16 660.778 802.85C655.858 800.54 652.448 807.99 651.238 805.25C650.028 802.51 648.238 803.82 648.238 803.82C576.448 832.4 515.978 883.38 515.978 883.38C502.698 893.87 502.688 905.07 491.598 912.15C480.508 919.23 472.408 939.15 463.238 949.83C454.068 960.51 448.518 986.24 452.138 995.4C453.848 999.75 452.968 1007.22 451.798 1014.53H620.448C623.143 1014.17 625.814 1013.66 628.448 1012.99C635.298 1011.3 636.718 1012.6 638.718 1014.53H678.098C677.339 1011.46 677.305 1008.25 677.998 1005.16V1005.16Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.3
        d="M731.721 807.999C731.721 807.999 726.241 807.159 726.931 808.839C727.621 810.519 730.931 810.739 732.571 810.079C734.211 809.419 736.281 809.409 735.571 808.369C734.861 807.329 732.001 808.089 731.721 807.999Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.3
        d="M738.222 805.69C737.222 806.44 734.502 808.69 737.102 808.41C739.702 808.13 741.412 808.08 743.762 808.05C746.112 808.02 749.162 807.8 747.552 806.92C745.942 806.04 742.842 802.35 738.222 805.69Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.3
        d="M751.201 804.78C749.861 804.49 749.911 805.1 749.201 806C748.491 806.9 749.371 808 750.751 807.85C752.131 807.7 752.681 805.1 751.201 804.78Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.3
        d="M749.831 809.739C749.197 809.96 748.641 810.362 748.232 810.895C747.824 811.428 747.58 812.069 747.531 812.739C747.641 813.739 748.841 813.969 750.461 813.739C752.081 813.509 754.241 813.27 753.611 811.83C752.981 810.39 752.761 808.889 749.831 809.739Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.3
        d="M738.75 809.48C738.1 809.68 734.54 810.48 734.33 811.62C734.12 812.76 735.5 813.55 737.68 813.77C739.86 813.99 740.9 814.21 742 812.7C743.1 811.19 744 811.16 743.12 810.12C742.24 809.08 740.28 809 738.75 809.48Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.3
        d="M853.319 886.77C851.239 888.35 848.039 891.77 847.559 892.84C847.079 893.91 851.659 897.31 852.359 898.23C853.059 899.15 853.859 896.76 854.539 897.64C855.219 898.52 855.139 900.35 858.179 899.52C861.219 898.69 863.179 898.57 861.779 896.52C860.379 894.47 859.779 896.63 858.499 892.77C857.219 888.91 858.989 885.77 856.669 884.99C854.349 884.21 855.589 885.05 853.319 886.77Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.3
        d="M871.001 869.001C868.911 870.921 869.121 875.841 867.281 876.641C865.441 877.441 860.281 877.641 860.731 879.511C861.181 881.381 867.141 878.791 866.171 880.751C865.201 882.711 859.441 883.751 860.921 884.841C862.401 885.931 867.511 885.721 872.871 884.651C878.231 883.581 879.871 885.021 881.001 886.191C882.131 887.361 884.001 887.26 886.121 886.79C888.241 886.32 891.801 884.961 889.961 886.561C888.121 888.161 884.561 889.68 885.261 891.11C885.961 892.54 887.181 894.4 890.011 891.72C892.841 889.04 898.631 888.531 899.591 886.561C900.551 884.591 904.741 883.781 902.421 881.061C900.101 878.341 900.591 878.061 902.421 877.141C904.251 876.221 906.501 875.391 901.951 873.631C897.401 871.871 890.951 871.021 887.731 871.461C884.511 871.901 877.431 871.831 880.151 869.011C882.871 866.191 888.221 859.351 884.711 858.811C881.201 858.271 877.711 862.391 874.081 862.441C870.451 862.491 872.831 867.351 871.001 869.001Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.3
        d="M907.15 884.68C908.66 885.22 913.46 881.3 912.82 883.68C912.18 886.06 911.7 892.96 909.46 893.83C907.22 894.7 901.95 895.65 901.55 893.49C901.15 891.33 898.13 891.41 899.6 889.58C901.07 887.75 903.64 883.43 907.15 884.68Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.3
        d="M933.822 951.521C940.882 947.521 937.652 946.621 950.012 945.141C962.372 943.661 975.112 945.671 981.412 946.701C987.712 947.731 993.032 952.201 1000.27 954.971C1007.51 957.741 1010.27 962.861 1016.45 963.081C1022.63 963.301 1029.01 971.391 1031.35 972.671C1033.69 973.951 1042.21 979.071 1030.28 980.551C1018.35 982.031 997.702 979.891 995.142 980.551C992.582 981.211 997.062 976.081 992.802 973.311C988.542 970.541 988.802 964.361 984.082 963.931C979.362 963.501 971.512 961.361 962.782 959.231C954.052 957.101 937.432 964.121 933.782 962.831C930.132 961.541 924.912 956.551 933.822 951.521Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.3
        d="M1053.5 977.42C1058.59 978.19 1068.2 979.52 1073.95 982.71C1079.7 985.9 1090.65 988.45 1088.51 993.37C1086.37 998.29 1087.72 1002.16 1081.57 999.46C1075.42 996.76 1071.81 997.46 1066.27 999.46C1060.73 1001.46 1055.18 1009.55 1051.78 1005.07C1048.38 1000.59 1038.36 1001.07 1030.06 999.44C1021.76 997.81 1018.85 991.84 1023.29 991.21C1027.73 990.58 1039.83 990.37 1039.86 986.32C1039.89 982.27 1046.35 976.34 1053.5 977.42Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.3
        d="M1106.23 994.829C1113.08 995.359 1120.93 997.969 1119.23 999.489C1117.53 1001.01 1114.99 1002.13 1111.56 1003.72C1108.13 1005.31 1108.12 1003.72 1104.13 1003.04C1100.14 1002.36 1093.75 999.039 1095.99 997.159C1098.23 995.279 1103 994.589 1106.23 994.829Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.3
        d="M997.099 924.3C999.999 925.03 1003.86 926.01 1004.84 929.2C1005.82 932.39 1009.22 942.2 1002.84 941.98C996.459 941.76 993.989 940.27 991.929 935.16C989.869 930.05 987.729 922 997.099 924.3Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.3
        d="M817.369 773.509C820.049 773.409 827.909 773.439 835.899 772.689C843.889 771.939 857.329 770.689 880.399 774.529C903.469 778.369 913.639 780.789 927.529 783.189C941.419 785.589 970.289 790.129 963.469 793.739C956.649 797.349 949.199 792.669 950.369 797.459C951.539 802.249 937.589 798.089 938.369 803.309C939.149 808.529 946.559 825.249 939.209 823.649C931.859 822.049 924.089 818.529 915.469 816.499C906.849 814.469 907.369 817.559 890.339 809.129C873.309 800.699 871.499 795.489 868.339 793.779C865.179 792.069 868.129 791.229 863.979 790.159C859.829 789.089 868.029 787.709 860.889 785.899C853.749 784.089 852.889 779.179 841.939 778.899C830.989 778.619 820.939 781.229 812.339 779.519C803.739 777.809 793.699 775.889 799.659 774.719C805.619 773.549 812.069 773.719 817.369 773.509Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.3
        d="M986.001 810.101C999.251 812.361 1006.77 813.851 1006.48 811.101C1006.19 808.351 1004.85 806.101 999.581 803.851C994.311 801.601 980.581 797.451 981.051 801.601C981.521 805.751 982.601 809.521 986.001 810.101Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.3
        d="M1061.63 852.691C1069.57 861.601 1073.55 866.331 1080.36 868.891C1087.17 871.451 1096.2 872.811 1093.25 862.891C1090.3 852.971 1090.95 845.021 1079.25 845.171C1067.55 845.321 1051.31 841.111 1061.63 852.691Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.3
        d="M1134.32 894.5C1137.32 900.5 1163.71 919.44 1156.04 920.5C1148.37 921.56 1145.81 924.97 1153.26 933.7C1160.71 942.43 1170.95 945.14 1173.59 956.79C1176.23 968.44 1181.59 973.27 1189.01 976.94C1196.43 980.61 1194.14 974.58 1199.01 977.8C1203.88 981.02 1206.01 983.58 1205.82 975.06C1205.63 966.54 1207.96 969.53 1200.51 957.59C1193.06 945.65 1193.59 935.59 1185.19 929.47C1176.79 923.35 1113.84 853.62 1134.32 894.5Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.3
        d="M1228.46 983.75C1193.68 942.53 1217.31 985.11 1207.53 984.54C1197.75 983.97 1197.35 983.68 1197.1 987.62C1196.61 995.2 1199.53 1005.72 1200.82 1014.52H1249.34C1243.31 1003.66 1236.32 993.366 1228.46 983.75V983.75Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.3;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.2
        d="M403.648 1014.54H569.878C563.538 985.29 573.158 951.81 592.688 928.09C619.358 895.67 660.008 878.2 700.308 866.42C768.68 846.473 840.19 839.547 911.118 846C927.008 847.46 943.378 849.54 958.648 844.92C978.928 838.78 993.448 821.53 1000.98 801.38C945.621 780.349 886.896 769.577 827.678 769.59C646.418 769.49 488.138 868.05 403.648 1014.54Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path
        d="M228.09 557.901L233.79 552.191C234.18 551.804 234.49 551.344 234.701 550.836C234.913 550.329 235.022 549.785 235.022 549.236C235.022 548.686 234.913 548.142 234.701 547.635C234.49 547.128 234.18 546.668 233.79 546.281V546.281C233.403 545.89 232.943 545.581 232.436 545.369C231.928 545.158 231.384 545.049 230.835 545.049C230.285 545.049 229.741 545.158 229.234 545.369C228.727 545.581 228.267 545.89 227.88 546.281L222.17 551.981C221.386 552.766 220.945 553.831 220.945 554.941C220.945 556.051 221.386 557.115 222.17 557.901C222.955 558.685 224.02 559.125 225.13 559.125C226.24 559.125 227.304 558.685 228.09 557.901V557.901Z"
        fill=#DADDDF
        style="fill:rgb(218,221,223);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:upAndDown linear 4s infinite">
    </path>
    <path
        d="M305.999 614.44L309.619 607.23C309.867 606.739 310.015 606.204 310.056 605.656C310.097 605.108 310.028 604.557 309.856 604.034C309.683 603.512 309.409 603.03 309.049 602.614C308.689 602.198 308.251 601.857 307.759 601.61V601.61C306.768 601.116 305.622 601.034 304.571 601.383C303.519 601.731 302.649 602.482 302.149 603.47L298.529 610.69C298.282 611.181 298.134 611.715 298.093 612.263C298.053 612.81 298.121 613.361 298.294 613.882C298.467 614.403 298.741 614.885 299.1 615.3C299.46 615.715 299.898 616.055 300.389 616.3V616.3C301.38 616.798 302.527 616.881 303.58 616.532C304.632 616.183 305.502 615.431 305.999 614.44Z"
        fill=#DADDDF
        style="fill:rgb(218,221,223);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:upAndDown linear 4s infinite">
    </path>
    <path
        d="M256.061 541.789L260.351 541.169C260.895 541.092 261.418 540.908 261.891 540.629C262.364 540.349 262.777 539.979 263.107 539.54C263.436 539.101 263.676 538.601 263.813 538.069C263.949 537.537 263.979 536.983 263.901 536.439V536.439C263.74 535.343 263.153 534.355 262.267 533.69C261.381 533.026 260.269 532.738 259.171 532.889L254.871 533.509C253.775 533.668 252.786 534.255 252.123 535.142C251.459 536.028 251.174 537.143 251.331 538.239V538.239C251.407 538.783 251.59 539.307 251.869 539.781C252.149 540.254 252.519 540.668 252.958 540.998C253.398 541.328 253.898 541.567 254.431 541.703C254.963 541.839 255.517 541.868 256.061 541.789Z"
        fill=#DADDDF
        style="fill:rgb(218,221,223);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:upAndDown linear 4s infinite">
    </path>
    <path
        d="M222.001 598.391L221.381 594.101C221.222 593.004 220.635 592.014 219.749 591.349C218.862 590.683 217.748 590.396 216.651 590.551V590.551C215.552 590.709 214.561 591.297 213.895 592.186C213.229 593.075 212.944 594.191 213.101 595.291L213.721 599.581C213.879 600.678 214.466 601.667 215.353 602.332C216.239 602.998 217.353 603.285 218.451 603.131V603.131C219.549 602.97 220.538 602.381 221.203 601.493C221.868 600.605 222.155 599.489 222.001 598.391V598.391Z"
        fill=#DADDDF
        style="fill:rgb(218,221,223);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:upAndDown linear 4s infinite">
    </path>
    <path
        d="M314 591.38V583C314 581.807 313.033 580.84 311.84 580.84H307.8C306.607 580.84 305.64 581.807 305.64 583V591.38C305.64 592.573 306.607 593.54 307.8 593.54H311.84C313.033 593.54 314 592.573 314 591.38Z"
        fill=#DADDDF
        style="fill:rgb(218,221,223);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:upAndDown linear 4s infinite">
    </path>
    <path
        d="M248.288 634.75L252.478 635.87C253.011 636.011 253.567 636.046 254.114 635.971C254.66 635.897 255.187 635.715 255.663 635.436C256.139 635.157 256.555 634.787 256.887 634.346C257.219 633.906 257.461 633.404 257.598 632.87V632.87C257.74 632.337 257.774 631.781 257.7 631.234C257.625 630.688 257.443 630.161 257.164 629.685C256.885 629.209 256.515 628.793 256.075 628.461C255.634 628.129 255.132 627.887 254.598 627.75L250.408 626.63C249.875 626.489 249.319 626.454 248.772 626.528C248.226 626.603 247.699 626.785 247.223 627.064C246.747 627.343 246.331 627.713 245.999 628.153C245.667 628.594 245.425 629.096 245.288 629.63V629.63C245.147 630.163 245.112 630.719 245.187 631.266C245.261 631.812 245.443 632.339 245.722 632.815C246.001 633.291 246.371 633.707 246.812 634.039C247.252 634.371 247.754 634.613 248.288 634.75V634.75Z"
        fill=#DADDDF
        style="fill:rgb(218,221,223);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:upAndDown linear 4s infinite">
    </path>
    <path
        d="M262.789 633.619C289.437 633.619 311.039 612.017 311.039 585.369C311.039 558.721 289.437 537.119 262.789 537.119C236.141 537.119 214.539 558.721 214.539 585.369C214.539 612.017 236.141 633.619 262.789 633.619Z"
        fill=#DADDDF
        style="fill:rgb(218,221,223);paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:upAndDown linear 4s infinite">
    </path>
    <path opacity=0.2
        d="M280.338 556.75C280.456 559.067 279.833 561.361 278.558 563.3C277.259 565.29 275.445 566.89 273.308 567.93C271.114 569.036 268.577 569.251 266.228 568.53C264 567.824 262.089 566.359 260.828 564.39C262.546 565.657 264.524 566.527 266.618 566.94C267.611 567.115 268.626 567.115 269.618 566.94C270.596 566.788 271.544 566.484 272.428 566.04C272.878 565.81 273.338 565.57 273.778 565.31C274.218 565.05 274.638 564.76 275.028 564.43C275.856 563.818 276.61 563.113 277.278 562.33C278.647 560.684 279.686 558.789 280.338 556.75V556.75Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:upAndDown linear 4s infinite">
    </path>
    <path opacity=0.2
        d="M263 559.519C262.783 557.913 263.137 556.281 264 554.909C264.865 553.481 266.126 552.335 267.63 551.609C268.399 551.223 269.236 550.993 270.094 550.931C270.952 550.869 271.814 550.977 272.63 551.249C274.181 551.774 275.473 552.872 276.24 554.319C275.016 553.569 273.657 553.067 272.24 552.839C270.965 552.693 269.676 552.923 268.53 553.499C266.006 554.753 264.036 556.898 263 559.519V559.519Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.2
        d="M246.65 592.67C247.245 594.138 247.288 595.773 246.77 597.27C246.264 598.823 245.294 600.184 243.99 601.17C243.324 601.692 242.559 602.075 241.741 602.295C240.923 602.515 240.069 602.567 239.23 602.45C237.67 602.224 236.247 601.435 235.23 600.23C236.559 600.666 237.954 600.862 239.35 600.81C240.589 600.721 241.772 600.265 242.75 599.5C243.782 598.715 244.652 597.737 245.31 596.62C245.98 595.39 246.433 594.054 246.65 592.67Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:upAndDown linear 4s infinite">
    </path>
    <path opacity=0.2
        d="M236.661 598.14C236.396 597.65 236.231 597.112 236.174 596.558C236.118 596.004 236.171 595.444 236.331 594.91C236.652 593.783 237.333 592.793 238.271 592.09C238.752 591.71 239.308 591.436 239.903 591.286C240.497 591.136 241.117 591.114 241.721 591.22C242.275 591.314 242.804 591.52 243.275 591.826C243.746 592.132 244.15 592.532 244.461 593C243.533 592.812 242.582 592.769 241.641 592.87C240.878 592.977 240.157 593.285 239.551 593.76C238.137 594.867 237.122 596.405 236.661 598.14Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.2
        d="M229.35 581.93C229.776 582.327 230.117 582.807 230.352 583.34C230.587 583.872 230.713 584.447 230.72 585.03C230.735 585.66 230.622 586.288 230.389 586.874C230.155 587.46 229.805 587.992 229.36 588.44C228.902 588.899 228.345 589.246 227.731 589.456C227.117 589.666 226.464 589.732 225.82 589.65C224.684 589.524 223.625 589.012 222.82 588.2C223.825 588.228 224.83 588.157 225.82 587.99C226.598 587.882 227.322 587.532 227.89 586.99C228.465 586.402 228.885 585.68 229.11 584.89C229.354 583.923 229.435 582.923 229.35 581.93V581.93Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:upAndDown linear 4s infinite">
    </path>
    <path opacity=0.2
        d="M223.372 586.619C223.02 586.38 222.728 586.062 222.52 585.691C222.312 585.319 222.193 584.905 222.172 584.479C222.149 584.011 222.227 583.543 222.399 583.107C222.571 582.67 222.835 582.276 223.172 581.949C223.511 581.606 223.928 581.349 224.388 581.201C224.847 581.053 225.336 581.018 225.812 581.099C226.223 581.16 226.617 581.301 226.973 581.516C227.328 581.73 227.637 582.014 227.882 582.349C227.207 582.442 226.539 582.579 225.882 582.759C225.435 582.872 225.027 583.104 224.702 583.429C224.355 583.779 224.08 584.194 223.892 584.649C223.627 585.279 223.452 585.942 223.372 586.619V586.619Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:upAndDown linear 4s infinite">
    </path>
    <path opacity=0.2
        d="M295.46 567.641C295.523 568.219 295.467 568.804 295.295 569.359C295.123 569.915 294.839 570.429 294.46 570.871C294.05 571.349 293.549 571.74 292.985 572.022C292.422 572.304 291.808 572.47 291.18 572.511C290.533 572.552 289.885 572.443 289.287 572.193C288.688 571.944 288.156 571.56 287.73 571.071C286.959 570.213 286.501 569.121 286.43 567.971C287.163 568.658 287.96 569.274 288.81 569.811C289.473 570.238 290.252 570.447 291.04 570.411C291.861 570.355 292.656 570.094 293.35 569.651C294.159 569.102 294.872 568.423 295.46 567.641V567.641Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:upAndDown linear 4s infinite">
    </path>
    <path opacity=0.2
        d="M287.881 567.171C287.779 566.758 287.774 566.328 287.866 565.914C287.958 565.499 288.144 565.111 288.411 564.781C288.697 564.413 289.058 564.11 289.47 563.893C289.882 563.676 290.336 563.549 290.801 563.521C291.282 563.488 291.764 563.571 292.207 563.765C292.649 563.958 293.038 564.255 293.341 564.631C293.876 565.279 294.131 566.114 294.051 566.951C293.48 566.558 292.882 566.207 292.261 565.901C291.85 565.691 291.391 565.594 290.931 565.621C290.442 565.654 289.963 565.78 289.521 565.991C288.925 566.311 288.374 566.708 287.881 567.171V567.171Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.2
        d="M282.485 594.935C284.89 589.543 282.492 583.233 277.13 580.843C271.768 578.452 265.472 580.885 263.068 586.277C260.664 591.67 263.062 597.979 268.424 600.37C273.785 602.76 280.081 600.327 282.485 594.935Z"
        fill=white
        style="fill:rgb(255,255,255);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:upAndDown linear 4s infinite">
    </path>
    <path opacity=0.2
        d="M277.769 585.63C279.158 586.25 280.38 587.191 281.334 588.374C282.288 589.558 282.948 590.952 283.259 592.44C283.555 590.674 283.401 588.862 282.81 587.171C282.22 585.48 281.213 583.965 279.882 582.767C278.551 581.568 276.939 580.725 275.196 580.315C273.453 579.904 271.634 579.94 269.908 580.419C268.183 580.898 266.606 581.804 265.323 583.054C264.04 584.304 263.094 585.857 262.57 587.569C262.047 589.282 261.964 591.099 262.329 592.853C262.694 594.606 263.496 596.239 264.659 597.6C264.05 595.815 263.975 593.892 264.442 592.065C264.91 590.238 265.899 588.587 267.29 587.314C268.682 586.04 270.414 585.2 272.275 584.896C274.136 584.592 276.045 584.836 277.769 585.6V585.63Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:upAndDown linear 4s infinite">
    </path>
    <path opacity=0.2
        d="M287.512 592.449C287.575 595.295 286.754 598.09 285.162 600.449C283.558 602.86 281.338 604.797 278.732 606.059C276.069 607.402 272.995 607.684 270.132 606.849C267.4 606.01 265.035 604.268 263.422 601.909C265.497 603.559 267.928 604.702 270.522 605.249C271.143 605.357 271.772 605.42 272.402 605.439C273.022 605.453 273.641 605.406 274.252 605.299C275.488 605.113 276.686 604.732 277.802 604.169C278.372 603.889 278.942 603.579 279.492 603.249C280.042 602.919 280.572 602.559 281.062 602.149C282.085 601.369 283.015 600.473 283.832 599.479C285.532 597.416 286.785 595.022 287.512 592.449V592.449Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:upAndDown linear 4s infinite">
    </path>
    <path opacity=0.2
        d="M299.189 596.51C299.96 596.689 300.767 596.634 301.508 596.354C302.248 596.073 302.889 595.579 303.348 594.933C303.808 594.288 304.065 593.521 304.088 592.73C304.111 591.938 303.899 591.158 303.478 590.487C303.057 589.816 302.446 589.285 301.723 588.962C301 588.639 300.198 588.537 299.417 588.67C298.637 588.803 297.913 589.165 297.338 589.71C296.763 590.255 296.363 590.958 296.189 591.73C295.955 592.762 296.14 593.844 296.702 594.74C297.264 595.635 298.158 596.272 299.189 596.51Z"
        fill=white
        style="fill:rgb(255,255,255);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:upAndDown linear 4s infinite">
    </path>
    <path opacity=0.2
        d="M301.558 590.43C302.112 590.555 302.628 590.811 303.063 591.176C303.498 591.542 303.839 592.006 304.058 592.53C304.052 591.852 303.872 591.187 303.538 590.597C303.204 590.007 302.725 589.512 302.146 589.158C301.568 588.805 300.909 588.603 300.232 588.574C299.555 588.545 298.881 588.688 298.274 588.99C297.667 589.293 297.147 589.745 296.763 590.303C296.379 590.862 296.143 591.509 296.077 592.183C296.012 592.858 296.119 593.539 296.388 594.161C296.658 594.783 297.081 595.326 297.618 595.74C297.162 594.954 297.026 594.023 297.238 593.14C297.453 592.208 298.028 591.4 298.838 590.891C299.648 590.383 300.626 590.217 301.558 590.43V590.43Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.2
        d="M305.621 592.23C305.892 593.268 305.822 594.366 305.421 595.36C305.002 596.386 304.31 597.278 303.421 597.94C302.518 598.641 301.377 598.96 300.241 598.831C299.167 598.704 298.174 598.197 297.441 597.401C298.332 597.809 299.302 598.017 300.281 598.01C301.193 597.976 302.07 597.658 302.791 597.1C303.565 596.519 304.214 595.789 304.7 594.952C305.186 594.116 305.5 593.19 305.621 592.23Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.2
        d="M271.82 622.33C272.937 622.395 274.048 622.128 275.013 621.562C275.978 620.996 276.753 620.157 277.242 619.151C277.73 618.144 277.909 617.016 277.757 615.908C277.604 614.8 277.127 613.761 276.385 612.924C275.642 612.088 274.669 611.489 273.587 611.205C272.505 610.921 271.363 610.964 270.306 611.328C269.248 611.693 268.322 612.362 267.645 613.252C266.968 614.143 266.569 615.214 266.5 616.33C266.452 617.074 266.551 617.821 266.793 618.526C267.034 619.232 267.413 619.882 267.908 620.44C268.403 620.998 269.004 621.452 269.675 621.777C270.347 622.101 271.076 622.289 271.82 622.33Z"
        fill=white
        style="fill:rgb(255,255,255);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:upAndDown linear 4s infinite">
    </path>
    <path opacity=0.2
        d="M273.65 613.24C274.454 613.284 275.235 613.518 275.931 613.924C276.626 614.329 277.215 614.893 277.65 615.57C277.463 614.637 277.044 613.767 276.431 613.04C275.818 612.313 275.032 611.752 274.145 611.41C273.258 611.068 272.298 610.955 271.356 611.082C270.414 611.209 269.519 611.572 268.754 612.137C267.989 612.702 267.379 613.451 266.981 614.314C266.582 615.178 266.408 616.128 266.475 617.076C266.541 618.025 266.846 618.941 267.361 619.741C267.876 620.54 268.584 621.197 269.421 621.65C268.785 620.881 268.386 619.944 268.274 618.953C268.161 617.962 268.339 616.959 268.787 616.068C269.234 615.176 269.931 614.434 270.793 613.932C271.655 613.43 272.644 613.189 273.641 613.24H273.65Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:upAndDown linear 4s infinite">
    </path>
    <path opacity=0.2
        d="M279.759 614.77C280.313 616.162 280.429 617.69 280.089 619.15C279.754 620.649 279.021 622.03 277.969 623.15C276.907 624.308 275.446 625.023 273.879 625.15C272.374 625.25 270.878 624.846 269.629 624C270.965 624.444 272.389 624.557 273.779 624.33C275.098 624.085 276.299 623.414 277.199 622.419C278.137 621.421 278.853 620.235 279.299 618.94C279.745 617.598 279.902 616.176 279.759 614.77V614.77Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61)">
    </path>
    <path opacity=0.2
        d="M246.58 567.68C244.02 571.58 238.38 572.41 233.97 569.52C229.56 566.63 228.05 561.14 230.61 557.24C233.17 553.34 238.8 552.51 243.21 555.39C247.62 558.27 249.13 563.77 246.58 567.68Z"
        fill=white
        style="fill:rgb(255,255,255);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:upAndDown linear 4s infinite">
    </path>
    <path opacity=0.2
        d="M232.551 560.89C231.888 561.948 231.502 563.155 231.429 564.402C231.355 565.648 231.597 566.892 232.131 568.02C229.191 565.02 228.441 560.54 230.601 557.23C233.151 553.33 238.801 552.5 243.211 555.38C244.687 556.294 245.889 557.587 246.693 559.125C247.497 560.662 247.873 562.388 247.781 564.12C247.128 562.093 245.787 560.356 243.991 559.21C240.001 556.6 234.861 557.35 232.551 560.89Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:upAndDown linear 4s infinite">
    </path>
    <path opacity=0.2
        d="M249.692 561.23C250.344 562.238 250.789 563.365 251.002 564.546C251.215 565.727 251.191 566.939 250.932 568.11C250.662 569.339 250.126 570.492 249.362 571.49C248.597 572.483 247.662 573.333 246.602 574C245.499 574.619 244.293 575.029 243.042 575.211C241.83 575.359 240.602 575.322 239.402 575.1C237.083 574.696 234.893 573.746 233.012 572.331C235.152 572.957 237.356 573.339 239.582 573.47C241.644 573.623 243.706 573.178 245.522 572.19C246.386 571.654 247.157 570.978 247.802 570.19C248.483 569.431 249.012 568.549 249.362 567.591C250.051 565.54 250.165 563.341 249.692 561.23V561.23Z"
        fill=black
        style="fill:rgb(0,0,0);opacity:.2;paint-order:normal;text-decoration:none solid rgb(61,61,61);animation:upAndDown linear 4s infinite">
    </path>
</svg>`


const footerIcons = document.querySelector('.footer-icons')

footerIcons.innerHTML = `  <a target="_blank"
href="https://www.fiverr.com/arbabzafar4444?source=gig_page&gigs=slug%3Adesign-a-website-landing-page-and-html-portfolio-website%2Cpckg_id%3A1">
<p>f<span>i</span></p>
</a>
<a target="_blank" href="https://www.facebook.com/profile.php?id=100090373562700">
<i class="fa-brands fa-facebook-f"></i>
</a>
<a target="_blank" href="https://www.instagram.com/arbab_zafar4/">
<i class="fa-brands fa-instagram"></i>
</a>
<a target="_blank" href="https://www.linkedin.com/in/arbab-zafar-web-developer/">
<i class="fa-brands fa-linkedin-in"></i>
</a>
<a target="_blank" href="https://github.com/SheikhArbab?tab=repositories">
<i class="fa-brands fa-github-alt"></i>
</a>
<a target="_blank" href="https://stackoverflow.com/users/21672375/arbab">
<i class="fa-brands fa-stack-overflow"></i>
</a>
<a target="_blank" href="https://wa.me/+923125305532">
<i class="fa-brands fa-whatsapp"></i>
</a>`
}

)()